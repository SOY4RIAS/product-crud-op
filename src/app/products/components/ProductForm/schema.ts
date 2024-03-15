import { InferType, number, object, string } from 'yup';

export const productSchema = object({
  title: string()
    .min(3, 'Title must be at least 3 characters long.')
    .max(20, 'Title must be at most 20 characters long.')
    .required('Please provide a product title.'),
  description: string()
    .min(10, 'Description must be at least 3 characters long.')
    .max(100, 'Description must be at most 100 characters long.')
    .required('Please provide a product description.'),
  price: number()
    .moreThan(0, 'Price cannot be less than 0.')
    .required('Please provide a product price.'),
  stock: number().required('Please provide a product stock.'),
  brand: string().required('Please provide a product brand.'),
});

export type ProductSchema = InferType<typeof productSchema>;
