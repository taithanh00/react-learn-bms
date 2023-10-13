import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
// import Routers from "../routes/Routers.jsx";
// import Banner from "../components/Banner/Banner.jsx";
// import Carousel from "../components/Carousel/Carousel.jsx";
// import Category from "../components/Category/Category.jsx";
// import Products from "../components/Products/Products.jsx";
// import Rating from "../components/Rating/Rating.jsx";
// import WhyUs from "../components/Whyus/Whyus.jsx";
import Routers from "../routes/Routers.jsx";
const Layout = () => {
  return (
    <>
      <Header />
      <main>
        {/* <Banner />
        <Carousel />
        <Category />
        <Products />
        <Rating />
        <WhyUs /> */}
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
