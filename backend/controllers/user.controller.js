import User from "../models/user.js"
import jwt from 'jsonwebtoken'

export const userRegister = async (req, res) => {
    const {firstName, lastName, email, password} = req.body
    const image = req.file ? req.file.path : null; // Get the image URL from the uploaded file

    if(!firstName || !lastName || !email || !password) {
        return res.status(400).json({message: 'Please fill all fields'})
    }

    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' })
        }

        const newUser = new User({ firstName, lastName, email, password, image })
        await newUser.save()
        res.status(201).json({ message: 'User registered successfully', data: { id: newUser._id, firstName: newUser.firstName, lastName: newUser.lastName, email: newUser.email, image: newUser.image } })
    } catch (error) {
        console.error("Error during user registration:", error.message);
        res.status(500).json({error: 'Internal server error'});
    }
}

export const loginUser = async (req, res) => {
    const {email, password} = req.body

    if(!email || !password) {
        return res.status(400).json({message: 'Please fill all fields'})
    }

    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        const isMatch = await user.comparePassword(password)
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' })
        }

        const token = jwt.sign({
            id: user._id,
            email: user.email
        }, process.env.JWT_SECRET, { expiresIn: '1h' })

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
            sameSite: 'Strict', // Prevent CSRF attacks
            maxAge: 3600000 // 1 hour
        })

        res.status(200).json({ message: 'User logged in successfully', data: { id: user._id, email: user.email, name:user.firstName, image:user.image,  token } })
    } catch (error) {
        console.error("Error during user login:", error.message);
        res.status(500).json({error: 'Internal server error'});
    }
}


export const logoutUser = async (req, res) => {

    if(!req.cookies.token) return res.status(401).json({message: 'User not logged in'})

    res.clearCookie('token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        sameSite: 'Strict' // Prevent CSRF attacks
    })


    res.status(200).json({ message: "User logged out successfully" });
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, '-password')
        res.status(200).json({message: 'Users fetched successfully', data: users})
    } catch (error) {
        console.error("Error fetching users:", error.message);
        res.status(500).json({error: 'Internal server error'});
    }
}

export const getUser = async (req, res) => {
    const {id} = req.params
    try {
        const user = await User.findById(id).select('-password')
        if(!user) return res.status(404).json({message: 'User not found'})
        res.status(200).json({message: 'User fetched successfully', data: user})

    } catch (error) {
        console.error("Error fetching user data", error.message)
        res.status(500).json({error: 'Internal server error'})
    }
}

export const EditUser = async (req, res) => {
    const {id} = req.params
    const {firstName, lastName, email, image} = req.body

    if(!firstName && !lastName && !email && !image) {
        return res.status(400).json({message: 'please fill all fields'})
    }

    const updatedFields = {}
    if(firstName) updatedFields.firstName = firstName
    if(lastName) updatedFields.lastName = lastName
    if(email) updatedFields.email = email
    if(image) updatedFields.image = image

    try {
        const updatedUser = await User.findByIdAndUpdate(id, updatedFields, { new: true })
        res.status(200).json({ message: 'User updated successfully', data: updatedUser })
    } catch (error) {
        console.error("Error updating user:", error.message);
        res.status(500).json({error: 'Internal server error'});
    }

}

export const deleteUser = async (req, res) => {
    const {id} = req.params

    try {
        const deletedUser = await User.findByIdAndDelete(id)
        if(!deletedUser) return res.status(404).json({message: 'User not found'})
        res.status(200).json({ message: 'User deleted successfully' })
    } catch (error) {
        console.error("Error deleting user:", error.message);
        res.status(500).json({error: 'Internal server error'});
    }
}