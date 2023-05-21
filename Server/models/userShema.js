import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  image: {
    type: String,
    default: "",
  },
  username: {
    type: String,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  phone:
  {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  cnic:
  {
    type: String,
  },

  gender:
  {
    type: String,
    enum: ["male", "female"],
    // required: true,
  },
  dob:
  {
    type: Date,
  },
  roles: {
    type: [
      {
        type: String,
        enum: ["user", "admin",],
      },
    ],
    default: ["user"],
    required: true,
  },

  addresses: [
    {
      addressName: {
        type: String,
      },
      city: {
        type: String,
      },
      area: { type: String },
      address: {
        type: String,
      },
      location: {

        lat: { type: String },
        lng: { type: String }

      }
    }
  ],
  updated: {
    type: Date,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const userSchema = mongoose.model("user", UserSchema);

export default userSchema;
