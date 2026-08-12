import { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { PHONE, PHONE_LINK, WHATSAPP_LINK, ADDRESS, HOURS } from "../data";

const serviceOptions = [
  "Deep Cleaning",
  "Move-in / Move-out Cleaning",
  "Sofa & Carpet Cleaning",
  "Kitchen Deep Clean",
  "Post-Construction Cleaning",
  "Sanitization & Disinfection",
  "Other",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message from form data
    const msg = `Hi Golden Dunes! I'd like to book a cleaning service.\n\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nPreferred Date: ${form.date}\n${form.message ? `Message: ${form.message}` : ""}`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/971547065051?text=${encoded}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-gradient-to-b from-gold-50/30 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-50 border border-gold-200 mb-5">
            <Mail className="h-4 w-4 text-gold-500" />
            <span className="text-sm font-semibold text-gold-700">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight mb-4">
            Ready to Book Your{" "}
            <span className="text-gold-500">Clean?</span>
          </h2>
          <p className="text-base sm:text-lg text-navy-600 leading-relaxed">
            Reach out via WhatsApp for the fastest response, give us a call, or fill out
            the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            {/* WhatsApp */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-green-50 border border-green-200 hover:border-green-300 hover:shadow-lg hover:shadow-green-100/50 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600 shadow-md shadow-green-500/20">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-green-800">WhatsApp (Fastest)</div>
                <div className="text-base font-bold text-green-900">{PHONE}</div>
              </div>
            </a>

            {/* Phone */}
            <a
              href={PHONE_LINK}
              className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-navy-100 hover:border-gold-200 hover:shadow-lg hover:shadow-gold-50 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 shadow-md shadow-gold-400/20">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-navy-600">Call Us</div>
                <div className="text-base font-bold text-navy-900">{PHONE}</div>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-navy-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-700 to-navy-900 shadow-md shadow-navy-900/20 flex-shrink-0">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-navy-600">Visit Us</div>
                <div className="text-sm font-medium text-navy-800 leading-relaxed">{ADDRESS}</div>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-navy-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 shadow-md shadow-gold-400/20 flex-shrink-0">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-navy-600">Working Hours</div>
                <div className="text-base font-bold text-navy-900">{HOURS}</div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-navy-100 p-6 sm:p-8 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Message Sent!</h3>
                  <p className="text-sm text-navy-500">
                    Your request has been sent via WhatsApp. We'll get back to you shortly!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-navy-800 mb-2">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Sarah Ahmed"
                        className="w-full px-4 py-3 text-sm text-navy-800 bg-navy-50/50 border border-navy-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 placeholder:text-navy-300 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-navy-800 mb-2">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="e.g. 054 XXX XXXX"
                        className="w-full px-4 py-3 text-sm text-navy-800 bg-navy-50/50 border border-navy-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 placeholder:text-navy-300 transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-navy-800 mb-2">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        required
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-3 text-sm text-navy-800 bg-navy-50/50 border border-navy-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all appearance-none"
                      >
                        <option value="" disabled>Select a service</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="date" className="block text-sm font-semibold text-navy-800 mb-2">
                        Preferred Date
                      </label>
                      <input
                        id="date"
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="w-full px-4 py-3 text-sm text-navy-800 bg-navy-50/50 border border-navy-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-navy-800 mb-2">
                      Additional Details <span className="text-navy-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your space, any specific requirements..."
                      className="w-full px-4 py-3 text-sm text-navy-800 bg-navy-50/50 border border-navy-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 placeholder:text-navy-300 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 text-base font-bold text-white bg-gradient-to-r from-gold-500 to-gold-600 rounded-xl shadow-lg shadow-gold-400/25 hover:shadow-gold-400/40 hover:from-gold-600 hover:to-gold-700 transition-all duration-300"
                  >
                    <Send className="h-5 w-5" />
                    Send Booking Request
                  </button>
                  <p className="text-xs text-navy-400 text-center">
                    This form sends your details via WhatsApp for the fastest response.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
