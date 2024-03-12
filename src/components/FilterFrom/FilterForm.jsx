const FilterForm = () => {
  return (
    <div className="filters__wrapper">
      <div>
        Фільтри
        <div>
          <input type="checkbox" id="new" name="new" />
          <label htmlFor="new">Новинки</label>
        </div>
        <div>
          <input type="checkbox" id="discounts" name="discounts" />
          <label htmlFor="discounts">Знижка</label>
        </div>
      </div>
      <form className="price__form">
        <label>
          Ціна <input type="range" />
          <input type="text" /> <input type="text" />
        </label>
        <button type="submit" className="apply__button">
          Застосувати
        </button>
      </form>
      <div>
        Lorem Ipsum
        <div>
          <input type="checkbox" id="new" name="new" />
          <label htmlFor="new">Lorem Ipsum</label>
        </div>
        <div>
          <input type="checkbox" id="discounts" name="discounts" />
          <label htmlFor="discounts">Lorem Ipsum</label>
        </div>
      </div>
      <div>
        Lorem Ipsum
        <div>
          <input type="checkbox" id="new" name="new" />
          <label htmlFor="new">Lorem Ipsum</label>
        </div>
        <div>
          <input type="checkbox" id="discounts" name="discounts" />
          <label htmlFor="discounts">Lorem Ipsum</label>
        </div>
      </div>
      <div>
        Lorem Ipsum
        <div>
          <input type="checkbox" id="new" name="new" />
          <label htmlFor="new">Lorem Ipsum</label>
        </div>
        <div>
          <input type="checkbox" id="discounts" name="discounts" />
          <label htmlFor="discounts">Lorem Ipsum</label>
        </div>
      </div>
      <button className="clear__button">Очистити</button>
    </div>
  );
};

export default FilterForm;
