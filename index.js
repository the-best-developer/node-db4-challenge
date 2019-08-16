const express = require('express');
const recipeDb = require('./recipe-model.js');
const server = express();

server.use(express.json());

// This is for testing
server.get('/:id', async (req, res) => {
    try {
      const resi = await recipeDb.getRecipes();
      res.json(resi);
    } catch (err) {
      res.status(500).json({ message: 'Failed to get recipe' });
    }
  });

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
