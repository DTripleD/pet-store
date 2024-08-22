import { useState } from 'react';
import css from './DropdownLocation.module.scss';
import icons from "src/images/icons.svg";
import { getCity } from "../../services/getCity";

const DropdownLocation = () => {
  const [country, setCountry] = useState('Україна');
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState('');
  const [isCountryActive, setIsCountryActive] = useState(false);
  const [isCityActive, setIsCityActive] = useState(false);

  const handleCountrySelection = () => {
    setIsCountryActive(!isCountryActive);
  };

  const handleCityChange = async (e) => {
    const cityName = e.target.value;
    setCity(cityName);

    if (cityName) {
      try {
        const fetchedCities = await getCity();
        setCities(fetchedCities.filter(c => c.name.toLowerCase().includes(cityName.toLowerCase())));
        console.log(fetchedCities);
      } catch (err) {
        console.error('Failed to fetch cities', err);
      }
    }

    setCities([]);
  };

  const handleCitySelection = (selectedCity) => {
    setCity(selectedCity);
    setCities([]);
    setIsCityActive(false);
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
              {isCountryActive ? (
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
          
          {isCountryActive && (
            <ul className={css.dropdownOptions}>
              <li 
                className={css.option}
                onClick={() => {
                  setCountry('Україна');
                  setIsCountryActive(false);
                }}
              >
                Україна
              </li>
            </ul>
          )}
          </div>

          <div className={css.dropdown}>
          <p className={css.dropdownLabel}>Місто</p>
            <label className={css.dropdownBox} htmlFor="cityInput">
              <input 
                type="text"
                id="cityInput"
                className={css.dropdownInput} 
                value={city}
                placeholder="Оберіть місто"
                onChange={handleCityChange}
                autoFocus
                required
                />
              <button 
                type="button" 
                className={css.dropdownTrigger} 
                onClick={handleCitySelection}
              >
                {isCityActive ? (
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

            <ul className={css.citiesList}>
            {cities.map(city => (
              <li key={city.id}>{city}</li>
            ))}

          </ul>
        </div>
      </div>
    </div>
  );
}

export default DropdownLocation;