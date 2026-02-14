import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            quote: '“Ahmed’s dedication and innovative approach were pivotal in securing first place at the Scientific Conference. A standout talent.”',
            name: 'Prof. Yahia Elhalwagi',
            role: 'Dean of Faculty',
            color: '#3b82f6'
        },
        {
            quote: '“He possess a rare combination of technical precision and creative problem-solving. Truly a reliable developer.”',
            name: 'Eng. Mahmoud Hossam',
            role: 'Software Engineer',
            color: '#8b5cf6'
        },
        {
            quote: '“Working with Ahmed is seamless. He consistently delivers high-quality results ahead of schedule.”',
            name: 'Mazen Mahmoud',
            role: 'Collaborator',
            color: '#3b82f6'
        },
    ];

    return (
        <section id="testimonials" className="testimonials" style={{ padding: '8rem 0' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    Voices of Confidence
                </motion.h2>

                <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                    {testimonials.map((item, index) => (
                        <motion.div
                            className="card"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
                            whileHover={{
                                y: -10,
                                borderColor: item.color,
                                transition: { type: "spring", stiffness: 400, damping: 25 }
                            }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative',
                                overflow: 'hidden',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '16px',
                                padding: '2rem'
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: '2rem',
                                right: '2rem',
                                color: item.color,
                                opacity: 0.1
                            }}>
                                <Quote size={60} />
                            </div>

                            <p style={{
                                fontSize: '1.1rem',
                                fontStyle: 'italic',
                                lineHeight: '1.8',
                                color: 'var(--text-secondary)',
                                marginBottom: '2.5rem',
                                position: 'relative',
                                zIndex: 1
                            }}>
                                {item.quote}
                            </p>

                            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '40px', height: '2px', background: item.color }} />
                                <div>
                                    <div style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '1.1rem' }}>{item.name}</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>{item.role}</div>
                                </div>
                            </div>

                            {/* Accent Ambient Glow */}
                            <div style={{
                                position: 'absolute',
                                top: '0',
                                right: '0',
                                width: '120px',
                                height: '120px',
                                background: item.color,
                                opacity: 0,
                                filter: 'blur(40px)',
                                borderRadius: '50%',
                                transition: 'opacity 0.4s'
                            }} className="card-glow" />
                        </motion.div>
                    ))}
                </div>
            </div>
            <style>{`
                .card:hover .card-glow {
                    opacity: 0.15;
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
