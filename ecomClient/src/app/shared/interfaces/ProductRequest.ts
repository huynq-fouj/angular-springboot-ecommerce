export interface ProductRequest {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    deleted: boolean;
    imgMultipartFile: File;
    category_id:number;
}