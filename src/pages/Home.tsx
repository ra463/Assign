import Chart from "../components/Chart";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import TableData from "../components/TableData";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="dash">
        <div className="search">
          <img src="/search.svg" />
          <input type="text" placeholder="Search..." />
        </div>
        <div className="banner">
          <div className="title">
            <h3>Unlock premium stats</h3>
            <span>Get up to 10TB of storage for a limited time</span>
          </div>
          <button>
            <img src="/bolt.svg" />
            Upgrade
          </button>
        </div>
        <div className="cards">
          <StatCard
            title="Revenue"
            value="$56,945"
            increase="+45%"
            percentage="From 4.6%"
          />
          <StatCard
            title="Users"
            value="76.8%"
            increase="-1.7%"
            percentage="From 4.6%"
          />
          <StatCard
            title="New Signups"
            value="116"
            increase="0.00"
            percentage=""
          />
          <StatCard
            title="Retention"
            value="$12.67%"
            increase="+0.6%"
            percentage="From 4.6%"
          />
        </div>
        <div className="chart">
          <div className="head">Performance</div>
          <div className="ch">
            <Chart />
          </div>
        </div>
        <div className="chart">
          <div className="head">Installed apps</div>
          <div className="ch">
            <TableData />
          </div>
          <div className="foot">
            <img src="/dots.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
