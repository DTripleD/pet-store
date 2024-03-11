import data from "../data/data";

import Slider from "../components/Slider/Slider";
import Sidebar from "../components/Sidebar/Sidebar";

const MainPage = () => {
  return (
    <div className="container main__wrapper">
      <Sidebar />

      <div className="main__container">
        <section>
          <div className="bg-image"></div>
        </section>
        <Slider title="Акції" data={data} />
        <Slider title="Новинки" data={data} />
      </div>
    </div>
  );
};

export default MainPage;
