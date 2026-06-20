import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Globe, MessageCircle, Camera, Play } from 'lucide-react'
import { IconHousing } from './UIComponents'

export function Footer() {
  return (
    <footer className="bg-[#e0e5ec] border-t border-[#d1d9e6]">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-sans text-lg font-extrabold uppercase tracking-tight text-text-primary mb-4 drop-shadow-[0_1px_0_#ffffff]">
              Marco<span className="text-accent">.</span>Plumbing
            </h3>
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              Serving Durham &amp; the GTA since 2003. Licensed, insured, and dedicated to honest plumbing.
            </p>
            <div className="flex items-center gap-3">
              <IconHousing icon={Globe} />
              <IconHousing icon={MessageCircle} />
              <IconHousing icon={Camera} />
              <IconHousing icon={Play} />
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase text-text-muted mb-4">Services</h4>
            <div className="space-y-2">
              {[
                { label: 'Residential', path: '/residential' },
                { label: 'Commercial', path: '/commercial' },
                { label: 'New Construction', path: '/new-construction' },
                { label: 'Emergency Service', path: '/residential' },
              ].map((l) => (
                <Link key={l.path} to={l.path} className="block text-sm text-text-muted hover:text-accent transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase text-text-muted mb-4">Service Areas</h4>
            <div className="space-y-2">
              {['Port Perry', 'Scarborough', 'Uxbridge', 'Whitby', 'Ajax', 'Oshawa', 'Pickering', 'Clarington', 'Newcastle', 'Peterborough'].map((area) => (
                <Link key={area} to="/service-areas" className="block text-sm text-text-muted hover:text-accent transition-colors">
                  {area}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase text-text-muted mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:1-866-619-9700" className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors">
                <Phone size={14} className="text-accent" />
                <span className="font-mono font-bold">1-866-619-9700</span>
              </a>
              <a href="mailto:info@marcoplumbing.ca" className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors">
                <Mail size={14} className="text-accent" />
                info@marcoplumbing.ca
              </a>
              <div className="flex items-start gap-2 text-sm text-text-muted">
                <MapPin size={14} className="text-accent mt-0.5" />
                <span>Durham Region &amp; Greater Toronto Area, ON</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-[#d1d9e6] rounded-lg shadow-[inset_3px_3px_6px_#babecc,inset_-3px_-3px_6px_#ffffff]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(46,213,115,0.6)] animate-pulse" />
                <span className="font-mono text-xs tracking-wider text-text-muted">24/7 ONLINE</span>
              </div>
              <p className="font-mono text-xs text-text-muted mt-1">Emergency 4-Hour Callout</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#d1d9e6] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted font-mono">
            &copy; {new Date().getFullYear()} Marco Plumbing. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-text-muted font-mono">
            <span>Licensed &amp; Insured</span>
            <span className="w-1 h-1 rounded-full bg-[#babecc]" />
            <span>Since 2003</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
