
'use client';
import { useChat } from '@ai-sdk/react'
import styles from "./Chat.module.sass"
 
export const Chat =  () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
 
  return (
    <main className={styles.Main}>
      <section className="mb-auto m">
        <h3> Bienvenido! Este es ChatBot en desarrollo</h3>
        {messages.map(m => (
          <div  key={m.id}>
            <p>{m.role === 'user' ? 'User: ' : 'AI: '}
                <span>{m.content}</span>
            </p>
            
          </div>
        ))}
      </section>
      <div className={styles.Chat}>
      <form  onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Say something..."
        />
        <button
          type="submit"
        >
          Send
        </button>
      </form>
      </div>
      
    </main>
  );
}