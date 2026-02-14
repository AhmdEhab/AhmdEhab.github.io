import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Sparkles, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (response.ok) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="contact" style={{ padding: '8rem 0' }}>
            <div className="container">
                <motion.div
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 1.25rem', borderRadius: '100px', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '1.5rem' }}>
                        <Sparkles size={14} /> GET IN TOUCH
                    </div>
                    <h2 style={{ marginBottom: '1rem', textAlign: 'center' }}>Let's Build Something Great</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                        Whether you have a project in mind or just want to say hi, my inbox is always open.
                    </p>
                </motion.div>

                <motion.div
                    className="card"
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        padding: '4rem',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                        border: '1px solid var(--glass-border-bright)'
                    }}
                >
                    <form
                        id="contactForm"
                        action="https://formspree.io/f/mandwvke"
                        method="POST"
                        onSubmit={handleSubmit}
                        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
                    >
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                            <div style={inputGroupStyle}>
                                <label style={labelStyle}><Mail size={14} /> YOUR EMAIL</label>
                                <input type="email" name="user_email_x" placeholder="name@example.com" required style={inputStyle} />
                            </div>
                            <div style={inputGroupStyle}>
                                <label style={labelStyle}>NAME</label>
                                <input type="text" name="user_name_x" placeholder="Full Name" required style={inputStyle} />
                            </div>
                        </div>

                        <div style={inputGroupStyle}>
                            <label style={labelStyle}><MessageSquare size={14} /> MESSAGE</label>
                            <textarea name="user_message_x" rows="6" placeholder="Tell me about your project..." required style={{ ...inputStyle, resize: 'none' }} />
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
                            <motion.button
                                type="submit"
                                className="btn primary"
                                disabled={status === 'sending'}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{ minWidth: '200px', padding: '1.25rem 2.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
                            >
                                {status === 'sending' ? 'Sending...' : 'Transmit Message'}
                                <Send size={18} />
                            </motion.button>

                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <AnimatePresence>
                                    {status === 'success' && (
                                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} style={{ color: '#4ade80', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <CheckCircle size={18} /> Sent Successfully
                                        </motion.div>
                                    )}
                                    {status === 'error' && (
                                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} style={{ color: '#f87171', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <AlertCircle size={18} /> Transmission Failed
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        <input type="text" name="hidden_field_x" style={{ display: 'none' }} />
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

const inputGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
};

const labelStyle = {
    fontSize: '0.75rem',
    fontWeight: 800,
    color: 'var(--text-tertiary)',
    letterSpacing: '1.5px',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
};

const inputStyle = {
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid var(--glass-border)',
    color: 'var(--text-primary)',
    padding: '1.25rem',
    borderRadius: '16px',
    fontSize: '1rem',
    fontWeight: 500,
    outline: 'none',
    fontFamily: 'inherit',
    transition: 'var(--transition)'
};

export default Contact;
