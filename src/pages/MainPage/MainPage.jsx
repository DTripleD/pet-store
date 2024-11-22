// import data from "src/data/data";
import Slider from "modules/Slider/Slider";
import Sidebar from "components/Sidebar/Sidebar";
import css from "./MainPage.module.scss";
import Hero from "../../modules/Hero/Hero";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/getProduct";

const MainPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProducts();
        console.log(products);
        setData(products.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const discData = data.filter((item) => item.discount > 0);
  const newData = data.filter((item) => item.discount === 0);

  return (
    <div className={`container ${css.main__wrapper}`}>
      <Sidebar />
      <div className={css.main__container}>
        <Hero />
        <Slider title="Акції" data={discData} />
        <Slider title="Новинки" data={newData} isNew={true} />
      </div>
    </div>
  );
};

export default MainPage;
