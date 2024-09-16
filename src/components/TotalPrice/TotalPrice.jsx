import css from "./TotalPrice.module.scss";
import PropTypes from "prop-types";
import { totalPrice } from "../../helpers/totalPrice";

const TotalPrice = ({ itemsInCart }) => {
  const price = totalPrice(itemsInCart);

  return (
    <div className={css.amountWrapper}>
      <p className={css.amountText}>Сума замовлення:</p>
      <p className={css.amountPrice}>{price} грн</p>
    </div>
  );
};

export default TotalPrice;

TotalPrice.propTypes = {
  itemsInCart: PropTypes.array,
};
