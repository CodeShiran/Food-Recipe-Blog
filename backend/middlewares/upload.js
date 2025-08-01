import multer from 'multer'
import {cloudinaryStorage} from 'multer-storage-cloudinary'
import cloudinary from '../config/cloudinary'

const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'food-recipe-blog',
        allowedFormats: ['jpg', 'png', 'jpeg'],
    }
})

const upload = multer({ storage: storage })

export default upload