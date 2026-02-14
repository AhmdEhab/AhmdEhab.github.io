import React from 'react';
import { Mail, Github, Linkedin, Instagram, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="footer" style={{ padding: '6rem 0 4rem', position: 'relative', borderTop: '1px solid var(--glass-border)' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '4rem',
                    marginBottom: '4rem'
                }}>
                    <div style={{ maxWidth: '300px' }}>
                        <div style={{ fontWeight: 900, fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>AE.</div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                            Crafting premium digital experiences through precision engineering and creative vision.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.5rem' }}>SOCIALS</h4>
                        <div style={{ display: 'flex', gap: '1.25rem' }}>
                            <SocialIcon href="mailto:aehab3850@gmail.com" icon={<Mail size={20} />} />
                            <SocialIcon href="https://github.com/AhmdEhab/" icon={<Github size={20} />} />
                            <SocialIcon href="https://www.linkedin.com/in/ahmed-ehab-996241341" icon={<Linkedin size={20} />} />
                            <SocialIcon href="https://www.instagram.com/" icon={<Instagram size={20} />} />
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.5rem' }}>NAVIGATION</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <FooterLink href="#about">About</FooterLink>
                            <FooterLink href="#skills">Skills</FooterLink>
                            <FooterLink href="#projects">Projects</FooterLink>
                            <FooterLink href="#contact">Contact</FooterLink>
                        </ul>
                    </div>
                </div>

                <div style={{
                    paddingTop: '3rem',
                    borderTop: '1px solid rgba(255,255,255,0.03)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1.5rem'
                }}>
                    <p style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem' }}>
                        © {new Date().getFullYear()} Ahmed Ehab. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

const SocialIcon = ({ href, icon }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noreferrer"
        whileHover={{ y: -5, borderColor: 'var(--accent)', color: 'var(--accent)' }}
        style={{
            color: 'var(--text-secondary)',
            width: '45px',
            height: '45px',
            borderRadius: '12px',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid var(--glass-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'var(--transition)'
        }}
    >
        {icon}
    </motion.a>
);

const FooterLink = ({ href, children }) => (
    <li>
        <a
            href={href}
            style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                transition: 'var(--transition)',
                fontWeight: 500
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
        >
            {children}
        </a>
    </li>
);

export default Footer;
