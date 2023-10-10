const multer = require('multer')
const uuid = require('uuid/v1')

const mapp = {
    'image/png' : 'png',
    'image/jpg' : 'jpg',
    'image/jpeg' : 'jpeg'
}

const fileUpload = multer({
    limits : 50000000,
    storage : multer.diskStorage({
        destination : (req , file , callback) => {
            callback(null , "/public/userPhotos")
        },
        filename : (req , file , callback) => {
            const ext = mapp[file.mimetype]
            callback(null , uuid() + '.' + ext)
        }
    }),
    fileFilter : (req , file , callback) => {
        

    }
    
})

module.exports = fileUpload