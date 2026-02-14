import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, Download, ChevronRight, Sparkles } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import resume from '../assets/resume.pdf';

const Hero = () => {
    const role = useTypewriter(['Mobile Developer', 'QA Engineer', 'Problem Solver', 'Aspiring Developer'], 80, 2000);

    // Mouse tracking for portrait spotlight
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

    const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] }
        }
    };

    return (
        <section className="hero">
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: '4rem', alignItems: 'center' }}>
                <motion.div
                    className="hero-copy"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        variants={itemVariants}
                        className="eyebrow"
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--accent)', fontWeight: 600, letterSpacing: '2px' }}
                    >
                        <span style={{ opacity: 0.8 }}>#</span> AVAILABLE FOR PROJECTS
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="title">
                        Ahmed <br /> Ehab.
                    </motion.h1>

                    <motion.h2 variants={itemVariants} className="job-title" style={{ height: '2rem', display: 'flex', alignItems: 'center' }}>
                        <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>I am a </span>
                        <span style={{
                            marginLeft: '10px',
                            color: '#60a5fa',
                            fontWeight: 900,
                            letterSpacing: '0.5px'
                        }}>{role}</span>
                        <span className="cursor" style={{ marginLeft: '4px' }}>|</span>
                    </motion.h2>

                    <motion.p variants={itemVariants} className="subtitle" style={{ marginBottom: '2.5rem' }}>
                        A passionate developer focused on building high-performance mobile applications
                        and ensuring quality through rigorous testing. Turning complex problems
                        into elegant digital solutions.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-start', marginTop: '1rem', marginBottom: '3rem' }}
                    >
                        {/* CTA Buttons Row */}
                        <div className="cta" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', width: '100%' }}>
                            <a className="btn primary" href="#projects" style={{ minWidth: '180px' }}>
                                Explore Work <ChevronRight size={18} style={{ marginLeft: '8px' }} />
                            </a>
                            <a className="btn ghost btn-flash" href="#contact" style={{ minWidth: '180px' }}>
                                Contact Me
                            </a>
                            <a className="btn ghost btn-flash" href={resume} download="Ahmed_Ehab_CV.pdf" style={{ minWidth: '180px' }}>
                                Download CV <Download size={20} style={{ marginLeft: '8px' }} />
                            </a>
                        </div>

                        {/* Social Links Row */}
                        <ul className="social" aria-label="Social links" style={{ display: 'flex', gap: '1.25rem', listStyle: 'none', padding: 0 }}>
                            <SocialIcon href="mailto:aehab3850@gmail.com" icon={<Mail size={22} />} label="Email" />
                            <SocialIcon href="https://github.com/AhmdEhab/" icon={<Github size={22} />} label="GitHub" />
                            <SocialIcon href="https://www.linkedin.com/in/ahmed-ehab-996241341" icon={<Linkedin size={22} />} label="LinkedIn" />
                            <SocialIcon href="https://www.instagram.com/" icon={<Instagram size={22} />} label="Instagram" />
                        </ul>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-portrait"
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                    style={{
                        position: 'relative',
                        padding: '40px', // Extra space for the external glow
                        margin: '-40px'
                    }}
                    onMouseMove={handleMouseMove}
                >
                    {/* Interactive External Glow (Behind) */}
                    <motion.div
                        style={{
                            position: 'absolute',
                            width: '400px',
                            height: '400px',
                            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
                            borderRadius: '50%',
                            pointerEvents: 'none',
                            zIndex: 0,
                            left: springX,
                            top: springY,
                            transform: 'translate(-50%, -50%)',
                            filter: 'blur(40px)',
                            opacity: 0.8
                        }}
                    />

                    {/* Static Portrait Background Glow */}
                    <div style={{
                        position: 'absolute',
                        inset: '20px',
                        background: 'var(--accent-gradient)',
                        filter: 'blur(50px)',
                        opacity: 0.15,
                        borderRadius: '40px',
                        zIndex: -1
                    }} />

                    <motion.div
                        style={{
                            position: 'relative',
                            borderRadius: '40px',
                            overflow: 'hidden',
                            border: '1px solid var(--glass-border-bright)',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                            zIndex: 1,
                            background: 'var(--bg)' // Ensure background is solid behind image
                        }}
                    >
                        <img
                            src="/images/marrasi.jpg"
                            alt="Ahmed Ehab"
                            style={{ width: '100%', display: 'block', position: 'relative', zIndex: 1 }}
                        />
                    </motion.div>
                </motion.div>
            </div>

            <style>{`
        .cursor {
          animation: blink 1s infinite;
          color: var(--accent);
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        .btn-flash:hover {
          transform: none !important;
          background: rgba(255, 255, 255, 0.12) !important;
          box-shadow: inset 0 0 25px rgba(255, 255, 255, 0.15), 0 0 10px rgba(255, 255, 255, 0.05) !important;
          color: var(--text-primary) !important;
          border-color: var(--glass-border-bright) !important;
          filter: brightness(1.1);
        }
      `}</style>
        </section>
    );
};

const SocialIcon = ({ href, icon, label }) => (
    <li>
        <motion.a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            whileHover={{ y: -5, color: 'var(--text-primary)', borderColor: 'var(--accent)' }}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50px',
                height: '50px',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-secondary)',
                transition: 'var(--transition)'
            }}
        >
            {icon}
        </motion.a>
    </li>
);

export default Hero;
