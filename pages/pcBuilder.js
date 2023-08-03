import Link from "next/link";
import { pcData } from "@/public/pcData";
import Lottie from "lottie-react";
import addPc from "../public/addpc.json";
import { useContext, useState } from "react";
import { PcContext } from "./_app";
import Image from "next/image";
import { toast } from "react-toastify";
import Done from "@/components/Done";

const PcBuilder = () => {
  const { pcBuild, setPcBuild } = useContext(PcContext);
  const [done, setDone] = useState("null");
  console.log(pcBuild, "okk");
  const handleShowPc = (item) => {
    const existPc = pcBuild?.find((i) => i.category === item);
    return existPc;
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    pcBuild.forEach((item) => {
      totalPrice += item.price;
    });

    return totalPrice;
  };

  const pcItemDelete = (id) => {
    const deleteExistPc = pcBuild?.filter((i) => i?._id !== id);
    console.log(id, "dlfk");
    setPcBuild([...deleteExistPc]);
    toast.success("Success fully this item");
  };

  return (
    <div className="max-w-4xl font-reem mx-auto my-10 rounded-xl border pattern-bg p-3 sm:p-5">
      <div className="flex justify-between font-bold mb-5 text-purple-600 items-center ">
        <h1 className="">Build Your Won Computer</h1>
        <p>Total Price: {calculateTotalPrice()} $</p>
      </div>
      <div className="px-3 py-1 text-sm bg-purple-100 text-purple-700">
        <p>Core Component</p>
      </div>
      <div>
        {pcData?.map((item) => (
          <div
            className="w-full p-3 sm:p-4 rounded bg-white my-3"
            key={item?.category}
          >
            <div className="flex justify-between items-center">
              <div className="flex w-full gap-x-2 items-center">
                <div className="py-1 rounded-md bg-purple-50">
                  <Lottie
                    animationData={addPc}
                    loop={true}
                    style={{ height: "40px" }}
                  />
                </div>
                <div>
                  <p>
                    {item?.category}{" "}
                    <span className="bg-purple-100 text-xs font-reem text-purple-400 rounded-md px-2 py-0.5">
                      Required
                    </span>
                  </p>
                  <div className="max-w-28 w-full bg-slate-200 h-3 mt-1 rounded-sm"></div>
                </div>
              </div>
              <Link
                href={`/category/${item?.category}`}
                className="px-5 py-1 duration-300 hover:text-white hover:bg-purple-700 rounded-lg text-purple-700 font-bold border border-dashed border-purple-700"
              >
                <span className="">choose</span>
              </Link>
            </div>
            {handleShowPc(item?.category) && (
              <div className="w-full flex justify-between items-center mt-3 border rounded-md p-2">
                <div className="flex items-center gap-x-2">
                  <div className="!w-[80px] h-[80px] pr-2 border-r-2">
                    <Image
                      height={60}
                      width={60}
                      alt="ecommerce"
                      className="w-full h-full"
                      src={handleShowPc(item?.category)?.image}
                    />
                  </div>
                  <div className="">
                    <h5 className=" w-full text-xs sm:text-sm text-gray-500">
                      {handleShowPc(item?.category)?.title}
                    </h5>
                    <div className="flex w-full justify-between items-center">
                      <h3 className="text-lg text-purple-600 font-bold">
                        {handleShowPc(item?.category)?.price} $
                      </h3>
                      <span
                        onClick={() =>
                          pcItemDelete(handleShowPc(item?.category)?._id)
                        }
                        className="btn btn-xs btn-accent text-white"
                      >
                        x
                      </span>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="px-3 py-1 my-3 text-sm bg-purple-100 text-purple-700">
        <p>Others Component</p>
      </div>
      <div>
        <div className="w-full p-4 rounded bg-white my-3">
          <div className="flex justify-between items-center">
            <div className="flex w-full gap-x-2 items-center">
              <div className="py-1 rounded-md bg-purple-50">
                <Lottie
                  animationData={addPc}
                  loop={true}
                  style={{ height: "40px" }}
                />
              </div>
              <div>
                <p>Others</p>
                <div className="max-w-28 w-full bg-slate-200 h-3 mt-1 rounded-sm"></div>
              </div>
            </div>
            <Link
              href={`/category/GraphicsCard`}
              className="px-5 py-1 duration-300 hover:text-white hover:bg-purple-700 rounded-lg text-purple-700 font-bold border border-dashed border-purple-700"
            >
              <span className="">Choose</span>
            </Link>
          </div>
          {handleShowPc("GraphicsCard") && (
            <div className="w-full flex justify-between items-center mt-3 border rounded-md p-2">
              <div className="flex items-center gap-x-2">
                <div className="!w-[80px] h-[80px] pr-2 border-r-2">
                  <Image
                    height={60}
                    width={60}
                    alt="ecommerce"
                    className="w-full h-full"
                    src={handleShowPc("GraphicsCard")?.image}
                  />
                </div>
                <div className="">
                  <h5 className=" text-xs w-full sm:text-sm text-gray-500">
                    {handleShowPc("GraphicsCard")?.title}
                  </h5>
                  <div className="flex w-full justify-between items-center">
                    <h3 className="text-lg text-purple-600 font-bold">
                      {handleShowPc("GraphicsCard")?.price} $
                    </h3>
                    <span
                      onClick={() =>
                        pcItemDelete(handleShowPc("GraphicsCard")?._id)
                      }
                      className="btn btn-xs btn-accent text-white"
                    >
                      x
                    </span>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          )}
        </div>
      </div>
      <div className="mt-5 flex justify-center">
        <label
          htmlFor="done"
          onClick={() => setDone("done")}
          disabled={pcBuild?.length < 6}
          className="btn w-full bg-gradient-to-r from-[#7620d9] to-[#8613b3] hover:from-[#13b38f] hover:to-[#2091d9] duration-300 border-0 text-white"
        >
          Complete Build
        </label>
      </div>
      {done && <Done done={done} setDone={setDone} />}
    </div>
  );
};

export default PcBuilder;
