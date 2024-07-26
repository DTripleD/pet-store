import css from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={css.hero}>
      <div className={css.hero__img} />
    </section>
  );
}

export default Hero;