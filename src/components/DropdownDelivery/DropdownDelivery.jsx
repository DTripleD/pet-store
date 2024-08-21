import { useState } from 'react';
import css from './DropdownDelivery.module.scss';
import icons from "src/images/icons.svg";

const DropdownDelivery = () => {
  const deliveryMethods = [
    { id: 'newPostBranch', label: 'Відділення Нова Пошта', icon: 'icon-newpost', color: css.iconNewPost, state: useState('Відділення Нова Пошта') },
    { id: 'newPostCell', label: 'Поштомат Нова Пошта', icon: 'icon-newpost', color: css.iconNewPost, state: useState('Поштомат Нова Пошта') },
    { id: 'newPostCourier', label: 'Кур’єр Нова Пошта', icon: 'icon-newpost', color: css.iconNewPost, state: useState('Кур’єр Нова Пошта') },
    { id: 'ukrPostCourier', label: 'Кур’єр УкрПошта', icon: 'icon-ukrpost', color: css.iconUkrPost, state: useState('Кур’єр УкрПошта') },
    { id: 'ukrPostBranch', label: 'Відділення УкрПошта', icon: 'icon-ukrpost', color: css.iconUkrPost, state: useState('Відділення УкрПошта') },
  ];

  const [isSortActive, setIsSortActive] = useState(false);

  const handleSelection = (setter, selection) => {
    setter(selection);
    setIsSortActive(false);
  };

  return (
    <div className={css.dropdown}>
      <p className={css.dropdownLabel}>Спосіб доставки</p>
      {deliveryMethods.map(({ id, label, icon, color, state }) => {
        const [value, setValue] = state;
        return (
          <label key={id} className={css.dropdownBox} htmlFor={id}>
            <input 
              type="radio" 
              id={id} 
              name="deliveryMethod"
              className={css.radio}
            />
            <svg className={`${css.iconPost} ${color}`}>
              <use href={`${icons}#${icon}`}></use>
            </svg>
            <span className={css.dropdownText}>{value}</span>
            <button 
              type="button" 
              className={css.dropdownTrigger} 
              onClick={() => handleSelection(setValue, label)}
            >
              {isSortActive ? (
                <svg className={css.iconDown}>
                  <use href={`${icons}#icon-up`}></use>
                </svg>
              ) : (
                <svg className={css.iconUp}>
                  <use href={`${icons}#icon-down`}></use>
                </svg>
              )}
            </button>
          </label>
        );
      })}
      <ul className={css.citiesList}>
        {/* Render city options here */}
      </ul>
    </div>
  );
}

export default DropdownDelivery;