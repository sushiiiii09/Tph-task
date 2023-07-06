import React from "react";
import "../App.css";

const Banner = () => {
  return (
    <div>
      <section className="text-white">
        <div className="mx-0 w-screen-xl py-24 lg:flex lg:items-center">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-bold text-border-white">
              <span className="heading text-3xl md:text-5xl pt-8 pb-1 lg:text-7xl">
                The Product House
              </span>
              <span className="srmist text-3xl md:text-5xl lg:text-7xl mx-0">
                SRMIST
              </span>
            </h2>
            <div className="mt-8 flex flex-wrap justify-center">
              <a
                className=" px-4 py-2 block mt-4 rounded-lg border border-[#844e89] text-lg font-medium text-white hover:bg-[#844e89] focus:outline-none focus:ring active:bg-[#844e89] "
                href="/about"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
