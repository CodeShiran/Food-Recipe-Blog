import User from "../models/user.js"

export const userRegister = async (req, res) => {
    const {firstName, lastName, email, password, image} = req.body

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

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, '-password')
        res.status(200).json({message: 'Users fetched successfully', data: users})
    } catch (error) {
        console.error("Error fetching users:", error.message);
        res.status(500).json({error: 'Internal server error'});
    }

}