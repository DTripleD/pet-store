import css from "./UserInfoItem.module.scss";

import PropTypes from "prop-types";

const UserInfoItem = ({
  title,
  userValue,
  setUserValue,
  itemKey,
  type,
  placeholder,
}) => {
  return (
    <label className={css.userLabel}>
      {title}
      <input
        value={userValue[itemKey]}
        className={`${css.userFieldInput} ${css.userInfoText}`}
        type={type}
        placeholder={placeholder}
        onChange={(e) =>
          setUserValue((prev) => {
            return { ...prev, [itemKey]: e.target.value };
          })
        }
      />
    </label>
  );
};

export default UserInfoItem;

UserInfoItem.propTypes = {
  title: PropTypes.string,
  userValue: PropTypes.object,
  setUserValue: PropTypes.func,
  itemKey: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};
