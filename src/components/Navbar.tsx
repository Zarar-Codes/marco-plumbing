import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Residential', path: '/residential' },
  { label: 'Commercial', path: '/commercial' },
  { label: 'New Construction', path: '/new-construction' },
  {
    label: 'About',
    path: '/about/marco',
    dropdown: [
      { label: 'About Marco', path: '/about/marco' },
      { label: 'Mentorship', path: '/about/mentorship' },
    ],
  },
  { label: 'Service Areas', path: '/service-areas' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
  { label: 'Real Estate', path: '/real-estate' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [location])

  return (
    <>
      <nav
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#e0e5ec] shadow-[0_4px_12px_rgba(0,0,0,0.1)]'
            : 'bg-[#e0e5ec]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <img src="/images/mark-fermo.webp" alt="Marco Plumbing" className="h-8 w-auto" />
              <span className="font-sans text-xl font-extrabold uppercase tracking-tight text-text-primary drop-shadow-[0_1px_0_#ffffff]">
                Marco<span className="text-accent">.</span>Plumbing
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button className="px-3 py-2 text-sm font-medium text-text-muted hover:text-text-primary rounded-md hover:shadow-[inset_2px_2px_4px_#babecc,inset_-2px_-2px_4px_#ffffff] transition-all flex items-center gap-1">
                      {link.label}
                      <ChevronDown size={14} />
                    </button>
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          className="absolute top-full left-0 mt-1 bg-[#e0e5ec] rounded-lg shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff] py-2 min-w-[180px]"
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="block px-4 py-2 text-sm text-text-muted hover:text-text-primary hover:bg-[#d1d9e6] transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-all ${
                      location.pathname === link.path
                        ? 'text-accent shadow-[inset_2px_2px_4px_#babecc,inset_-2px_-2px_4px_#ffffff]'
                        : 'text-text-muted hover:text-text-primary hover:shadow-[inset_2px_2px_4px_#babecc,inset_-2px_-2px_4px_#ffffff]'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:1-866-619-9700"
                className="px-4 py-2 bg-accent text-white rounded-md font-bold text-sm shadow-[4px_4px_8px_#babecc,-4px_-4px_8px_#ffffff] hover:bg-accent-dark transition-colors"
              >
                EMERGENCY CALL
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md bg-[#e0e5ec] shadow-[3px_3px_6px_#babecc,-3px_-3px_6px_#ffffff]"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-16 z-30 bg-[#e0e5ec] lg:hidden overflow-y-auto"
          >
            <div className="p-4 space-y-2">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label}>
                    <div className="px-4 py-3 font-semibold text-text-muted uppercase text-sm tracking-wider">
                      {link.label}
                    </div>
                    <div className="ml-4 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-4 py-3 rounded-md text-text-muted hover:text-text-primary hover:bg-[#d1d9e6] transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 rounded-md transition-colors ${
                      location.pathname === link.path
                        ? 'text-accent bg-[#d1d9e6]'
                        : 'text-text-muted hover:text-text-primary hover:bg-[#d1d9e6]'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <a
                href="tel:1-866-619-9700"
                className="block text-center mt-4 px-4 py-3 bg-accent text-white rounded-md font-bold"
              >
                EMERGENCY: 1-866-619-9700
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
