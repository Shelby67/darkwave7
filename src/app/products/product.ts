export interface IProduct{
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    description: string;
    price: number;
    rating: number;
    imageUrl: string;
}

export interface IForm {
    formId: number;
    firstName: string;
    lastName: string;
    email: string;
    state: string;
}
