import React from 'react';

interface IconProps {
  className?: string;
}

export const GithubIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LinkedinIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const MailIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

// Floating elements for Hero section
export const PaperPlaneIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
        <path d="M22 12L3 20l3.52-8L3 4l19 8zM6.52 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);

export const BoatIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
        <path d="M12 15.132l-3.333 4.166A.6.6 0 018 19H4.2a.6.6 0 01-.557-.83l3.333-6.667a.6.6 0 01.557-.37H12m0-3.264V3.4a.6.6 0 01.6-.6H18a.6.6 0 01.6.6v3.468a.6.6 0 01-.6.6h-5.4a.6.6 0 01-.6-.6zm0 3.264l3.333 4.166a.6.6 0 00.667.164L20.4 17.5a.6.6 0 00.157-1.012L12 7.868zM12 15.132V7.868" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);

export const NeuralNetworkIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
        <path d="M18 18.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18 8.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM6 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" stroke="currentColor" strokeWidth="1.5"></path>
        <path d="M16.5 7.5l-9 3M16.5 17.5l-9-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);

export const BrainIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
        <path d="M9.957 4.34C11.994 3.49 14.006 3.49 16.043 4.34C17.436 4.93 18.73 5.74 19.82 6.83C21.46 8.47 22 10.69 22 12.5C22 15.31 20.69 17.53 19.82 19.17C18.73 20.26 17.436 21.07 16.043 21.66C14.006 22.51 11.994 22.51 9.957 21.66C8.564 21.07 7.27 20.26 6.18 19.17C4.54 17.53 4 15.31 4 13.5C4 10.69 5.31 8.47 6.18 6.83C7.27 5.74 8.564 4.93 9.957 4.34Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M12 22C12 18.13 10.84 15.33 9 13C7.16 10.67 8 8.13 8 6.5C8 4.84 9.35 4 10.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M12 22C12 18.13 13.16 15.33 15 13C16.84 10.67 16 8.13 16 6.5C16 4.84 14.65 4 13.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);

export const LightbulbIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
        <path d="M12 2C9.23858 2 7 4.23858 7 7C7 8.34758 7.55067 9.58416 8.47413 10.4566C9.69233 11.642 10.0343 13.3333 10 15H14C13.9657 13.3333 14.3077 11.642 15.5259 10.4566C16.4493 9.58416 17 8.34758 17 7C17 4.23858 14.7614 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M14 19H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M12 22L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M10 15V17C10 18.1046 10.8954 19 12 19C13.1046 19 14 18.1046 14 17V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);


export const CodeIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
        <path d="M7 8L3 12L7 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M17 8L21 12L17 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M14 4L10 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);

export const AtomIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="1.5"></path>
        <path d="M12 12a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="1.5"></path>
        <path d="M19.628 17.625c-1.741-6.22-8.517-6.22-10.256 0M19.628 6.375c-1.741 6.22-8.517 6.22-10.256 0" stroke="currentColor" strokeWidth="1.5"></path>
    </svg>
);

export const GraphIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
        <path d="M20 20H4V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M4 16.5L12 9l3 4 4.5-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);

// FIX: Add SunIcon and MoonIcon for ThemeToggle component.
export const SunIcon: React.FC<IconProps> = ({ className }) => (
    <svg
        className={className}
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="currentColor">
        <path d="M12 18a6 6 0 100-12 6 6 0 000 12zM22 12h-2M4 12H2M12 4V2M12 22v-2M19.071 4.929l-1.414 1.414M6.343 17.657l-1.414 1.414M19.071 19.071l-1.414-1.414M6.343 6.343l-1.414-1.414" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);

export const MoonIcon: React.FC<IconProps> = ({ className }) => (
    <svg
        className={className}
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="currentColor">
        <path d="M3 11.507a9.493 9.493 0 0018 4.219c-8.507 0-12.726-4.22-12.726-12.726A9.494 9.494 0 003 11.507z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);

export const RocketIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
        <path d="M9 21.5a2.5 2.5 0 01-2.5-2.5V18h5v1a2.5 2.5 0 01-2.5 2.5zM9 18H5.5a2.5 2.5 0 01-2.5-2.5V9.45c0-.8.4-1.55.9-2.05L8 3.5v14.5zm0-14.5L12.05 2c.5-.5 1.25-.5 1.75 0l4.05 3.9c.5.5.9 1.25.9 2.05v6.05a2.5 2.5 0 01-2.5 2.5H9V3.5zm7.5 14.5a2.5 2.5 0 01-2.5-2.5V18h5v1a2.5 2.5 0 01-2.5 2.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);