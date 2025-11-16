import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { GithubIcon, LinkedinIcon, PaperPlaneIcon, BoatIcon, NeuralNetworkIcon, BrainIcon, LightbulbIcon, CodeIcon, AtomIcon, GraphIcon, RocketIcon } from './icons';

const FloatingElement: React.FC<{ children: React.ReactNode; className: string; style: React.CSSProperties }> = ({ children, className, style }) => (
    <div className={`absolute text-gray-500 dark:text-gray-400 opacity-40 dark:opacity-40 ${className}`} style={style}>
        {children}
    </div>
);

const Hero: React.FC = () => {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#111111]">
            {/* Floating Elements */}
            <div id="floating-elements" className="absolute inset-0 z-10">
                <style>
                    {`
                    @keyframes float1 { 0% { transform: translate(0, 0) rotate(0deg); } 25% { transform: translate(20px, -40px) rotate(5deg); } 50% { transform: translate(50px, -70px) rotate(10deg); } 75% { transform: translate(30px, -30px) rotate(5deg); } 100% { transform: translate(0, 0) rotate(0deg); } }
                    @keyframes float2 { 0% { transform: translate(0, 0) rotate(0deg); } 25% { transform: translate(-30px, 20px) rotate(-5deg); } 50% { transform: translate(-70px, 50px) rotate(-10deg); } 75% { transform: translate(-40px, 30px) rotate(-5deg); } 100% { transform: translate(0, 0) rotate(0deg); } }
                    @keyframes float3 { 0% { transform: translate(0, 0) rotate(0deg); } 25% { transform: translate(10px, 40px) rotate(-5deg); } 50% { transform: translate(25px, 90px) rotate(-15deg); } 75% { transform: translate(15px, 50px) rotate(-10deg); } 100% { transform: translate(0, 0) rotate(0deg); } }
                    @keyframes float4 { 0% { transform: translate(0, 0) rotate(0deg); } 25% { transform: translate(-40px, -10px) rotate(10deg); } 50% { transform: translate(-90px, -25px) rotate(20deg); } 75% { transform: translate(-50px, -15px) rotate(10deg); } 100% { transform: translate(0, 0) rotate(0deg); } }
                    @keyframes float5 { 0% { transform: translate(0, 0) rotate(0deg); } 25% { transform: translate(30px, -10px) rotate(-2deg); } 50% { transform: translate(70px, -25px) rotate(-5deg); } 75% { transform: translate(40px, -15px) rotate(-2deg); } 100% { transform: translate(0, 0) rotate(0deg); } }
                    @keyframes float6 { 0% { transform: translate(0, 0) rotate(0deg); } 25% { transform: translate(-10px, 30px) rotate(5deg); } 50% { transform: translate(-25px, 70px) rotate(10deg); } 75% { transform: translate(-15px, 40px) rotate(5deg); } 100% { transform: translate(0, 0) rotate(0deg); } }
                    @keyframes float7 { 0% { transform: translate(0, 0) rotate(0deg); } 25% { transform: translate(25px, 25px) rotate(2deg); } 50% { transform: translate(60px, 60px) rotate(5deg); } 75% { transform: translate(30px, 30px) rotate(2deg); } 100% { transform: translate(0, 0) rotate(0deg); } }
                    @keyframes float8 { 0% { transform: translate(0, 0) rotate(0deg); } 25% { transform: translate(-25px, -25px) rotate(-2deg); } 50% { transform: translate(-60px, -60px) rotate(-5deg); } 75% { transform: translate(-30px, -30px) rotate(-2deg); } 100% { transform: translate(0, 0) rotate(0deg); } }
                    @keyframes float9 { 0% { transform: translate(0, 0) rotate(0deg); } 25% { transform: translate(15px, -15px) rotate(4deg); } 50% { transform: translate(40px, -40px) rotate(8deg); } 75% { transform: translate(20px, -20px) rotate(4deg); } 100% { transform: translate(0, 0) rotate(0deg); } }
                    @keyframes float10 { 0% { transform: translate(0, 0) rotate(0deg); } 25% { transform: translate(20px, 20px) rotate(5deg); } 50% { transform: translate(50px, 50px) rotate(10deg); } 75% { transform: translate(25px, 25px) rotate(5deg); } 100% { transform: translate(0, 0) rotate(0deg); } }
                    @keyframes float11 { 0% { transform: translate(0, 0) rotate(0deg); } 25% { transform: translate(-20px, 20px) rotate(-6deg); } 50% { transform: translate(-50px, 50px) rotate(-12deg); } 75% { transform: translate(-25px, 25px) rotate(-6deg); } 100% { transform: translate(0, 0) rotate(0deg); } }
                    @keyframes float12 { 0% { transform: translate(0, 0) rotate(0deg); } 25% { transform: translate(20px, -20px) rotate(9deg); } 50% { transform: translate(50px, -50px) rotate(18deg); } 75% { transform: translate(25px, -25px) rotate(9deg); } 100% { transform: translate(0, 0) rotate(0deg); } }
                    @keyframes float13 { 0% { transform: translate(0, 0) rotate(0deg); } 25% { transform: translate(30px, -10px) rotate(-12deg); } 50% { transform: translate(80px, -30px) rotate(-25deg); } 75% { transform: translate(40px, -15px) rotate(-12deg); } 100% { transform: translate(0, 0) rotate(0deg); } }
                    @keyframes float14 { 0% { transform: translate(0, 0) rotate(0deg); } 25% { transform: translate(-10px, -30px) rotate(12deg); } 50% { transform: translate(-30px, -80px) rotate(25deg); } 75% { transform: translate(-15px, -40px) rotate(12deg); } 100% { transform: translate(0, 0) rotate(0deg); } }
                    `}
                </style>
                <FloatingElement className="w-16 h-16" style={{ top: '15%', left: '10%', animation: 'float1 25s -2s infinite ease-in-out' }}>
                    <PaperPlaneIcon />
                </FloatingElement>
                <FloatingElement className="w-24 h-24" style={{ top: '20%', left: '80%', animation: 'float2 30s -5s infinite ease-in-out' }}>
                    <NeuralNetworkIcon />
                </FloatingElement>
                <FloatingElement className="w-16 h-16" style={{ top: '70%', left: '15%', animation: 'float3 35s 0s infinite ease-in-out' }}>
                    <BoatIcon />
                </FloatingElement>
                <FloatingElement className="w-28" style={{ top: '80%', left: '75%', animation: 'float4 28s -8s infinite ease-in-out' }}>
                    <span className="text-2xl font-mono">ƒ(x) = max(0,x)</span>
                </FloatingElement>
                <FloatingElement className="w-40" style={{ top: '50%', left: '45%', animation: 'float5 22s -1s infinite ease-in-out' }}>
                    <span className="text-2xl font-mono">σ(z) = 1 / (1 + e⁻ᶻ)</span>
                </FloatingElement>
                <FloatingElement className="w-48" style={{ top: '10%', left: '40%', animation: 'float6 32s -12s infinite ease-in-out' }}>
                     <span className="text-2xl font-mono">P(i) = eᶻᵢ / Σ eᶻⱼ</span>
                </FloatingElement>
                <FloatingElement className="w-20 h-20" style={{ top: '55%', left: '85%', animation: 'float7 26s -4s infinite ease-in-out' }}>
                    <BrainIcon />
                </FloatingElement>
                <FloatingElement className="w-16 h-16" style={{ top: '85%', left: '40%', animation: 'float8 33s -7s infinite ease-in-out' }}>
                    <LightbulbIcon />
                </FloatingElement>
                <FloatingElement className="w-20 h-20" style={{ top: '40%', left: '10%', animation: 'float9 29s -11s infinite ease-in-out' }}>
                    <CodeIcon />
                </FloatingElement>
                <FloatingElement className="w-16 h-16" style={{ top: '50%', left: '20%', animation: 'float10 31s -3s infinite ease-in-out' }}>
                    <AtomIcon />
                </FloatingElement>
                <FloatingElement className="w-20 h-20" style={{ top: '75%', left: '55%', animation: 'float11 27s -9s infinite ease-in-out' }}>
                    <GraphIcon />
                </FloatingElement>
                <FloatingElement className="w-32" style={{ top: '30%', left: '65%', animation: 'float12 34s -6s infinite ease-in-out' }}>
                    <span className="text-2xl font-mono">∇J(θ)</span>
                </FloatingElement>
                <FloatingElement className="w-16 h-16" style={{ top: '65%', left: '80%', animation: 'float13 24s -10s infinite ease-in-out' }}>
                    <RocketIcon />
                </FloatingElement>
                <FloatingElement className="w-32" style={{ top: '60%', left: '5%', animation: 'float14 36s 0s infinite ease-in-out' }}>
                    <span className="text-2xl font-mono">E = mc²</span>
                </FloatingElement>
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-4">
                <h1 className="font-grotesk text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-gray-50 tracking-tighter">
                    Parth Kale
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
                    AI & Software Engineer crafting intelligent, scalable, and user-centric solutions.
                </p>
                <div className="mt-8 flex justify-center items-center space-x-6">
                    <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                        <GithubIcon className="w-7 h-7" />
                    </a>
                    <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                        <LinkedinIcon className="w-7 h-7" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;