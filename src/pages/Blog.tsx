import { motion } from 'framer-motion'
import { PageTransition } from '../components/PageTransition'
import { WordsPullUp } from '../components/WordsPullUp'
import { FadeInWhenVisible } from '../components/FadeInWhenVisible'
import { LED, VentSlots } from '../components/ManufacturingDetails'

const posts = [
  { title: 'What to Do When Your Basement Floods: A Step-by-Step Emergency Guide', excerpt: 'From shutting off the main water valve to calling a plumber, here\'s everything you need to know about handling basement floods.', date: 'Oct 12, 2024', category: 'Emergency Tips' },
  { title: 'The Top 5 Plumbing Issues Real Estate Agents Should Watch For', excerpt: 'A guide for real estate agents on spotting common plumbing problems during home inspections.', date: 'Sep 28, 2024', category: 'Real Estate' },
  { title: 'How to Prevent Frozen Pipes This Winter', excerpt: 'Protect your home from costly pipe bursts this winter with these proven prevention tips.', date: 'Sep 15, 2024', category: 'Seasonal' },
  { title: 'Understanding Backwater Valves: What Every Homeowner Should Know', excerpt: 'Learn how backwater valves work and why they\'re essential for protecting your home from sewer backups.', date: 'Aug 20, 2024', category: 'Education' },
  { title: 'Water Heater Maintenance Tips to Extend the Life of Your Unit', excerpt: 'Simple maintenance tasks that can help your water heater last longer and run more efficiently.', date: 'Aug 5, 2024', category: 'Maintenance' },
  { title: 'Why Upfront Pricing Matters When Choosing a Plumber', excerpt: 'How transparent pricing protects homeowners and ensures you get fair value for plumbing services.', date: 'Jul 18, 2024', category: 'Guides' },
  { title: 'Commercial Plumbing 101: What Business Owners Need to Know', excerpt: 'Essential commercial plumbing knowledge every business owner and property manager should have.', date: 'Jul 2, 2024', category: 'Commercial' },
  { title: 'Signs You Need to Repipe Your Home', excerpt: 'Warning signs that indicate your home may need a full repiping to prevent leaks and water damage.', date: 'Jun 15, 2024', category: 'Residential' },
  { title: 'How to Choose the Right Plumber for Your New Construction Project', excerpt: 'What to look for when selecting a plumbing contractor for your new build or renovation.', date: 'May 30, 2024', category: 'Construction' },
]

export default function Blog() {
  return (
    <PageTransition>
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <LED color="green" label="Blog" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mt-4 mb-6 drop-shadow-[0_2px_0_#ffffff]">
              <WordsPullUp text="Plumbing Tips, Guides & Industry Insights" />
            </h1>
            <p className="text-text-muted text-lg leading-relaxed">
              Expert plumbing advice for homeowners, businesses, and real estate professionals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 bg-[#d1d9e6]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <FadeInWhenVisible key={post.title} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group bg-[#e0e5ec] rounded-lg overflow-hidden shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff]"
                >
                  <div className="corner-screws" />
                  <div className="h-48 bg-[#d1d9e6] relative overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-text-muted/20 to-text-muted/5" />
                    <div className="absolute top-3 left-3">
                      <div className="bg-[#f5e6a3] px-2 py-1 font-mono text-[10px] font-bold text-[#2d3436] rotate-[-2deg] shadow-sm">
                        {post.date}
                      </div>
                    </div>
                    <div className="absolute top-3 right-3">
                      <VentSlots />
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="font-mono text-[10px] tracking-widest text-accent uppercase font-bold">{post.category}</span>
                    <h3 className="font-bold text-text-primary mt-2 mb-2 group-hover:text-accent transition-colors">{post.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{post.excerpt}</p>
                    <span className="inline-block mt-4 text-sm font-semibold text-accent group-hover:underline cursor-pointer">
                      Read More →
                    </span>
                  </div>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>

          <div className="flex justify-center items-center gap-4 mt-12">
            <motion.button
              whileTap={{ y: 2, boxShadow: 'inset 4px 4px 8px #babecc, inset -4px -4px 8px #ffffff' }}
              className="px-6 py-3 bg-[#e0e5ec] rounded-lg shadow-[6px_6px_12px_#babecc,-6px_-6px_12px_#ffffff] font-bold text-text-muted text-sm"
            >
              ← Prev
            </motion.button>
            {[1, 2, 3].map((p) => (
              <motion.button
                key={p}
                whileTap={{ y: 2, boxShadow: 'inset 4px 4px 8px #babecc, inset -4px -4px 8px #ffffff' }}
                className={`w-10 h-10 rounded-lg font-mono text-sm font-bold ${
                  p === 1
                    ? 'bg-[#d1d9e6] shadow-[inset_3px_3px_6px_#babecc,inset_-3px_-3px_6px_#ffffff] text-accent'
                    : 'bg-[#e0e5ec] shadow-[4px_4px_8px_#babecc,-4px_-4px_8px_#ffffff] text-text-muted'
                }`}
              >
                {p}
              </motion.button>
            ))}
            <motion.button
              whileTap={{ y: 2, boxShadow: 'inset 4px 4px 8px #babecc, inset -4px -4px 8px #ffffff' }}
              className="px-6 py-3 bg-[#e0e5ec] rounded-lg shadow-[6px_6px_12px_#babecc,-6px_-6px_12px_#ffffff] font-bold text-text-muted text-sm"
            >
              Next →
            </motion.button>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
