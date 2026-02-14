import React from 'react';
import { motion } from 'framer-motion';
import { User, Sparkles, Code2, Globe } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="about" style={{ padding: '8rem 0', position: 'relative' }}>
            <div className="container" style={{ maxWidth: '1200px' }}>

                {/* Section Label */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '0.6rem 1.25rem',
                        background: 'rgba(59, 130, 246, 0.15)',
                        border: '1px solid rgba(59, 130, 246, 0.3)',
                        borderRadius: '100px',
                        color: '#60a5fa',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        letterSpacing: '1px',
                        marginBottom: '2.5rem'
                    }}
                >
                    <Sparkles size={16} /> ABOUT ME
                </motion.div>

                {/* 2-Column Layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '4rem',
                    alignItems: 'center'
                }}>

                    {/* Left: Main Story Content */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                                fontWeight: 900,
                                lineHeight: 1.1,
                                marginBottom: '2.5rem',
                                textAlign: 'left',
                                background: 'none',
                                WebkitTextFillColor: 'unset'
                            }}
                        >
                            <span style={{ color: '#60a5fa' }}>The story</span><br />
                            <span style={{ color: '#ffffff' }}>behind the code.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            style={{
                                fontSize: '1.2rem',
                                lineHeight: '1.8',
                                color: 'var(--text-secondary)',
                                marginBottom: '3rem',
                                maxWidth: '600px'
                            }}
                        >
                            Hello! I'm <strong style={{ color: '#fff' }}>Ahmed Ehab</strong>, a passionate developer dedicated to crafting seamless digital experiences. My journey in technology is driven by a curiosity for how things work and a commitment to delivering high-quality, high-performance solutions.
                        </motion.p>

                        {/* Developer/Explorer Pills */}
                        <div style={{ display: 'flex', gap: '3rem' }}>
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                            >
                                <div style={{ color: '#60a5fa' }}><Code2 size={24} /></div>
                                <div>
                                    <div style={{ fontWeight: 800, color: '#fff', fontSize: '1.1rem' }}>Developer</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>Focused on Logic</div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                            >
                                <div style={{ color: '#60a5fa' }}><Globe size={24} /></div>
                                <div>
                                    <div style={{ fontWeight: 800, color: '#fff', fontSize: '1.1rem' }}>Explorer</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>Constant Learner</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right: Philosophy Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="card"
                        style={{
                            maxWidth: '480px',
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            justifySelf: 'end'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: '#60a5fa' }}>
                            <Sparkles size={20} />
                            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff' }}>My Philosophy</h3>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.05rem', textAlign: 'left' }}>
                            I believe that great software isn't just about syntax—it's about the humans who use it. Every line of code I write is an opportunity to solve a problem and create something meaningful that lasts.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
