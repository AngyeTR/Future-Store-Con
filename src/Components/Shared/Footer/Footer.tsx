import sytles from "app/Components/Shared/Footer/Footer.module.sass"
export const Footer = () => {
    return (
        <footer className={sytles.Footer}>
            <p>Future StoreCon © {new Date().getFullYear()}</p>
        </footer>
    )
}