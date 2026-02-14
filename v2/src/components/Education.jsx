import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="education" style={{ padding: '8rem 0' }}>
            <div className="container" style={{ maxWidth: '850px' }}>
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    Educational Journey
                </motion.h2>

                <div className="education-cards">
                    <motion.div
                        className="card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '2.5rem',
                            padding: '4rem 3rem',
                            textAlign: 'center'
                        }}
                    >
                        {/* University Logo at the Top */}
                        <div style={{
                            display: 'inline-flex',
                            marginBottom: '1rem'
                        }}>
                            <img
                                src="/images/RST-logo-01.png"
                                alt="Al Ryada University Logo"
                                style={{
                                    height: '160px',
                                    width: 'auto',
                                    filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.4))'
                                }}
                            />
                        </div>

                        {/* Degree Details */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{
                                margin: '0 auto',
                                background: 'rgba(59, 130, 246, 0.1)',
                                color: 'var(--accent)',
                                padding: '1rem',
                                borderRadius: '100px',
                                width: 'fit-content',
                                marginBottom: '1rem'
                            }}>
                                <GraduationCap size={32} />
                            </div>
                            <h3 style={{ fontSize: '2.25rem', fontWeight: 900, letterSpacing: '-0.5px' }}>
                                Bachelor of Computer Science
                            </h3>
                            <p style={{ color: 'var(--accent-secondary)', fontWeight: 700, fontSize: '1.25rem' }}>
                                Faculty of Computers and AI
                            </p>
                        </div>

                        {/* Location and Timeline */}
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: '2rem',
                            paddingTop: '2rem',
                            borderTop: '1px solid var(--glass-border)',
                            width: '100%'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                                <MapPin size={20} color="var(--accent)" /> Al Ryada University
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                                <Calendar size={20} color="var(--accent)" /> 2024 – 2028 (Expected)
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
