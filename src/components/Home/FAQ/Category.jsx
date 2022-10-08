import './FAQ.scss';

export default function Category({ title }) {
  return (
    <div>
      <div className="category__outer">
        <div className="category">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
}
