const callouts = [
    {
        category: 'PROCESSOR',
        title: "Antec A40 Pro CPU Cooler",
        description: 'Defeat heat created by your processor and allow for improved operation…',
        imageSrc: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
        imageAlt: 'Antec A40 Pro CPU Cooler',
        href: 'https://build-ur-pc.vercel.app/category/Processor',
    },
    {
        category: 'Motherboard',
        title: "GIGABYTE B550M DS3H AC",
        description: 'Micro ATX form factor motherboard with AMD Ryzen AM4 socket, M.2 slot, HDMI, DVI, USB 3.1, and DDR4 memory support.',
        imageSrc: 'https://m.media-amazon.com/images/I/61Pl0vNGwKL._AC_SX679_.jpg',
        imageAlt: 'GIGABYTE B550M DS3H AC',
        href: 'https://build-ur-pc.vercel.app/category/Motherboard',
    },
    {
        category: 'RAM',
        title: "Corsair VENGEANCE LPX DDR4 RAM 32GB",
        description: 'Hand-sorted memory chips ensure high performance with generous overclocking headroom',
        imageSrc: 'https://m.media-amazon.com/images/I/518T3hrUY4L._AC_SX679_.jpg',
        imageAlt: 'Corsair VENGEANCE LPX DDR4 RAM 32GB',
        href: 'https://build-ur-pc.vercel.app/category/category/RAM',
    },
    {
        category: 'POWER SUPPLY',
        title: "Thermaltake SMART 600W ATX 12V V2.3",
        description: 'Delivers 600W Continuous output at plus 40℃. Compliance with Intel ATX 12V 2. 31 and EPS 12V 2. 92 standards',
        imageSrc: 'https://m.media-amazon.com/images/I/71GNnNSyIrL._AC_SX425_.jpg',
        imageAlt: 'Thermaltake SMART 600W ATX 12V V2.3',
        href: 'https://build-ur-pc.vercel.app/category/PowerSupply',
    },

    {
        category: 'STORAGE',
        title: "Seagate BarraCuda 4TB Internal Hard Drive HDD",
        description: 'High-capacity 4TB internal hard drive with a 3.5-inch form factor, perfect for desktop computers and storage upgrades.',
        imageSrc: 'https://m.media-amazon.com/images/I/81tjLksKixL._AC_UY218_.jpg',
        imageAlt: 'Seagate BarraCuda 4TB Internal Hard Drive HDD',
        href: 'https://build-ur-pc.vercel.app/category/Storage',
    },
    {
        category: 'MONITOR',
        title: "LG 34WN650-W 34-Inch 21:9 UltraWide Full HD ",
        description: '34-inch UltraWide monitor with Full HD 2560x1080 resolution, IPS display, and HDR10 support for immersive visuals.',
        imageSrc: 'https://m.media-amazon.com/images/I/41vNitCSoHL._AC_UL320_.jpg',
        imageAlt: 'LG 34WN650-W 34-Inch 21:9 UltraWide Full HD',
        href: 'https://build-ur-pc.vercel.app/category/Monitors',
    },

]

export default function Feature() {
    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="text-2xl font-bold text-gray-900">CATEGORIES</h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {callouts.map((callout) => (
                            <div key={callout.name} className="group relative">
                                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                    <img
                                        src={callout.imageSrc}
                                        alt={callout.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <h3 className="mt-6 text-sm text-gray-500">
                                    <a href={callout.href}>
                                        <span className="absolute inset-0" />
                                        {callout.category}
                                    </a>
                                </h3>
                                <h5 className="mt-6 text-lg text-center mb-4 text-gray-500">
                                    <a href={callout.href}>
                                        <span className="absolute inset-0" />
                                        {callout.title}
                                    </a>
                                </h5>
                                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}