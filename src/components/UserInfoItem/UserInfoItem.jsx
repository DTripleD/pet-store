import css from "./UserInfoItem.module.scss";

import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectUser } from "src/redux/auth/selectors";
import { updateUserInfo } from "src/redux/auth/operations";

const UserInfoItem = ({
  title,
  userValue,
  setUserValue,
  itemKey,
  type,
  placeholder,
}) => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const ref = useRef();
  const [isEditing, setIsEditing] = useState(false);
  return (
    <li className={css.userInfoItem}>
      <p className={css.fieldTitle}>{title}</p>
      {isEditing ? (
        <>
          <div className={css.editButtonsWrapper}>
            <p
              onClick={() =>
                dispatch(updateUserInfo(userValue)).then(() =>
                  setIsEditing(false)
                )
              }
            >
              Save
            </p>
            <p
              onClick={() => {
                setIsEditing(false);
                setUserValue((prev) => {
                  console.log(itemKey);
                  console.log(user);
                  console.log(user[itemKey]);
                  // console.log(itemKey);
                  return { ...prev, [itemKey]: user[itemKey] };
                });
              }}
            >
              Cancel
            </p>
          </div>
          <input
            value={userValue[itemKey]}
            className={`${css.userFieldInput} ${css.userInfoText}`}
            ref={ref}
            type={type}
            placeholder={placeholder}
            onChange={(e) =>
              setUserValue((prev) => {
                return { ...prev, [itemKey]: e.target.value };
              })
            }
          />
        </>
      ) : (
        <>
          <p
            onClick={() => {
              setIsEditing(true);
              setTimeout(() => {
                ref.current.focus();
              });
            }}
          >
            {userValue[itemKey] ? "Змінити" : "Додати"}
          </p>
          {userValue[itemKey] ? (
            <p className={css.userInfoText}>{userValue[itemKey]}</p>
          ) : (
            <p className={css.placeholder}>{placeholder}</p>
          )}
        </>
      )}
    </li>
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
