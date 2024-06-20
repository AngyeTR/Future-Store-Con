
import styles from "./myAccount.module.sass"
interface MyAccountLayoutProps {
    children: React.ReactNode;
    ordersInfo: React.ReactNode;
    userInfo: React.ReactNode;
  }
  
  export default async function MyAccountLayout(props: MyAccountLayoutProps) {
    return (
      <div className={styles.MyAccount__title}>
        {props.children}
        <main className={styles.MyAccount__panels}>
        {props.userInfo}
        {props.ordersInfo}
        
        </main>
        
      </div>
    );
  }