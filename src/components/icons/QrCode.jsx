const QrCode = ({ className = 'w-6 h-6', style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="8" height="8" rx="1"/>
    <rect x="14" y="2" width="8" height="8" rx="1"/>
    <rect x="2" y="14" width="8" height="8" rx="1"/>
    <path d="M15 15h2"/><path d="M21 15h1"/><path d="M18 15v2"/><path d="M18 21v1"/><path d="M16 16v-2"/><path d="M22 18h-8"/><path d="M18 22v-2"/>
  </svg>
);

export default QrCode;  