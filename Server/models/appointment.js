import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
    TailorID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tailor",
    },
    TailorName: {
        type: String,
    },
    TailorContactNumber: {
        type: String,
    },
    CustomerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    CustomerName: {
        type: String,
    },
    CustomerContactNumber: {
        type: String,
    },
    AppointmentDate: { type: Date },
    StartTime: { type: String },
    EndTime: { type: String },
    AppointmentStatus: { type: String },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
