"use server"
import { GraphQLClientSingleton } from "app/graphql"
import { createCartMutation } from "app/graphql/mutations/createCartMutation"
import { createUserMutation } from "app/graphql/mutations/createUserMutation"
import { createAccessToken } from "app/utils/auth/createAccessToken"
import { validateAccessToken } from "app/utils/auth/validateAccessToken"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const handleCreateUser = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData)
  delete formDataObject["password_confirmation"]
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
  const variables = {
    input: {
      ...formDataObject,
      phone: '+57' + formDataObject.phone
    }
  }
  const { customerCreate} : {
    customerCreate: {
      customer: {
        firstName: string
        email: string
      }
    }
  } = await graphqlClient.request(createUserMutation, variables)
  console.log("creado", customerCreate)
  const { customer } = customerCreate
  if(customer?.firstName){
    const accessToken = await createAccessToken(formDataObject.email as string, formDataObject.password as string)
    if(accessToken){
      redirect("/store")}
    return ""
  }  
  else{
    return("Ups! something went wrong. Please check your information and try again") 
  } 
}

export const handleLogin = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData)
  try{
    const accessToken = await createAccessToken(formDataObject.email as string, formDataObject.password as string )
    if(accessToken){
    redirect("/store")
    return ""
  }}
  catch(error){
    return("Ups! something went wrong. Please check your credentials and try again") 
  }
}

export const handleLogout = () => {
  const cookiesStore = cookies()
  cookiesStore.delete("accessToken")
  redirect("/")
}

export const handleCreateCart = async (items: CartItem[]) => {
  const cookiesStore = cookies()
  const accesToken = cookiesStore.get('accessToken')?.value as string
  if(!accesToken) redirect('/login')
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
  const customer = await validateAccessToken()
  const variables = {
    input: {
      buyerIdentity: {
        customerAccessToken: accesToken,
        email: customer?.email
      },
      lines: items.map(item => ({
        merchandiseId: item.merchandiseId,
        quantity: item.quantity
      }))
    }
  }

  const { cartCreate }: {
    cartCreate?: {
      cart?: {
        checkoutUrl: string
      }
    }
  } = await graphqlClient.request(createCartMutation, variables)

  return cartCreate?.cart?.checkoutUrl
}