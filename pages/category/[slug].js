import Products from "@/models/Products";
import mongoose from "mongoose";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { PcContext } from "../_app";
import { toast } from "react-toastify";

const Category = ({ products }) => {
  const router = useRouter();
  const { slug } = router.query;
  const { pcBuild, setPcBuild } = useContext(PcContext);
  const handlePcBuild = (item) => {
    const existPc = pcBuild?.find((i) => i?.category === item?.category);
    if (!existPc) {
      setPcBuild([...pcBuild, item]);
      toast.success("Successfully new Pc Item");
    } else if (existPc) {
      const deleteExistPc = pcBuild?.filter((i) => i?._id === item?._id);
      setPcBuild([...deleteExistPc, item]);
      toast.success("Successfully new Pc Item");
    }
  };
  return (
    <div>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            {products?.length === 0 && (
              <div className="flex flex-col items-center justify-center h-[50vh]">
                <h2 className="font-medium text-gray-900">
                  Sorry, currently we don&apos;t have Stocks available for this
                  category.
                </h2>
              </div>
            )}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {products.map((item) => {
                return (
                  <Link
                    key={item._id}
                    href={`/product/${item.slug}`}
                    className="border rounded-md bg-white relative"
                  >
                    <div className="relative h-80 w-full overflow-hidden border-b sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 p-5 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                      <Image
                        height={100}
                        width={100}
                        alt="ecommerce"
                        className="w-full h-full"
                        src={item.image}
                      />
                    </div>
                    <div className="p-3">
                      <div className="flex justify-between items-center">
                        <h3 className="text-gray-500 text-lg font-bold">
                          {item.category}
                        </h3>
                        <h3 className="text-xl text-purple-600 font-bold">
                          {item.price} $
                        </h3>
                      </div>
                      <h5 className="mt-2 mb-4 text-sm text-gray-500">
                        {item.title}
                      </h5>
                      <div className="flex justify-between items-center">
                        <h5 className="mt-2 mb-4 text-sm text-gray-500">
                          In stock
                        </h5>
                        <div className="rating rating-sm">
                          <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-purple-600"
                          />
                          <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-purple-600"
                          />
                          <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-purple-600"
                          />
                          <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-purple-600"
                          />
                          <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-purple-600"
                          />
                        </div>
                      </div>
                      <div className="text-center mt-5 mb-3">
                        <Link
                          href={`/pcBuilder`}
                          onClick={() => handlePcBuild(item)}
                          className="px-5 py-2 bg-purple-50 hover:bg-purple-700 hover:text-white rounded-lg border border-dashed border-purple-700 text-purple-700"
                        >
                          Add To Build
                        </Link>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
  const products = await Products.find({
    category: context.query.slug,
  });
  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
}

export default Category;
