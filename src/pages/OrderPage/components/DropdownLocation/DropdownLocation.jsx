import { useEffect, useState } from "react";
import css from "./DropdownLocation.module.scss";
import PropTypes from "prop-types";
import Dropdown from "../../../../components/Dropdown/Dropdown";

const DropdownLocation = ({
  regions,
  onRegionSelect,
  cities,
  onCitySelect,
}) => {
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [isCityActive, setIsCityActive] = useState(false);
  const [filteredCities, setFilteredCities] = useState(regions || []);
  const [isRegionActive, setIsRegionActive] = useState(false);
  const [filteredRegions, setFilteredRegions] = useState(regions || []);

  useEffect(() => {
    setFilteredRegions(regions);
  }, [regions]);

  useEffect(() => {
    setFilteredCities(cities);
  }, [cities]);

  const handleInputChange = (input, setInput, setFiltered, data) => (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);

    if (inputValue) {
      const newFilteredData = data.filter((item) =>
        item.Description.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFiltered(newFilteredData);
    } else {
      setFiltered(data);
    }
  };

  const handleSelection = (setInput, setActive, onSelect) => (selectedItem) => {
    setInput(selectedItem.Description);
    onSelect(selectedItem);
    setActive(false);
  };

  const toggleDropdown = (setActive) => () => {
    setActive((prev) => !prev);
  };

  return (
    <div className={css.orderBox}>
      <h3 className={css.orderSubTitle}>Доставка</h3>
      <div className={css.dropdownWrapper}>
        <Dropdown
          label="Область"
          inputValue={region}
          isActive={isRegionActive}
          toggleDropdown={toggleDropdown(setIsRegionActive)}
          filteredOptions={filteredRegions}
          handleInputChange={handleInputChange(
            region,
            setRegion,
            setFilteredRegions,
            regions
          )}
          handleSelection={handleSelection(
            setRegion,
            setIsRegionActive,
            onRegionSelect
          )}
          placeholder="Оберіть область"
          type="region"
        />

        <Dropdown
          label="Місто"
          inputValue={city}
          isActive={isCityActive}
          toggleDropdown={toggleDropdown(setIsCityActive)}
          filteredOptions={filteredCities}
          handleInputChange={handleInputChange(
            city,
            setCity,
            setFilteredCities,
            cities
          )}
          handleSelection={handleSelection(
            setCity,
            setIsCityActive,
            onCitySelect
          )}
          placeholder="Оберіть місто"
          type="city"
        />
      </div>
    </div>
  );
};

DropdownLocation.propTypes = {
  regions: PropTypes.array,
  onRegionSelect: PropTypes.func,
  cities: PropTypes.array,
  onCitySelect: PropTypes.func,
};

export default DropdownLocation;
