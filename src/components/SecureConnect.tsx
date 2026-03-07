"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Lock, Video, Mic, PhoneOff, Shield } from "lucide-react";

export default function SecureConnect() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "center center"],
    });
    const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
    const borderRadius = useTransform(scrollYProgress, [0, 1], [48, 24]);

    return (
        <section ref={sectionRef} className="py-12 px-6 lg:px-10">
            <motion.div
                className="max-w-[1400px] mx-auto overflow-hidden"
                style={{ scale, borderRadius }}
            >
                {/* Header area */}
                <div className="bg-surface rounded-t-[2rem] px-8 md:px-14 pt-14 pb-10">
                    <motion.div
                        className="max-w-2xl"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                                <Video className="w-5 h-5 text-accent" />
                            </div>
                            <span className="text-sm font-semibold text-muted uppercase tracking-wider">
                                Secure video
                            </span>
                        </div>
                        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.08] text-foreground mb-4">
                            Virtual tours,<br className="hidden md:block" /> real connections.
                        </h2>
                        <p className="text-muted text-lg leading-relaxed max-w-xl mb-4">
                            Meet your future roommates and take live virtual tours.
                            End-to-end encrypted, between verified students only.
                        </p>
                        <div className="inline-flex items-center gap-2 text-sage bg-sage/10 px-4 py-2 rounded-full">
                            <Lock className="w-4 h-4" />
                            <span className="text-sm font-semibold">End-to-end encrypted</span>
                        </div>
                    </motion.div>
                </div>

                {/* Video mockup */}
                <div className="bg-[#1A1A1A] rounded-b-[2rem] overflow-hidden relative h-[350px] md:h-[500px] flex p-3 md:p-4 gap-3 md:gap-4">
                    {/* Left Feed */}
                    <motion.div
                        className="flex-1 rounded-2xl overflow-hidden relative bg-black group"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                            style={{
                                backgroundImage:
                                    "url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop')",
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex items-center gap-3 z-10">
                            <div className="w-10 h-10 rounded-full border-2 border-white/20 overflow-hidden bg-gray-800 hidden sm:block">
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{
                                        backgroundImage:
                                            "url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop')",
                                    }}
                                />
                            </div>
                            <div>
                                <h4 className="text-white font-medium text-lg drop-shadow-md leading-tight">
                                    Sarah M.
                                </h4>
                                <div className="flex items-center gap-1.5 bg-sage/20 px-2 py-0.5 rounded text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm mt-1 w-fit">
                                    <Shield className="w-3 h-3 text-sage" />
                                    Verified Host
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Feed */}
                    <motion.div
                        className="flex-1 rounded-2xl overflow-hidden relative bg-black group"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 transform scale-x-[-1]"
                            style={{
                                backgroundImage:
                                    "url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop')",
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 flex items-center gap-3 z-10 flex-row-reverse text-right">
                            <div className="w-10 h-10 rounded-full border-2 border-white/20 overflow-hidden bg-gray-800 hidden sm:flex items-center justify-center text-white font-bold text-xs shrink-0">
                                You
                            </div>
                            <div>
                                <h4 className="text-white font-medium text-lg drop-shadow-md leading-tight">
                                    Alex
                                </h4>
                                <span className="text-white/80 text-xs font-medium drop-shadow-md">
                                    Looking for Fall term
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Timer */}
                    <motion.div
                        className="absolute top-6 left-1/2 -translate-x-1/2 z-10"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 border border-white/10">
                            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            <span className="text-sm font-semibold text-white tracking-widest tabular-nums">
                                12:44
                            </span>
                        </div>
                    </motion.div>

                    {/* Controls */}
                    <motion.div
                        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3 md:gap-4 p-2 rounded-full bg-black/40 backdrop-blur-lg border border-white/10"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, type: "spring" }}
                    >
                        {[
                            { Icon: Mic, bg: "bg-white/15 hover:bg-white/25" },
                            { Icon: Video, bg: "bg-white/15 hover:bg-white/25" },
                            { Icon: PhoneOff, bg: "bg-accent hover:bg-accent/90 shadow-[0_0_20px_rgba(232,93,74,0.4)]" },
                        ].map(({ Icon, bg }, i) => (
                            <motion.button
                                key={i}
                                className={`w-12 h-12 md:w-14 md:h-14 rounded-full ${bg} flex items-center justify-center text-white transition cursor-pointer`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon className="w-5 h-5 md:w-6 md:h-6" />
                            </motion.button>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
