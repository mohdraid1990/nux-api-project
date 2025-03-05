import { generateFakeProduct } from '~/utils/generate'

let cachedProducts = null
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes
let lastCacheTime = null

export default defineEventHandler(async () => {
  if (cachedProducts && lastCacheTime && (Date.now() - lastCacheTime < CACHE_DURATION)) {
    return cachedProducts
  }

  const products = Array.from({ length: 12 }, generateFakeProduct)
  cachedProducts = products
  lastCacheTime = Date.now()
  
  return products
})