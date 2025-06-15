import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setIsSubmitting(true);
      await emailjs.sendForm(
        'service_p9ftmye', // Replace with your EmailJS service ID
        'template_sg2i6qp', // Replace with your EmailJS template ID
        formRef.current,
        'FWBJE6lrxGJT-sR2c' // Replace with your EmailJS public key
      );
      toast.success('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <Toaster position="bottom-right" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="font-display text-xl sm:text-2xl mb-4 sm:mb-6">Let's Connect</h3>
            <p className="text-sm sm:text-base text-foreground/80 mb-6 sm:mb-8">
              I'm always open to new opportunities and interesting projects.
              Feel free to reach out!
            </p>
            
            <div className="space-y-4">
              <ContactLink
                href="mailto:modim@uoguelph.ca"
                icon={Mail}
                text="modim@uoguelph.ca"
              />
              <ContactLink
                href="https://www.instagram.com/mannn.himself/"
                icon={MessageSquare}
                text="@mannn.himself"
              />
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4 sm:space-y-6"
          >
            <FormField 
              label="Name" 
              type="text" 
              id="user_name" 
              name="user_name" 
              required 
            />
            <FormField 
              label="Email" 
              type="email" 
              id="user_email" 
              name="user_email" 
              required 
            />
            <FormField 
              label="Message" 
              type="textarea" 
              id="message" 
              name="message" 
              required 
            />

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-lg opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 group-hover:duration-200" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute inset-px rounded-lg bg-background opacity-80" />
              <div className="absolute inset-0 rounded-lg border border-primary/20 group-hover:border-primary/40 transition-colors duration-500" />
              <span className="relative z-10 text-sm sm:text-base">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </span>
              <Send className="relative w-4 h-4 z-10" />
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
}

function ContactLink({ href, icon: Icon, text }: { href: string; icon: any; text: string }) {
  return (
    <motion.a 
      href={href} 
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-3 p-3 sm:p-4 rounded-lg transition-all duration-500"
      whileHover={{ scale: 1.02 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-lg opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 group-hover:duration-200" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
      <div className="absolute inset-px rounded-lg bg-background opacity-80" />
      <div className="absolute inset-0 rounded-lg border border-primary/20 group-hover:border-primary/40 transition-colors duration-500" />
      <Icon className="relative text-primary z-10 w-4 h-4 sm:w-5 sm:h-5" />
      <span className="relative font-mono text-xs sm:text-sm z-10 text-foreground/80 group-hover:text-foreground transition-colors duration-500">
        {text}
      </span>
    </motion.a>
  );
}

function FormField({ label, type, id, name, required = false }: { 
  label: string; 
  type: string; 
  id: string;
  name: string;
  required?: boolean;
}) {
  const baseClasses = "w-full bg-background border border-primary/20 rounded-lg p-2 sm:p-3 focus:border-primary/60 focus:outline-none transition-colors text-sm sm:text-base";
  
  return (
    <div>
      <label htmlFor={id} className="block font-mono text-xs sm:text-sm mb-2">{label}</label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          rows={4}
          required={required}
          className={baseClasses}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          required={required}
          className={baseClasses}
        />
      )}
    </div>
  );
}