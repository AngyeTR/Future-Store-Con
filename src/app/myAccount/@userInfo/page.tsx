import { validateAccessToken } from "app/utils/auth/validateAccessToken";
import styles from "../myAccount.module.sass"

export default async function MyAccountPage() {
  const customer = await validateAccessToken();

  return (
    <div>
      <section className={styles.UserInfo}>
        <h2>Your info</h2>
        <h3>Bienvenido {customer?.firstName}</h3>
        <p>email: {customer?.email}</p>
      </section>
    </div>
  );
}