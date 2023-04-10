export interface IProduct {
    id: number;
    img: string;
    title: string;
    description: string;
    color?: string;
    count: number;
    price: number;
    sale?: number;
    saleColor?: string;
    totalPrice: number;
    newItem?: boolean;
    wishlist: boolean;
    cart: boolean;
}
export interface IOptions {
    title?: string;
    value?: string;
    name: string;
}
export interface StoreProps {
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
export interface CurrencyTypes {
    myUkrainianArray: number[];
}
export interface IService {
    id: string;
    title: string;
    description: string;
}