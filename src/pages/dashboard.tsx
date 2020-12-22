import { Master, MainTemplate, Button } from '@numly/components';

const Dashboard = () => {
  return (
    <MainTemplate title="Welcome" variant="dashboard-container">
        <div className="stat-section">
            <div className="generate card">
                <span className="card-title">Generated</span>
                <span className="card-data">0</span>
            </div>
            <div className="last-used card">
                <span className="card-title">Last Used</span>
                <span className="card-data">---</span>
            </div>
        </div>
        <div className="fav-section">
            <h3 className="m-0">Favorites</h3>
            <p>You haven't added any yet, Click the button below to get started</p>
            <Button variant="button" isLink={true} label="Check History" />
        </div>
    </MainTemplate>
  );
};

Dashboard.Layout = Master;

export default Dashboard;
