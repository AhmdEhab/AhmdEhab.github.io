import React from 'react';
import { motion } from 'framer-motion';
import { Github, ChevronRight, Sparkles } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Tic Tac Toe',
            subtitle: 'Game Development',
            description: 'Advanced Tic Tac Toe engine with optimized win-state logic and a sleek dark UI.',
            link: 'https://github.com/AhmdEhab',
            tags: ['C++', 'GUI'],
            color: '#3b82f6'
        },
        {
            title: 'Boss vs Player',
            subtitle: 'Turn-based Strategy',
            description: 'Complex game state management system featuring dynamic health bars and attack multipliers.',
            link: 'https://github.com/AhmdEhab',
            tags: ['C++', 'Algorithms'],
            color: '#8b5cf6'
        },
        {
            title: 'Commerce Engine',
            subtitle: 'E-commerce Simulation',
            description: 'Full-featured cart logic and product management system with real-time total calculations.',
            link: 'https://github.com/AhmdEhab',
            tags: ['C++', 'Logic', 'Data Structures'],
            color: '#3b82f6'
        },
        {
            title: 'F1 Testing Suite',
            subtitle: 'Automation Research',
            description: 'A dedicated laboratory for Formula One data simulation and automated QA workflows.',
            link: 'https://github.com/AhmdEhab/Formula-One-Testing-',
            tags: ['Testing', 'Java', 'Selenium'],
            color: '#8b5cf6'
        },
        {
            title: 'Clinic Management System',
            subtitle: 'Management System',
            description: 'Full-scale management platform for clinic operations, scheduling, and patient history.',
            link: 'https://github.com/AhmdEhab/Clinic-Mangameent-System-',
            tags: ['C++', 'Data Structures', 'Algorithm', 'Gui'],
            color: '#3b82f6'
        },
        {
            title: 'Skill Sync Hub',
            subtitle: 'Collaborative Platform',
            description: 'Interactive portal for multi-module learning and skill synchronized progress tracking.',
            link: 'https://github.com/MBI000/SWE-Project---Copy',
            tags: ['Software Engineering'],
            color: '#8b5cf6'
        },
    ];

    return (
        <section id="projects" className="projects" style={{ padding: '8rem 0' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '0.5rem 1.25rem',
                        borderRadius: '100px',
                        background: 'rgba(59, 130, 246, 0.1)',
                        color: '#60a5fa',
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        letterSpacing: '1.5px',
                        marginBottom: '1.5rem'
                    }}>
                        <Sparkles size={14} /> SELECTED WORKS
                    </div>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '0', color: '#fff' }}>
                        Portfolio Highlights
                    </h2>
                </motion.div>

                <div className="projects-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="card project-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
                            whileHover={{ y: -10, borderColor: project.color }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                background: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '16px',
                                padding: '2rem',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{
                                    fontSize: '0.85rem',
                                    fontWeight: 700,
                                    color: 'var(--accent)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                    marginBottom: '0.75rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    <span style={{ width: '8px', height: '8px', background: project.color, borderRadius: '50%' }} />
                                    {project.subtitle}
                                </div>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>{project.title}</h3>
                            </div>

                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem', flexGrow: 1, fontSize: '1.05rem' }}>
                                {project.description}
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
                                {project.tags.map(tag => (
                                    <span key={tag} style={{
                                        fontSize: '0.8rem',
                                        padding: '0.4rem 1rem',
                                        borderRadius: '100px',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        color: 'var(--text-secondary)',
                                        fontWeight: 600,
                                        border: '1px solid rgba(255, 255, 255, 0.1)'
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Compact In-Frame GitHub Button */}
                            <motion.a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="github-btn-compact"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.75rem',
                                    padding: '0.9rem 1.5rem',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '16px',
                                    color: '#fff',
                                    textDecoration: 'none',
                                    fontWeight: 700,
                                    fontSize: '0.9rem',
                                    transition: 'all 0.3s ease',
                                    width: 'fit-content'
                                }}
                            >
                                <Github size={18} />
                                View Code
                                <ChevronRight size={16} />
                            </motion.a>

                            {/* Ambient Glow */}
                            <div style={{
                                position: 'absolute',
                                top: '0',
                                right: '0',
                                width: '100px',
                                height: '100px',
                                background: 'var(--accent)',
                                opacity: 0,
                                filter: 'blur(50px)',
                                borderRadius: '50%',
                                transition: 'opacity 0.4s'
                            }} className="card-glow" />
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                .project-card:hover {
                    border-color: rgba(59, 130, 246, 0.3);
                    background: rgba(255, 255, 255, 0.04);
                }
                .project-card:hover .card-glow {
                    opacity: 0.1;
                }
                .github-btn-compact:hover {
                    background: #fff !important;
                    color: #000 !important;
                    border-color: #fff !important;
                    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.1);
                }
            `}</style>
        </section>
    );
};

export default Projects;
