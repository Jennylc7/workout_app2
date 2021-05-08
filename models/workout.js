const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
 
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter and exercise type",
      },

      name: {
        type: String,
        trim: true,
        required: "Enter an exercise name",
      },

      distance: {
        type: Number,
      },

      duration: {
        type: Number,
        required: "enter an exercise duration in minutes",
      },

      weight: {
        type: Number,
      },

      sets: {
        type: Number,
      },

      reps: {
        type: Number,
      },
    },
  ],
},{
  // Automatically create timestamps for each document
  timestamps: true, // creates a createdAt & updatedAt for each document
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
