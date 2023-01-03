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

  password: {
    type: String,
    required: true,
  },

  gender:
  {
    type: String,
    enum:["male", "female"]
  },
  DOB:
  {
    type: Date
  },
  roles: {
    type: [
      {
        type: String,
        enum: ["user", "admin", "warehouse"],
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
      area:{type:String},
      address: {
        type: String,
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
