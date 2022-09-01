const {loadProducts} = require('../data/db_Module')

/* metdos, acciones*/
// donde requiero las rutas y mando la logica a la vista(a la carpeta particular )
module.exports = {
   index :  (req, res ) => {
        const products = loadProducts();
        res.render('index', {
            products
        });
    },
    terms : (req, res) => {
        return res.render('terms')
    }

};



