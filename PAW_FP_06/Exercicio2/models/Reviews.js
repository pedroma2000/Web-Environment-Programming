/**
 * Ficha prática 6 - Exercicio 2
 * @author Pedro Machado "pedroma2000"
 */
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    book: String,
    email: {
        type: String,
        required: true
    },
    read: Boolean,
    image: String,
    slug: String,
    description: String,

    updated_at: { type: Date, default: Date.now },
});

reviewSchema.pre('save', function(next) {
    this.slug = slug(this.book)
    next()
})

module.exports = mongoose.model('Review', reviewSchema);