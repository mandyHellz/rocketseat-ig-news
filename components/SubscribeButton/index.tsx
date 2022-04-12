import styles from "./styles.module.scss";

interface subscribeBtnProps {
  priceId: string;
}

const SubscribeButton = ({ priceId }: subscribeBtnProps) => {
  return (
    <button type="button" className={styles.subscribeBtn}>
      Subscribe now
    </button>
  );
};

export default SubscribeButton;
