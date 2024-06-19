import { ProductView } from "app/Components"
import { getProducts } from "../../../services/shopify/products"
// "app/services/shopify/products"
import { redirect } from "next/navigation"

interface ProductPageProps {
    searchParams: {
        id: string
    }
}

export async function generateMetadata({ searchParams }: ProductPageProps) { 
    const id = searchParams.id
    const products = await getProducts(id)
    const product = products[0]
  
    return {
      title: product.title,
      description: product.description,
      keywords: product.tags,
      openGraph: {
        images: [product.image]
      }
    }
  }

export default async function productPage({searchParams}:ProductPageProps) {
    const id = searchParams.id
    const products = await getProducts(id)
    const product = products[0]

    if(!id){
        redirect("/")
    }

    return (
        <ProductView product={product}/>
       
    )
    
}