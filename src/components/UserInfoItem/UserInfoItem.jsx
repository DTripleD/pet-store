import css from "./UserInfoItem.module.scss";

import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectUser } from "src/redux/auth/selectors";
import { updateUserInfo } from "src/redux/auth/operations";

const UserInfoItem = ({ title, userValue, setUserValue, itemKey }) => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const ref = useRef();
  const [isEditing, setIsEditing] = useState(false);
  return (
    <li>
      <p className={css.fieldTitle}>{title}</p>
      {isEditing ? (
        <>
          <input
            value={userValue[itemKey]}
            className={css.userFieldInput}
            ref={ref}
            onChange={(e) =>
              setUserValue((prev) => {
                return { ...prev, [itemKey]: e.target.value };
              })
            }
          />
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
                return { ...prev, [itemKey]: user.firstName };
              });
            }}
          >
            Cancel
          </p>
        </>
      ) : (
        <>
          <p>{userValue[itemKey]}</p>
          <p
            onClick={() => {
              setIsEditing(true);
              setTimeout(() => {
                ref.current.focus();
              });
            }}
          >
            Edit
          </p>
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
};
