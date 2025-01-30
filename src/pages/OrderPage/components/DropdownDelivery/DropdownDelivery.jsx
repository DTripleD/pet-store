import { useEffect, useState } from "react";
import css from "./DropdownDelivery.module.scss";
import icons from "src/images/icons.svg";
import ButtonDropdown from "../../../../components/ButtonDropdown/ButtonDropdown";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectBranches } from "../../../../redux/post/postSelectiors";
import Loader from "../../../../components/Loader/Loader";

const DropdownDelivery = ({ branches, deliveryMethods, onMethodSelect }) => {
  const [branchInput, setBranchInput] = useState({});
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [isSortActive, setIsSortActive] = useState({});
  const [filteredBranches, setFilteredBranches] = useState([]);
  const { loading, error } = useSelector(selectBranches);

  useEffect(() => {
    if (selectedMethod) {
      setFilteredBranches(
        branches.filter(
          (branch) => branch.TypeOfWarehouse === selectedMethod.Ref
        )
      );
    }
  }, [branches, selectedMethod]);

  const handleMethodSelection = (method) => {
    setSelectedMethod(method);
    setBranchInput({});
    onMethodSelect(method);
    setIsSortActive({});
  };

  const handleInputChange = (e, methodRef) => {
    const inputValue = e.target.value;
    setBranchInput((prev) => ({ ...prev, [methodRef]: inputValue }));

    if (inputValue) {
      const newFilteredData = branches.filter(
        (item) =>
          item.Description.toLowerCase().includes(inputValue.toLowerCase()) &&
          item.TypeOfWarehouse === methodRef
      );
      setFilteredBranches(newFilteredData);
    } else {
      setFilteredBranches(
        branches.filter((branch) => branch.TypeOfWarehouse === methodRef)
      );
    }
  };

  const handleSelection = (selectedBranch, methodRef) => {
    setBranchInput((prev) => ({
      ...prev,
      [methodRef]: selectedBranch.Description,
    }));
    setIsSortActive((prev) => ({ ...prev, [methodRef]: false }));
  };

  const toggleDropdown = (methodRef) => {
    setIsSortActive((prev) => ({ ...prev, [methodRef]: !prev[methodRef] }));
  };

  return (
    <div className={css.dropdown}>
      <p className={css.dropdownLabel}>Спосіб доставки</p>
      {deliveryMethods.slice(1).map((delivery) => (
        <div key={delivery.Ref}>
          <label className={css.dropdownBox} htmlFor={delivery.Ref}>
            <input
              type="radio"
              id={delivery.Ref}
              name="deliveryMethod"
              className={css.radio}
              checked={selectedMethod?.Ref === delivery.Ref}
              onChange={() => handleMethodSelection(delivery)}
              required
            />
            <svg className={css.iconPost}>
              <use href={icons + "#icon-newpost"}></use>
            </svg>
            <input
              type="text"
              name={delivery.Ref}
              className={css.dropdownInput}
              value={branchInput[delivery.Ref] || ""}
              placeholder={
                delivery.Description === "Поштове(ий)"
                  ? "Відділення Нова Пошта"
                  : delivery.Description === "Вантажне(ий)"
                  ? "Вантажне відділення НП"
                  : delivery.Description === "Поштомат"
                  ? "Поштомат Нова Пошта"
                  : delivery.Description
              }
              onChange={(e) => handleInputChange(e, delivery.Ref)}
              required
              autoComplete="on"
              onFocus={() => toggleDropdown(delivery.Ref)}
            />
            <ButtonDropdown
              onClick={() => toggleDropdown(delivery.Ref)}
              isActive={
                selectedMethod?.Ref === delivery.Ref &&
                isSortActive[delivery.Ref]
              }
            />

            {isSortActive[delivery.Ref] &&
              selectedMethod?.Ref === delivery.Ref && (
                <ul className={css.dropdownOptions}>
                  {loading ? (
                    <li>
                      <Loader />
                    </li>
                  ) : error ? (
                    <li>Виникла помилка призавантаженні</li>
                  ) : filteredBranches.length > 0 ? (
                    filteredBranches.map((branch) => (
                      <li
                        key={branch.Ref}
                        onClick={() => handleSelection(branch, delivery.Ref)}
                      >
                        {branch.Description}
                      </li>
                    ))
                  ) : (
                    <li>Відділень не знайдено</li>
                  )}
                </ul>
              )}
          </label>
        </div>
      ))}
    </div>
  );
};

DropdownDelivery.propTypes = {
  branches: PropTypes.array,
  deliveryMethods: PropTypes.array,
  onMethodSelect: PropTypes.func,
};

export default DropdownDelivery;
