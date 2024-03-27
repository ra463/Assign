import "../utils/styles.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src="/Branding.svg" />
      <div className="menu">
        <p>D A S H B O A R D</p>
        <div className="item">
          <div className="header">
            <span>
              <img src="/Stats.svg" />
              Dashboard
            </span>
            <img src="/arrow.svg" style={{ cursor: "pointer" }} />
          </div>
          <div className="content">
            <ul className="upper_content">
              <li className="active">Analytics</li>
              <li>Finance</li>
              <li>Job Board</li>
            </ul>
          </div>
          <div className="more">
            <ul className="lower_content">
              <li>
                <span>
                  <img src="/email.svg" />
                  Messages
                </span>
                <img src="/chevron-down.svg" />
              </li>
              <li>
                <span>
                  <img src="/user.svg" />
                  Friends
                </span>
                <img src="/chevron-down.svg" />
              </li>
              <li>
                <span>
                  <img src="/layout-grid.svg" />
                  Apps
                </span>
                <img src="/chevron-down.svg" />
              </li>
            </ul>

            <p>P A G E S</p>
            <ul className="lower_content">
              <li>
                <span>
                  <img src="/Support.svg" />
                  Help Center
                </span>
                <img src="/chevron-down.svg" />
              </li>
              <li>
                <span>
                  <img src="/Folder.svg" />
                  File Manager
                </span>
                <img src="/chevron-down.svg" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer>
        <img src="/Settings.svg" />
        <img src="/Union.svg" />
        <img src="/globe.svg" />
      </footer>
    </div>
  );
};

export default Sidebar;
