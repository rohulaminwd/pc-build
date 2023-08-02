import Products from "@/models/Products";
import mongoose from "mongoose";
import Feature from "@/components/Feature";
import Head from "next/head";
import Image from "next/image";
import Banner from "@/components/Banner";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>PC Builder</title>
        <meta
          name="description"
          content="we offer pc parts and pc builds at better prices"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Banner />
      </div>
      <Feature products={products} />
    </>
  );
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
  const products = await Products.find({});
  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
}
