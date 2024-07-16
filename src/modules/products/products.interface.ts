export type TProduct = {
    name: string;
    price: number;
    category: string;
    description: string;
    imageUrls: string[];
    stock: number;
    isFeatured: boolean;
    isBestSelling: boolean;
    ratings: number;
    createdAt: Date;
    updatedAt: Date;
}