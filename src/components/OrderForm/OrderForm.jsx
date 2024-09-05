import css from './OrderForm.module.scss';

const data = [
  { label: 'Ім’я*', type: 'text', placeholder: 'Введіть ім’я', id: 'firstName', required: true },
  { label: 'Прізвище*', type: 'text', placeholder: 'Введіть прізвище', id: 'lastName', required: true },
  { label: 'Номер телефону*', type: 'text', placeholder: 'Введіть номер', id: 'phone', required: true },
  { label: 'Електронна пошта', type: 'email', placeholder: 'Введіть email', id: 'email', required: false }
];

const OrderForm = () => {
  return (
    <ul className={css.contactInfoList}>
      {data.map(({ label, type, placeholder, id, required }) => (
        <li key={id}>
          <label htmlFor={id} className={css.contactInfoLabel}>
            {label}
            <input
              type={type}
              id={id}
              placeholder={placeholder}
              className={css.contactInfoInput}
              required={required}
              aria-required={required}
            />
          </label>
        </li>
      ))}
    </ul>
  );
}

export default OrderForm;