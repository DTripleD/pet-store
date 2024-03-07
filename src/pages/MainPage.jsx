import Slider from "../components/Slider";

import data from "../data/data";

import Sidebar from "../components/Sidebar";

const MainPage = () => {
  return (
    <div className="container">
      <aside>
        <Sidebar />
      </aside>
      <div>
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
