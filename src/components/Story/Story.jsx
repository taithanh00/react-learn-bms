// import React from "react";
import "./StoryStyle.css";
import StoryBanner from "../../assets/story/storybanner.jpg";
import StoryWoman from "../../assets/story/storywoman.jpg";
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
                <div
                  className="story__aboutus__left text-left w-1/2 relative top-0 left-[180px]
                smallest:relative smallest:top-0 smallest:left-0 smallest:text-center smallest:grid smallest:gap-y-3 smallest:w-full
                md:relative md:top-0 md:left-0
                lg:top-0 lg:left-[180px]"
                >
                  <p className=" tracking-[2px] leading-[1.25em] text-[0.8rem] font-normal text-[#606060] ml-1">
                    About us
                  </p>
                  <h2
                    className="font-bold leading-[45px] text-[45px]
                  smallest:text-[18px] smallest:leading-7 smallest:text-center
                  "
                  >
                    Our team is what <br /> we value the most
                  </h2>
                </div>
                <div
                  className="story__aboutus__right w-1/2 text-left relative grid gap-y-4
                smallest:relative smallest:top-0 smallest:left-0 smallest:text-center smallest:w-full smallest:grid smallest:place-content-center
                smallest:mt-5"
                >
                  <h6 className="font-normal text-[22px] leading-[26px] text-[#606060]">
                    With great people, modern and cool products emerge.
                  </h6>
                  <p
                    className="font-normal text-[15px] leading-[24px] mr-48
                  smallest:text-left smallest:w-full
                  md:mr-0
                  lg:mr-48"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    rhoncus eget enim eget tincidunt. In finibus nisi ex, eu
                    interdum urna euismod sit amet. Morbi sollicitudin in magna
                    sed tristique. Nulla pharetra sapien eros, sit amet bibendum
                    nibh consectetur quis. Curabitur tortor dolor, fringilla eu
                    fringilla id, dignissim in urna. Nulla varius dolor ac eros
                    posuere, nec interdum justo condimentum. Phasellus lacinia
                    sit amet tellus at pulvinar. Maecenas faucibus porta quam.
                  </p>
                  <p
                    className="font-normal text-[15px] leading-[24px] mr-48 text-[#606060] smallest:w-full
                  smallest:text-left
                  md:mr-0
                  lg:mr-48"
                  >
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
        <div className="story__parallax">
          <div className="story__parallax__child">
            <hr className="bg-white w-[51px] h-[2px]" />
            <p
              className="text-white font-bold text-[45px] leading-[45px] text-center
          smallest:text-[30px]
          md:text-[32px]
          lg:text-[45px]"
            >
              Simplicity carried to an <br /> extreme becomes elegance
            </p>
          </div>
        </div>
        <div className="story__aboutus__content__2 w-full flex flex-col items-center justify-center mt-20 gap-y-3">
          <p className="tracking-[2px] leading-[1.25em] text-[0.8rem] font-normal">
            our story
          </p>
          <h4
            className="tracking-[1px] leading-[1em] text-[3rem] font-bold
          smallest:text-[2rem]"
          >
            How it all started
          </h4>
          <hr className="bg-[#C19A83] w-[51px] h-[2px]" />
          <p
            className="text-center mx-[23.7rem] font-normal text-[15px] leading-[24px] text-[#636363]
          smallest:mx-3
          md:mx-28
          lg:mx-[23.7rem]"
          >
            Proin nec ante eu sem luctus bibendum. Sed ut fringilla dolor. Morbi
            suscipit a nunc eu finibus. Nam rutrum mattis velit eget volutpat.
            Fusce egestas mi urna, id pulvinar ipsum dictum eget. Mauris in
            dolor velit. Vestibulum finibus felis non massa commodo molestie at
            id justo. Quisque sollicitudin elit sit amet facilisis euismod.
            Fusce at arcu sed libero lacinia dignissim id bibendum metus.
          </p>
        </div>

        <div
          className=" story__founder bg-[#f1f2f2] min-h-[619px] mt-[300px]
        smallest:mt-3 smallest:h-auto"
        >
          <div
            className="container flex justify-between
          smallest:flex smallest:flex-col smallest:justify-center smallest:items-center"
          >
            <div
              className="story__founder__text__left w-1/2 flex flex-col relative z-[1] left-[65px] top-[200px] gap-y-7
            smallest:w-full smallest:flex smallest:flex-col smallest:relative smallest:top-0 smallest:left-0 smallest:text-center
            smallest:justify-center smallest:items-center smallest:mt-8 smallest:z-0 smallest:order-last
            md:top-[100px] md:left-0"
            >
              <p className="text-[25px] leading-[28px] font-bold">
                About the founder
              </p>
              <hr className="bg-[#C19A83] w-[51px] h-[2px]" />
              <p
                className="font-normal text-[15px] leading-[24px] mr-72 text-[#636363]
              smallest:mr-0
              md:mr-28
              lg:mr-72 "
              >
                Proin nec ante eu sem luctus bibendum. Sed ut fringilla dolor.
                Morbi suscipit a nunc eu finibus. Nam rutrum mattis velit eget
                volutpat. Fusce egestas mi urna, id pulvinar ipsum dictum eget.
                Mauris in dolor velit. Vestibulum finibus felis non massa
                commodo molestie at id justo. Quisque sollicitudin elit sit amet
                facilisis euismod. Fusce at arcu sed libero lacinia dignissim id
                bibendum metus.
              </p>
              <p
                className="font-normal text-[15px] leading-[24px] mr-72 text-[#636363]
              smallest:mr-0
              md:mr-28
              lg:mr-72"
              >
                Nam rutrum mattis velit eget volutpat. Fusce egestas mi urna, id
                pulvinar ipsum dictum eget.
              </p>
            </div>
            <div
              className="story__founder__img w-1/2
            smallest:w-full"
            >
              <img
                src={StoryWoman}
                alt=""
                className="w-full h-full object-cover bg-cover relative z-[2] top-[-190px]
              smallest:relative smallest:top-0 smallest:z-0 smallest:mt-8 smallest:order-first
              "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Story;
