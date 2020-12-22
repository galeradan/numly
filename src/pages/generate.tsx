import { Master, MainTemplate } from '@numly/components';

const Generate = () => {
  return (
    <MainTemplate title="Generate" variant="generate-container">
        <button>Generate Now</button>
    </MainTemplate>
  );
};

Generate.Layout = Master;

export default Generate;
