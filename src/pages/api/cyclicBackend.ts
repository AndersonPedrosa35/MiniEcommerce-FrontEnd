import { CreateProductItem } from '@/components/typings';
import axios from 'axios';

interface CreateProduct extends CreateProductItem {
  price: number
  promotion: number
}

const api = axios.create({
  baseURL: 'https://spotless-cod-houndstooth.cyclic.app/'
});

export const findAll = async () => api.get('/products')
  .then(({ data }) => data)
  .catch((err) => console.error(err));

export const getById = async (id: string) => api.get(`/products/${id}`)
  .then(( data ) => data)
  .catch((err) => console.error(err));

export const createProduct = async (body: CreateProduct) => api.post('/products', body)
  .then(( data ) => data)
  .catch((err) => console.error(err));

  export const deleteProduct = async (id: string) => api.delete(`/products/${id}`)
  .then(( data ) => data)
  .catch((err) => console.error(err));
