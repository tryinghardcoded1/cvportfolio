import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useState, FormEvent } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    inquiry: 'Web Dev'
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Construct the email subject and body
    const subject = encodeURIComponent(`New Inquiry: ${formData.inquiry} from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `WhatsApp: ${formData.whatsapp}\n` +
      `Inquiry Type: ${formData.inquiry}\n\n` +
      `Message:\n`
    );
    
    // Open the user's default email client
    window.location.href = `mailto:cerezvincent1@gmail.com?subject=${subject}&body=${body}`;
    
    // Close the modal after submission
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div key="contact-modal" className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-6 md:p-8">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Get in touch</h2>
              <p className="text-white/60 mb-8 font-light">Fill out the form below and we'll get back to you shortly.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">Name</label>
                  <input 
                    required 
                    type="text" 
                    value={formData.name} 
                    onChange={e => setFormData({...formData, name: e.target.value})} 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors" 
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">Email</label>
                  <input 
                    required 
                    type="email" 
                    value={formData.email} 
                    onChange={e => setFormData({...formData, email: e.target.value})} 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors" 
                    placeholder="john@example.com" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">WhatsApp Number</label>
                  <input 
                    required 
                    type="tel" 
                    value={formData.whatsapp} 
                    onChange={e => setFormData({...formData, whatsapp: e.target.value})} 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors" 
                    placeholder="+1 (555) 000-0000" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">Inquiry Type</label>
                  <select 
                    value={formData.inquiry} 
                    onChange={e => setFormData({...formData, inquiry: e.target.value})} 
                    className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors appearance-none"
                  >
                    <option value="Web Dev">Web Development</option>
                    <option value="Business Tool">Business Tools</option>
                    <option value="AI Automation">AI Automation</option>
                    <option value="SEO and Ads">SEO and Ads</option>
                  </select>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-white text-black font-semibold rounded-lg px-4 py-4 mt-6 hover:bg-white/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
