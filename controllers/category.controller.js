const categoryModel = require('../models/category.model');
module.exports = {
    async create(req, res){
        const category = new categoryModel({
            name: req.body.name,
            user: req.user._id
        });
        category.save()
            .then(() => res.status(201).send('Category created.'))
            .catch(err => res.status(500).send('Error creating category.'));
    },
    async read(req, res){},
    async update(req, res){},
    async delete(req, res){}
}