import WeightButtonsItem from "../WeightButtonsItem/WeightButtonsItem";
import css from "./WeightButtonsList.module.scss";

const WeightButtonsList = () => {
  return (
    <ul className={css.swiper__weight_list}>
      <WeightButtonsItem text={"3 кг"} isAble={true} />
      <WeightButtonsItem text={"6 кг"} isAble={false} />
      <WeightButtonsItem text={"12 кг"} isAble={false} />
    </ul>
  );
};

export default WeightButtonsList;
