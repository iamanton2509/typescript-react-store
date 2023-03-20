import apple from './../images/icons/apple.svg';

interface Services {
    id: number;
    img: string;
    title: string;
    description: string;
}

const servicesList: Services[] = [
    {
        id: 1,
        img: apple, 
        title: 'Get a free 3-month subscription',
        description: 'Sign up for a 3-month free subscription on Apple Music and enjoy ad-free streaming of millions of songs, exclusive content, and personalized playlists. Get access to Apple TV+, Apple Arcade, and iCloud storage to keep your media files safe and secure'
    },
    {
        id: 2,
        img: apple,
        title: '14-day money back',
        description: `We stand behind the quality of our products and are confident that you will love them too. If for any reason you're not satisfied with your product, you can return it to us within 14 days of the purchase date for a full refund`
    },
    {
        id: 3,
        img: apple,
        title: 'Fast free delivery',
        description: `We offer lightning-fast delivery on all of our products, straight to your doorstep. No need to worry about shipping fees or long wait times, we'll get your purchase to you as quickly as possible. Start shopping now and experience our unbeatable delivery service!`
    },
    {
        id: 4,
        img: apple,
        title: 'Frequent sales',
        description: 'Looking for great deals on Apple products and accessories? Look no further than our online store! We frequently offer sales on our entire range of products, giving you the chance to save big on the latest and greatest from Apple.'
    }
];

export default servicesList;