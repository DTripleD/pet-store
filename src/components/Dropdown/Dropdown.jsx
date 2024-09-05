import ButtonDropdown from "../ButtonDropdown/ButtonDropdown";
import PropTypes from "prop-types";
import css from './Dropdown.module.scss';
import { useSelector } from "react-redux";
import { selectRegions } from "../../redux/regions/regionsSelectors";
import { selectCities } from "../../redux/cities/citiesSelectors";
import Loader from "../Loader/Loader";

const Dropdown = ({
  label, 
  inputValue, 
  isActive, 
  toggleDropdown, 
  filteredOptions, 
  handleInputChange, 
  handleSelection, 
  placeholder,
  type
 }) => {
  const { loadingReg, errorReg } = useSelector(selectRegions);
  const { loadingCity, errorCity } = useSelector(selectCities);

  const isLoading = type === 'region' ? loadingReg : loadingCity;
  const isError = type === 'region' ? errorReg : errorCity;

  return (
    <div className={css.dropdown}>
      <p className={css.dropdownLabel}>{label}</p>
      <label className={css.dropdownBox} htmlFor={`${label}Input`}>
        <input 
          type="text"
          id={`${label}Input`}
          className={css.dropdownInput} 
          value={inputValue}
          placeholder={placeholder}
          onChange={handleInputChange}
          required
          autoComplete='on'
          onFocus={toggleDropdown}
          />
        <ButtonDropdown
          onClick={toggleDropdown}
          isActive={isActive}
        />
      </label>

      {isActive && (
        <ul className={css.dropdownOptions}>
          {isLoading ? (
            <li><Loader /></li>
          ) : isError ? (
            <li>Виникла помилка при завантаженні</li>
          ) : filteredOptions.length > 0 ? (
              filteredOptions.map(option => (
                <li 
                  key={option.Ref} 
                  onClick={() => handleSelection(option)}
                >
                {option.Description}
                </li>
              ))
            ) : (
              <li>Немає варіантів для відображення</li>
            )}
        </ul>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  label: PropTypes.string,
  inputValue: PropTypes.string,
  isActive: PropTypes.bool,
  toggleDropdown: PropTypes.func, 
  filteredOptions: PropTypes.array,
  handleInputChange: PropTypes.func,
  handleSelection: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default Dropdown;