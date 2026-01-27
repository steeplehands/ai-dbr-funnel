import { useState } from 'react';
import { Calendar, CheckCircle2, Phone, Mail, User } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';

interface LeadFormSectionProps {
  onSubmit: (data: { fullName: string; email: string; phone: string }) => void;
  submitted: boolean;
}

export function LeadFormSection({ onSubmit, submitted }: LeadFormSectionProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
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
              You're All Set! 🎉
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              We'll reach out within 24 hours to schedule your free strategy call.
            </p>
            <p className="text-gray-400">
              Check your email for confirmation details. Can't wait to help you scale your coaching business!
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
                <span className="text-sm font-semibold">FREE STRATEGY CALL</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                See What This Would Look Like for Your Business
              </h2>
              <p className="text-lg text-gray-400">
                Book your free strategy call and discover exactly how to automate your coaching business
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <Label htmlFor="fullName" className="text-white text-base mb-2 block">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="John Smith"
                    value={formData.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    className={`pl-12 h-14 bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500/20 ${
                      errors.fullName ? 'border-red-500' : ''
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>
                )}
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
                Book My Free Strategy Call
              </Button>

              {/* Privacy text */}
              <p className="text-gray-500 text-sm text-center">
                🔒 Your information is 100% secure and will never be shared
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}