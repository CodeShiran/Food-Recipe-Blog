import jwt from 'jsonwebtoken'
import User from '../models/user.js'

const authMiddleware = async (req, res, next) => {
    // Try to get token from Authorization header first
    const authHeader = req.headers.authorization
    let token = null
    
    if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.substring(7) // Remove 'Bearer ' prefix
    } else {
        // If no Authorization header, try to get token from cookies
        token = req.cookies.token
    }
    
    if (!token) {
        return res.status(401).json({message: 'authorization token missing or invalid'})
    }
        
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await User.findById(decoded.id).select('-password')

    } catch (error) {
        return res.status(401).json({message: 'token invalid or expired'})
    }
    next()
}

export default authMiddleware