import Link from "next/link";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-charcoal text-cream pt-16 pb-8 border-t border-cream/10 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          
          {/* Navigation */}
          <div className="space-y-6">
            <h3 className="text-sm tracking-widest uppercase text-forest font-semibold">Explore</h3>
            <ul className="space-y-4">
              <li><Link href="#stay" className="text-cream/70 hover:text-cream transition-colors">The Stay</Link></li>
              <li><Link href="#experiences" className="text-cream/70 hover:text-cream transition-colors">Experiences</Link></li>
              <li><Link href="#gallery" className="text-cream/70 hover:text-cream transition-colors">Gallery</Link></li>
              <li><Link href="#nearby" className="text-cream/70 hover:text-cream transition-colors">Nearby Adventures</Link></li>
            </ul>
          </div>

          {/* Location Map Card */}
          <div className="space-y-6">
            <h3 className="text-sm tracking-widest uppercase text-forest font-semibold">Location</h3>
            <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-cream/20 shadow-lg group">
              {/* Google Maps Satellite Embed */}
              <iframe 
                src="https://maps.google.com/maps?q=Zadokz%20Farm%20Stay%20Wayanad&t=k&z=15&ie=UTF8&iwloc=&output=embed" 
                className="w-full h-full border-0 filter opacity-90 group-hover:opacity-100 transition-opacity duration-300" 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Custom "Open in Maps" overlay button matching screenshot */}
              <a 
                href="https://maps.app.goo.gl/bBoxuTMv9QhbnPDw6?g_st=ic" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute top-3 left-3 bg-white text-[#1a73e8] px-3 py-2 rounded-sm shadow-md text-sm font-medium flex items-center hover:bg-gray-50 transition-colors z-10"
              >
                Open in Maps <ExternalLink size={14} className="ml-1.5" />
              </a>
            </div>
          </div>

          {/* Contact & Booking */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-sm tracking-widest uppercase text-forest font-semibold">Get in Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 text-cream/70">
                  <Phone size={20} />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center space-x-3 text-cream/70">
                  <Mail size={20} />
                  <span>escape@zadokz.com</span>
                </li>
              </ul>
              
              <div className="flex space-x-4 pt-2">
                <a href="#" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-forest hover:border-forest transition-colors text-cream">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-forest hover:border-forest transition-colors text-cream">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <Link href="#book" className="inline-block px-8 py-4 bg-forest text-cream rounded-full text-sm tracking-widest uppercase hover:bg-moss transition-colors">
                Book Your Stay
              </Link>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-cream/10 text-sm text-cream/40 font-light">
          <p>© {new Date().getFullYear()} Zadokz Farm Stay. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-cream transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-cream transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
