import mongoose from 'mongoose';

const { Schema } = mongoose;

const courseSchema = new Schema({
    title: String,
    grade: Number,
    professor: String,
    className: String,
    startTime: {
        hour: Number,
        minute: Number
    },
    endTime: {
        hour: Number,
        minute: Number
    },
    daysOfWeek: [Number],
    notes: [String],
    semester: {
        type: Schema.Types.ObjectId,
        ref: 'Semester'
    }
});

const Course = mongoose.model('Course', courseSchema);

export { Course, courseSchema };