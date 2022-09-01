const fs = require('fs');
const path = require('path');

// modulizo, leo y parseo la lista Json y los exporto a productcontroller

// modulizo la lista de productos de json para que se vea en la lista
const loadProducts = () => {
    return JSON.parse(fs.readFileSync(path.join(__dirname,  'products.json'), 'utf-8'))

}

// inserto el nuevo producto en la lista jason             // quiero guardar los productos  que recibo en mi lista json
const storeProducts = (products) => {
    fs.writeFileSync(path.join(__dirname, 'products.json'), JSON.stringify(products, null, 3), 'utf-8')
}

// modulizo la lista de productos de json para que se vea en la lista
const loadBrands = () => {
    return JSON.parse(fs.readFileSync(path.join(__dirname, 'brands.json'), 'utf-8'))

}



module.exports = {
    loadProducts,
    loadBrands,
    storeProducts
}