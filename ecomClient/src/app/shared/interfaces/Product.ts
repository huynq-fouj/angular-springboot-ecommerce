export interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
    description: string;
    created_at: string;
    updated_at: string;
    deleted: boolean;
    image: string;
    category_id: number;
}