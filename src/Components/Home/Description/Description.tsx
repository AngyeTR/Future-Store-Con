"use client"
import { useState } from "react"
import classNames from "classnames/bind"
import styles from "./Description.module.sass"
import Image from "next/image"

const PLACEHOLDER_IMG = "data:image/jpeg;base64,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"

export const Description = () => {
    const [hasBorder, setHasBorder] = useState(false)
    const context = classNames.bind(styles)
    const buttonStyles = context("Description__button", {
        "Description__button--border": hasBorder,
    })
    const handleClick = () =>{ setHasBorder(!hasBorder)}
    return (
        <section className={styles.Description}>
            <button onClick={() => handleClick()}
                className={buttonStyles}>
            <div className={styles.Description__imageContainer}>
            <Image src="/images/description.jpeg" alt="Product Marketplace" fill placeholder="blur"
            blurDataURL={PLACEHOLDER_IMG}/>
            </div>

            </button>
            
            <div>
                <h2>Bring the future today</h2>
                <p>Future World: Your Gateway to Tomorrows Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
            </div>
        </section> 
    )
}