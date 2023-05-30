import mongoose from 'mongoose';

const RiderSchema = new mongoose.Schema({
    image: {
        type: String,
        default: '',
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        default: '',
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    cnic: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        default: ' ',
    },
    assignedOrders: [
        {
            orderID: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'order',
            },
            from: {
                name: {
                    type: String,
                },
                contact: {
                    type: String,
                },

                lat: {
                    type: String,
                },

                lng: {
                    type: String,
                }
            },
            to: {
                name: {
                    type: String,
                },
                contact: {
                    type: String,
                },

                lat: {
                    type: String,
                },

                lng: {
                    type: String,
                }
            }
        },
    ],
    completedOrders: [
        {
            orderID: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'order',
            },
            from: {
                name: {
                    type: String,
                },
                contact: {
                    type: String,
                },

                lat: {
                    type: String,
                },

                lng: {
                    type: String,
                }
            },
            to: {
                name: {
                    type: String,
                },
                contact: {
                    type: String,
                },

                lat: {
                    type: String,
                },

                lng: {
                    type: String,
                }
            }
        },
    ],
    vehicleMake: {
        type: String,
        required: true,
    },
    vehicleModel: {
        type: String,
        required: true,
    },
    vehicleReg: {
        type: String,
        required: true,
    },
    updated: {
        type: Date,
    },
    created: {
        type: Date,
        default: Date.now,
    },
});

const Rider = mongoose.model('Rider', RiderSchema);

export default Rider;
