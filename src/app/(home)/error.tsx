"use client"
// interface ErrorProps {
//     error: Error,
//     reset: ()=> void,
// }

import styles from "./home.module.sass"
export default function Error({error, reset}: ErrorPageProps){
    return (
        <div style={{
            padding: "2rem",
            margin: "auto",
            textAlign: "center",
        }}>
            <h1>:C</h1>
            <p> Ha ocurrido un error</p>
            <button onClick={reset}
            className={styles.Home__button}>Retry</button>

        </div>
        
    )
}