import './Features.scss';
import '../../../styles/shared.scss';
import Card from '../Card/Card';
import { features } from '../../../services/data';

export default function Features() {
  return (
    <div className="features">
      <div className="features__heading">
        <h1>Features</h1>
      </div>
      <div className="features__items">
        {features.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
      <div className="circle__feat-1"></div>
      <div className="circle_feat-2"></div>
    </div>
  );
}
