import watch1 from './../images/products/apple-watch.jpg';
import watch2 from './../images/products/apple-watch-2.jpg';
import watch3 from './../images/products/apple-watch-3.jpg';
import watch4 from './../images/products/apple-watch-8.png';
import watch5 from './../images/products/apple-watch-8-2.png';
import watch6 from './../images/products/apple-watch-8-3.png';
import airpods1 from './../images/products/air-pods-pro-2.jpg';
import airpods2 from './../images/products/air-pods-pro-2-2.jpg';
import airpods3 from './../images/products/air-pods-pro-2-3.jpg';

interface INews {
    id: number;
    title: string;
    img: string;
    img2: string;
    img3: string;
    date: string;
    description: string;
    details: string;
}

const newsList: INews[] = [
    {
        id: 0,
        title: 'Apple announced the new Apple Watch Ultra',
        img: watch1,
        img2: watch2,
        img3: watch3,
        date: 'September 23, 2022',
        description: 'Meet the most rugged and capable Apple Watch ever. With a robust titanium case, precision dual-frequency GPS, up to 36 hours of battery life, 1 the freedom of cellular,2 and three specialised straps made for athletes and adventurers of all kinds. To build the ultimate sports watch, we crafted every element with painstaking attention to detail for unparalleled performance. Titanium strikes the perfect balance between weight, ruggedness and corrosion resistance. The new case design rises up to surround the flat sapphire crystal and protect it from edge impacts. The Digital Crown is larger and the side button is raised from the case, making them easier to use while you’re wearing gloves.',
        details: 'The biggest and brightest Apple Watch display. The Always‑On Retina display is 2,000 nits at its peak and twice as bright as any other Apple Watch. The bigger display provides more room for workout metrics and detail‑packed watch faces. The Wayfinder face lets you rotate the Digital Crown to activate Night mode for better viewing in low-light situations. Everything in its place. An essential and versatile tool that fits on your wrist, Apple Watch Ultra packs incredible capability into a surprisingly small space. Battery life for days. When you’re on the second day of a backpacking trip, the final leg of a triathlon or diving along a coral reef, the last thing you want to think about is running out of battery. With longer battery life than ever, you can take on almost anything and have energy to spare.'
    },
    {
        id: 1,
        title: 'The new Apple Watch Series 8 is out there', 
        img: watch4,
        img2: watch5,
        img3: watch6,
        date: 'September 16, 2022',
        description: 'Your essential companion is now even more powerful. Introducing temperature sensing for deeper insights into women’s health.1 Crash Detection to get help in an emergency.2 Sleep stages to better understand your sleep. And new ways to train in the enhanced Workout app. The future of health never looked so good. Smooth and seamless. The edge of design. Apple Watch Series 8 features a big, brilliant, Always‑On display. Narrow borders push the screen right to the edge, resulting in an elegant integration with the curvature of the case.',
        details: 'The more informed you are about your health, the more empowered you are to affect it. Advanced health sensors in Apple Watch Series 8 provide insights to help you better understand your health. Introducing temperature sensing. Understand your cycle like never before. Apple Watch Series 8 has an innovative new sensor that tracks your temperature while you sleep, so you can see changes over time. Cycle Tracking uses this data to provide a retrospective estimate of when you likely ovulated. When combined with your heart rate and logged cycle data, you’ll get a detailed view of your menstrual cycle'
    },
    {
        id: 2,
        title: 'Apple introduced the new Air Pods Pro 2',
        img: airpods1,
        img2: airpods2,
        img3: airpods3,
        date: 'September 7, 2022',
        description: 'AirPods Pro have been re‑engineered for even richer audio experiences. Next-level Active Noise Cancellation and Adaptive Transparency reduce more external noise. Spatial Audio takes immersion to a remarkably personal level. Touch control now lets you adjust volume with a swipe. And a leap in power delivers six hours of battery life from a single charge. The new Apple‑designed H2 chip is the force behind AirPods Pro and their advanced audio performance. It works in concert with a custom‑built driver and amplifier to deliver crisp, clear high notes and deep, rich bass in stunning definition — so every sound is more vivid than ever.',
        details: 'The brand-new H2 chip carries out more functions than ever, using computational algorithms to deliver even smarter noise cancellation, superior three-dimensional sound and more efficient battery life — all at once. The chip uses powerful new adaptation algorithms to process sound more quickly, tuning audio at the precise moment you hear it. Every detail is rendered for your specific ear shape, immersing you in higher‑fidelity sound. A redesigned inward-facing microphone works wi. Featuring up to two times more noise cancellation than their predecessor, the H2-powered AirPods Pro are built to let you listen in peace. With control over what you hear — and don’t hear — you’ll be immersed in songs and podcasts like never before.'
    }
];

export default newsList;