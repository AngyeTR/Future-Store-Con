import { create } from 'zustand'

type Store = {
  loginError: string
  addLoginError: (string: string) => void
  userError: string
  addUserError: (string: string) => void
}

export const useError = create<Store>()((set) => ({
  loginError: (() => {
    return ""
  })(),
  addLoginError: (errorMessage: string) => set({ loginError: errorMessage }),
  userError: (() => {
    return ""
  })(),
  addUserError: (errorMessage: string) => set({ userError: errorMessage }),
}))



