/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import SubscribeButton from "../components/SubscribeButton";

import { GetStaticProps } from "next";
import { stripe } from "../services/stripe";
import { ToastContainer } from "react-toastify";

import styles from "./home.module.scss";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <ToastContainer></ToastContainer>
          <span>👏 Hey, welcome!</span>
          <h1>
            News about <br></br>
            the <span>React</span> world.
          </h1>
          <p>
            Get access to all publications <br></br>
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img src="/images/avatar.svg" alt="girl coding" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1KnSdyDRBCuPKetG3gxouPIW", {
    expand: ["product"],
  });

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("En-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, //24 hours
  };
};
