import { useState, useEffect } from 'react';
import { User, Mail, Phone, Briefcase, Globe, Clock, Check, ArrowRight, Zap, MessageSquare, Calendar, Users } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Footer } from '@/app/components/Footer';

const WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/saiPIHsElD7qIIVgrvxR/webhook-trigger/3097fba7-b6ae-4a91-bb56-63f97ce78b91';

const timeZones = [
  { value: 'America/New_York', label: 'Eastern Time (ET)' },
  { value: 'America/Chicago', label: 'Central Time (CT)' },
  { value: 'America/Denver', label: 'Mountain Time (MT)' },
  { value: 'America/Los_Angeles', label: 'Pacific Time (PT)' },
  { value: 'America/Anchorage', label: 'Alaska Time (AK)' },
  { value: 'Pacific/Honolulu', label: 'Hawaii Time (HI)' },
];

const features = [
  'Full access to GoHighLevel platform - the #1 automation tool for coaches',
  'One custom workflow built specifically for your coaching business',
  'CRM, Email, SMS, Bookings, and Follow-ups in one central system',
  'Setup completed within 24 hours',
  'Ongoing support and guidance as you grow',
  'Video tutorials to help you customize and expand your workflows',
];

export function StartPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessNiche: '',
    businessName: '',
    website: '',
    timeZone: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Load Calendly script
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: 'https://calendly.com/noah-rizo/30min',
          text: 'Book a Call',
          color: '#FF6B35',
          textColor: '#ffffff',
          branding: false,
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.businessNiche.trim()) {
      newErrors.businessNiche = 'Business niche is required';
    }
    if (!formData.timeZone) {
      newErrors.timeZone = 'Time zone is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const formBody = new URLSearchParams({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        businessNiche: formData.businessNiche,
        businessName: formData.businessName || '',
        website: formData.website || '',
        timeZone: formData.timeZone,
        billingPeriod: billingPeriod,
      }).toString();

      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody,
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Background accents */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <main className="relative">
        <div className="max-w-7xl mx-auto px-4 py-12 lg:py-20">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            {/* Main Content - Form and Payment */}
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                  Start Your{' '}
                  <span className="bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent">
                    Automation System
                  </span>
                </h1>
                <p className="text-xl text-gray-400">
                  Complete your information below to get your automation platform set up within 24 hours
                </p>
              </div>

              {/* Pricing Toggle */}
              <div className="flex justify-center mb-10">
                <div className="inline-flex items-center bg-slate-800/80 border border-slate-700 rounded-full p-1.5">
                  <button
                    onClick={() => setBillingPeriod('monthly')}
                    className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                      billingPeriod === 'monthly'
                        ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white shadow-lg shadow-orange-500/25'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Monthly - $79/month
                  </button>
                  <button
                    onClick={() => setBillingPeriod('annual')}
                    className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 relative ${
                      billingPeriod === 'annual'
                        ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white shadow-lg shadow-orange-500/25'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Annual - $853/year
                    <span className="ml-2 text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">
                      Save 10%
                    </span>
                  </button>
                </div>
              </div>

              {/* Form Card */}
              <div className="relative mb-10">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-3xl blur-xl opacity-30"></div>
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-8 md:p-10">
                  <h2 className="text-2xl font-bold text-white mb-2">Your Business Information</h2>
                  <p className="text-gray-400 mb-8">
                    We need these details to create your GoHighLevel account and customize your automation workflows
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-white text-sm mb-2 block">
                          First Name <span className="text-orange-500">*</span>
                        </Label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            id="firstName"
                            type="text"
                            placeholder="First"
                            value={formData.firstName}
                            onChange={(e) => handleChange('firstName', e.target.value)}
                            className={`pl-12 h-12 bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500/20 ${
                              errors.firstName ? 'border-red-500' : ''
                            }`}
                          />
                        </div>
                        {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-white text-sm mb-2 block">
                          Last Name <span className="text-orange-500">*</span>
                        </Label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            id="lastName"
                            type="text"
                            placeholder="Last"
                            value={formData.lastName}
                            onChange={(e) => handleChange('lastName', e.target.value)}
                            className={`pl-12 h-12 bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500/20 ${
                              errors.lastName ? 'border-red-500' : ''
                            }`}
                          />
                        </div>
                        {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <Label htmlFor="email" className="text-white text-sm mb-2 block">
                        Email <span className="text-orange-500">*</span>
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          className={`pl-12 h-12 bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500/20 ${
                            errors.email ? 'border-red-500' : ''
                          }`}
                        />
                      </div>
                      {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <Label htmlFor="phone" className="text-white text-sm mb-2 block">
                        Phone <span className="text-orange-500">*</span>
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          className={`pl-12 h-12 bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500/20 ${
                            errors.phone ? 'border-red-500' : ''
                          }`}
                        />
                      </div>
                      {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    {/* Business Niche */}
                    <div>
                      <Label htmlFor="businessNiche" className="text-white text-sm mb-2 block">
                        Business Niche <span className="text-orange-500">*</span>
                      </Label>
                      <div className="relative">
                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="businessNiche"
                          type="text"
                          placeholder="e.g., Life Coaching, Business Consulting, Fitness Coaching"
                          value={formData.businessNiche}
                          onChange={(e) => handleChange('businessNiche', e.target.value)}
                          className={`pl-12 h-12 bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500/20 ${
                            errors.businessNiche ? 'border-red-500' : ''
                          }`}
                        />
                      </div>
                      {errors.businessNiche && <p className="text-red-400 text-sm mt-1">{errors.businessNiche}</p>}
                    </div>

                    {/* Business Name (Optional) */}
                    <div>
                      <Label htmlFor="businessName" className="text-white text-sm mb-2 block">
                        Business Name <span className="text-gray-500">(optional)</span>
                      </Label>
                      <div className="relative">
                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="businessName"
                          type="text"
                          placeholder="Your Business LLC"
                          value={formData.businessName}
                          onChange={(e) => handleChange('businessName', e.target.value)}
                          className="pl-12 h-12 bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500/20"
                        />
                      </div>
                    </div>

                    {/* Website (Optional) */}
                    <div>
                      <Label htmlFor="website" className="text-white text-sm mb-2 block">
                        Website <span className="text-gray-500">(optional)</span>
                      </Label>
                      <div className="relative">
                        <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="website"
                          type="url"
                          placeholder="https://yourwebsite.com"
                          value={formData.website}
                          onChange={(e) => handleChange('website', e.target.value)}
                          className="pl-12 h-12 bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500/20"
                        />
                      </div>
                    </div>

                    {/* Time Zone */}
                    <div>
                      <Label htmlFor="timeZone" className="text-white text-sm mb-2 block">
                        Time Zone <span className="text-orange-500">*</span>
                      </Label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                        <select
                          id="timeZone"
                          value={formData.timeZone}
                          onChange={(e) => handleChange('timeZone', e.target.value)}
                          className={`w-full pl-12 h-12 bg-slate-900/50 border border-slate-700 text-white rounded-md focus:border-orange-500 focus:ring-orange-500/20 focus:outline-none appearance-none cursor-pointer ${
                            errors.timeZone ? 'border-red-500' : ''
                          } ${!formData.timeZone ? 'text-gray-500' : ''}`}
                        >
                          <option value="" className="text-gray-500">Select your time zone</option>
                          {timeZones.map((tz) => (
                            <option key={tz.value} value={tz.value} className="text-white bg-slate-800">
                              {tz.label}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      {errors.timeZone && <p className="text-red-400 text-sm mt-1">{errors.timeZone}</p>}
                    </div>
                  </form>
                </div>
              </div>

              {/* Payment Section */}
              <div className="relative mb-10">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-3xl blur-xl opacity-30"></div>
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-8 md:p-10">
                  <h2 className="text-2xl font-bold text-white mb-6">Complete Your Purchase</h2>

                  {!isSubmitted ? (
                    <div className="space-y-6">
                      {/* Stripe Buy Button */}
                      <div className="flex justify-center">
                        {billingPeriod === 'monthly' ? (
                          <stripe-buy-button
                            buy-button-id="buy_btn_1SvM7JK3wlu95dwgV9PXHF8A"
                            publishable-key="pk_live_51SoGWKK3wlu95dwgXC7UnmpTMr8NB8hp2GyMkYnbUtiia4MEAHrobhp516Y8iG8LCVgMdhX9opl1B9LsT6V4jiTU005T3kiHUH"
                          />
                        ) : (
                          <stripe-buy-button
                            buy-button-id="buy_btn_1SvM3KK3wlu95dwg9BRlM79K"
                            publishable-key="pk_live_51SoGWKK3wlu95dwgXC7UnmpTMr8NB8hp2GyMkYnbUtiia4MEAHrobhp516Y8iG8LCVgMdhX9opl1B9LsT6V4jiTU005T3kiHUH"
                          />
                        )}
                      </div>

                      {/* Or use form submit button */}
                      <div className="text-center">
                        <p className="text-gray-500 text-sm mb-4">
                          Or submit your information first to save your details
                        </p>
                        <Button
                          onClick={handleSubmit}
                          disabled={isSubmitting}
                          size="lg"
                          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg px-10 py-6 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? 'Submitting...' : 'Save Information & Pay Later'}
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-4">
                        <Check className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Information Saved!</h3>
                      <p className="text-gray-400 mb-6">Now complete your payment below:</p>
                      <div className="flex justify-center">
                        {billingPeriod === 'monthly' ? (
                          <stripe-buy-button
                            buy-button-id="buy_btn_1SvM7JK3wlu95dwgV9PXHF8A"
                            publishable-key="pk_live_51SoGWKK3wlu95dwgXC7UnmpTMr8NB8hp2GyMkYnbUtiia4MEAHrobhp516Y8iG8LCVgMdhX9opl1B9LsT6V4jiTU005T3kiHUH"
                          />
                        ) : (
                          <stripe-buy-button
                            buy-button-id="buy_btn_1SvM3KK3wlu95dwg9BRlM79K"
                            publishable-key="pk_live_51SoGWKK3wlu95dwgXC7UnmpTMr8NB8hp2GyMkYnbUtiia4MEAHrobhp516Y8iG8LCVgMdhX9opl1B9LsT6V4jiTU005T3kiHUH"
                          />
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Features Section */}
              <div className="relative mb-10">
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-3xl p-8 md:p-10">
                  <h2 className="text-2xl font-bold text-white mb-6">What's Included:</h2>
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center mt-0.5">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm mt-6 text-center">Powered by GoHighLevel</p>
                </div>
              </div>

              {/* Workflow Illustration */}
              <div className="relative mb-10">
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-3xl p-8 md:p-10">
                  <h2 className="text-2xl font-bold text-white mb-8 text-center">Your Automation Workflow</h2>
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mb-3">
                        <Users className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-white font-medium text-sm">Lead Capture</span>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-600 rotate-90 md:rotate-0" />
                    {/* Step 2 */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center mb-3">
                        <Zap className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-white font-medium text-sm">GoHighLevel CRM</span>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-600 rotate-90 md:rotate-0" />
                    {/* Step 3 */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mb-3">
                        <MessageSquare className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-white font-medium text-sm">Automated Follow-ups</span>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-600 rotate-90 md:rotate-0" />
                    {/* Step 4 */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center mb-3">
                        <Calendar className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-white font-medium text-sm">Bookings</span>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-600 rotate-90 md:rotate-0" />
                    {/* Step 5 */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center mb-3">
                        <Zap className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-white font-medium text-sm">Long-term Nurture</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Reminder */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center">
                <p className="text-gray-300">
                  <span className="text-xl mr-2">📧</span>
                  After payment, watch for an email from <span className="text-orange-400">leadconnector@...</span> with your login credentials and next steps
                </p>
              </div>
            </div>

            {/* Sidebar - Calendly Widget */}
            <div className="hidden lg:block">
              <div className="sticky top-8">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-2xl blur-lg opacity-30"></div>
                  <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Need Help Deciding?</h3>
                    <p className="text-gray-400 mb-6">Book a quick call to see if this is right for you</p>
                    <div className="flex justify-center">
                      <button
                        onClick={() => {
                          if (window.Calendly) {
                            window.Calendly.showPopupWidget('https://calendly.com/noah-rizo/30min');
                          }
                        }}
                        className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-orange-500/50 transition-all duration-300"
                      >
                        Book a Call
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
