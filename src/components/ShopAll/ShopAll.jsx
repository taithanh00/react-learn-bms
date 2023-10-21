// import React from "react";
import "./ShopAll.css";
import ProductsCard from "../Products/ProductsCard/ProductsCard";
import Product01 from "../../assets/shopall/product-01-black.png";
import Product02 from "../../assets/shopall/product-02-black.png";
import Product03 from "../../assets/shopall/product-03-black.png";
import Product04 from "../../assets/shopall/product-04-black.png";
import Product05 from "../../assets/shopall/product-05-black.png";
import Product06 from "../../assets/shopall/product-06-black.png";
import Product07 from "../../assets/shopall/product-07-black.png";
import Product08 from "../../assets/shopall/product-08-black.png";
import Product09 from "../../assets/shopall/product-09-black.png";
import Product10 from "../../assets/shopall/product-10-black.png";
import Product11 from "../../assets/shopall/product-11-black.png";
import Product12 from "../../assets/shopall/product-12-black.png";
import Product13 from "../../assets/shopall/product-13-black.png";
import Product14 from "../../assets/shopall/product-14-black.png";
import Product15 from "../../assets/shopall/product-15-black.png";
import Product16 from "../../assets/shopall/product-16-black.png";
const ShopAll = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="shopall__container w-full h-auto">
            <div className="shopall__container__text w-full h-auto text-left grid gap-y-[80px]">
              <div className="shopall__container__text__top grid grid-cols-1 gap-2">
                <p className="font-normal text-[14px] leading-[24px] text-left text-[#777777]">
                  Home/Shop
                </p>
                <p className="font-normal text-left text-[65px] leading-[65px] text-[#000000]">
                  Shop
                </p>
              </div>
              <div className="shopall__container__text__bottom flex justify-between items-center">
                <p className="text-left font-normal text-[15px] leading-[15px] text-[#777777]">
                  Showing 1 – 9 of 16 results
                </p>

                <form
                  action=""
                  className="shopall__container__text__bottom__form text-[15px] font-normal leading-[15px] text-[#636363]"
                >
                  <select
                    name="type"
                    id="type"
                    className="focus:border-[2px] focus:border-dotted w-[160px] h-[45px]"
                  >
                    <option value="default softing">Default Softing</option>
                    <option value="softbypopularity">Soft By Popularity</option>
                    <option value="softbyaveragerating">
                      Soft by average rating
                    </option>
                    <option value="softbylastest">Soft by lastest</option>
                    <option value="softbypricelowtohigh">
                      Soft by price: low to high
                    </option>
                    <option value="softbypricehightolow">
                      Soft by price: high to low
                    </option>
                  </select>
                </form>
              </div>
              <div className="grid grid-cols-3 gap-6 place-content-center place-items-center">
                <ProductsCard img={Product01} name="Product-01" price="$85" />
                <ProductsCard img={Product02} name="Product-02" price="$99" />
                <ProductsCard img={Product03} name="Product-03" price="$85" />
                <ProductsCard img={Product04} name="Product-04" price="$85" />
                <ProductsCard img={Product05} name="Product-05" price="$99" />
                <ProductsCard img={Product06} name="Product-06" price="$99" />
                <ProductsCard img={Product07} name="Product-07" price="$99" />
                <ProductsCard img={Product08} name="Product-08" price="$99" />
                <ProductsCard img={Product09} name="Product-09" price="$99" />
                <ProductsCard img={Product10} name="Product-10" price="$99" />
                <ProductsCard img={Product11} name="Product-11" price="$99" />
                <ProductsCard img={Product12} name="Product-12" price="$99" />
                <ProductsCard img={Product13} name="Product-13" price="$99" />
                <ProductsCard img={Product14} name="Product-14" price="$99" />
                <ProductsCard img={Product15} name="Product-15" price="$99" />
                <ProductsCard img={Product16} name="Product-16" price="$99" />
              </div>
              <div className="shopall__container__shownomore grid place-content-center place-items-center">
                <span className="w-[193px] h-[49px] text-black  relative border-[2px] border-[#EDEDED] border-solid flex justify-center items-center ">
                  <p className="font-normal text-[15px] leading-[45px]">No more product to show</p> 
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopAll;
