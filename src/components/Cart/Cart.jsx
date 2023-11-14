// import React from "react";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Cart = () => {
  const [countTotal, setCountTotal] = useState(1);

  const checkCountTotalMinus = () => {
    if (countTotal > 0) {
      setCountTotal(countTotal - 1);
    }
  };

  const checkCountTotalPlus = () => {
    setCountTotal(countTotal + 1);
  };
  return (
    <>
      <section>
        <div className="container">
          <div className="w-full grid gap-y-5">
            <h4 className="font-normal text-[25px] leading-[30px] text-[#000000]">
              Cart
            </h4>
            <div className="flex flex-row flex-wrap items-start justify-between">
              <div className="w-[68%]">
                <form action="">
                  <table className="w-full border-[1px] border-solid border-[var(rgba(0,0,0,0.07))] text-left">
                    <thead className="bg-[#f1f2f2]">
                      <tr>
                        <th className="py-[0.7em] px-[1em] font-bold text-[15px] leading-[24px] text-[rgba(0,0,0,0.61)]"></th>
                        <th className="py-[0.7em] px-[1em] font-bold text-[15px] leading-[24px] text-[rgba(0,0,0,0.61)]">
                          {" "}
                          Product{" "}
                        </th>
                        <th className="py-[0.7em] px-[1em] font-bold text-[15px] leading-[24px] text-[rgba(0,0,0,0.61)]">
                          {" "}
                          Price{" "}
                        </th>
                        <th className="py-[0.7em] px-[1em] font-bold text-[15px] leading-[24px] text-[rgba(0,0,0,0.61)]">
                          {" "}
                          Quantity{" "}
                        </th>
                        <th className="py-[0.7em] px-[1em] font-bold text-[15px] leading-[24px] text-[rgba(0,0,0,0.61)]">
                          {" "}
                          Subtotal{" "}
                        </th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td></td>
                        <td className="py-[2em] px-[1em] font-medium text-[15px] leading-[24px] text-[#636363] ">
                          ProductName 1
                        </td>
                        <td className="py-[2em] px-[1em] font-medium text-[15px] leading-[24px] text-[#636363] ">
                          $99.00
                        </td>
                        <td className="py-[2em] px-[1em] font-medium text-[15px] leading-[24px] text-[#000000]">
                          <div className="flex flex-row">
                            <div
                              className=" w-[37px] h-[33px] bg-white text-black 
                grid place-content-center place-items-center border-[1px] border-solid border-[#00000012] cursor-pointer"
                              onClick={checkCountTotalMinus}
                            >
                              <button>
                                <FontAwesomeIcon
                                  icon={faMinus}
                                  size="2xs"
                                  style={{ color: "#666666" }}
                                />
                              </button>
                            </div>
                            <div className="w-[37px] h-[33px] bg-white text-black grid place-content-center place-items-center border-[1px] border-solid border-[#00000012]">
                              <p className="font-normal text-[15px] leading-[24px] text-[#666666]">
                                {countTotal}
                              </p>
                            </div>
                            <div
                              className=" w-[37px] h-[33px] bg-white text-black 
                grid place-content-center place-items-center border-[1px] border-solid border-[#00000012] cursor-pointer"
                              onClick={checkCountTotalPlus}
                            >
                              <button>
                                <FontAwesomeIcon
                                  icon={faPlus}
                                  size="2xs"
                                  style={{ color: "#666666" }}
                                />
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="py-[2em] px-[1em] font-medium text-[15px] leading-[24px] text-[#636363] ">
                          $99.00
                        </td>
                        <td>
                          <button className="w-[25px] h-[25px] border-[1px] border-solid rounded-full grid place-items-center ">
                            <FontAwesomeIcon
                              icon={faX}
                              size="2xs"
                              style={{ color: "#636363" }}
                            />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </div>
              <div className="w-[30%]">
                <form action="">
                  <table className="w-full border-[1px] border-solid border-[var(rgba(0,0,0,0.07))] text-left">
                    <thead className="bg-[#f1f2f2]">
                      <tr>
                        <th className="py-[0.7em] px-[1em] font-bold text-[15px] leading-[24px] text-[rgba(0,0,0,0.61)]">
                          Cart totals
                        </th>
                      </tr>
                    </thead>
                  </table>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
