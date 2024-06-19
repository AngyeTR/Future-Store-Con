import { shopifyUrls } from "./URLs"
import { env } from "app/config/env"
export const getProducts = async (id?: string) => {
    try{ 
        const apiUrl = id ? `${shopifyUrls.products.all}?ids=${id}` : shopifyUrls.products.all
        const response = await fetch(apiUrl, 
        {
        method: "GET",
        headers: new Headers({"X-Shopify-Access-Token": env.SHOPIFY_TOKEN || "", })})
        
        const {products} = await response.json()

        const transformedProducts = products.map((product: any) => {
            return {
                id: product.id,
                gql_id: product.variants[0].admin_graphql_api_id,
                title: product.title,
                description: product.body_html,
                price: product.variants[0].price,
                image: product.images[0].src,
                quantity: product.variants[0].inventory_quantity,
                handle: product.handle,
                tags: product.tags,
                
            }
        })
        return transformedProducts }
    catch(error){ console.log("Hubo un errorshito", error)} 
}

export const getMainProducts = async () => {
    const response = await fetch(shopifyUrls.products.mainProducts, {
      headers: new Headers({
        // 'X-Shopify-Access-Token': "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"
        'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
      })
    })
  
    const data = await response.json()
    const products = data.products
    return products
  }