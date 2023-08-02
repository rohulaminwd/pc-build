import Products from "@/models/Products";
import mongoose from "mongoose";
import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Post = ({ addToCart, products, buyNow }) => {
  const router = useRouter();
  const [pincode, setPincode] = React.useState("");
  const [service, setService] = React.useState();
  const { slug } = router.query;
  const checkpincode = async () => {
    let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
    let pinjson = await pins.json();
    if (pinjson.includes(parseInt(pincode))) {
      setService(true);
      toast.success("Service available in your area", {
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      setService(false);
      toast.error("Sorry, Service not available in your area", {
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const onChangePin = (e) => {
    setPincode(e.target.value);
  };

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-10 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              height={200}
              width={200}
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto object-contain rounded pr-10"
              src={products.image}
            />
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Category: {products.category}
              </h2>
              <h1 className="text-gray-900 text-xl title-font font-medium mb-4">
                {products.title}
              </h1>

              <p className="leading-relaxed mb-4">{products.desc}</p>
              <p className="leading-relaxed mb-4">
                {" "}
                Available: {products.availableQty} left
              </p>

              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${products.price}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
  const products = await Products.findOne({
    slug: context.query.slug,
  });
  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
}

export default Post;
