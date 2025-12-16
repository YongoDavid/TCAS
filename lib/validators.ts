import { z } from 'zod'

export const inquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email').optional().or(z.literal('')),
  vehicle_make: z.string().min(1, 'Vehicle make is required'),
  vehicle_model: z.string().min(1, 'Vehicle model is required'),
  vehicle_year: z.string().min(4, 'Please enter a valid year'),
  asking_price: z.string().optional(),
  dealer_location: z.string().optional(),
  vin: z.string().optional(),
  additional_info: z.string().optional(),
  contact_preference: z.enum(['whatsapp', 'phone', 'email']),
})

export type InquiryFormData = z.infer<typeof inquirySchema>