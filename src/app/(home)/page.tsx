import { Description, Hero, MainProducts } from "app/Components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FutureStoreCon",
  description: "Welcome to the future Store, an ecommerce from other century",
  keywords: ["ecommerce", "technology", "shop"]
} 

export default function Home() {
  return (
    <main >
      
      <MainProducts/>
      
    </main>
  );
}
