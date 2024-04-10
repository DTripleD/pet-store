import css from "./CharacteristicList.module.scss";

import CharacteristicItem from "../СharacteristicItem/СharacteristicItem";

import PropTypes from "prop-types";

const CharacteristicList = ({ array }) => {
  return (
    <ul className={css.characteristic__list}>
      {array.map((item) => (
        <CharacteristicItem key={item.id} />
      ))}
    </ul>
  );
};

export default CharacteristicList;

CharacteristicList.propTypes = {
  array: PropTypes.array,
};
