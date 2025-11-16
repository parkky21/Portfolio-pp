import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { GithubIcon, LinkedinIcon, PaperPlaneIcon, BoatIcon, NeuralNetworkIcon, BrainIcon, LightbulbIcon, CodeIcon, AtomIcon, GraphIcon, RocketIcon } from './icons';

const FloatingElement: React.FC<{ children: React.ReactNode; className: string; style: React.CSSProperties }> = ({ children, className, style }) => (
    <div className={`absolute text-gray-400 opacity-50 ${className}`} style={style}>
        {children}
    </div>
);

const Hero: React.FC = () => {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#f7f7f7]">
            {/* Floating Elements */}
            <div id="floating-elements" className="absolute inset-0 z-10">
                <style>
                    {`
                    @keyframes float1 { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(50px, -70px) rotate(15deg); } }
                    @keyframes float2 { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(-70px, 50px) rotate(-10deg); } }
                    @keyframes float3 { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(25px, 90px) rotate(-15deg); } }
                    @keyframes float4 { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(-90px, -25px) rotate(20deg); } }
                    @keyframes float5 { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(70px, -25px) rotate(-5deg); } }
                    @keyframes float6 { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(-25px, 70px) rotate(10deg); } }
                    @keyframes float7 { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(60px, 60px) rotate(5deg); } }
                    @keyframes float8 { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(-60px, -60px) rotate(-5deg); } }
                    @keyframes float9 { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(40px, -40px) rotate(8deg); } }
                    @keyframes float10 { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(50px, 50px) rotate(10deg); } }
                    @keyframes float11 { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(-50px, 50px) rotate(-12deg); } }
                    @keyframes float12 { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(50px, -50px) rotate(18deg); } }
                    @keyframes float13 { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(80px, -30px) rotate(-25deg); } }
                    @keyframes float14 { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(-30px, -80px) rotate(25deg); } }
                    `}
                </style>
                <FloatingElement className="w-16 h-16" style={{ top: '15%', left: '10%', animation: 'float1 25s infinite ease-in-out' }}>
                    <PaperPlaneIcon />
                </FloatingElement>
                <FloatingElement className="w-24 h-24" style={{ top: '20%', left: '80%', animation: 'float2 30s infinite ease-in-out' }}>
                    <NeuralNetworkIcon />
                </FloatingElement>
                <FloatingElement className="w-16 h-16" style={{ top: '70%', left: '15%', animation: 'float3 35s infinite ease-in-out' }}>
                    <BoatIcon />
                </FloatingElement>
                <FloatingElement className="w-28" style={{ top: '80%', left: '75%', animation: 'float4 28s infinite ease-in-out' }}>
                    <span className="text-2xl font-mono">ƒ(x) = max(0,x)</span>
                </FloatingElement>
                <FloatingElement className="w-40" style={{ top: '50%', left: '45%', animation: 'float5 22s infinite ease-in-out' }}>
                    <span className="text-2xl font-mono">σ(z) = 1 / (1 + e⁻ᶻ)</span>
                </FloatingElement>
                <FloatingElement className="w-48" style={{ top: '10%', left: '40%', animation: 'float6 32s infinite ease-in-out' }}>
                     <span className="text-2xl font-mono">P(i) = eᶻᵢ / Σ eᶻⱼ</span>
                </FloatingElement>
                <FloatingElement className="w-20 h-20" style={{ top: '55%', left: '85%', animation: 'float7 26s infinite ease-in-out' }}>
                    <BrainIcon />
                </FloatingElement>
                <FloatingElement className="w-16 h-16" style={{ top: '85%', left: '40%', animation: 'float8 33s infinite ease-in-out' }}>
                    <LightbulbIcon />
                </FloatingElement>
                <FloatingElement className="w-20 h-20" style={{ top: '40%', left: '10%', animation: 'float9 29s infinite ease-in-out' }}>
                    <CodeIcon />
                </FloatingElement>
                <FloatingElement className="w-16 h-16" style={{ top: '50%', left: '20%', animation: 'float10 31s infinite ease-in-out' }}>
                    <AtomIcon />
                </FloatingElement>
                <FloatingElement className="w-20 h-20" style={{ top: '75%', left: '55%', animation: 'float11 27s infinite ease-in-out' }}>
                    <GraphIcon />
                </FloatingElement>
                <FloatingElement className="w-32" style={{ top: '30%', left: '65%', animation: 'float12 34s infinite ease-in-out' }}>
                    <span className="text-2xl font-mono">∇J(θ)</span>
                </FloatingElement>
                <FloatingElement className="w-16 h-16" style={{ top: '65%', left: '80%', animation: 'float13 24s infinite ease-in-out' }}>
                    <RocketIcon />
                </FloatingElement>
                <FloatingElement className="w-32" style={{ top: '60%', left: '5%', animation: 'float14 36s infinite ease-in-out' }}>
                    <span className="text-2xl font-mono">E = mc²</span>
                </FloatingElement>
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 tracking-tighter">
                    Parth Kale
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
                    AI & Software Engineer crafting intelligent, scalable, and user-centric solutions.
                </p>
                <div className="mt-8 flex justify-center items-center space-x-6">
                    <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors duration-300">
                        <GithubIcon className="w-7 h-7" />
                    </a>
                    <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors duration-300">
                        <LinkedinIcon className="w-7 h-7" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;