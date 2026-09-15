import mongoose from 'mongoose';

const MatchSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  location: { type: String },
  fighterA: { type: String, required: true },
  fighterB: { type: String, required: true },
  weightClass: { type: String },
  status: { type: String, default: 'upcoming' },
}, { timestamps: true });

export default mongoose.models.Match || mongoose.model('Match', MatchSchema);