// import React from "react";
import "./ShopAll.css";
import ProductsCard from "../Products/ProductsCard/ProductsCard";
import { ProductsList } from "../../assets/data/ProductList";
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
                    <option value="default softing">Default softing</option>
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
              <div className="grid grid-cols-3 gap-6 place-content-center place-items-center
              smallest:grid smallest:grid-cols-1">
                {ProductsList.map((productsmap) => (
                  <ProductsCard
                    key={productsmap.id}
                    productsmap={productsmap}
                  />
                ))}
              </div>
              <div className="shopall__container__shownomore grid place-content-center place-items-center">
                <span className="w-[193px] h-[49px] text-black  relative border-[2px] border-[#EDEDED] border-solid flex justify-center items-center ">
                  <p className="font-normal text-[15px] leading-[45px]">
                    No more product to show
                  </p>
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
