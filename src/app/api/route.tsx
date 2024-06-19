import { getProducts } from "../../services/shopify/products"
// "app/services/shopify"

export async function GET() {
    const products = await getProducts()

    return Response.json({products})
    
}