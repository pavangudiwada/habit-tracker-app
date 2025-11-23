const mongoose = require('mongoose')
const { Schema } = mongoose;

const HabitSchema = new Schema({
    userId: mongoose.ObjectId,
    title: String,
    description: String,
    frequency: { type: String, enum: ['daily', 'weekly'], default: 'daily' },
    date: { type: Date, default: Date.now },
    isArchived: Boolean,

}, { timestamps: true });

const Habit = mongoose.model('Habit', habitSchema)
module.exports = Habit