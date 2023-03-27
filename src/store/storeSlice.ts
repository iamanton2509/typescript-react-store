import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import iphone12 from './../images/products/apple_iphone_12_pro.jpg';
import iphone13 from './../images/products/iphone13pro.jpg';
import iphone14 from './../images/products/try14.jpg';

import imac1 from './../images/products/imac1.jpg';
import imac2 from './../images/products/imac2.jpg';
import imac3 from './../images/products/imac3.jpg';

import macbook1 from './../images/products/macbook-air.png';
import macbook2 from './../images/products/macbook-air-2.jpg';
import macbook3 from './../images/products/macbookpro.png';

import applewatch1 from './../images/products/apple-watch.jpg';
import applewatch2 from './../images/products/apple-watch-8.png';
import applewatch3 from './../images/products/air-pods-se.jpg';

import airpods1 from './../images/products/air-pods-pro-2.jpg';
import airpods2 from './../images/products/air-pods-3.jpg';
import airpods3 from './../images/products/air-pods-max.png';

import magsafe1 from './../images/products/imag.jpg';
import magsafe2 from './../images/products/sel.jpg';
import magsafe3 from './../images/products/mags.jpg';

import lightning from "./../images/products/lightning.jpg";
import charger from "./../images/products/charger.jpg";
import power from "./../images/products/2b.jpg";

import keyboard from "./../images/products/keyboard.jpg";
import mouse from "./../images/products/mouse.jpg";
import multiport from "./../images/products/multiport.jpg";

import mount from "./../images/products/mount.jpg";
import dual from "./../images/products/dual.jpg";
import cabel from "./../images/products/cabel.jpg";

import strap1 from "./../images/products/strap1.jpg";
import strap2 from "./../images/products/strap2.jpg";
import strap3 from "./../images/products/strap3.jpg";
import strap4 from "./../images/products/strap4.jpg";
import strap5 from "./../images/products/strap5.jpg";
import strap6 from "./../images/products/strap6.jpg";

