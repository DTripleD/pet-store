import Slider from "../components/Slider";

import data from "../data/data";

import Sidebar from "../components/Sidebar";

const MainPage = () => {
  return (
    <div className="container main-container">
      <aside>
        <Sidebar />
      </aside>
      <div className="main-part__wrapper">
        <section>
          <div className="cont">
            <div className="bg-image"></div>
          </div>
        </section>
        <Slider title="Акції" data={data} />
        <Slider title="Новинки" data={data} />
      </div>
    </div>
  );
};

export default MainPage;
