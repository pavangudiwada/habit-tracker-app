const mongoose = require("mongoose")
const { Schema } = require("mongoose")

const HabitLogSchema = new Schema({

    habitId: { type: Schema.Types.ObjectId, ref: 'Habit' },
    userId: { type: Schema.Types.ObjectId },
    date: { type: String, required: true }

}, { timestamps: true })


HabitLogSchema.index({ habitId: 1, date: 1 }, { unique: true });
HabitLogSchema.index({ userId: 1, date: 1 });

const HabitLog = mongoose.model('HabitLog', HabitLogSchema)
module.exports = HabitLog