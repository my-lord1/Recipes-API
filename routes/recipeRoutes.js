const express = require('express');
const router = express.Router();
const {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe
} = require('../controllers/recipeController');

const validate = require('../middleware/validate');
const { recipeSchema } = require('../validators/recipeValidator');

router.route('/')
  .post(validate(recipeSchema), createRecipe) 
  .get(getAllRecipes);

router.route('/:id')
  .get(getRecipeById)
  .put(validate(recipeSchema), updateRecipe) 
  .delete(deleteRecipe);

module.exports = router;