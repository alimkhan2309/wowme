import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import signatureImage from "../assets/images/signature.svg";
import {
  Star,
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  Sparkles } from
'lucide-react';
import { services } from '../data/services';
const FadeIn = ({
  children,
  delay = 0,
  className = ''

}: {children: React.ReactNode;delay?: number;className?: string;}) =>
<motion.div
  initial={{
    opacity: 0,
    y: 30
  }}
  whileInView={{
    opacity: 1,
    y: 0
  }}
  viewport={{
    once: true,
    margin: '-100px'
  }}
  transition={{
    duration: 0.8,
    delay,
    ease: [0.21, 0.47, 0.32, 0.98]
  }}
  className={className}>
  
    {children}
  </motion.div>;

export const Home = () => {
  useEffect(() => {
    document.title = 'Wowme Aesthetics Clinic | Premium Beauty in Dubai';
  }, []);
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    // In a real app, send data to backend here
  };
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=2500"
            alt="Luxury Clinic Interior"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-charcoal/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-transparent to-charcoal/80"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="inline-flex items-center gap-2 bg-ivory/10 backdrop-blur-sm border border-ivory/20 text-ivory px-4 py-1.5 rounded-full text-sm mb-8"
          >
            <Star className="w-4 h-4 fill-rosegold text-rosegold" />
            <span className="tracking-wide">Rated 5-Star in Dubai</span>
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-ivory mb-6 leading-tight"
          >
            Redefine Your{" "}
            <span className="italic text-rosegold-light">Beauty</span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.6,
            }}
            className="text-lg md:text-xl text-ivory/90 font-light mb-10 max-w-2xl mx-auto text-balance"
          >
            Where confidence meets the artistry of premium aesthetic care.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.8,
            }}
            className="flex flex-col items-center gap-6"
          >
            <a
              href="#booking"
              className="bg-rosegold hover:bg-rosegold-dark text-white px-8 py-4 text-lg tracking-wide transition-colors duration-300 shadow-luxury"
            >
              Book Your Consultation
            </a>
            <p className="text-ivory/70 text-sm tracking-widest uppercase">
              Wowme Aesthetics Clinic · Jumeirah, Dubai, UAE
            </p>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 md:py-32 bg-ivory">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-sm tracking-widest text-rosegold uppercase mb-4">
                About Wowme
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif text-charcoal mb-8 leading-tight">
                Elevating aesthetics to an{" "}
                <span className="italic text-rosegold">art form</span>.
              </h3>
              <p className="text-charcoal-muted text-lg leading-relaxed mb-8">
                Located in the prestigious Jumeirah district of Dubai, Wowme
                Aesthetics Clinic is a sanctuary of beauty and wellness. We
                combine industry standard medical technology with a refined,
                personalized approach to deliver results that are both striking
                and natural.
              </p>
              <p className="text-charcoal-muted text-lg leading-relaxed mb-10">
                Our team of DHA licensed dermatologists and aesthetic experts
                are dedicated to understanding your unique canvas, crafting
                bespoke treatment plans that enhance your inherent beauty and
                restore your confidence.
              </p>
              {/* https://upload.wikimedia.org/wikipedia/commons/c/c5/Signature_Placeholder.svg */}
              <img
                src={signatureImage}
                alt="Founder Signature"
                className="h-30 opacity-30"
              />
            </FadeIn>

            <FadeIn delay={0.2} className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=1200"
                  alt="Wowme Clinic Interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-xl hidden md:block">
                <p className="font-serif text-4xl text-rosegold mb-2">10+</p>
                <p className="text-sm text-charcoal-muted tracking-widest uppercase">
                  Years of Excellence
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* TREATMENTS SECTION */}
      <section id="treatments" className="py-24 md:py-32 bg-ivory-alt">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-sm tracking-widest text-rosegold uppercase mb-4">
              Our Treatments
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
              Curated by Dubai's leading dermatologists
            </h3>
            <div className="w-24 h-px bg-rosegold mx-auto"></div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeIn key={service.slug} delay={index * 0.1}>
                <Link
                  to={`/services/${service.slug}`}
                  className="block group bg-ivory border border-rosegold/20 p-10 hover:shadow-luxury hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
                >
                  <div className="w-14 h-14 bg-rosegold/10 flex items-center justify-center rounded-full mb-8 group-hover:bg-rosegold group-hover:text-white transition-colors text-rosegold">
                    <service.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-2xl font-serif text-charcoal mb-4">
                    {service.title}
                  </h4>
                  <p className="text-charcoal-muted mb-8 flex-grow">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center text-sm font-medium text-rosegold group-hover:text-charcoal transition-colors mt-auto">
                    Learn More{" "}
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                icon: ShieldCheck,
                title: "DHA Licensed",
                desc: "Expert medical team certified by Dubai Health Authority.",
              },
              {
                icon: Award,
                title: "FDA Approved",
                desc: "Utilizing only premium, globally recognized technology.",
              },
              {
                icon: Users,
                title: "Bespoke Care",
                desc: "Personalized treatment plans tailored to your unique needs.",
              },
              {
                icon: Sparkles,
                title: "Sterile Environment",
                desc: "Medical-grade hygiene in a luxury spa setting.",
              },
            ].map((feature, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="text-center">
                <feature.icon
                  size={40}
                  strokeWidth={1}
                  className="mx-auto text-rosegold mb-6"
                />

                <h4 className="font-serif text-xl mb-3">{feature.title}</h4>
                <p className="text-ivory/60 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-sm tracking-widest text-rosegold uppercase mb-4">
              Client Stories
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-charcoal">
              The Wowme Experience
            </h3>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Aisha M.",
                text: "The level of care at Wowme is unmatched. My skin has never looked better, and the Hydrafacial gave me the perfect glow for my wedding.",
              },
              {
                name: "Elena R.",
                text: "I was nervous about lip fillers, but the dermatologist here is a true artist. The results are incredibly natural. Highly recommend!",
              },
              {
                name: "Sophia K.",
                text: "From the moment you walk in, you feel pampered. The Morpheus8 treatment was life-changing for my skin texture.",
              },
            ].map((testimonial, idx) => (
              <FadeIn
                key={idx}
                delay={idx * 0.1}
                className="bg-ivory-alt p-10 relative"
              >
                <div className="text-rosegold/20 font-serif text-8xl absolute top-4 left-6 leading-none">
                  "
                </div>
                <div className="relative z-10">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-rosegold text-rosegold"
                      />
                    ))}
                  </div>
                  <p className="text-charcoal-muted italic mb-8 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <p className="font-medium text-charcoal tracking-wide">
                    — {testimonial.name}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING / CONTACT */}
      <section id="booking" className="py-24 md:py-32 bg-ivory-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white shadow-luxury overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Form Side */}
              <div className="p-10 md:p-16">
                <h3 className="text-3xl font-serif text-charcoal mb-2">
                  Book Your Consultation
                </h3>
                <p className="text-charcoal-muted mb-10">
                  Take the first step towards redefining your beauty.
                </p>

                {formStatus === "success" ? (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    className="bg-green-50 border border-green-200 p-8 text-center"
                  >
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ShieldCheck size={32} />
                    </div>
                    <h4 className="text-xl font-serif text-charcoal mb-2">
                      Request Received
                    </h4>
                    <p className="text-charcoal-muted">
                      Thank you for choosing Wowme. Our concierge team will
                      contact you shortly to confirm your appointment.
                    </p>
                    <button
                      onClick={() => setFormStatus("idle")}
                      className="mt-6 text-rosegold text-sm font-medium hover:text-charcoal transition-colors"
                    >
                      Book another appointment
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Full Name
                        </label>
                        <input
                          required
                          type="text"
                          className="w-full border-b border-charcoal/20 py-2 bg-transparent focus:outline-none focus:border-rosegold transition-colors"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Phone Number
                        </label>
                        <input
                          required
                          type="tel"
                          className="w-full border-b border-charcoal/20 py-2 bg-transparent focus:outline-none focus:border-rosegold transition-colors"
                          placeholder="+971 50 000 0000"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Email Address
                        </label>
                        <input
                          required
                          type="email"
                          className="w-full border-b border-charcoal/20 py-2 bg-transparent focus:outline-none focus:border-rosegold transition-colors"
                          placeholder="jane@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Preferred Date
                        </label>
                        <input
                          required
                          type="date"
                          className="w-full border-b border-charcoal/20 py-2 bg-transparent focus:outline-none focus:border-rosegold transition-colors text-charcoal-muted"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Service of Interest
                      </label>
                      <select
                        required
                        className="w-full border-b border-charcoal/20 py-2 bg-transparent focus:outline-none focus:border-rosegold transition-colors text-charcoal-muted"
                      >
                        <option value="">Select a treatment...</option>
                        {services.map((s) => (
                          <option key={s.slug} value={s.slug}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Additional Notes (Optional)
                      </label>
                      <textarea
                        rows={3}
                        className="w-full border-b border-charcoal/20 py-2 bg-transparent focus:outline-none focus:border-rosegold transition-colors resize-none"
                        placeholder="Any specific concerns or questions?"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-charcoal text-ivory py-4 text-sm tracking-widest uppercase hover:bg-rosegold transition-colors duration-300"
                    >
                      Submit Request
                    </button>
                  </form>
                )}
              </div>

              {/* Map Side */}
              <div className="bg-charcoal relative min-h-[400px] lg:min-h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115560.10645041498!2d55.15816772733471!3d25.15585098953155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6a576412f43d%3A0xb3130932599c2791!2sJumeirah%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
                  className="absolute inset-0 w-full h-full border-0 opacity-80 mix-blend-luminosity"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute inset-0 bg-charcoal/30 pointer-events-none"></div>

                <div className="absolute bottom-0 left-0 right-0 bg-charcoal/90 backdrop-blur-md p-8 text-ivory">
                  <h4 className="font-serif text-2xl mb-4 text-rosegold">
                    Visit Us
                  </h4>
                  <p className="text-sm text-ivory/70 mb-2">
                    Wowme Aesthetics Clinic
                  </p>
                  <p className="text-sm text-ivory/70 mb-6">
                    Jumeirah Beach Road, Dubai, UAE
                  </p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-rosegold mb-1">Hours</p>
                      <p className="text-ivory/70">Mon - Sat: 10am - 8pm</p>
                      <p className="text-ivory/70">Sunday: Closed</p>
                    </div>
                    <div>
                      <p className="text-rosegold mb-1">Contact</p>
                      <p className="text-ivory/70">+971 4 XXX XXXX</p>
                      <p className="text-ivory/70">hello@wowme.ae</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

};