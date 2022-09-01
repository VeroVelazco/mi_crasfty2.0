const { loadProducts, loadBrands, storeProducts } = require('../data/db_Module')



// requiero el arrays y envio la vistas a productAdd
module.exports = {

    add: (req, res) => {
        const brands = loadBrands();
        return res.render('productAdd', {
            brands: brands.sort() //ordena alfabeticamente
        })
    },
    // que me devuelve las marcas en la vista
    //devuelve el formulario
    store: (req, res) => {
        return res.send(req.files)// cuando envio varias imagenes las mismas llegan por files

        const products = loadProducts();

        const { name, price, discount } = req.body;

        // acceder al ultimo id(para saber cual es y sumar un producto con numero de id)
        const id = products[products.length - 1].id;

        //creo un nuevo objeto
        const newProduct = {
            id: id + 1, // sumo el numero del id a mi  nuevo producto
            ...req.body, //traigo todos los elementos de brands.jason que no necesitan modificacion
            name: name.trim(), //quita los espacios en blanco 
            price: +price, // (+) parsea el string a number
            discount: +discount,
            image : product.images
        }


        // ((express operator))creo una consante que guarde el array de los productos y concatene con el nuevo producto
        const productsNew = [...products, newProduct];

        // sobreescribo  a json con el nuevo producto,
        //storeProducts es un metodo que recibe un array y lo srtegnifica a json
        storeProducts(productsNew)

        res.redirect('/')
    },
    // metodo que me permite renderizar la vista
    edit: (req, res) => {

        const products = loadProducts();
        const brands = loadBrands()

        const product = products.find(product => product.id === +req.params.id);

        return res.render('productEdit', {
            brands,
            product
        })


    },
    update: (req, res) => {

        const products = loadProducts();
        const { id } = req.params;
        const { name, price, discount, brand, category, section } = req.body;

        const productsModify = products.map(product => {
            if (product.id === +id) {
                return {
                    ...product,
                    name: name.trim(),
                    price: +price,
                    discount: +discount,
                    brand,
                    category,
                    section,
                    

                }
            }
            return product

        })

       
        storeProducts(productsModify)

        return res.redirect('/products/detail/' + req.params.id)
    },





    //cuando cliqueo un producto me lleva al detale del producto
    detail: (req, res) => {
        const products = loadProducts();
        const product = products.find(product => product.id === +req.params.id);
        return res.render('productDetail', {
            product
        })
    },



    // filtra los producotas. x ej de temporadao populares
    filter: (req, res) => {
        const products = loadProducts();
        const productsFilter = products.filter(product => product.section === req.query.section)
        return res.render('products', {
            products: productsFilter
        })
    },

    // Busco los productos
    search: (req, res) => {
        const products = loadProducts();
        const result = products.filter(product => product.name.toLowerCase().includes(req.query.keywords.toLowerCase()))

        return res.render('products', {
            products: result,
            keywords: req.query.keywords
        })

    },

    remove : (req,res) => {
        const products = loadProducts();

        const productModify = products.filter (product => product.id !== req.params.id)
        
        storeProducts(productModify)

        res.redirect('/')
    },


}
