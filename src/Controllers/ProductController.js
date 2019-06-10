const moongose = require('mongoose');
const Product = moongose.model('Product');

module.exports = {
    async index(req, res){
        
        // trecho de busca de produtos
        //const products = await Product.find();

        const { page = 1 } = req.query;
        // trecho de busca de produtos com paginação
        const products = await Product.paginate({}, { page, limit: 10 });

        //trecho que retorna os produtos da busca, no formato json
        return res.json(products);
    },

    async show(req, res){
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async store(req, res){
        //criação
        const product = await Product.create(req.body);
        return res.json(product);
    },

    // UPDATE
    async update (req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true});
        return res.json(product);
    },

    // DELETE
    async destroy (req, res){
        await Product.findByIdAndDelete(req.params.id);
        return res.send();
    }
};