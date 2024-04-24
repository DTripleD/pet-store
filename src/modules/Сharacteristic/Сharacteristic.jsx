import css from "./Characteristic.module.scss";

import CharacteristicList from "components/CharacteristicList/CharacteristicList";

const characteristicsArray = [
  { name: "Lorem ipsum", descr: "Lorem ipsum", id: 1 },
  { name: "Lorem ipsum", descr: "Lorem ipsum", id: 2 },
  { name: "Lorem ipsum", descr: "Lorem ipsum", id: 3 },
  { name: "Lorem ipsum", descr: "Lorem ipsum", id: 4 },
  { name: "Lorem ipsum", descr: "Lorem ipsum", id: 5 },
  { name: "Lorem ipsum", descr: "Lorem ipsum", id: 6 },
];

const Сharacteristic = () => {
  return (
    <>
      <h3 className={css.product_page__sub_title}>Характеристики</h3>
      <CharacteristicList array={characteristicsArray} />
    </>
  );
};

export default Сharacteristic;
