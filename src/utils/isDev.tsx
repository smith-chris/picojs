const env = process.env.NODE_ENV

const isDev =
  env === 'dev' ||
  env === 'development' ||
  env === undefined

export default isDev
