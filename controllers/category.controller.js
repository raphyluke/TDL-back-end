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
    async read(req, res){
        const categories = await categoryModel.find({ user: req.user._id });
        res.status(200).send(categories);
    },
    async update(req, res){
        const category = await categoryModel.findOne({ _id: req.params.id });
        if (!category) return res.status(404).send('Category not found.');
        category.name = req.body.name;
        category.save()
            .then(() => res.status(200).send('Category updated.'))
            .catch(err => res.status(500).send('Error updating category.'));
    },
    async delete(req, res){
        const category = await categoryModel.findOne({ _id: req.params.id });
        if (!category) return res.status(404).send('Category not found.');
        category.delete()
            .then(() => res.status(200).send('Category deleted.'))
            .catch(err => res.status(500).send('Error deleting category.'));
    }
}