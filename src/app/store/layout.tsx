import { getCollections } from "../../services/shopify/collections"
// "app/services/shopify/collections"
import Link from "next/link"
import styles from "./storeLayout.module.sass"

export const runtime = "edge"

export default async function Layout({ children }: { children: React.ReactNode }) {
  const collections = await getCollections()
    return (
      <main className={styles.StoreLayout}>
        <nav>
        <ul className={styles.StoreLayout__list}>
        {
          collections.map((collection: any)=> (
              <Link href={collection.handle} key={collection.id} className={styles.StoreLayout__chip}>{collection.title}</Link>
          ))
          }
        </ul>
        </nav>
        {children}
      </main>
        )
  }