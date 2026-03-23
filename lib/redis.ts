// import Redis from 'ioredis'

// const REDIS_URL = process.env.REDIS_URL || process.env.UPSTASH_REDIS_REST_URL || ''
// if (!REDIS_URL) {
//   // Do not throw to keep local dev working without Redis; caller can decide.
//   console.warn('REDIS_URL not configured; Redis rate limiting disabled')
// }

// declare global {
//   // eslint-disable-next-line no-var
//   var _redisClient: Redis | undefined
// }

// const getClient = () => {
//   if (!REDIS_URL) return null
//   if (global._redisClient) return global._redisClient
//   const client = new Redis(REDIS_URL)
//   global._redisClient = client
//   return client
// }

// export async function isRateLimitedRedis(key: string, windowMs: number, maxRequests: number) {
//   const client = getClient()
//   if (!client) return false // if Redis not configured, fall back to no limit (or use in-memory elsewhere)

//   const redisKey = `rl:${key}`

//   // INCR and set expiry on first increment
//   const current = await client.incr(redisKey)
//   if (current === 1) {
//     await client.pexpire(redisKey, windowMs)
//   }

//   return current > maxRequests
// }

// export default getClient
