const multer = require ('multer');
const path = require ('path');

const storageProducts = multer.diskStorage({
    // donde quiero  guarde el archivo
    destination : (req, file, callback) => {
        callback(null, './public/images/celulares')
    },
    // como quier q se guarde
    filename : (req, file, callback)=> {
        callback(null, `product-${Date.now()}${path.extname(file.originalname)}`)
        // el archico quedaria : product-22666446564684(nombre original del archivo)
    },
})

const storageUsers= multer.diskStorage({
    // donde quiero  guarde el archivo
    destination : (req, file, callback) => {
        callback(null, './public/images/users')
    },
    // como quiero q se guarde
    filename : (req, file, callback)=> {
        callback(null, `avatar-${Date.now()}${path.extname(file.originalname)}`)
        // el archico quedaria : product-22666446564684(nombre original del archivo)
    },
})

const uploadProducts = multer ({
    storage : storageProducts
   
})
const uploadUsers= multer ({
    storage : storageUsers
})
   
module.exports = [
    uploadProducts,
    uploadUsers
]
    

