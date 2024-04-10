import data from "../../data/data";

import Slider from "../../modules/Slider/Slider";
import Sidebar from "../../components/Sidebar/Sidebar";

import css from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <div className={`container ${css.main__wrapper}`}>
      <Sidebar />

      <div className={css.main__container}>
        <section>
          <div className={css.bg_image}></div>
        </section>
        <Slider title="Акції" data={data} />
        <Slider title="Новинки" data={data} />
      </div>
    </div>
  );
};

export default MainPage;
