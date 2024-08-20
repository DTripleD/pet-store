import { useState } from 'react';
import css from './DropdownLocation.module.scss';
import icons from "src/images/icons.svg";

const DropdownLocation = () => {
  const [country, setCountry] = useState('Україна');
  const [city, setCity] = useState('Оберіть місто');
  const [isSortActive, setIsSortActive] = useState(false);


  const handleCountrySelection = (selection) => {
    setCountry(selection);
    setIsSortActive(false);
  };

  const handleCitySelection = (selection) => {
    setCity(selection);
    setIsSortActive(false);
  };

  return (
    <div className={css.orderBox}>
      <h3 className={css.orderSubTitle}>Доставка</h3>
      <div className={css.dropdownWrapper}>
        <div className={css.dropdown}>
        <p className={css.dropdownLabel}>Країна</p>
          <div className={css.dropdownBox}>
            <span className={css.dropdownText}>{country}</span>
            <button 
              type="button" 
              className={css.dropdownTrigger} 
              onClick={handleCountrySelection}
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
          </div>

          <div className={css.dropdown}>
          <p className={css.dropdownLabel}>Місто</p>
            <div className={css.dropdownBox}>
              <span className={css.dropdownText}>{city}</span>
              <button 
                type="button" 
                className={css.dropdownTrigger} 
                onClick={handleCitySelection}
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
          </div>
      </div>
    </div>
  );
}

export default DropdownLocation;