const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
      trim: true,
      minlength: [3, 'Title must be at least 3 characters'],
      maxlength: [100, 'Title cannot exceed 100 characters']
    },
    ingredients: {
      type: [String],
      required: [true, 'Please add ingredients'],
      validate: {
        validator: function(v) {
          return v && v.length > 0;
        },
        message: 'At least one ingredient is required'
      }
    },
    steps: {
      type: [String],
      required: [true, 'Please add steps'],
      validate: {
        validator: function(v) {
          return v && v.length > 0;
        },
        message: 'At least one step is required'
      }
    },
    imageUrl: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Recipe', recipeSchema);