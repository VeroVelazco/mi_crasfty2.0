var express = require('express');
var router = express.Router();

const {detail, filter, search, add, store, edit, update, remove} = require ('../controllers/productController')

const {uploadProducts} = require('../middlewares/uploadFiles')
/* /products */
router
    .get('/add', add)
    .post('/add', store) // iamge es el name del formulario
    .get('/detail/:id', detail) 
    .get('/edit/:id', edit) // .id porque me muestra el producto y los datos del producto que pido (renderiza el formulario)
    .put('/update/:id', update)  // envia la informacion 
    .get('/filter', filter)
    .get('/search', search)
    .delete('/delete/:id', remove)
    
  //.get me rendiriza el formulario de agregar producto
  //.post es por donde vuleve el formulario
  //.put indica a nuestro sevidor que la peticion viene como naturaleza de editar un recurso




module.exports = router;