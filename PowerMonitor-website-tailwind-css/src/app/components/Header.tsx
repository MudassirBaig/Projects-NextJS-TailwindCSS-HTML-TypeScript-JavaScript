const Header = () => {
    return (
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white rounded-t-lg">
        {/* Logo Section */}

        <div className="flex-shrink-0">
        <a href="/" className="block">
          <img src="./images/energy-monitor-logo-300x166.png" alt="Logo" className="h-20 w-auto opacity-70 transition-opacity duration-300 "  />
          </a>
        </div>
  
        {/* Title Section */}
        <h1 className="text-3xl font-bold text-white text-center flex-grow mx-4 font-sans">
          Power Monitoring Dashboard
        </h1>
       
       
      </header>
    );
  };
  
  export default Header;