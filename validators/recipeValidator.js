const { z } = require('zod');

const recipeSchema = z.object({
  title: z.string()
    .min(3, 'Title must be at least 3 characters')
    .max(100, 'Title cannot exceed 100 characters'),
  ingredients: z.array(z.string())
    .min(1, 'At least one ingredient is required'),
  steps: z.array(z.string())
    .min(1, 'At least one step is required'),
  imageUrl: z.string().url().optional().or(z.literal(''))
});

module.exports = { recipeSchema };