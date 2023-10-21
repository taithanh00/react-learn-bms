// import React from 'react'
import ImgProduct01 from "../../assets/products/productshomepage/product01.jpg";
import ImgProduct02 from "../../assets/products/productshomepage/product02.jpg";
import ImgProduct03 from "../../assets/products/productshomepage/product03.jpg";
import ImgProduct04 from "../../assets/products/productshomepage/product04.jpg";
import ImgProduct05 from "../../assets/products/productshomepage/product05.jpg";
import ImgProduct06 from "../../assets/products/productshomepage/product06.jpg";
import ImgProduct08 from "../../assets/products/productshomepage/product08.png";
import ProductsCard from "./ProductsCard/ProductsCard";
import "./ProductsStyle.css";
const Products = () => {
  // const [img, setImg] = useState(ImgProduct01);

  // const handleChangeImg = (newImg) => {
  //   setImg(newImg);
  // };
  return (
    <>
      <section>
        <div className="container">
          <div className="product w-full h-auto flex flex-col justify-between items-center smallest:grid smallest:grid-cols-1 ">
            <div className="product__text">
              <p className="font-normal text-[12px] leading-[15px] tracking-[0.2rem] text-[#636363] mb-5 text-center">
                Shop by Category
              </p>
              <h4 className="font-bold text-[45px] leading-[45px] text-center">
                Featured Products
              </h4>
            </div>
            <div
              className="product__card w-full grid place-content-center place-items-center gap-3
           
            sm:grid sm:grid-cols-2 sm:pt-5
            md:grid md:grid-cols-2 md:pt-5 md:gap-x-[80px] md:gap-6
            lg:grid lg:grid-cols-3 lg:pt-14 lg:gap-3
            xl:grid xl:grid-cols-3 xl:pt-14 xl:gap-3 
            2xl:grid 2xl:grid-cols-3 2xl:pt-14 2xl:gap-3"
            >
              <ProductsCard
                img={ImgProduct01}
                name="Product Name 10"
                price="$85.00 – $99.00"
              />
              <ProductsCard
                img={ImgProduct02}
                name="Product Name 1"
                price="$85.00 – $99.00"
              />
              <ProductsCard
                img={ImgProduct03}
                name="Product Name 13"
                price="$85.00 – $99.00"
              />
              <ProductsCard
                img={ImgProduct04}
                name="Product Name 12"
                price="$85.00 – $99.00"
              />
              <ProductsCard
                img={ImgProduct05}
                name="Product Name 2"
                price="$85.00 – $99.00"
              />
              <ProductsCard
                img={ImgProduct06}
                name="Product Name 11"
                price="$85.00 – $99.00"
              />
            </div>
          </div>
          <div
            className="product__arrivals w-full flex justify-between
          smallest:mt-6 smallest:flex smallest:gap-y-6"
          >
            <div className="arrivals_1 grid place-content-center gap-y-4">
              <div className="arrivals__1__content">
                <p className="font-normal text-[12px] leading-[15px] text-white tracking-[0.15rem] text-center">
                  New arrivals
                </p>
                <h2 className="text-center font-bold text-[45px] leading-[45px] text-white">
                  Brand new, modern lamps collection{" "}
                </h2>
                <p className="font-normal text-[22px] leading-[26px] text-white text-center">
                  Ideal for offices, bedrooms and all in between.
                </p>
              </div>
              <div className="arrival__1__child"></div>
            </div>
            <div className="arrivals_2 flex flex-col flex-nowrap">
              <div className="grid place-content-center place-items-center h-full object-contain gap-y-6">
                <img src={ImgProduct08} alt="" />
                <p className="pt-[20px] font-normal leading-[26px] text-[22px] text-[#000000] text-center">
                  Product Name 3
                </p>
                <div className="flex justify-center gap-x-4 items-center">
                  <p className="font-normal text-[15px] leading-[24px] text-[#636363] text-center">
                    $85.00 – $99.00s
                  </p>
                  <button className="w-[140px] h-[44px] hover:bg-[#c19a83] bg-black text-white font-normal text-[15px] leading-[15px]">
                    SELECT OPTIONS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
