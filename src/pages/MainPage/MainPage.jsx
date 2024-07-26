import data from "src/data/data";
import Slider from "modules/Slider/Slider";
import Sidebar from "components/Sidebar/Sidebar";
import css from "./MainPage.module.scss";
import Hero from "../../modules/Hero/Hero";

const MainPage = () => {
  return (

    <div className={`container ${css.main__wrapper}`}>
        <Sidebar />
      <div className={css.main__container}>
        <Hero />
        <Slider title="Акції" data={data} />
        <Slider title="Новинки" data={data} />
      </div>
    </div>
  );
};

export default MainPage;
