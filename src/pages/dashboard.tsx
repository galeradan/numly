import { Master, MainTemplate } from '@numly/components';

const Dashboard = () => {
  return (
    <MainTemplate title="Welcome" variant="dashboard">
        <div className="stat-container">
            <div className="generate card">
                <h3>Generated</h3>
            </div>
            <div className="last-used card">
                <h3>Last Used</h3>
            </div>
        </div>
        <div className="fav-container">
            <h3>Favorites</h3>
            <p>You haven't added any yet, Click the button below to get started</p>
            <button>Check History</button>
        </div>
    </MainTemplate>
  );
};

Dashboard.Layout = Master;

export default Dashboard;
