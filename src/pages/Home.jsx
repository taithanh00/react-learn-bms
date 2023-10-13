import Banner from "../components/Banner/Banner.jsx";
import Carousel from "../components/Carousel/Carousel.jsx";
import Category from "../components/Category/Category.jsx";
import Products from "../components/Products/Products.jsx";
import Rating from "../components/Rating/Rating.jsx";
import WhyUs from "../components/Whyus/Whyus.jsx";
const Home = () => {
  return (
    <>
      <Banner />
      <Carousel />
      <Category />
      <Products />
      <Rating />
      <WhyUs />
    </>
  );
};

export default Home;
