import mongoose from "mongoose";

const FighterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    weightClass: {
      type: String,
      required: true,
    },

    team: {
      type: String,
      default: "",
    },

    wins: {
      type: Number,
      default: 0,
    },

    losses: {
      type: Number,
      default: 0,
    },

    draws: {
      type: Number,
      default: 0,
    },

    profileImage: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Fighter =
  mongoose.models.Fighter ||
  mongoose.model("Fighter", FighterSchema);

export default Fighter;