import css from "./TotalPrice.module.scss";
import PropTypes from "prop-types";

const TotalPrice = ({ totalPrice }) => {
  return (
    <div className={css.amountWrapper}>
      <p className={css.amountText}>Сума замовлення:</p>
      <p className={css.amountPrice}>{totalPrice} грн</p>
    </div>
  );
};

export default TotalPrice;

TotalPrice.propTypes = {
  totalPrice: PropTypes.number,
};
