import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Users, ArrowUpRight, GraduationCap, ShieldCheck, Sparkles } from 'lucide-react';

const Achievements = () => {
    // Current achievements - Reordered to put Life Long at the end
    const achievements = [
        {
            title: 'DEPI Software Testing',
            subtitle: 'Professional Certification',
            description: 'Intensive training in Manual & Automation Testing, Quality Assurance, and Bug Tracking at the Digital Egypt Pioneers Initiative.',
            link: 'https://www.linkedin.com/posts/ahmed-ehab-996241341_depi-softwaretesting-career-share-7422714112121548800-qAwY',
            icon: <ShieldCheck size={28} />,
            color: '#10b981' // Green for Security/Testing
        },
        {
            title: 'University Scientific Excellence',
            subtitle: '1st Place Winner',
            description: 'Awarded first place at the University Scientific Conference for architectural project excellence and innovative research.',
            link: 'https://www.linkedin.com/posts/ahmed-ehab-996241341_alryadauniversity-projectmilestone-certificateachieved-activity-7325933894791307264-cWxZ',
            icon: <Trophy size={28} />,
            color: '#fbbf24'
        },
        {
            title: 'IEEE IC-FTAI 2025 Finalist',
            subtitle: 'Top 6 Tech Startup',
            description: 'Presented IRIS—a platform for intellectual disabilities—ranking in the Top 6 at the IEEE FTAI international summit.',
            link: 'https://www.linkedin.com/posts/ahmed-ehab-996241341_ieee-icftai2025-iris-activity-7399841689932177408-Cd-b',
            icon: <Users size={28} />,
            color: '#8b5cf6'
        },
        {
            title: 'ECPC National Contestant',
            subtitle: 'Competitive Programming',
            description: 'Participated in the Egyptian Collegiate Programming Contest, demonstrating high-level algorithmic proficiency.',
            link: 'https://www.linkedin.com/in/ahmed-ehab-996241341/',
            icon: <Award size={28} />,
            color: '#a8a29e' // Silver/Stone for participation
        },
        {
            title: 'Lifelong Professional Skills',
            subtitle: 'IBM Your Learning',
            description: 'Earned a digital credential for completing the Lifelong Professional Skills program via the IBM Your Learning Builder system.',
            link: 'https://skills.yourlearning.ibm.com/certificate/share/4cf992fb5eewogICJvYmplY3RUeXBlIiA6ICJBQ1RJVklUWSIsCiAgImxlYXJuZXJDTlVNIiA6ICI2NDg0MDI5UkVHIiwKICAib2JqZWN0SWQiIDogIlBMQU4tOEFGNUIxNDFFQzMyIgp9d03e0d9527-10',
            icon: <GraduationCap size={28} />,
            color: '#3b82f6' // Blue for Learning
        }
    ];

    return (
        <section id="achievements" className="achievements" style={{ padding: '8rem 0' }}>
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
                        <Sparkles size={14} /> MILESTONES
                    </div>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1rem', color: '#fff' }}>
                        Awards & Certificates
                    </h2>
                    <div style={{ width: '60px', height: '4px', background: 'var(--accent)', margin: '0 auto', borderRadius: '2px' }} />
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
                    {achievements.map((item, index) => (
                        <motion.a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="achievement-card-premium"
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
                            whileHover={{ x: 15, borderColor: item.color }}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'auto 1fr auto',
                                gap: '2rem',
                                alignItems: 'center',
                                textDecoration: 'none',
                                color: 'inherit',
                                padding: '2rem',
                                background: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '24px',
                                transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)'
                            }}
                        >
                            <div style={{
                                width: '64px',
                                height: '64px',
                                background: `rgba(${item.color === '#fbbf24' ? '251, 191, 36' :
                                    item.color === '#3b82f6' ? '59, 130, 246' :
                                        item.color === '#10b981' ? '16, 185, 129' :
                                            item.color === '#a8a29e' ? '168, 162, 158' :
                                                '139, 92, 246'
                                    }, 0.1)`,
                                color: item.color,
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {item.icon}
                            </div>

                            <div>
                                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: item.color, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.4rem' }}>
                                    {item.subtitle}
                                </div>
                                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.6rem', color: '#fff' }}>{item.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '1rem' }}>{item.description}</p>
                            </div>

                            <motion.div
                                className="arrow-icon"
                                style={{ color: 'var(--text-tertiary)', opacity: 0.4 }}
                            >
                                <ArrowUpRight size={28} />
                            </motion.div>
                        </motion.a>
                    ))}
                </div>
            </div>

            <style>{`
                .achievement-card-premium:hover {
                    background: rgba(255, 255, 255, 0.05) !important;
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
                }
                .achievement-card-premium:hover .arrow-icon {
                    opacity: 1 !important;
                    color: #fff !important;
                    transform: translate(3px, -3px);
                }
            `}</style>
        </section>
    );
};

export default Achievements;
