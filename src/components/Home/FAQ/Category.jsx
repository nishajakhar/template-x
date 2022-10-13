import './FAQ.scss';

export default function Category({ title, setActiveCategory, activeCategory, index }) {
  return (
    <div>
      <div className="category__outer">
        <div
          className={'category ' + (index == activeCategory ? 'cat-active' : '')}
          onClick={() => {
            console.log('I am clicked.....', activeCategory);
            setActiveCategory(index);
          }}
        >
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
}
