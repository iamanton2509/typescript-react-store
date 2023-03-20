interface StoreProps {
    id: number;
    title: string;
    title2: string;
    title3?: string;
    text1: string;
    text2: string;
    text3: string;
    text4?: string;
    img?: string;
    bottom?: number;
    main?: number;
    top?: number;
}

const store: StoreProps[] = [
    {
        id: 0,
        title: "iphone",
        title2: "iPhone",
        text1: "Welcome to our iPhone smartphone line page, where you'll discover the world-renowned Apple technology that has changed the game for mobile devices. The iPhone line offers a range of models to suit different needs, budgets, and preferences, all with a sleek, stylish design and impressive features.",
        text2: "From the latest flagship model to the more affordable options, you'll find a device that fits your lifestyle. Whether you're a photographer, a gamer, or a business professional, the iPhone has the tools to help you stay connected, productive, and entertained.",
        text3: "With top-of-the-line cameras, advanced Face ID and Touch ID security features, powerful processors, and intuitive software, the iPhone is the ultimate device for mobile computing. And with access to the App Store, you can explore a vast ecosystem of apps and games that will keep you engaged and productive. Browse our iPhone line page to learn more about the models, colors, storage options, and prices available. Whether you're upgrading your current iPhone or switching to Apple for the first time, you'll find everything you need to make an informed decision and join the millions of satisfied iPhone users around the world"
    },
    {
        id: 1,
        title: "mac",
        title2: "Mac",
        text1: "Welcome to our Mac line page, where you can explore the full range of Apple's innovative and powerful computers. Whether you're looking for a laptop, desktop, or all-in-one, the Mac line offers a variety of models to suit your needs, budget, and preferences.",
        text2: "With sleek, modern designs, stunning Retina displays, and intuitive software, Macs are known for their exceptional performance, reliability, and ease of use. From the lightweight and portable MacBook Air to the powerhouse iMac Pro, each Mac is built to meet the demands of modern computing.",
        text3: "Whether you're a student, creative professional, or business user, the Mac line offers a wide range of features and capabilities to help you stay productive, creative, and connected. With access to the App Store, you can find the apps and tools you need to get the most out of your Mac, from productivity and creative software to games and entertainment. Explore our Mac line page to learn more about the different models, specifications, and prices available. Whether you're upgrading your current Mac or switching to Apple for the first time, you'll find everything you need to make an informed decision and join the millions of satisfied Mac users around the world."
    },
    {
        id: 2,
        title: "applewatch",
        title2: "Apple Watch",
        text1: "Welcome to our Apple Watches line page, where you can discover the amazing features of the world-renowned smartwatch from Apple. The Apple Watch line offers a range of models to suit different needs, budgets, and preferences, all with a sleek and modern design and impressive features",
        text2: "From the latest flagship model to the more affordable options, you'll find a device that fits your lifestyle. The Apple Watch is not just a watch, but a comprehensive health and fitness companion, communication device, and personal assistant, all in one.",
        text3: "With top-of-the-line features such as heart rate monitoring, ECG, fall detection, GPS, and cellular connectivity, the Apple Watch is the ultimate companion for your active lifestyle. And with access to the App Store, you can explore a vast ecosystem of apps and games that will keep you entertained and productive. Browse our Apple Watches line page to learn more about the different models, colors, bands, and prices available. Whether you're a fitness enthusiast, a tech-savvy individual, or someone who wants to stay connected and organized, the Apple Watch has something for everyone. Join the millions of satisfied Apple Watch users around the world and experience the future of wearable technology."
    },
    {
        id: 3,
        title: "airpods",
        title2: "Air Pods",
        text1: "Welcome to our AirPods line page, where you can discover the world-renowned wireless earbuds from Apple. The AirPods line offers a range of models to suit different needs, budgets, and preferences, all with a sleek and modern design and impressive features.",
        text2: "From the latest AirPods Pro with noise-cancellation technology to the more affordable options, you'll find a device that fits your lifestyle. The AirPods are not just earbuds, but a comprehensive audio companion, with amazing sound quality, convenience, and portability.",
        text3: "With features such as easy pairing, voice-activated Siri, and touch controls, the AirPods offer a seamless and intuitive user experience. And with long battery life and a compact charging case, the AirPods are always ready to go whenever you are. Browse our AirPods line page to learn more about the different models, colors, and prices available. Whether you're a music lover, a podcast enthusiast, or someone who wants to stay connected on the go, the AirPods have something for everyone. Join the millions of satisfied AirPods users around the world and experience the future of wireless audio."
    },
    {
        id: 4,
        title: "iphone",
        title2: "iPhone Accessories",
        title3: "Power & Cables",
        img: "./../images/products/magsafe.jpg",
        text1: "We have a great selection of accessories for your iPhone, including cases, screen protectors, chargers, and more. Our products are made from high-quality materials and designed to be both stylish and functional, so you can protect and enhance your iPhone while expressing your personal style.",
        text2: "One of our most popular products is our selection of MagSafe-compatible accessories, including cases, chargers, and wallets. These products use Apple's innovative MagSafe technology to attach securely to your iPhone, so you can charge your device wirelessly or add accessories like a cardholder or a wallet without the need for cumbersome cables or connectors.",
        text3: "We have a great selection of charging cables, power adapters, and wireless charging pads for your iPhone, all made from high-quality materials and designed to be both reliable and durable. Our cables are available in a variety of lengths and colors, so you can choose the perfect cable for your needs and style.",
        text4: "We also offer a range of power adapters, including wall chargers, car chargers, and portable battery packs, so you can stay charged no matter where you are. Our power adapters are designed to be fast-charging and efficient, so you can get the most out of your iPhone's battery life.",
        bottom: 14,
        main: 18,
        top: 21
    },
    {
        id: 5,
        title: "mac",
        title2: "Mac Accessories",
        title3: "Other useful things",
        img: "./../images/products/macbooks.png",
        text1: "We have a great selection of accessories for your Mac, including cases, sleeves, screen protectors, keyboards, mice, and more. Our products are made from high-quality materials and designed to be both stylish and functional, so you can protect and enhance your Mac while expressing your personal style",
        text2: "Whether you need to connect your Mac to an external display or projector, charge your device on-the-go, protect it from scratches and damages, or improve its performance and storage capacity, we have the right accessory for you",
        text3: "Our range of accessories includes stylish cases and sleeves to protect your MacBook from scratches and dents, high-quality keyboards and mice to improve your productivity, and adapters and cables to connect your devices to external displays or accessories. We also offer docking stations, stands, and other accessories that will help you create a comfortable and ergonomic workspace.",
        text4: "We offer fast and reliable shipping, and our friendly customer service team is always ready to assist you with any questions or concerns you may have. Upgrade your Mac experience with our top-quality accessories. Shop now and take advantage of our exclusive deals and discounts!",
        bottom: 20,
        main: 24,
        top: 27
    },
    {
        id: 6,
        title: "applewatch",
        title2: "Apple Watch Straps",
        title3: "",
        img: "./../images/products/straps.png",
        text1: "All of our straps are carefully designed to ensure they are compatible with all models and sizes of Apple Watch, so you can shop with confidence. We also offer easy installation and removal, so you can switch up your straps in seconds and keep your watch looking fresh.",
        text2: "Our straps are not only stylish but also functional. Many of our straps are designed with features such as sweat resistance, durability, and adjustability, making them perfect for any activity, from working out to going out",
        text3: "Our straps are made from premium materials such as leather, stainless steel, and silicone, and are available in a variety of colors and designs to suit your style. Whether you're looking for a sporty strap for your workouts, a classic leather strap for your formal occasions, or a fun and colorful strap for everyday wear, we have something for everyone",
        text4: "Upgrade your Apple Watch with our premium straps and make it uniquely yours. Shop now and discover the perfect strap for you!",
        bottom: 26,
        main: 30,
        top: 38
    }
];

export default store;