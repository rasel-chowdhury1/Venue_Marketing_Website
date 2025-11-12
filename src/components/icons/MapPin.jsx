

const MapPin = ({ className = 'w-6 h-6', style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round"
    className={className} style={style}>
    <path d="M12 12V2a4 4 0 0 1 4 4v6l-2 2-2-2z" />
    <path d="M10 12V2a4 4 0 0 0-4 4v6l2 2 2-2z" />
    <path d="M22 17.5a6.5 6.5 0 0 1-6.5 6.5h-5A6.5 6.5 0 0 1 4 17.5v-1A4.5 4.5 0 0 1 8.5 12h7A4.5 4.5 0 0 1 20 16.5z" />
  </svg>
);

export default MapPin;
