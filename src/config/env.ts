export const env = {
    SHOPIFY_TOKEN: process.env.SHOPIFY_API_KEY || "",
    SHOPIFY_HOSTNAME: process.env.SHOPIFY_HOSTNAME || "",
    CACHE_TOKEN: process.env.CACHE_TOKEN,
    SHOPIFY_GRAPHQL_ENDPOINT: process.env.SHOPIFY_GRAPHQL_ENDPOINT as string,
    SHOPIFY_STOREFRONT_TOKEN: process.env.SHOPIFY_STOREFRONT_TOKEN as string,
    OPEN_AI_KEY: process.env.OPEN_AI_KEY as string
  }