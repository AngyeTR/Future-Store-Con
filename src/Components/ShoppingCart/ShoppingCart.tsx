"use client"
import { useState } from "react"
import { FaShoppingCart } from "react-icons/fa"
import styles from "app/Components/ShoppingCart/ShoppingCart.module.sass"
import { useShoppingCart } from "app/hooks/useShoppingCart"
import { ShoppingCartItem } from "./ShoppingCartItem"
import { handleCreateCart } from "app/actions"

export default function ShoppingCart (){
    const [isOpen, setIsOpen] = useState(false)
    const [isBuying, setIsBuying] = useState(false);
    const {cart} = useShoppingCart()
    const handleOpen = () => setIsOpen(!isOpen) 

    const handleBuy = async () =>{
        
        try{
            setIsBuying(true)
            const checkoutURL = await handleCreateCart(cart) 
            if(!checkoutURL){ throw new Error("Error creating checkout")}
            window.localStorage.removeItem("cart")
            window.location.href = checkoutURL
        } catch(error){
            console.log("error en checkoput", error)
        }
        finally{
            setIsBuying(false)
        }
    }

    return (
        <button className={styles.ShoppingCart} onClick={handleOpen}><FaShoppingCart/>
        <span className={styles.ShoppingCart__counter}>{cart.length}</span>
        {(isOpen && cart.length>0) && (
            <div className={styles.ShoppingCart__items}>
            {
                cart.map((item => (
                    cart.map(item => (<ShoppingCartItem key={item.id} item={item} />))
                )))
            }
            <button className={styles.ShoppingCart__buyButton} onClick={handleBuy} disabled={isBuying}>Buy</button>
        </div>

        ) }
        
        
        </button>
        
    )
}