import React from 'react';

export const Icon = ({ name, size = 20, className = "" }) => {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className
  };

  switch (name) {
    case 'github':
      return (
        <svg {...props}>
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...props}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case 'mail':
      return (
        <svg {...props}>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      );
    case 'phone':
      return (
        <svg {...props}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    case 'map-pin':
      return (
        <svg {...props}>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case 'download':
      return (
        <svg {...props}>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      );
    case 'external':
      return (
        <svg {...props}>
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      );
    case 'code':
      return (
        <svg {...props}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case 'graduation':
      return (
        <svg {...props}>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      );
    case 'book':
      return (
        <svg {...props}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      );
    case 'sparkles':
      return (
        <svg {...props}>
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        </svg>
      );
    case 'check':
      return (
        <svg {...props}>
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );
    case 'menu':
      return (
        <svg {...props}>
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      );
    case 'close':
      return (
        <svg {...props}>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      );
    case 'arrow-right':
      return (
        <svg {...props}>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      );
    case 'layers':
      return (
        <svg {...props}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case 'cpu':
      return (
        <svg {...props}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" />
          <line x1="15" y1="20" x2="15" y2="23" />
          <line x1="20" y1="9" x2="23" y2="9" />
          <line x1="20" y1="14" x2="23" y2="14" />
          <line x1="1" y1="9" x2="4" y2="9" />
          <line x1="1" y1="14" x2="4" y2="14" />
        </svg>
      );
    case 'database':
      return (
        <svg {...props}>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
};

export const SkillBadgeIcon = ({ name, size = 32 }) => {
  switch (name.toLowerCase()) {
    case 'c':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="60" fill="#1e293b" stroke="#38bdf8" strokeWidth="4"/>
          <path d="M78 44C73 40 66 38 58 38C44 38 34 49 34 64C34 79 44 90 58 90C66 90 73 88 78 84L84 94C76 99 67 102 56 102C36 102 21 86 21 64C21 42 36 26 56 26C67 26 76 29 84 34L78 44Z" fill="#38bdf8"/>
        </svg>
      );
    case 'java':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="60" fill="#1e293b" stroke="#f97316" strokeWidth="4"/>
          <path d="M52 82C52 82 46 84 56 86C68 88 77 87 86 82C86 82 89 85 80 88C68 91 50 90 44 85C38 80 47 77 52 82Z" fill="#f97316"/>
          <path d="M48 71C48 71 40 74 51 76C63 78 76 77 88 72C88 72 90 75 80 78C67 81 48 81 40 75C34 70 43 67 48 71Z" fill="#38bdf8"/>
          <path d="M64 24C60 36 50 44 50 54C50 63 56 68 64 74C60 67 57 63 58 58C59 51 68 44 68 34C68 30 67 27 64 24Z" fill="#f97316"/>
          <path d="M74 38C71 45 66 50 66 57C66 63 70 67 76 71C73 66 71 63 72 59C73 54 79 49 79 42C79 39 78 37 74 38Z" fill="#38bdf8"/>
        </svg>
      );
    case 'python':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="60" fill="#1e293b" stroke="#38bdf8" strokeWidth="4"/>
          <path d="M63 26C45 26 46 34 46 34L46 42L64 42L64 45L37 45C29 45 23 52 23 63C23 74 28 79 35 79L40 79L40 72C40 64 47 57 55 57L73 57C80 57 85 52 85 45L85 37C85 30 79 26 63 26ZM55 32C57 32 59 34 59 36C59 38 57 40 55 40C53 40 51 38 51 36C51 34 53 32 55 32Z" fill="#38bdf8"/>
          <path d="M65 102C83 102 82 94 82 94L82 86L64 86L64 83L91 83C99 83 105 76 105 65C105 54 100 49 93 49L88 49L88 56C88 64 81 71 73 71L55 71C48 71 43 76 43 83L43 91C43 98 49 102 65 102ZM73 96C71 96 69 94 69 92C69 90 71 88 73 88C75 88 77 90 77 92C77 94 75 96 73 96Z" fill="#fbbf24"/>
        </svg>
      );
    case 'html':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="60" fill="#1e293b" stroke="#f97316" strokeWidth="4"/>
          <path d="M28 32L35 98L64 106L93 98L100 32H28Z" fill="#ea580c" opacity="0.8"/>
          <path d="M64 38V100L87 93L92 44H64V38Z" fill="#f97316"/>
          <path d="M42 48H86L85 58H54L55 68H84L82 84L64 89L46 84L45 74H55L56 78L64 80L72 78L73 74H44L42 48Z" fill="#ffffff"/>
        </svg>
      );
    case 'css':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="60" fill="#1e293b" stroke="#38bdf8" strokeWidth="4"/>
          <path d="M28 32L35 98L64 106L93 98L100 32H28Z" fill="#0284c7" opacity="0.8"/>
          <path d="M64 38V100L87 93L92 44H64V38Z" fill="#38bdf8"/>
          <path d="M42 48H86L85 58H54L55 68H84L82 84L64 89L46 84L45 74H55L56 78L64 80L72 78L73 74H44L42 48Z" fill="#ffffff"/>
        </svg>
      );
    case 'javascript':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <rect x="8" y="8" width="112" height="112" rx="28" fill="#facc15"/>
          <path d="M42 96C46 96 49 93 49 87V52H38V85C38 88 37 89 34 89C32 89 30 88 28 86L24 93C28 95 35 96 42 96ZM88 96C99 96 106 90 106 81C106 72 99 68 91 64C85 61 80 59 80 55C80 52 83 49 88 49C93 49 97 51 100 54L104 46C100 42 94 41 87 41C77 41 70 47 70 55C70 63 76 68 84 71C91 75 96 77 96 82C96 86 92 89 87 89C81 89 75 86 71 81L66 89C71 94 79 96 88 96Z" fill="#1e293b"/>
        </svg>
      );
    case 'react':
    case 'react.js':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="60" fill="#1e293b" stroke="#38bdf8" strokeWidth="4"/>
          <ellipse cx="64" cy="64" rx="42" ry="16" stroke="#38bdf8" strokeWidth="4" transform="rotate(30 64 64)"/>
          <ellipse cx="64" cy="64" rx="42" ry="16" stroke="#38bdf8" strokeWidth="4" transform="rotate(90 64 64)"/>
          <ellipse cx="64" cy="64" rx="42" ry="16" stroke="#38bdf8" strokeWidth="4" transform="rotate(150 64 64)"/>
          <circle cx="64" cy="64" r="7" fill="#38bdf8"/>
        </svg>
      );
    case 'express':
    case 'express.js':
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="60" fill="#1e293b" stroke="#a855f7" strokeWidth="4"/>
          <text x="64" y="74" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontSize="28" fontWeight="800" fill="#e2e8f0" textAnchor="middle">ex</text>
        </svg>
      );
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="60" fill="#1e293b" stroke="#818cf8" strokeWidth="4"/>
          <path d="M48 40L32 64L48 88M80 40L96 64L80 88" stroke="#818cf8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
  }
};
