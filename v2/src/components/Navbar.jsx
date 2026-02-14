import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <header className={`topbar ${isScrolled ? 'scrolled' : ''}`} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
            height: isScrolled ? '80px' : '90px',
            background: isScrolled ? 'rgba(17, 17, 20, 0.85)' : 'transparent',
            backdropFilter: isScrolled ? 'blur(12px)' : 'none',
            borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
            display: 'flex',
            alignItems: 'center'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%'
            }}>
                {/* Logo AE. */}
                <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <a href="#home" style={{
                        textDecoration: 'none',
                        color: '#fff',
                        fontSize: '1.6rem',
                        fontWeight: 900,
                        letterSpacing: '1px'
                    }}>
                        AE
                    </a>
                    <div style={{ width: '6px', height: '6px', background: '#3b82f6', borderRadius: '50%', marginTop: '0.6rem' }} />
                </div>

                {/* Desktop Nav links + Hire Me */}
                <nav className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
                    <div style={{ display: 'flex', gap: '2.5rem' }}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                style={{
                                    color: 'var(--text-secondary)',
                                    textDecoration: 'none',
                                    fontWeight: 500,
                                    fontSize: '0.95rem',
                                    transition: 'color 0.3s'
                                }}
                                onMouseEnter={(e) => e.target.style.color = '#fff'}
                                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <a href="#contact" className="btn-hire" style={{
                        background: '#fff',
                        color: '#000',
                        padding: '0.75rem 1.75rem',
                        borderRadius: '100px',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        transition: 'transform 0.3s, box-shadow 0.3s'
                    }}>
                        Hire Me <Sparkles size={16} />
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        color: '#fff',
                        cursor: 'pointer'
                    }}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'fixed',
                            top: isScrolled ? '80px' : '90px',
                            left: 0,
                            right: 0,
                            background: '#111114',
                            padding: '2rem',
                            zIndex: 999,
                            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            textAlign: 'center'
                        }}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                style={{
                                    color: '#fff',
                                    textDecoration: 'none',
                                    fontSize: '1.2rem',
                                    fontWeight: 600
                                }}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{
                            background: '#fff',
                            color: '#000',
                            padding: '1rem',
                            borderRadius: '12px',
                            fontWeight: 700,
                            textDecoration: 'none'
                        }}>
                            Hire Me ✨
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @media (max-width: 968px) {
                    .desktop-only { display: none !important; }
                    .mobile-toggle { display: block !important; }
                }
                .btn-hire:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.15);
                }
            `}</style>
        </header>
    );
};

export default Navbar;
