"use client"
import { handleLogin } from "app/actions";
import styles from "./LoginForm.module.sass";
import Link from "next/link";
import { useError } from "app/hooks/useError"

export const LoginForm = () => {
  const {loginError, addLoginError} = useError()
  const handleSubmit = async (event: any)=> {
    addLoginError("")
    const formData = new FormData(event.target)
    event?.preventDefault()
    const error = await handleLogin(formData) as string
    addLoginError(error)
    }
  
  return (
    <div className={styles.NewAccountForm}  >
      <h1 className={styles.NewAccountForm__title}>Login</h1>
      <form className={styles.NewAccountForm__form} onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
        <input type="password" name="password" placeholder="password" />
        <input type="submit" name="submit" value="Login" />
        <p>{loginError}</p>
      </form>
      <p className={styles.NewAccountForm__text}>¿Aún no tienes una cuenta? <Link href="/signup">Aquí</Link> puedes crearla</p>
    </div>
  );
}