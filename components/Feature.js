import Image from "next/image";

export default function Feature({ products }) {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">CATEGORIES</h2>

          <div className="mt-6 font-reem space-y-12 lg:grid lg:grid-cols-3 gap-4 lg:gap-6 lg:space-y-0">
            {products?.slice(0, 6)?.map((item) => (
              <div
                key={item.name}
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
                    className={`${bgColor} p-0.5 -rotate-45 shadow-sm mt-7 -ml-10 text-white text-center bg-primary text-sm`}
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
                    <div className="rating">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
