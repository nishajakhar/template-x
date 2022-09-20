import './Features.scss';
import '../../../styles/shared.scss';
import Card from '../Card/Card';

export default function Features() {
  return (
    <div className="features">
      <div className="features__heading">
        <h1>Features</h1>
      </div>
      <div className="features__items">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="circle__feat-1"></div>
      <div className="circle_feat-2"></div>
    </div>
  );
}
