import { Master, MainTemplate } from '@numly/components';

const Dashboard = () => {
  return (
    <MainTemplate title="Welcome">
        <button>Welcome to Dashboard</button>
    </MainTemplate>
  );
};

Dashboard.Layout = Master;

export default Dashboard;
