import Slider from "../components/Slider";

import data from "../data/data";

const MainPage = () => {
  return (
    <div className="container">
      <section>
        <div className="bg-image"></div>
      </section>

      <Slider title="Акції" data={data} />

      <Slider title="Новинки" data={data} />
    </div>
  );
};

export default MainPage;
