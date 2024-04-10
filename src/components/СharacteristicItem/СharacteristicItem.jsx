import css from "./СharacteristicItem.module.scss";

const СharacteristicItem = () => {
  return (
    <li className={css.characteristic__item}>
      <p className={css.characteristic_text}>Lorem ipsum</p>
      <p className={`${css.characteristic_text} ${css.characteristic_value}`}>
        Lorem ipsum
      </p>
    </li>
  );
};

export default СharacteristicItem;
