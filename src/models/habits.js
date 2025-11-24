const mongoose = require('mongoose')
const { Schema } = mongoose;

const HabitSchema = new Schema({
    userId: { type: Schema.Types.ObjectId },
    title: { type: String, required: true },
    description: String,
    frequency: { type: String, enum: ['daily', 'weekly'], default: 'daily' },
    isArchived: { type: Boolean, default: false },

}, { timestamps: true });

const Habit = mongoose.model('Habit', HabitSchema)
module.exports = Habit