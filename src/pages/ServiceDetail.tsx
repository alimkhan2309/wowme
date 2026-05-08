import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowLeft, Info } from 'lucide-react';
import { services } from '../data/services';
export const ServiceDetail = () => {
  const { slug } = useParams<{
    slug: string;
  }>();
  const service = services.find((s) => s.slug === slug);
  useEffect(() => {
    if (service) {
      document.title = `${service.title} | Wowme Aesthetics Clinic`;
      window.scrollTo(0, 0);
    }
  }, [service]);
  if (!service) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="w-full bg-ivory min-h-screen pt-20">
      {/* HERO */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-charcoal/50"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8
            }}>
            
            <Link
              to="/#treatments"
              className="inline-flex items-center text-ivory/70 hover:text-white mb-6 text-sm tracking-wider uppercase transition-colors">
              
              <ArrowLeft size={16} className="mr-2" /> Back to Treatments
            </Link>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">
              {service.title}
            </h1>
            <p className="text-lg text-ivory/90 max-w-2xl mx-auto font-light">
              {service.shortDescription}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* MAIN CONTENT */}
          <div className="lg:col-span-2 space-y-16">
            <motion.section
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6
              }}>
              
              <h2 className="text-3xl font-serif text-charcoal mb-6">
                Overview
              </h2>
              <p className="text-charcoal-muted text-lg leading-relaxed">
                {service.longDescription}
              </p>
            </motion.section>

            <motion.section
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6
              }}>
              
              <h2 className="text-3xl font-serif text-charcoal mb-8">
                Treatments & Pricing
              </h2>
              <div className="bg-white border border-rosegold/20 p-8 shadow-sm">
                <ul className="space-y-6">
                  {service.items.map((item, idx) =>
                  <li
                    key={idx}
                    className="flex flex-col md:flex-row md:items-center justify-between border-b border-charcoal/10 pb-6 last:border-0 last:pb-0">
                    
                      <span className="font-medium text-charcoal mb-2 md:mb-0 pr-4">
                        {item.name}
                      </span>
                      <span className="text-rosegold font-serif text-xl whitespace-nowrap">
                        {item.price}
                      </span>
                    </li>
                  )}
                </ul>

                <div className="mt-8 pt-6 border-t border-charcoal/10 flex flex-col gap-3 text-sm text-charcoal-muted">
                  {service.note &&
                  <p className="flex items-start gap-2">
                      <Info
                      size={16}
                      className="shrink-0 text-rosegold mt-0.5" />
                    
                      {service.note}
                    </p>
                  }
                  <p className="flex items-start gap-2">
                    <Info size={16} className="shrink-0 text-rosegold mt-0.5" />
                    *All prices are subject to 5% VAT.
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6
              }}>
              
              <h2 className="text-3xl font-serif text-charcoal mb-6">
                What to Expect
              </h2>
              <div className="space-y-8">
                {service.whatToExpect.map((step, idx) => {
                  const [title, desc] = step.split(': ');
                  return (
                    <div key={idx} className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rosegold/10 text-rosegold flex items-center justify-center font-serif text-xl">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="text-xl font-serif text-charcoal mb-2">
                          {title}
                        </h4>
                        <p className="text-charcoal-muted leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    </div>);

                })}
              </div>
            </motion.section>
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              <motion.div
                initial={{
                  opacity: 0,
                  x: 20
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.2
                }}
                className="bg-charcoal text-ivory p-8">
                
                <h3 className="text-2xl font-serif mb-6 text-rosegold">
                  Key Benefits
                </h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, idx) =>
                  <li key={idx} className="flex items-start gap-3">
                      <Check
                      size={18}
                      className="text-rosegold shrink-0 mt-1" />
                    
                      <span className="text-ivory/80 text-sm leading-relaxed">
                        {benefit}
                      </span>
                    </li>
                  )}
                </ul>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  x: 20
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.4
                }}
                className="bg-rosegold/10 border border-rosegold/20 p-8 text-center">
                
                <h3 className="text-2xl font-serif text-charcoal mb-4">
                  Ready to Transform?
                </h3>
                <p className="text-charcoal-muted text-sm mb-6">
                  Schedule your consultation with our experts today.
                </p>
                <Link
                  to="/#booking"
                  className="block w-full bg-charcoal text-ivory py-3 text-sm tracking-widest uppercase hover:bg-rosegold transition-colors duration-300">
                  
                  Book Now
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>);

};