import { ProductsWrapper } from "app/Components"
import { getProducts } from "../../../services/shopify/products"
// "app/services/shopify/products"
import { getCollectionProducts, getCollections } from "../../../services/shopify/collections"
// "app/services/shopify/collections"

interface CategoryProps {
    params: { categories: string[]}
}

export default async function Category(props: CategoryProps){
    const {categories} = props.params
    let cat = categories? categories[0]: []
    let products = []
    const collections = await getCollections()
    const selectedCollection = collections.find((collection: any)=> collection.handle == cat)?.id
   
    if(selectedCollection){
        products = await getCollectionProducts(selectedCollection)
    } else {
        products = await getProducts()
    }
    
    return (
        <ProductsWrapper products={products}/>
    )
}