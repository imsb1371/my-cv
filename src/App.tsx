/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { 
  Mail, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Award, 
  BookOpen, 
  ExternalLink, 
  Linkedin, 
  Github, 
  ChevronRight,
  Code,
  Activity,
  Search,
  MessageSquare
} from "lucide-react";
import { cvData } from "./data";

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-ink mb-2"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-brand font-medium uppercase tracking-widest text-sm"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 60 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="h-1 bg-accent mt-4"
    />
  </div>
);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={containerRef} className="relative min-h-screen selection:bg-brand/20">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 glass border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-display font-bold text-xl tracking-tight text-ink">
            Dr. M.S. <span className="text-brand">Barkhordari</span>
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            {["About", "Research", "Experience", "Education", "Publications"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="hover:text-brand transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-brand text-white px-5 py-2 rounded-full hover:bg-brand/90 transition-all shadow-sm hover:shadow-md"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-slate-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div 
            style={{ y: backgroundY }}
            className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-brand/5 rounded-full blur-3xl" 
          />
          <motion.div 
            style={{ y: backgroundY }}
            className="absolute top-1/2 -left-20 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" 
          />
          
          {/* Seismic Wave Pattern */}
          <svg className="absolute bottom-0 w-full h-64 opacity-[0.03]" viewBox="0 0 1440 320">
            <path fill="#3b82f6" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-wider mb-6">
              <Activity size={14} />
              Seismic Resilience & Machine Learning
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-ink leading-[1.1] mb-6 text-balance">
              Engineering a <span className="text-brand">Resilient</span> Future.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
              I am <span className="font-semibold text-ink">{cvData.name}</span>, a {cvData.title} dedicated to bridging the gap between structural engineering and data science.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#research" 
                className="px-8 py-4 bg-ink text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl"
              >
                View Research <ChevronRight size={18} />
              </a>
              <div className="flex items-center gap-4 px-4">
                <a href={cvData.links.googleScholar} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-brand transition-colors">
                  <Search size={24} />
                </a>
                <a href={`mailto:${cvData.email}`} className="text-slate-400 hover:text-brand transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://picsum.photos/seed/engineering/800/800" 
                alt="Structural Engineering Concept" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-sm font-medium opacity-80 mb-1">Current Position</p>
                <p className="text-lg font-bold leading-tight">{cvData.currentPosition.institution}</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </header>

      {/* Research Interests */}
      <section id="research" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Expertise">Research Interests</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cvData.researchInterests.map((interest, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-xl flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand">
                  {index % 3 === 0 ? <Activity size={24} /> : index % 3 === 1 ? <Code size={24} /> : <Search size={24} />}
                </div>
                <p className="text-slate-700 font-medium leading-relaxed">
                  {interest}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Career">Professional Experience</SectionTitle>
          <div className="space-y-8">
            {cvData.workExperience.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 md:gap-12"
              >
                <div className="hidden md:block w-32 pt-1 text-right">
                  <span className="text-sm font-bold text-brand">{exp.period}</span>
                </div>
                <div className="relative pb-8 border-l-2 border-slate-200 pl-8 md:pl-12 last:pb-0">
                  <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-brand border-4 border-white shadow-sm" />
                  <div className="md:hidden mb-2">
                    <span className="text-xs font-bold text-brand uppercase tracking-wider">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-1">{exp.role}</h3>
                  <p className="text-brand font-medium mb-4">{exp.institution}</p>
                  {exp.highlights && (
                    <ul className="space-y-2">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="text-slate-600 text-sm flex gap-2">
                          <span className="text-brand mt-1">•</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Academic Background">Education</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            {cvData.education.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <GraduationCap size={64} />
                </div>
                <span className="text-xs font-bold text-brand uppercase tracking-widest mb-4 block">{edu.period}</span>
                <h3 className="text-lg font-bold text-ink mb-2">{edu.degree}</h3>
                <p className="text-slate-600 text-sm mb-4">{edu.institution}</p>
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase mb-1">GPA</p>
                  <p className="text-sm font-mono text-ink">{edu.gpa}</p>
                </div>
                {edu.thesis && (
                  <div className="mt-4">
                    <p className="text-xs font-bold text-slate-400 uppercase mb-1">Thesis</p>
                    <p className="text-xs text-slate-500 italic line-clamp-2">{edu.thesis}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="section-padding bg-ink text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/10 skew-x-12 transform origin-top-right" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Toolkit</h2>
            <div className="h-1 w-20 bg-brand" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-brand font-bold uppercase tracking-widest text-sm mb-8 flex items-center gap-2">
                <Code size={18} /> Programming & Data Science
              </h3>
              <div className="flex flex-wrap gap-3">
                {cvData.technicalSkills.programming.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
              
              <h3 className="text-brand font-bold uppercase tracking-widest text-sm mt-12 mb-8 flex items-center gap-2">
                <Activity size={18} /> Engineering & Research
              </h3>
              <div className="flex flex-wrap gap-3">
                {cvData.technicalSkills.engineering.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold mb-6">Honors & Recognition</h3>
              <div className="space-y-6">
                {cvData.honors.map((honor, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 text-accent">
                      <Award size={20} />
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">{honor}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/10">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Languages</h3>
                <div className="flex gap-6">
                  {cvData.technicalSkills.languages.map((lang) => (
                    <div key={lang} className="text-sm">
                      <span className="text-white font-bold">{lang.split(' ')[0]}</span>
                      <span className="text-slate-500 ml-2">{lang.split(' ')[1]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionTitle subtitle="Research Output">Selected Publications</SectionTitle>
            <a 
              href={cvData.links.googleScholar} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-brand font-bold hover:underline mb-12"
            >
              Full List on Google Scholar <ExternalLink size={16} />
            </a>
          </div>

          <div className="grid gap-6">
            {cvData.publications.map((pub, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-2xl border border-slate-100 hover:border-brand/20 hover:bg-slate-50 transition-all"
              >
                <div className="flex flex-col md:flex-row gap-4 md:items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${pub.rank === 'Q1' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>
                        {pub.rank}
                      </span>
                      <span className="text-xs font-bold text-slate-400">{pub.year}</span>
                    </div>
                    <h3 className="text-lg font-bold text-ink mb-2 group-hover:text-brand transition-colors leading-snug">
                      {pub.title}
                    </h3>
                    <p className="text-slate-500 text-sm italic">{pub.journal}</p>
                  </div>
                  <a 
                    href={`https://doi.org/${pub.doi}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-brand transition-colors uppercase tracking-widest"
                  >
                    View DOI <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle subtitle="Get in Touch">Let's Collaborate</SectionTitle>
          <p className="text-lg text-slate-600 mb-12">
            I am always open to discussing research collaborations, speaking opportunities, or technical inquiries in earthquake engineering and machine learning.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            <a 
              href={`mailto:${cvData.email}`}
              className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-slate-100 hover:shadow-lg transition-all text-left group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                <p className="text-sm font-bold text-ink truncate">{cvData.email}</p>
              </div>
            </a>
            <div className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-slate-100 text-left">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Location</p>
                <p className="text-sm font-bold text-ink">{cvData.location}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a href={cvData.links.googleScholar} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-600 hover:text-brand hover:scale-110 transition-all">
              <Search size={20} />
            </a>
            <a href={cvData.links.webOfScience} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-600 hover:text-brand hover:scale-110 transition-all">
              <BookOpen size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-600 hover:text-brand hover:scale-110 transition-all">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Dr. Mohammad Sadegh Barkhordari. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <a href="#" className="hover:text-brand transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
