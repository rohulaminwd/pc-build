import React from "react";
import Lottie from "lottie-react";
import pcBanner from "../public/pcBanner.json";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="container font-reem mx-auto my-10">
      <div className=" md:flex w-full justify-between items-center p-5 rounded-xl sm:border border-dashed border-purple-300">
        <div className="w-full text-center sm:text-left mb-5 sm:0">
          <h1 className="text-3xl font-bold oswald">Welcome to Pc builder</h1>
          <p className="font-bold my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ducimus reiciendis obcaecati, id reprehenderit
            praesentium totam sint, officiis error dolores quod
          </p>
          <Link href="/pcBuilder">
            <button class="px-10 py-2 font-bold text-lg hover:text-white hover:bg-purple-700 duration-300 text-purple-700 rounded-xl border border-dashed border-purple-700">
              Get Start
            </button>
          </Link>
        </div>
        <div className="w-full md:flex justify-end">
          <div>
            <Lottie
              animationData={pcBanner}
              loop={true}
              style={{ height: "300px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
