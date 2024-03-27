const Header = () => {
  return (
    <>
      <div className="header_top">
        <div className="search">
          <img src="/search.svg" />
          <input type="text" placeholder="Search..." />
        </div>
        <div className="icons">
          <img src="/Icon-indicator.svg" />
          <img src="/calendar.svg" />
          <img src="/layout-grid.svg" />
          <img src="/Avatar.png" />
        </div>
      </div>
      <div className="header_mobile">
        <img src="/Branding.svg" />
        <img src="/Avatar.png" style={{cursor:"pointer"}}/>
      </div>
    </>
  );
};

export default Header;
