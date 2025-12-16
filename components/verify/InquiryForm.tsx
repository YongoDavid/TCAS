'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, CheckCircle, MessageSquare, ArrowRight } from 'lucide-react'
import { inquirySchema, InquiryFormData } from '@/lib/validators'

type Step = 'context' | 'form' | 'success'

export default function InquiryForm() {
  const [step, setStep] = useState<Step>('context')
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      vehicle_make: '',
      vehicle_model: '',
      vehicle_year: '',
      asking_price: '',
      dealer_location: '',
      vin: '',
      additional_info: '',
      contact_preference: 'whatsapp'
    }
  })

  const contactPreference = watch('contact_preference')

  const onSubmit = async (data: InquiryFormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to submit inquiry')
      }

      setStep('success')
    } catch (error) {
      console.error('Error submitting inquiry:', error)
      alert('Failed to submit inquiry. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {step === 'context' && (
          <motion.div
            key="context"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-[#141414] border border-[#27272A] rounded-2xl p-8 lg:p-12 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#F59E0B]/10 flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">⏸</span>
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Pause before you pay.
            </h2>
            
            <p className="text-[#A1A1AA] leading-relaxed mb-8 max-w-md mx-auto">
              You&apos;re about to make a decision worth millions of Naira. 
              Take 5 minutes to share the details — we&apos;ll help you see what the dealer won&apos;t show.
            </p>

            <div className="space-y-4 text-left bg-[#0A0A0A] rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-[#FAFAFA] mb-3">What we&apos;ll review:</h3>
              <ul className="space-y-3 text-sm text-[#A1A1AA]">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-2 flex-shrink-0" />
                  Available vehicle history and red flags
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-2 flex-shrink-0" />
                  Price reasonability compared to market data
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-2 flex-shrink-0" />
                  Questions you should ask the dealer
                </li>
              </ul>
            </div>

            <Button 
              onClick={() => setStep('form')}
              className="bg-[#10B981] hover:bg-[#059669] text-[#0A0A0A] font-semibold px-8 py-6 text-base rounded-xl w-full sm:w-auto"
            >
              Continue to Form
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        )}

        {step === 'form' && (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-[#141414] border border-[#27272A] rounded-2xl p-8 lg:p-12"
          >
            <h2 className="text-2xl font-bold mb-2">Vehicle Inquiry</h2>
            <p className="text-[#A1A1AA] mb-8">
              Share what you know. The more details, the better our analysis.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-[#A1A1AA] uppercase tracking-wider">Your Contact</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-[#FAFAFA] mb-2 block">Full Name *</Label>
                    <Input
                      id="name"
                      {...register('name')}
                      className="bg-[#0A0A0A] border-[#27272A] focus:border-[#10B981] text-[#FAFAFA]"
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-[#EF4444] text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-[#FAFAFA] mb-2 block">Phone/WhatsApp *</Label>
                    <Input
                      id="phone"
                      {...register('phone')}
                      className="bg-[#0A0A0A] border-[#27272A] focus:border-[#10B981] text-[#FAFAFA]"
                      placeholder="+234 800 000 0000"
                    />
                    {errors.phone && <p className="text-[#EF4444] text-sm mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-[#FAFAFA] mb-2 block">Email (Optional)</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    className="bg-[#0A0A0A] border-[#27272A] focus:border-[#10B981] text-[#FAFAFA]"
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-[#EF4444] text-sm mt-1">{errors.email.message}</p>}
                </div>
              </div>

              {/* Vehicle Information */}
              <div className="space-y-4 pt-4 border-t border-[#27272A]">
                <h3 className="text-sm font-semibold text-[#A1A1AA] uppercase tracking-wider">Vehicle Details</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="vehicle_make" className="text-[#FAFAFA] mb-2 block">Make *</Label>
                    <Input
                      id="vehicle_make"
                      {...register('vehicle_make')}
                      className="bg-[#0A0A0A] border-[#27272A] focus:border-[#10B981] text-[#FAFAFA]"
                      placeholder="Toyota"
                    />
                    {errors.vehicle_make && <p className="text-[#EF4444] text-sm mt-1">{errors.vehicle_make.message}</p>}
                  </div>
                  
                  <div>
                    <Label htmlFor="vehicle_model" className="text-[#FAFAFA] mb-2 block">Model *</Label>
                    <Input
                      id="vehicle_model"
                      {...register('vehicle_model')}
                      className="bg-[#0A0A0A] border-[#27272A] focus:border-[#10B981] text-[#FAFAFA]"
                      placeholder="Camry"
                    />
                    {errors.vehicle_model && <p className="text-[#EF4444] text-sm mt-1">{errors.vehicle_model.message}</p>}
                  </div>
                  
                  <div>
                    <Label htmlFor="vehicle_year" className="text-[#FAFAFA] mb-2 block">Year *</Label>
                    <Input
                      id="vehicle_year"
                      {...register('vehicle_year')}
                      className="bg-[#0A0A0A] border-[#27272A] focus:border-[#10B981] text-[#FAFAFA]"
                      placeholder="2020"
                    />
                    {errors.vehicle_year && <p className="text-[#EF4444] text-sm mt-1">{errors.vehicle_year.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="asking_price" className="text-[#FAFAFA] mb-2 block">Asking Price (₦)</Label>
                    <Input
                      id="asking_price"
                      {...register('asking_price')}
                      className="bg-[#0A0A0A] border-[#27272A] focus:border-[#10B981] text-[#FAFAFA]"
                      placeholder="15,000,000"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="dealer_location" className="text-[#FAFAFA] mb-2 block">Dealer/Location</Label>
                    <Input
                      id="dealer_location"
                      {...register('dealer_location')}
                      className="bg-[#0A0A0A] border-[#27272A] focus:border-[#10B981] text-[#FAFAFA]"
                      placeholder="Lagos, Berger"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="vin" className="text-[#FAFAFA] mb-2 block">VIN (if available)</Label>
                  <Input
                    id="vin"
                    {...register('vin')}
                    className="bg-[#0A0A0A] border-[#27272A] focus:border-[#10B981] text-[#FAFAFA] font-mono"
                    placeholder="1HGBH41JXMN109186"
                  />
                  <p className="text-xs text-[#71717A] mt-1">17-character code usually on the dashboard or door frame</p>
                </div>

                <div>
                  <Label htmlFor="additional_info" className="text-[#FAFAFA] mb-2 block">Additional Information</Label>
                  <Textarea
                    id="additional_info"
                    {...register('additional_info')}
                    className="bg-[#0A0A0A] border-[#27272A] focus:border-[#10B981] text-[#FAFAFA] min-h-[100px]"
                    placeholder="Any concerns, dealer claims, photos shared, etc."
                  />
                </div>
              </div>

              {/* Contact Preference */}
              <div className="space-y-4 pt-4 border-t border-[#27272A]">
                <h3 className="text-sm font-semibold text-[#A1A1AA] uppercase tracking-wider">Preferred Contact Method</h3>
                
                <Select 
                  value={contactPreference} 
                  onValueChange={(value: 'whatsapp' | 'phone' | 'email') => setValue('contact_preference', value)}
                >
                  <SelectTrigger className="bg-[#0A0A0A] border-[#27272A] text-[#FAFAFA]">
                    <SelectValue placeholder="Select preference" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#141414] border-[#27272A]">
                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                    <SelectItem value="phone">Phone Call</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Disclaimer */}
              <div className="bg-[#0A0A0A] rounded-xl p-4 border border-[#27272A]">
                <p className="text-xs text-[#71717A] leading-relaxed">
                  <strong className="text-[#A1A1AA]">Disclaimer:</strong> Submissions are reviewed for advisory purposes only. TrueSpec does not certify, guarantee, or insure any vehicle.
                </p>
              </div>

              {/* Submit */}
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#10B981] hover:bg-[#059669] text-[#0A0A0A] font-semibold py-6 text-base rounded-xl"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Inquiry'
                )}
              </Button>
            </form>
          </motion.div>
        )}

        {step === 'success' && (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-[#141414] border border-[#27272A] rounded-2xl p-8 lg:p-12 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-[#10B981]/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-[#10B981]" />
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Submission received.
            </h2>
            
            <p className="text-[#A1A1AA] leading-relaxed mb-8 max-w-md mx-auto">
              Thank you for taking this step. Our team will review your submission and reach out within 24–48 hours.
            </p>

            <div className="bg-[#0A0A0A] rounded-xl p-6 text-left mb-8">
              <h3 className="font-semibold text-[#FAFAFA] mb-4">What happens next:</h3>
              <ul className="space-y-3 text-sm text-[#A1A1AA]">
                <li className="flex items-start gap-3">
                  <span className="text-[#10B981] font-semibold">1.</span>
                  We review the details you provided
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#10B981] font-semibold">2.</span>
                  We research available vehicle history
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#10B981] font-semibold">3.</span>
                  We reach out via your preferred method
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#10B981] font-semibold">4.</span>
                  We share our findings and recommendations
                </li>
              </ul>
            </div>

            <a 
              href="https://wa.me/2348000000000?text=Hi%20TrueSpec,%20I%20just%20submitted%20an%20inquiry" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/20 rounded-full text-[#25D366] hover:bg-[#25D366]/20 transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              <span className="text-sm font-medium">Message us on WhatsApp</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}