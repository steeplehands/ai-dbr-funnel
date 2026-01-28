import { useState } from 'react';
import { Calendar, CheckCircle2, Phone, Mail, User } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';

interface LeadFormSectionProps {
  onSubmit: (data: { firstName: string; lastName: string; email: string; phone: string }) => void;
  submitted: boolean;
}

export function LeadFormSection({ onSubmit, submitted }: LeadFormSectionProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Please enter your first name';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Please enter your last name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (validateForm()) {
    try {
      // Send to GHL webhook with form-urlencoded format
      const formBody = new URLSearchParams({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
      }).toString();

      const response = await fetch('https://services.leadconnectorhq.com/hooks/saiPIHsElD7qIIVgrvxR/webhook-trigger/3097fba7-b6ae-4a91-bb56-63f97ce78b91', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody,
      });

      if (response.ok) {
        // Redirect to Calendly after successful submission
        window.location.href = 'https://calendly.com/noah-rizo/30min';
      } else {
        console.error('Webhook submission failed');
        // You might want to show an error message to the user here
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // You might want to show an error message to the user here
    }
  }
};

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (submitted) {
    return (
      <section id="lead-form" className="px-4 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-2xl mx-auto relative text-center">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-green-500/50 rounded-3xl p-12">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-extrabold text-white mb-4">
              You're All Set!
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              We'll reach out within 24 hours to get your automation system live.
            </p>
            <p className="text-gray-400">
              Check your email for next steps. Your first workflow is included with signup.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-form" className="px-4 py-20 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500 to-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-2xl mx-auto relative">
        {/* Form container */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-3xl blur-xl opacity-50"></div>
          
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-orange-500/30 rounded-3xl p-8 md:p-12">
            {/* Heading */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-purple-600 text-white px-4 py-2 rounded-full mb-4">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-semibold">GET STARTED</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Your Follow-Up System Live in 24 Hours
              </h2>
              <p className="text-lg text-gray-400">
                Get access, your first workflow, and ongoing support included
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields Row */}
              <div className="grid grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <Label htmlFor="firstName" className="text-white text-base mb-2 block">
                    First Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="First"
                      value={formData.firstName}
                      onChange={(e) => handleChange('firstName', e.target.value)}
                      className={`pl-12 h-14 bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500/20 ${
                        errors.firstName ? 'border-red-500' : ''
                      }`}
                    />
                  </div>
                  {errors.firstName && (
                    <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <Label htmlFor="lastName" className="text-white text-base mb-2 block">
                    Last Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Last"
                      value={formData.lastName}
                      onChange={(e) => handleChange('lastName', e.target.value)}
                      className={`pl-12 h-14 bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500/20 ${
                        errors.lastName ? 'border-red-500' : ''
                      }`}
                    />
                  </div>
                  {errors.lastName && (
                    <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-white text-base mb-2 block">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={`pl-12 h-14 bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500/20 ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone" className="text-white text-base mb-2 block">
                  Phone Number
                </Label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className={`pl-12 h-14 bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500/20 ${
                      errors.phone ? 'border-red-500' : ''
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg py-7 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Now
              </Button>

              {/* Privacy text */}
              <p className="text-gray-500 text-sm text-center">
                Your information is 100% secure and will never be shared
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
