export interface Inquiry {
  id: string
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
  contact_preference: 'whatsapp' | 'phone' | 'email'
  status: 'pending' | 'in_review' | 'completed'
  submitted_at: Date
  created_at: Date
  updated_at: Date
}

export interface Article {
  id: string
  title: string
  excerpt: string
  tag: string
  tagColor: string
  icon: string
  readTime: number
  sections: ArticleSection[]
}

export interface ArticleSection {
  title: string
  content: string
}

export interface InquiryFormData {
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
  contact_preference: 'whatsapp' | 'phone' | 'email'
}