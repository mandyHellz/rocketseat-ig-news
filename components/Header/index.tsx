import SigninButton from "../SigninButton";
import styles from "./styles.module.scss";
import { useSession } from "next-auth/react";
import { ActiveLink } from "../ActiveLink";

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="logo" />
        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href="/posts" activeClassName={styles.active}>
            <a>Posts</a>
          </ActiveLink>
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
