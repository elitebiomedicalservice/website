import { motion } from "framer-motion";
import { Award, Clock, Users, ArrowRight, Phone } from "lucide-react";
import souravImage from "../assets/sourav.jpeg";
import sreerajImage from "../assets/sreeraj.jpeg";
const founders = [
  {
    name: "Sourav C",
    role: "Co-Founder",
    title: "Biomedical Engineer",
    phone: "+91 80784 22393",
    ring: "ring-primary/30",
    image: souravImage,
  },
  {
    name: "Sreeraj TM",
    role: "Co-Founder",
    title: "Biomedical Engineer",
    phone: "+91 94965 22393",
    ring: "ring-slate-200",
    image: sreerajImage,
  },
];

const trustItems = [
  {
    icon: <Award size={20} />,
    title: "Certified Professionals",
    desc: "Our team consists of trained and certified sleep technicians and healthcare professionals.",
  },
  {
    icon: <Clock size={20} />,
    title: "Prompt Service",
    desc: "Quick response times and efficient service delivery. We value your time.",
  },
  {
    icon: <Users size={20} />,
    title: "Ongoing Support",
    desc: "We don't just diagnose and treat. We provide continuous support throughout your journey.",
  },
];

export function MeetFounders() {
  return (
    <section id="about" className="bg-white">
      {/* Founders */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <div className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">
              Leadership
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Meet Our Founders
            </h2>
            <p className="text-slate-600 text-lg">
              The visionaries behind Elite Biomedical Services, dedicated to
              bringing quality respiratory and sleep healthcare to Kerala.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-12 max-w-3xl mx-auto">
            {founders.map((f, idx) => (
              <motion.div
                key={f.name}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.15,
                }}
                className="flex flex-col items-center text-center"
              >
                <div
                  className={`w-48 h-48 rounded-full bg-white ring-8 ${f.ring} shadow-card flex items-center justify-center mb-6 overflow-hidden border border-slate-100`}
                >
                  <img
                    src={f.image}
                    alt={`${f.name}, ${f.title}`}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {f.name}
                </h3>
                <div className="text-primary text-sm font-medium mb-1">
                  {f.role}
                </div>
                <div className="text-slate-500 text-sm mb-3">{f.title}</div>
                <a
                  href={`tel:${f.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                >
                  <Phone size={14} />
                  {f.phone}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Patients Trust Us */}
      <div className="bg-section py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Why Patients Trust Us
              </h2>
              <p className="text-slate-600 mb-10 max-w-md">
                We've built our reputation on delivering reliable, compassionate
                care that produces real results.
              </p>

              <div className="space-y-6">
                {trustItems.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: idx * 0.1,
                    }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-primary flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              className="relative bg-primary text-white rounded-3xl p-10 md:p-12 overflow-hidden shadow-float"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-secondary/30 blur-2xl" />
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-blue-100 mb-8 leading-relaxed">
                  Take the first step towards better breathing. Book a
                  consultation or home sleep study today and experience the
                  Elite Biomedical difference.
                </p>
                <button className="inline-flex items-center gap-2 bg-white text-primary hover:bg-blue-50 px-6 py-3 rounded-full font-semibold transition-all shadow-md">
                  Contact Us <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
