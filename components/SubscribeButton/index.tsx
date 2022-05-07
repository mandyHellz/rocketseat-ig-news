import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";
import styles from "./styles.module.scss";

interface subscribeBtnProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: subscribeBtnProps) {
  const { data: session } = useSession();
  const router = useRouter();

  async function handleSubscribe() {
    // verify if user have a active session
    if (!session) {
      signIn("github");
      return;
    }

    if (session.activeSubscription) {
      router.push("/posts");
      return;
    }

    // create the checkout flow with stripe
    try {
      const response = await api.post("subscribe");

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      toast.error(
        "Sorry, we had an error when redirecting to checkout. Try again later."
      );
    }
  }
  return (
    <button
      type="button"
      className={styles.subscribeBtn}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
}

export default SubscribeButton;
