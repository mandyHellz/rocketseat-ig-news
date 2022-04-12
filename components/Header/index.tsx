import SigninButton from "../SigninButton";
import styles from "./styles.module.scss";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="logo" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>
        <div className={styles.btnAvtContainer}>
          <SigninButton />
          {session && (
            <img src={session.user.image} className={styles.userAvatar} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
