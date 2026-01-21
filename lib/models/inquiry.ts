import mongoose, { Schema, Document } from 'mongoose'

export interface IInquiry extends Document {
  name: string
  phone: string
  email?: string
  vehicle_make: string
  vehicle_model: string
  vehicle_year: string
  asking_price?: string
  dealer_location?: string
  vin?: string
  additional_info?: string
  contact_preference: string
  status: string
  submitted_at: Date
}

const InquirySchema = new Schema<IInquiry>(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
    vehicle_make: { type: String, required: true },
    vehicle_model: { type: String, required: true },
    vehicle_year: { type: String, required: true },
    asking_price: { type: String },
    dealer_location: { type: String },
    vin: { type: String },
    additional_info: { type: String },
    contact_preference: { type: String, default: 'whatsapp' },
    status: { type: String, default: 'pending' },
    submitted_at: { type: Date, default: () => new Date() },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

// Ensure model is not recompiled during HMR / repeated imports
export const Inquiry = (mongoose.models.Inquiry as mongoose.Model<IInquiry>) || mongoose.model<IInquiry>('Inquiry', InquirySchema)
