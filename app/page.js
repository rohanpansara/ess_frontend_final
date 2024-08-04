import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h2>Employee Self Service</h2>
      </div>

      <div className={styles.grid}>
        <a
          href="/login"
          className={styles.card}
          target="_self"
          rel="noopener noreferrer"
        >
          <h2>
            Login <span>-&gt;</span>
          </h2>
          <p>Sign in using the credentials provided by HR.</p>
        </a>

        <a
          href="/forgot-password"
          className={styles.card}
          target="_self"
          rel="noopener noreferrer"
        >
          <h2>
            Forgot Password <span>-&gt;</span>
          </h2>
          <p>Reset your password if you cannot remember it.</p>
        </a>

        <a
          href="/contact-support"
          className={styles.card}
          target="_self"
          rel="noopener noreferrer"
        >
          <h2>
            Contact HR <span>-&gt;</span>
          </h2>
          <p>Reach out to HR for any login or other assistance.</p>
        </a>

        <a
          href="/about-ess"
          className={styles.card}
          target="_self"
          rel="noopener noreferrer"
        >
          <h2>
            About ESS <span>-&gt;</span>
          </h2>
          <p>Learn about the Employee Self Service system.</p>
        </a>

      </div>
    </main>
  );
}
