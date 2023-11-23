export interface Product {
  id: string;
  title: string;
  price: number;
  images: string[];
  description: string;
}

export interface CreateProductDTO extends Omit<Product, 'id'> {
  categoryId: number;
}
