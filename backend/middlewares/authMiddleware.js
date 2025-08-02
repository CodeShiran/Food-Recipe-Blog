import jwt from 'jsonwebtoken'
import User from '../models/user.js'

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith('Bearer')) return res.status(401).json({message: 'authorizarion token missing or invalid'})
    
    const token = req.cookies.token
    if(!token) return res.status(401).json({message: 'authorization token missing or invalid'})
        
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await User.findById(decoded.id).select('-password')

    } catch (error) {
        return res.status(401).json({message: 'token invalid or expired'})
    }
    next()
}

export default authMiddleware