type Product = {
    id: number;
    img: any;
    title: string;
    description: string;
    color: string;
    count: number;
    price: number;
    sale: number;
    saleColor?: string;
    totalPrice: number;
    newItem: boolean;
    wishlist: boolean;
    cart: boolean;
}
type ProductState = {
    products: Product[]
}
const initialState:ProductState = {
    products: [
        {
            id: 0,
            img: iphone12,
            title: 'Apple iPhone 12 Pro Max 256GB Pacific Blue',
            description: 'iPhone 12 Pro and iPhone 12 Pro Max deliver an advanced 5G experience on a global scale, engineered with a seamless integration of world-class hardware and software. Designed with premium materials, iPhone 12 Pro models boast a new, sophisticated flat-edge design that features a gorgeous surgical-grade stainless steel band paired with a precision-milled matte glass back, and introduces the incredibly durable Ceramic Shield.',
            color: 'rgb(40, 99, 146)',
            count: 1,
            price: 1100,
            sale: 1200,
            saleColor: 'rgb(187, 38, 73)',
            totalPrice: 1100,
            newItem: false,
            wishlist: false,
            cart: false,
        },
        {
            id: 1,
            img: iphone13,
            title: 'Apple iPhone 13 Pro Max 512GB Sierra Blue',
            description: 'The iPhone 13 Pro and iPhone 13 Pro Max are smartphones designed, developed and marketed by Apple Inc. They were the flagship smartphones in the fifteenth generation of the iPhone, succeeding the iPhone 12 Pro and iPhone 12 Pro Max respectively. Major upgrades over its predecessor include improved battery life, improved cameras and computational photography, rack focus for video in a new "Cinematic Mode" at 1080p 30 fps, Apple ProRes video recording, a new A15 Bionic system on a chip, and a variable 10–120 Hz display, marketed as ProMotion.',
            color: 'rgb(94, 147, 196)',
            count: 1,
            price: 1400,
            sale: NaN,
            totalPrice: 1400,
            newItem: false,
            wishlist: false,
            cart: false
        },
        {
            id: 2,
            img: iphone14,
            title: 'Apple iPhone 14 Pro Max 512GB Deep Purple',
            description: 'A magical new way to interact with iPhone. Groundbreaking safety features designed to save lives. An innovative 48MP camera for mind-blowing detail. All powered by the ultimate smartphone chip. Introducing Dynamic Island, a truly Apple innovation that’s hardware and software and something in between. It bubbles up music, FaceTime and so much more — all without taking you away from what you’re doing',
            color: 'rgb(76, 0, 153)',
            count: 1,
            price: 1800,
            sale: NaN,
            totalPrice: 1800,
            newItem: true,
            wishlist: false,
            cart: false
        },
        {
            id: 3,
            img: imac1,
            title: 'Apple iMac 24',
            description: 'Easy to learn. Astoundingly powerful. And designed to let you work, play and create in ways you never imagined. It’s the computer that comes packed with apps that are ready to go straight out of the box. Free, regular software updates keep things up to date and running smoothly. And if you already have an iPhone, it feels familiar from the moment you turn it on.',
            color: 'rgb(80, 191, 198)',
            count: 1,
            price: 2000,
            sale: NaN,
            totalPrice: 2000,
            newItem: true,
            wishlist: false,
            cart: false
        },
        {
            id: 4,
            img: imac2,
            title: 'Apple iMac 24',
            description: 'Easy to learn. Astoundingly powerful. And designed to let you work, play and create in ways you never imagined. It’s the computer that comes packed with apps that are ready to go straight out of the box. Free, regular software updates keep things up to date and running smoothly. And if you already have an iPhone, it feels familiar from the moment you turn it on.',
            color: 'rgb(255, 150, 165)',
            count: 1,
            price: 1900,
            sale: 2000,
            saleColor: 'rgb(187, 38, 73)',
            totalPrice: 1900,
            newItem: false,
            wishlist: false,
            cart: false
        },
        {
            id: 5,
            img: imac3,
            title: 'Apple iMac 24',
            description: 'Easy to learn. Astoundingly powerful. And designed to let you work, play and create in ways you never imagined. It’s the computer that comes packed with apps that are ready to go straight out of the box. Free, regular software updates keep things up to date and running smoothly. And if you already have an iPhone, it feels familiar from the moment you turn it on.',
            color: 'rgb(242, 167, 50)',
            count: 1,
            price: 2000,
            sale: NaN,
            totalPrice: 2000,
            newItem: false,
            wishlist: false,
            cart: false
        },
        {
            id: 6,
            img: macbook1,
            title: 'Apple MacBook Pro 16',
            description: 'The new M2 chip makes the 13‑inch MacBook Pro more capable than ever. The same compact design supports up to 20 hours of battery life1 and an active cooling system to sustain enhanced performance. Featuring a brilliant Retina display, a FaceTime HD camera and studio‑quality mics, it’s our most portable pro laptop. The M2 chip begins the next generation of Apple silicon, with even more of the speed and power efficiency introduced by M1. So you can rip through workflows with a more powerful 8-core CPU. Create stunning graphics with a lightning‑fast 10‑core GPU. Work with more streams of 4K and 8K ProRes video with the high-performance media engine. And do it all at once with up to 24GB of faster unified memory.',
            color: 'rgb(131, 132, 134)',
            count: 1,
            price: 2300,
            sale: 2900,
            saleColor: 'rgb(187, 38, 73)',
            totalPrice: 2300,
            newItem: false,
            wishlist: false,
            cart: false
        },
        {
            id: 7,
            img: macbook2,
            title: 'Apple MacBook Air 13 M2 Chip',
            description: 'Redesigned around the next-generation M2 chip, MacBook Air is strikingly thin and brings exceptional speed and power efficiency within its durable all‑aluminium enclosure. It’s the ultrafast, ultra-capable laptop that lets you work, play or create just about anything — anywhere. There’s power in silence. Thanks to the efficiency of the M2 chip, MacBook Air can deliver amazing performance without a fan — so it stays completely silent, no matter how intense the task.',
            color: 'rgb(131, 132, 134)',
            count: 1,
            price: 1200,
            sale: 1000,
            saleColor: 'rgb(187, 38, 73)',
            totalPrice: 1200,
            newItem: true,
            wishlist: false,
            cart: false
        },
        {
            id: 8,
            img: macbook3,
            title: 'Apple MacBook Air 13 M1 Chip',
            description: 'MacBook Air with M1 is an outstandingly portable laptop — it’s nimble and quick, with a silent, fanless design and a beautiful Retina display. Thanks to its slim profile and all‑day battery life, this Air moves at the speed of lightness. M1 is our first chip designed specifically for Mac. Apple silicon integrates the CPU, GPU, Neural Engine, I/O and so much more onto a single tiny chip. Packed with an astonishing 16 billion transistors, M1 delivers exceptional performance, custom technologies and unbelievable power efficiency — a major breakthrough for Mac.',
            color: 'rgb(207, 152, 129)',
            count: 1,
            sale: NaN,
            price: 1000,
            totalPrice: 1000,
            newItem: false,
            wishlist: false,
            cart: false
        },
        {
            id: 9,
            img: applewatch1,
            title: 'Apple Watch Ultra',
            description: 'Meet the most rugged and capable Apple Watch ever. With a robust titanium case, precision dual-frequency GPS, up to 36 hours of battery life,1 the freedom of cellular,2 and three specialised straps made for athletes and adventurers of all kinds. To build the ultimate sports watch, we crafted every element with painstaking attention to detail for unparalleled performance.',
            color: 'rgb(175, 160, 155)',
            count: 1,
            price: 750,
            sale: 850,
            saleColor: 'rgb(187, 38, 73)',
            totalPrice: 750,
            newItem: true,
            wishlist: false,
            cart: false
        },
        {
            id: 10,
            img: applewatch2,
            title: 'Apple Watch 8',
            description: 'Apple Watch Series 8 features a big, brilliant, Always‑On display. Your essential companion is now even more powerful. Introducing temperature sensing for deeper insights into women’s health.1 Crash Detection to get help in an emergency.2 Sleep stages to better understand your sleep. And new ways to train in the enhanced Workout app. The future of health never looked so good.',
            color: 'rgb(254, 200, 126)',
            count: 1,
            price: 500,
            sale: NaN,
            totalPrice: 500,
            newItem: true,
            wishlist: false,
            cart: false
        },
        {
            id: 11, 
            img: applewatch3,
            title: 'Apple Watch SE',
            description: 'Three stylish case colours. Powerful sensors for insights about your health and fitness. Innovative safety features. Convenient ways to stay connected. A faster dual-core processor for added performance. Apple Watch SE is feature packed, and now it’s better value than ever.',
            color: 'rgb(245, 65, 92)',
            count: 1,
            sale: NaN,
            newItem: false,
            price: 300,
            totalPrice: 300,
            wishlist: false,
            cart: false
        },
        {
            id: 12,
            img: airpods1,
            title: 'Apple Air Pods Pro 2',
            description: 'With plenty of talking and listening time, voice-activated Siri access and an available wireless charging case, AirPods deliver an incredible wireless headphone experience. Simply take them out and they’re ready to use with all your devices. Put them in your ears and they connect immediately, immersing you in rich, high-quality sound. Just like magic.',
            color: 'rgb(131, 132, 134)',
            count: 1, 
            sale: NaN,
            price: 300,
            totalPrice: 300,
            newItem: true,
            wishlist: false,
            cart: false
        },
        {
            id: 13,
            img: airpods2,
            title: 'Apple Air Pods 3',
            description: 'Personalised Spatial Audio with dynamic head tracking places sounds all around you to create a three-dimensional listening experience for music, TV shows, movies and more — immersing you in sounds from every direction so it feels like you’re in your very own concert hall or cinema. ',
            color: 'rgb(131, 132, 134)',
            count: 1,
            price: 200,
            sale: NaN,
            totalPrice: 200,
            newItem: true,
            wishlist: false,
            cart: false
        },
        {
            id: 14,
            img: airpods3,
            title: 'Apple Air Pods Max',
            description: 'Introducing AirPods Max — a perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods. The ultimate personal listening experience is here. The over-ear headphone has been completely reimagined. From cushion to canopy, AirPods Max are designed for an uncompromising fit that creates the optimal acoustic seal for many different head shapes — fully immersing you in every sound',
            color: 'rgb(91, 183, 218)',
            count: 1,
            newItem: false,
            price: 500,
            sale: 600,
            saleColor: 'rgb(187, 38, 73)',
            totalPrice: 500,
            wishlist: false,
            cart: false
        },
        {
            id: 15,
            img: magsafe1,
            title: "iPhone 14 Pro Max Silicone Case with MagSafe - Elderberry",
            description: "Designed by Apple to complement iPhone 14 Pro Max, the Silicone Case with MagSafe is a delightful way to protect your iPhone. The silky, soft-touch finish of the silicone exterior feels great in your hand. And on the inside, there’s a soft microfibre lining for even more protection. Like every Apple-designed case, it undergoes thousands of hours of testing throughout the design and manufacturing process. So not only does it look great, it’s built to protect your iPhone from scratches and drops.",
            count: 1,
            price: 50,
            sale: NaN,
            newItem: false,
            color: '',
            totalPrice: 50,
            wishlist: false,
            cart: false
        },
        {
            id: 16,
            title: "iPhone 14 Pro Max Clear Case with MagSafe",
            description: "Thin, light and easy to grip — this Apple-designed case shows off the brilliant coloured finish of iPhone 14 Pro while providing extra protection. Crafted with a blend of optically clear polycarbonate and flexible materials, the case fits right over the buttons for easy use. On the surface, a scratch-resistant coating has been applied to both the interior and exterior. And all materials and coatings are optimised to prevent yellowing over time",
            count: 1,
            img: magsafe2,
            price: 50, 
            sale: NaN,
            newItem: false,
            color: '',
            totalPrice: 50,
            wishlist: false,
            cart: false
        },
        {
            id: 17,
            title: "iPhone 14 Plus Silicone Case with MagSafe",
            description: "Designed by Apple to complement iPhone 14 Plus, the Silicone Case with MagSafe is a delightful way to protect your iPhone. The silky, soft-touch finish of the silicone exterior feels great in your hand. And on the inside, there’s a soft microfibre lining for even more protection. Like every Apple-designed case, it undergoes thousands of hours of testing throughout the design and manufacturing process. So not only does it look great, it’s built to protect your iPhone from scratches and drops.",
            img: magsafe3,
            count: 1,
            price: 55,
            sale: NaN,
            newItem: false,
            color: '',
            totalPrice: 55,
            wishlist: false,
            cart: false
        },
        {
            id: 18,
            title: "USB-C to Lightning Cable (1m)",
            img: lightning,
            price: 20,
            description: "Connect your iPhone, iPad or iPod with Lightning connector to your USB-C– or Thunderbolt 3 (USB-C)–enabled Mac for syncing and charging, or to your USB-C–enabled iPad for charging. You can also use this cable with your Apple 18W, 20W, 29W, 30W, 61W, 87W or 96W USB‑C Power Adapter to charge your iOS device and even take advantage of the fast-charging feature on selected iPhone and iPad models.",
            count: 1,
            sale: NaN,
            newItem: false,
            color: '',
            totalPrice: 20,
            wishlist: false,
            cart: false
        },
        {
            id: 19,
            title: "MagSafe Charger",
            img: charger,
            price: 45,
            description: "The MagSafe Charger makes wireless charging snappy. The perfectly aligned magnets attach to your iPhone 14, iPhone 14 Pro, iPhone 13, iPhone 13 Pro, iPhone 12 and iPhone 12 Pro, and provide faster wireless charging up to 15W. The MagSafe Charger maintains compatibility with Qi charging, so it can be used to wirelessly charge your iPhone 8 or later, as well as AirPods models with a wireless charging case, as you would with any Qi-certified charger. The magnetic alignment experience only applies to iPhone 14, iPhone 14 Pro, iPhone 13, iPhone 13 Pro, iPhone 12 and iPhone 12 Pro models",
            count: 1,
            sale: NaN,
            newItem: false,
            color: '',
            totalPrice: 45,
            wishlist: false,
            cart: false
        },
        {
            id: 20,
            title: "20W USB-C Power Adapter",
            img: power,
            price: 35,
            description: "",
            count: 1,
            sale: NaN,
            newItem: false,
            color: '',
            totalPrice: 35,
            wishlist: false,
            cart: false
        },
        {
            id: 21,
            title: "Magic Keyboard with Touch ID and Numeric Keypad",
            img: keyboard,
            price: 250,
            description: "Magic Keyboard with Touch ID and Numeric Keypad delivers a remarkably comfortable and precise typing experience. It features an extended layout, with document navigation controls for quick scrolling and full-size arrow keys, which are great for gaming. The numeric keypad is also ideal for spreadsheets and finance applications. It’s wireless and features a rechargeable battery that will power your keyboard for about a month or more between charges.¹ It pairs automatically with your Mac, so you can get to work straightaway. And it includes a woven USB-C to Lightning Cable that lets you pair and charge by connecting to a USB-C port on your Mac",
            count: 1,
            sale: NaN,
            newItem: false,
            color: '',
            totalPrice: 250,
            wishlist: false,
            cart: false
        },
        {
            id: 22,
            title: "Magic Mouse",
            img: mouse,
            price: 125,
            description: "Magic Mouse is wireless and rechargeable, with an optimised foot design that lets it glide smoothly across your desk. The Multi-Touch surface allows you to perform simple gestures such as swiping between web pages and scrolling through documents. The rechargeable battery will power your Magic Mouse for about a month or more between charges. It’s ready to go straight out of the box and pairs automatically with your Mac, and it includes a woven USB-C to Lightning Cable that lets you pair and charge by connecting to a USB-C port on your Mac",
            count: 1,
            sale: NaN,
            newItem: false,
            color: '',
            totalPrice: 125,
            wishlist: false,
            cart: false
        },
        {
            id: 23,
            title: "USB-C Digital AV Multiport Adapter",
            img: multiport,
            price: 100,
            description: "The USB-C Digital AV Multiport Adapter lets you connect your USB-C–enabled Mac or iPad to an HDMI display, while also connecting a standard USB device and a USB-C charging cable. This adapter allows you to mirror your Mac or iPad display to your HDMI-enabled TV or display",
            count: 1,
            sale: NaN,
            newItem: false,
            color: '',
            totalPrice: 100,
            wishlist: false,
            cart: false
        },
        {
            id: 24,
            title: "Belkin iPhone Mount (Magsafe Compatible)",
            img: mount,
            price: 50,
            description: "The Belkin iPhone Mount (Magsafe Compatible) for Mac Desktops utilises the new Continuity Camera features in the latest version of macOS Ventura. You can easily mount your MagSafe-compatible iPhone securely to your Mac desktop or display with this durable mount for FaceTime, capturing content, video conferencing and more. The magnetic attachment allows for easy, seamless, hands-free camera streaming. Easily rotate your iPhone to portrait or landscape and adjust viewing angles from vertical to 25 degrees downwards with the tilting hinge.",
            count: 1,
            sale: NaN,
            newItem: false,
            color: '',
            totalPrice: 50,
            wishlist: false,
            cart: false
        },
        {
            id: 25,
            title: "35W Dual USB-C Port Power Adapter",
            img: dual,
            price: 85,
            description: "The 35W Dual USB‑C Port Power Adapter allows you to charge two devices at the same time, whether you’re at home, in the office or on the go. Apple recommends using it with MacBook Air. You can also use it with iPhone, iPad, Apple Watch and AirPods. Pair this power adapter with the World Travel Adapter Kit to charge in other regions around the world. Charging cable sold separately",
            count: 1,
            sale: NaN,
            newItem: false,
            color: '',
            totalPrice: 85,
            wishlist: false,
            cart: false
        },
        {
            id: 26,
            title: "USB-C to MagSafe 3 Cable (2m)",
            img: cabel,
            price: 75,
            description: "This 2-metre charge cable features a magnetic MagSafe 3 connector that helps guide the plug to the charging port of your Mac notebook. Pair it with a compatible USB-C power adapter to conveniently charge your notebook from a power point and take advantage of fast-charging capabilities. The magnetic connection is strong enough to resist most unintended disconnects, but if someone trips on the cable, it releases so your Mac notebook stays put. An LED turns amber when the battery is charging and green when it’s fully charged. Made with a woven design for long-lasting durability",
            count: 1,
            sale: NaN,
            newItem: false,
            color: '',
            totalPrice: 75,
            wishlist: false,
            cart: false
        },
        {
            id: 27,
            title: "49mm Green Alpine Loop",
            img: strap1,
            price: 100,
            description: "The rugged Alpine Loop is made from two textile layers woven together into one continuous piece without stitching. High-strength yarns reinforce the top loops, and the corrosion-resistant titanium G-hook slides easily into the loops for secure fit. Material: Polyester",
            count: 1,
            sale: NaN,
            newItem: false,
            color: '',
            totalPrice: 100,
            wishlist: false,
            cart: false
        },
        {
            id: 28,
            title: "49mm Orange Alpine Loop",
            img: strap2,
            price: 100,
            description: "The rugged Alpine Loop is made from two textile layers woven together into one continuous piece without stitching. High-strength yarns reinforce the top loops, and the corrosion-resistant titanium G-hook slides easily into the loops for secure fit.  Material: Polyester",
            count: 1,
            sale: NaN,
            newItem: false,
            color: '',
            totalPrice: 100,
            wishlist: false,
            cart: false
        },
        {
            id: 29,
            title: "49mm Yellow/Beige Trail Loop",
            img: strap3,
            price: 100,
            description: "The thin, lightweight Trail Loop is made from a nylon weave creating a soft strap with increased elasticity for a comfortable fit. The strap is infinitely adjustable with a convenient pull tab for quick adjustments on the go. Material: Nylon",
            count: 1,
            sale: NaN,
            newItem: false,
            color: '',
            totalPrice: 100,
            wishlist: false,
            cart: false
        },
        {
            id: 30,
            title: "49mm Starlight Alpine Loop",
            img: strap4,
            price: 100,
            description: "The rugged Alpine Loop is made from two textile layers woven together into one continuous piece without stitching. High-strength yarns reinforce the top loops, and the corrosion-resistant titanium G-hook slides easily into the loops for secure fit. Material: Polyester",
            count: 1,
            color: '',
            sale: NaN,
            newItem: false,
            totalPrice: 100,
            wishlist: false,
            cart: false
        },
        {
            id: 31,
            title: "49mm Black/Grey Trail Loop",
            img: strap5,
            price: 100,
            description: "The thin, lightweight Trail Loop is made from a nylon weave creating a soft strap with increased elasticity for a comfortable fit. The strap is infinitely adjustable with a convenient pull tab for quick adjustments on the go. Material: Nylon",
            count: 1,
            sale: NaN,
            newItem: false,
            color: '',
            totalPrice: 100,
            wishlist: false,
            cart: false
        },
        {
            id: 32,
            title: "49mm Blue/Grey Trail Loop",
            img: strap6,
            price: 100,
            description: "The thin, lightweight Trail Loop is made from a nylon weave creating a soft strap with increased elasticity for a comfortable fit. The strap is infinitely adjustable with a convenient pull tab for quick adjustments on the go. Material: Nylon",
            count: 1,
            sale: NaN,
            newItem: false,
            color: '',
            totalPrice: 100,
            wishlist: false,
            cart: false
        }
    ]
}

const storeSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        sortProducts (state, action: PayloadAction<string>) {
            if (action.payload === 'price-ascending') {
                state.products.sort((a, b) => a['price'] - b['price']);
            } else if (action.payload === 'price-descending') {
                state.products.sort((a, b) => b['price'] - a['price']);
            } else if (action.payload === 'title') {
                state.products.sort((a, b) => a['title'].localeCompare(b['title']));
            } else if (action.payload === 'id') {
                state.products.sort((a, b) => a['id'] - b['id']);
            }
        },
        addProductToCart (state, action: PayloadAction<number>) {
            const toggledProduct = state.products.find(product => product.id === Number(action.payload));
            if (toggledProduct) {
                toggledProduct.cart = !toggledProduct.cart;
            }
        },
        deleteProduct (state, action: PayloadAction<number>) {
            const removedProduct = state.products.find(product => product.id === action.payload);
            if (removedProduct) {
                removedProduct.cart = false;
            }
        },
        increaseCount (state, action: PayloadAction<number>) {
            const increasedValue = state.products.find(product => product.id === action.payload);
            if (increasedValue) {
                increasedValue.count = increasedValue.count + 1;
                increasedValue.totalPrice = increasedValue.count * increasedValue.price;
            }
        },
        decreaseCount (state, action: PayloadAction<number>) {
            const decreasedValue = state.products.find(product => product.id === action.payload);
            if (decreasedValue) {
                if (decreasedValue.count > 1) {
                    decreasedValue.count = decreasedValue.count - 1;
                    decreasedValue.totalPrice = decreasedValue.count * decreasedValue.price;
                } else {
                    decreasedValue.cart = false;
                }
            }
        },
        addToWishlist (state, action: PayloadAction<number>) {
            console.log(action.payload);
            const wishedProduct = state.products.find(product => product.id === action.payload);
            if (wishedProduct) {
                wishedProduct.wishlist = !wishedProduct.wishlist;
            }
        }
    }
});

export const {sortProducts, addProductToCart, deleteProduct, increaseCount, decreaseCount, addToWishlist} = storeSlice.actions;
export default storeSlice.reducer;