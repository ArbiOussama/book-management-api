const express = require('express');
const Book = require('../models/book');
const authenticateToken = require('../middleware/auth');
const router = express.Router();

// Add a new book
router.post('/', authenticateToken, async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Retrieve all books
router.get('/', authenticateToken, async (req, res) => {
    const books = await Book.findAll();
    res.json(books);
});

// Get details of a specific book
router.get('/:id', authenticateToken, async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
});

// Update a book
router.put('/:id', authenticateToken, async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    await book.update(req.body);
    res.json(book);
});

// Delete a book
router.delete('/:id', authenticateToken, async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    await book.destroy();
    res.json({ message: 'Book successfully deleted' });
});

module.exports = router;
