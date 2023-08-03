import Image from "next/image";
import Link from "next/link";

export default function Feature({ products }) {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-10 sm:py-16 lg:max-w-none lg:py-20">
          <h2 className="text-3xl mb-8 font-bold text-purple-700">
            CATEGORIES
          </h2>

          <div className="mt-6 font-reem space-y-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 lg:space-y-0">
            {products?.slice(0, 6)?.map((item) => (
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
                <div className="base-card w-[124px] h-[124px] overflow-hidden absolute -top-2 -left-2">
                  <p
                    className={` p-0.5 -rotate-45 shadow-sm mt-7 -ml-10 text-white text-center bg-purple-700 text-sm`}
                  >
                    {item.category}
                  </p>
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
