import React from 'react';

const PRIMARY_COLOR = '#075B5D';
const ACCENT_COLOR = '#ADD9DA';

// Icons
const BarChart = ({ className = 'w-6 h-6', style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="20" x2="12" y2="10"/>
    <line x1="18" y1="20" x2="18" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="16"/>
  </svg>
);
const Bell = ({ className = 'w-6 h-6', style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path d="M18.3 19.3c-1.3-.7-2.6-.9-4-.9H9.7c-1.4 0-2.7.2-4 .9"/>
    <path d="M12 22a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2z"/>
    <path d="M5 8a7 7 0 0 1 14 0v9H5z"/>
  </svg>
);
const Target = ({ className = 'w-6 h-6', style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);
const CheckSquare = ({ className = 'w-6 h-6', style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <polyline points="9 11 12 14 22 4"/>
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
  </svg>
);

// Features Data
const dashboardFeatures = [
  { icon: BarChart, title: "User Statistics & Demographics", description: "Understand who visits your venue page with real-time stats and demographic breakdown by age." },
  { icon: Bell, title: "Targeted Notifications", description: "Send personalized notifications to target users based on their subscription interests and location." },
  { icon: Target, title: "Advanced Marketing Campaigns", description: "Leverage subscription-based marketing tools to promote your venue to a wider, relevant audience." },
  { icon: CheckSquare, title: "Monthly Performance Reports", description: "Receive comprehensive reports detailing user engagement, booking trends, and revenue growth." },
];

// Button Component
const PrimaryButton = ({ children, className = '', ...props }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      className={`px-6 py-3 rounded-xl font-semibold ${className}`}
      style={{ backgroundColor: hover ? '#054546' : PRIMARY_COLOR, color: 'white' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...props}
    >{children}</button>
  );
};

const CreatorTools = () => (
  <section id="creator-tools" className="py-16 md:py-24 bg-gray-900 text-white">
    <div className="container mx-auto px-4 max-w-7xl text-center">
      <span className="inline-block px-4 py-1 text-sm font-semibold rounded-full uppercase tracking-wider" style={{ backgroundColor: PRIMARY_COLOR }}>For Businesses</span>
      <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Empower Your Venue. Maximize Your Reach.</h2>
      <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
        Become a Venue Creator and gain access to a powerful dashboard designed for growth, analytics, and precision marketing.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {dashboardFeatures.map((f, i) => (
          <div key={i} className="flex gap-4 p-6 bg-gray-800 rounded-xl shadow-lg">
            <f.icon className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: ACCENT_COLOR }} />
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-gray-400">{f.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <PrimaryButton className="px-8 py-3">Register as a Venue Creator</PrimaryButton>
      </div>
    </div>
  </section>
);

export default CreatorTools;