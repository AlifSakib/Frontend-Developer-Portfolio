import React, { useState } from 'react';
import { UserProfile, ContactMessage } from '../types';
import { MapPin, Mail, Send, CheckCircle2, Copy, Check, MessageSquare, Linkedin, Github, Twitter, Sparkles, Clock, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';

interface ContactProps {
  profile: UserProfile;
}

export const Contact: React.FC<ContactProps> = ({ profile }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<ContactMessage | null>(null);
  const [sentHistory, setSentHistory] = useState<ContactMessage[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your .env file.');
      }

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || 'General Inquiry',
          message: formData.message,
          to_email: profile.email,
        },
        publicKey
      );

      if (result.status === 200) {
        const newMessage: ContactMessage = {
          id: Date.now().toString(),
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'General Inquiry',
          message: formData.message,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setSentHistory(prev => [newMessage, ...prev]);
        setSubmittedMessage(newMessage);
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Trigger celebratory confetti
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.7 },
          });
        } catch (err) {
          // Safe fallback
        }
      }
    } catch (error: any) {
      console.error('Email send error:', error);
      setErrorMessage(
        error.text || 
        error.message || 
        'Failed to send message. Please try again or contact directly via email.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 transition-colors">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-blue-600 dark:text-blue-400 font-extrabold text-sm tracking-widest uppercase">
            CONTACT
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mt-1">
            Don't be shy! Hit me up! 👇
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Info Column (Iconic Stefan Topalovic Split) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Location Card */}
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-white dark:bg-slate-800 shadow-xl border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                  Location
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                  {profile.location.replace("📍", "").trim()}
                </p>
              </div>
            </div>

            {/* Email Card with 1-click Copy */}
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-white dark:bg-slate-800 shadow-xl border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                  Mail & Phone
                </h3>
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition underline underline-offset-4"
                  >
                    {profile.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1 rounded text-slate-400 hover:text-slate-600 dark:hover:text-white transition"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                {profile.phone && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    📞 {profile.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Socials Connection Links */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Social Profiles & Networks
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-white dark:bg-slate-800 shadow-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-blue-600 hover:scale-105 transition"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-white dark:bg-slate-800 shadow-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-blue-600 hover:scale-105 transition"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                {/* <a
                  href={profile.twitterUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-white dark:bg-slate-800 shadow-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-blue-600 hover:scale-105 transition"
                  title="Twitter / X"
                >
                  <Twitter className="w-5 h-5" />
                </a> */}
              </div>
            </div>

            {/* Quick Availability Notice */}
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-slate-800/60 border border-blue-100 dark:border-slate-700/60 text-xs text-slate-600 dark:text-slate-300">
              <span className="font-bold text-blue-600 dark:text-blue-400 block mb-1">
                ⚡ Quick Response Time:
              </span>
              I usually reply within 24 hours. Open to full-time frontend roles,
              contract sprints, and architectural consultations.
            </div>
          </div>

          {/* Right Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Have an exciting project, job opportunity, or question? Leave a
                note below!
              </p>

              {submittedMessage && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs space-y-1 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />{" "}
                    Message Sent Successfully!
                  </div>
                  <p>
                    Thank you,{" "}
                    <span className="font-semibold">
                      {submittedMessage.name}
                    </span>
                    . Your message has been received and forwarded to{" "}
                    <span className="font-semibold">{profile.email}</span>.
                  </p>
                </div>
              )}

              {errorMessage && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 text-xs space-y-1 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <AlertCircle className="w-4 h-4 text-red-600" />{" "}
                    Error Sending Message
                  </div>
                  <p>{errorMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white transition"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Frontend Engineer Opportunity / Freelance Project"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white transition"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Message *
                    </label>
                    <span className="text-[11px] text-slate-400">
                      {formData.message.length} / 1000 chars
                    </span>
                  </div>
                  <textarea
                    required
                    rows={4}
                    maxLength={1000}
                    placeholder="Describe your vision, timeline, or engineering opportunity..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold text-sm rounded-lg shadow-sm hover:shadow transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>
              </form>

              {/* Local Sent Messages Log */}
              {sentHistory.length > 0 && (
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Recent Messages Sent ({sentHistory.length})
                  </span>
                  <div className="space-y-2">
                    {sentHistory.slice(0, 2).map((item) => (
                      <div
                        key={item.id}
                        className="p-2.5 bg-slate-50 dark:bg-slate-800/40 rounded-lg text-xs flex justify-between items-center text-slate-600 dark:text-slate-300"
                      >
                        <div>
                          <span className="font-semibold text-slate-800 dark:text-slate-200">
                            {item.subject}
                          </span>
                          <span className="text-slate-400 block truncate max-w-xs">
                            {item.message}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400 shrink-0 ml-2">
                          {item.timestamp}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
