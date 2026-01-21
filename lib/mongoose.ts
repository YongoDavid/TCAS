import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env,local')
}

type Cached = {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}

declare global {
  // eslint-disable-next-line no-var
  var _mongooseCache: Cached | undefined
}

const cached: Cached = global._mongooseCache || { conn: null, promise: null }

if (!cached.promise) {
  const opts = {
    // Recommended options
    bufferCommands: false,
  }

  cached.promise = mongoose.connect(MONGODB_URI, opts).then((m) => {
    return m
  })
  global._mongooseCache = cached
}

export default async function connectToDatabase() {
  if (cached.conn) return cached.conn
  cached.conn = await cached.promise
  return cached.conn
}
