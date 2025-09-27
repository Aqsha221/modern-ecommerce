interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    category: string;
    rating: number;
    reviews: Review[];
}

interface Review {
    id: string;
    userId: string;
    productId: string;
    rating: number;
    comment: string;
    createdAt: Date;
}

interface User {
    id: string;
    email: string;
    name: string;
    passwordHash?: string;
    createdAt: Date;
    updatedAt: Date;
}

interface Order {
    id: string;
    userId: string;
    products: OrderProduct[];
    totalAmount: number;
    createdAt: Date;
    updatedAt: Date;
}

interface OrderProduct {
    productId: string;
    quantity: number;
}

interface CartItem {
    productId: string;
    quantity: number;
}

interface Coupon {
    id: string;
    code: string;
    discountPercentage: number;
    validUntil: Date;
}