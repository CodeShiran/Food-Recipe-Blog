import multer from 'multer'
import {CloudinaryStorage} from 'multer-storage-cloudinary'
import cloudinary from '../config/cloudinary.js'

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'food-recipe-blog',
        allowedFormats: ['jpg', 'png', 'jpeg'],
    }
})

const upload = multer({ storage: storage })

export default upload