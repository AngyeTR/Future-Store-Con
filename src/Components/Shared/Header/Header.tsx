import Link from "next/link";
import ShoppingCart from "app/Components/ShoppingCart/ShoppingCart";
import dynamic from "next/dynamic";
import { cookies } from "next/headers";
import { validateAccessToken } from "app/utils/auth/validateAccessToken";
import styles from './Header.module.sass'

const NoSSRShoppingCart = dynamic(()=> import("../../ShoppingCart/ShoppingCart"),{ssr:false})

export const Header = async () => {
  const customer = await validateAccessToken()
  const cookiesStore = cookies()
  const token = cookiesStore.get("accessToken")?.value
  
    return (
      <header className={styles.Header}>
        <nav>
            <ul className={styles.Header__list}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/store">Store</Link></li>
              {/* <li><Link href="/test">Test</Link></li> */}
            </ul>
          </nav>
          <div className={styles.Header__user}>
              {customer?.firstName ? <Link href="/myAccount">Bienvenido { customer.firstName} </Link>: <Link href={"/login"}>Login</Link>}
              <NoSSRShoppingCart/>
            </div>

      </header>
        
    )
}