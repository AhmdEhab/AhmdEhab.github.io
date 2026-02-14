import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const SkillCard = ({ name, icon, delay }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.li
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.6, ease: "easeOut" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: "1000px",
                listStyle: 'none'
            }}
        >
            <motion.div
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem 1.5rem',
                    background: 'rgba(30, 30, 35, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '28px',
                    position: 'relative',
                    transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                    cursor: 'pointer',
                    width: '100%',
                    aspectRatio: '1/1'
                }}
                whileHover={{
                    borderColor: '#3b82f6',
                    background: 'rgba(59, 130, 246, 0.05)',
                    boxShadow: '0 0 35px rgba(59, 130, 246, 0.25)',
                    y: -5
                }}
                className="skill-card-inner"
            >
                {/* Glow layer */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                    opacity: 0,
                    transition: 'opacity 0.4s',
                    borderRadius: '28px'
                }} className="hover-glow-layer" />

                <div style={{
                    transform: 'translateZ(40px)',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <img
                        src={icon}
                        alt={name}
                        style={{
                            width: '52px',
                            height: '52px',
                            objectFit: 'contain',
                        }}
                    />
                </div>

                <span style={{
                    fontWeight: 700,
                    color: '#fff',
                    fontSize: '0.9rem',
                    transform: 'translateZ(30px)',
                    textAlign: 'center',
                    letterSpacing: '0.5px'
                }}>
                    {name}
                </span>
            </motion.div>
            <style>{`
                .skill-card-inner:hover .hover-glow-layer {
                    opacity: 1;
                }
            `}</style>
        </motion.li>
    );
};

const Skills = () => {
    const skills = [
        { name: 'C++', icon: 'https://skillicons.dev/icons?i=cpp&theme=dark' },
        { name: 'Flutter', icon: 'https://skillicons.dev/icons?i=flutter&theme=dark' },
        { name: 'Postman', icon: 'https://img.icons8.com/dusk/64/postman-api.png' },
        { name: 'Java', icon: 'https://skillicons.dev/icons?i=java&theme=dark' },
        { name: 'Dart', icon: 'https://skillicons.dev/icons?i=dart&theme=dark' },
        { name: 'Jira', icon: 'https://api.iconify.design/devicon/jira.svg' },
        { name: 'HTML', icon: 'https://skillicons.dev/icons?i=html&theme=dark' },
        { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js&theme=dark' },
        { name: 'CSS', icon: 'https://skillicons.dev/icons?i=css&theme=dark' },
        { name: 'React', icon: 'https://skillicons.dev/icons?i=react&theme=dark' },
        { name: 'Git', icon: 'https://skillicons.dev/icons?i=git&theme=dark' },
        { name: 'SQL', icon: 'https://skillicons.dev/icons?i=mysql&theme=dark' }
    ];

    return (
        <section id="skills" className="skills-section" style={{ padding: '10rem 0' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
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
                        marginBottom: '2rem'
                    }}>
                        <Sparkles size={14} /> TECH STACK
                    </div>
                    <h2 style={{
                        fontSize: '3.5rem',
                        fontWeight: 900,
                        marginBottom: '1.5rem',
                        color: '#fff',
                        letterSpacing: '-1px'
                    }}>
                        Expertise & Tools
                    </h2>
                    <p style={{
                        color: '#a1a1aa',
                        fontSize: '1.1rem',
                        maxWidth: '550px',
                        margin: '0 auto',
                        lineHeight: '1.7',
                        fontWeight: 500
                    }}>
                        A curated selection of technologies and tools I use to build scalable, high-performance digital solutions.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
                    gap: '1.5rem',
                }}>
                    {skills.map((skill, index) => (
                        <SkillCard
                            key={index}
                            {...skill}
                            delay={index * 0.04}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
