import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const auth = async (req, res, next) => {
  try {
    const token = req.header.authorization.split(' ')[1]
    console.log('auth token length', req.header)
    const isGoogleAuth = token.length > 500
    let decodeData
    if (token && !isGoogleAuth) {
      decodedData = jwt.verify(token, process.env.USER_SECRET)
      req.userId = decodedData?._id
    } else {
      decodedData = jwt.decode(token)
      req.userId = decodedData?.sub
    }
    next()
  } catch (error) {
    console.log('middleware error', error)
  }
}
