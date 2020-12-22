import { Master, MainTemplate, Button } from '@numly/components';

const History = () => {
  return (
    <MainTemplate title="History" variant="history-container">
        <div className="list-section">
            <p>You haven't generated any yet, Click the button below to get started</p>
            <Button variant="button" href={"/generate"} isLink={true} label="Generate Now" />
        </div>
    </MainTemplate>
  );
};

History.Layout = Master;

export default History;
