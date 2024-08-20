import { useState } from 'react';
import css from './DropdownDelivery.module.scss';
import icons from "src/images/icons.svg";

const DropdownDelivery = () => {
  const [branchNewPost, setBranchNewPost] = useState('Відділення Нова Пошта');
  const [newPostCell, setNewPostCell] = useState('Поштомат Нова Пошта');
  const [isSortActive, setIsSortActive] = useState(false);


  const handleBranchSelection = (selection) => {
    setBranchNewPost(selection);
    setIsSortActive(false);
  };

  const handleCellSelection = (selection) => {
    setNewPostCell(selection);
    setIsSortActive(false);
  };

  return (
    <form className={css.dropdown}>
      <p className={css.dropdownLabel}>Спосіб доставки</p>
        <label className={css.dropdownBox} htmlFor="newPostBranch">
          <input 
            type='radio' 
            id="newPostBranch" 
            name="deliveryMethod"
            className={css.radio}
          />
          <span className={css.dropdownText}>{branchNewPost}</span>
          <button 
            type="button" 
            className={css.dropdownTrigger} 
            onClick={handleBranchSelection}
          >
            {isSortActive ? (
              <svg className={css.iconDown}>
                <use href={icons + "#icon-up"}></use>
              </svg>
            ) : (
              <svg className={css.iconUp}>
                <use href={icons + "#icon-down"}></use>
              </svg>
            )}
          </button>
        </label>

        <div className={css.dropdownBox}>
          <span className={css.dropdownText}>{newPostCell}</span>
          <button 
            type="button" 
            className={css.dropdownTrigger} 
            onClick={handleCellSelection}
          >
            {isSortActive ? (
              <svg className={css.iconDown}>
                <use href={icons + "#icon-up"}></use>
              </svg>
            ) : (
              <svg className={css.iconUp}>
                <use href={icons + "#icon-down"}></use>
              </svg>
            )}
          </button>
        </div>

        <ul className={css.citiesList}>
        {}

      </ul>
    </form>
  );
}

export default DropdownDelivery;