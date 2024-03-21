export interface ProductRequest {
    category_id:number,
    name: string,
    description: string,
    price: number,
    quantity: number,
    imgMultipartFile ?: File
}