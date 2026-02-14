import React from 'react';
import { motion } from 'framer-motion';
import { Bug, Bot, Code, Smartphone, Zap, Sparkles } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: 'Manual Testing',
            description: 'I perform manual testing to ensure software quality and detect issues before reaching end-users.',
            icon: <Bug size={32} />,
            color: '#3b82f6'
        },
        {
            title: 'Automation Testing',
            description: 'I create automated scripts to speed up testing processes, increase accuracy, and improve efficiency.',
            icon: <Bot size={32} />,
            color: '#8b5cf6'
        },
        {
            title: 'Web Development',
            description: 'I design and develop responsive, modern websites using the latest technologies.',
            icon: <Code size={32} />,
            color: '#3b82f6'
        },
        {
            title: 'Mobile Development',
            description: 'I build mobile applications for both Android and iOS platforms with smooth user experience.',
            icon: <Smartphone size={32} />,
            color: '#8b5cf6'
        },
        {
            title: 'API Testing',
            description: 'I test APIs to ensure reliability, performance, and proper integration between services.',
            icon: <Zap size={32} />,
            color: '#3b82f6'
        },
    ];

    return (
        <section id="services" className="services-section" style={{ padding: '8rem 0' }}>
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
                        <Sparkles size={14} /> SOLUTIONS
                    </div>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '0', color: '#fff' }}>
                        Premium Services
                    </h2>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
                            whileHover={{ y: -10, borderColor: service.color }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '16px',
                                background: `rgba(${service.color === '#3b82f6' ? '59, 130, 246' : '139, 92, 246'}, 0.1)`,
                                color: service.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {service.icon}
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>{service.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>{service.description}</p>
                            </div>

                            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', color: service.color, fontWeight: 600, fontSize: '0.9rem' }}>

                            </div>

                            <div style={{
                                position: 'absolute',
                                bottom: '-20%',
                                right: '-10%',
                                width: '100px',
                                height: '100px',
                                background: service.color,
                                opacity: 0.05,
                                filter: 'blur(40px)',
                                borderRadius: '50%'
                            }} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
