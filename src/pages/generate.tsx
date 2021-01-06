import { Master, MainTemplate, Button } from '@numly/components';
import ProgressBar from '@ramonak/react-progress-bar';

const Generate = () => {
  return (
    <MainTemplate title="Generate" variant="generate-container">
      <div className="setup-section">
        <div className="setup card">
          <span className="card-title">Setup</span>
          <form className="form-input">
            <div className="form-group-row">
              <div className="input-group">
                <label htmlFor="min">Min</label>
                <input id="min" type="number" required min="1" />
              </div>
              <div className="input-group">
                <label htmlFor="max">Max</label>
                <input id="max" type="number" required min="1" />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="nos-pick">How many to pick?</label>
              <input id="nos-pick" type="number" min="1" />
            </div>
            <Button variant="button" isLink={false} label="Start" />
          </form>
        </div>
        <div className="picking card">
          <ProgressBar
            completed={60}
            height="30px"
            borderRadius="999px"
            bgcolor="#00A7E1"
            labelColor="#00A7E1"
            margin="0px 0px 29px 0px"
          />
          <span className="card-title">No Selected Numbers</span>
          <p>Complete setup to generate numbers.</p>
        </div>
      </div>
    </MainTemplate>
  );
};

Generate.Layout = Master;

export default Generate;
