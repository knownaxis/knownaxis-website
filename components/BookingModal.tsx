'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface ModalOptions {
  title?: string;
  subtitle?: string;
  defaultDescription?: string;
}

interface BookingModalContextType {
  isOpen: boolean;
  openModal: (options?: ModalOptions) => void;
  closeModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined);

export function useBookingModal() {
  const context = useContext(BookingModalContext);
  if (!context) {
    throw new Error('useBookingModal must be used within a BookingModalProvider');
  }
  return context;
}

export function BookingModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOptions, setModalOptions] = useState<ModalOptions>({});

  // Form State
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openModal = (options?: ModalOptions) => {
    setModalOptions(options || {});
    setIsSubmitted(false);
    setErrors({});
    if (options?.defaultDescription) {
      setDescription(options.defaultDescription);
    }
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    // Reset form after exit animation completes
    setTimeout(() => {
      setName('');
      setMobile('');
      setEmail('');
      setDescription('');
      setErrors({});
      setIsSubmitted(false);
      setIsSubmitting(false);
    }, 300);
  };

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = 'Please enter your name';
    }
    if (!mobile.trim()) {
      newErrors.mobile = 'Please enter your phone/WhatsApp number';
    } else if (!/^[0-9+()\-.\s]{7,20}$/.test(mobile.trim())) {
      newErrors.mobile = 'Please enter a valid phone number';
    }
    if (!description.trim()) {
      newErrors.description = 'Please provide a brief note about what you need';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          mobile,
          email,
          description,
          formTitle: modalOptions.title || 'General Booking Call',
        }),
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message || 'Submission failed');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch {
      setIsSubmitting(false);
      setErrors({ submit: 'Something went wrong. Please try again or contact us directly.' });
    }
  };

  const currentTitle = modalOptions.title || 'Book a Strategy Call';
  const currentSubtitle =
    modalOptions.subtitle ||
    'Share your contact information and requirement. Our engineering and design team will be right back with you.';

  return (
    <BookingModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200 dark:border-brand/40 bg-white dark:bg-gradient-to-b dark:from-[#151722] dark:to-[#0c0e14] p-6 sm:p-8 shadow-2xl z-10"
            >
              {/* Corner Ambient Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/25 blur-3xl" />

              {/* Close Button */}
              <button
                onClick={closeModal}
                aria-label="Close modal"
                className="absolute right-4 top-4 sm:right-6 sm:top-6 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-grey hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* State 1: Form Input */}
              {!isSubmitted ? (
                <div>
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-semibold text-brand">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                    Quick Connect · Guaranteed Response
                  </div>

                  <h3
                    id="modal-headline"
                    className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
                  >
                    {currentTitle}
                  </h3>

                  <p className="mt-1.5 text-xs sm:text-[13.5px] text-slate-600 dark:text-[#9a9ca3] leading-relaxed">
                    {currentSubtitle}
                  </p>

                  <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                    {/* Name Field */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-white/80 mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full rounded-xl border bg-slate-50 dark:bg-[#0a0c12] px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-grey/60 transition-all focus:outline-none focus:ring-2 ${
                          errors.name
                            ? 'border-red-500 focus:ring-red-500/30'
                            : 'border-slate-200 dark:border-white/10 focus:border-brand focus:ring-brand/30'
                        }`}
                      />
                      {errors.name && <p className="mt-1 text-[11px] text-red-500">{errors.name}</p>}
                    </div>

                    {/* Mobile Field */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-white/80 mb-1.5">
                        Mobile Number / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="e.g. +1 (555) 019-2834 or +91 98765 43210"
                        className={`w-full rounded-xl border bg-slate-50 dark:bg-[#0a0c12] px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-grey/60 transition-all focus:outline-none focus:ring-2 ${
                          errors.mobile
                            ? 'border-red-500 focus:ring-red-500/30'
                            : 'border-slate-200 dark:border-white/10 focus:border-brand focus:ring-brand/30'
                        }`}
                      />
                      {errors.mobile && <p className="mt-1 text-[11px] text-red-500">{errors.mobile}</p>}
                    </div>

                    {/* Optional Email Field */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-white/80">
                          Work Email
                        </label>
                        <span className="text-[10.5px] text-slate-500 dark:text-grey">Optional</span>
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@company.com"
                        className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0a0c12] px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-grey/60 transition-all focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
                      />
                    </div>

                    {/* Description / Requirement Field */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-white/80 mb-1.5">
                        Project Description / Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={3}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Tell us what you're looking to build (e.g. 3D interactive web app, rebranding, AI workflows, or timeline)..."
                        className={`w-full resize-none rounded-xl border bg-slate-50 dark:bg-[#0a0c12] px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-grey/60 transition-all focus:outline-none focus:ring-2 ${
                          errors.description
                            ? 'border-red-500 focus:ring-red-500/30'
                            : 'border-slate-200 dark:border-white/10 focus:border-brand focus:ring-brand/30'
                        }`}
                      />
                      {errors.description && (
                        <p className="mt-1 text-[11px] text-red-500">{errors.description}</p>
                      )}
                    </div>

                    {errors.submit && (
                      <p className="text-center text-[12px] text-red-500">{errors.submit}</p>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-white/90 py-3.5 text-sm font-semibold shadow-xl transition-all disabled:opacity-50 active:scale-[0.98]"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="h-4 w-4 animate-spin text-current"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Request →</span>
                        </>
                      )}
                    </button>

                    {/* Legal consent note */}
                    <p className="text-center text-[11px] text-slate-500 dark:text-grey/70 pt-1">
                      By submitting, you agree to our{' '}
                      <Link
                        href="/terms-and-conditions"
                        onClick={closeModal}
                        className="underline hover:text-brand transition-colors"
                      >
                        Terms & Conditions
                      </Link>{' '}
                      and{' '}
                      <Link
                        href="/privacy-policy"
                        onClick={closeModal}
                        className="underline hover:text-brand transition-colors"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </form>
                </div>
              ) : (
                /* State 2: Confirmation / Success Pop-Up */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="py-6 text-center"
                >
                  {/* Success Icon */}
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shadow-lg shadow-emerald-500/10">
                    <svg
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 text-xs font-semibold text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Request Confirmed
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                    We will be right back!
                  </h3>

                  <p className="mt-3 text-sm sm:text-[15px] text-slate-600 dark:text-grey leading-relaxed max-w-sm mx-auto">
                    Thank you, <strong className="text-slate-900 dark:text-white">{name}</strong>! We’ve received your details.
                    Our team is already reviewing your note and will reach out to you on{' '}
                    <span className="text-brand font-semibold">{mobile}</span> shortly.
                  </p>

                  <div className="mt-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-4 text-xs text-slate-600 dark:text-grey text-left">
                    <div className="font-semibold text-slate-800 dark:text-white/90 mb-1">
                      ✦ What happens next?
                    </div>
                    <ul className="space-y-1 list-disc list-inside">
                      <li>We analyze your project specifications</li>
                      <li>We prepare an architectural scope & timeline</li>
                      <li>We reach out on phone or WhatsApp within 2–4 hours</li>
                    </ul>
                  </div>

                  <button
                    onClick={closeModal}
                    className="mt-6 w-full rounded-xl bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-white/90 py-3 text-sm font-semibold transition-all shadow-lg active:scale-95"
                  >
                    Close Window
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </BookingModalContext.Provider>
  );
}