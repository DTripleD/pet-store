import css from './Payment.module.scss';

const Payment = () => {
  return (
    <div className={css.payment}>
      <h3 className={css.paymentTitle}>Спосіб оплати</h3>
      <label className={css.paymentLabel} htmlFor="paymentOnline">
        <input 
          className={css.paymentRadio} 
          type="radio" 
          id="paymentOnline"
          name="paymentMethod"
          />
        Карткою Online
      </label>
      <label className={css.paymentLabel} htmlFor="paymentCash">
        <input 
          className={css.paymentRadio} 
          type="radio" 
          id="paymentCash"
          name="paymentMethod"
          />
        Наложений платіж
      </label>
    </div>
  );
}

export default Payment;