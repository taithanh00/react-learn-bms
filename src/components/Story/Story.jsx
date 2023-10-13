// import React from "react";
import "./StoryStyle.css";
import StoryBanner from "../../assets/story/storybanner.jpg";
const Story = () => {
  return (
    <>
      <section className="story__section">
        <div className="container">
          <div className="story__container w-full flex flex-col gap-12">
            <div className="story__text grid place-items-center gap-5">
              <p className="tracking-[2px] leading-[1.25em] font-normal text-[0.8rem] text-[#606060]">
                About Us
              </p>
              <h3 className="leading-[1em] font-bold text-[65px]">Our story</h3>
              <hr className="bg-[#C19A83] w-[51px] h-[2px]" />
            </div>
            <div className="story__img">
              <img src={StoryBanner} alt="" className="object-cover" />
            </div>
            <div className=" w-full story__aboutus grid place-items-center">
              <div className="story__aboutus__content w-auto flex p-10 mx-46 flex-wrap smallest:flex smallest:flex-col smallest:w-full smallest:justify-center smallest:items-center">
                <div className="story__aboutus__left text-left w-1/2 relative top-0 left-[180px]">
                  <p className=" tracking-[2px] leading-[1.25em] text-[0.8rem] font-normal text-[#606060] ml-1">
                    About us
                  </p>
                  <h2 className="font-bold leading-[45px] text-[45px]">
                    Our team is what <br /> we value the most
                  </h2>
                </div>
                <div className="story__aboutus__right w-1/2 text-left relative grid gap-y-4">
                  <h6 className="font-normal text-[22px] leading-[26px] text-[#606060]">
                    With great people, modern and cool products emerge.
                  </h6>
                  <p className="font-normal text-[15px] leading-[24px] mr-48">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    rhoncus eget enim eget tincidunt. In finibus nisi ex, eu
                    interdum urna euismod sit amet. Morbi sollicitudin in magna
                    sed tristique. Nulla pharetra sapien eros, sit amet bibendum
                    nibh consectetur quis. Curabitur tortor dolor, fringilla eu
                    fringilla id, dignissim in urna. Nulla varius dolor ac eros
                    posuere, nec interdum justo condimentum. Phasellus lacinia
                    sit amet tellus at pulvinar. Maecenas faucibus porta quam.
                  </p>
                  <p className="font-normal text-[15px] leading-[24px] mr-48 text-[#606060]">
                    Ut in lorem ullamcorper velit facilisis pellentesque. In
                    tincidunt metus eget arcu congue, ac aliquam velit
                    ultricies. Aliquam posuere eu arcu et elementum. Donec
                    pulvinar eget orci et pellentesque. Aenean at ultricies
                    quam. Nunc feugiat sapien quis pharetra tincidunt. Etiam a
                    viverra nulla. Pellentesque consectetur libero est, sed
                    ullamcorper diam convallis ac. Praesent a convallis ante.
                    Suspendisse potenti. Sed sed cursus erat, et auctor metus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Story;
