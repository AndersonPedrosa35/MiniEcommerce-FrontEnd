import React, { FormEvent, useState } from 'react';
import { createProduct } from '../api/cyclicBackend';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Inter } from 'next/font/google'
import { CreateProductItem } from '@/components/typings';

const inter = Inter({ subsets: ['latin'] })

interface CreateProduct extends CreateProductItem {
  price: string
  promotion: string
}

export default function CreateProduct() {
  const router = useRouter()
  const [inputProduct, setInputProduct] = useState<CreateProduct>(
    {
      title: '',
      file: '',
      describe: '',
      category: '',
      price: '',
      promotion: ''
    });
  const [isChecked, setIsChecked] = useState(false);
  
  async function handleSubmitNewProduct(e: FormEvent) {
    e.preventDefault();
    setIsChecked(!isChecked);
    const newProductItem = {
      ...inputProduct,
      price: parseFloat(inputProduct.price),
      promotion: parseFloat(inputProduct.promotion)
    }
    await createProduct(newProductItem);
    setInputProduct({
      title: '',
      file: '',
      describe: '',
      category: '',
      price: '',
      promotion: ''
    });
    setTimeout(() => router.push('/'), 1000);
  }

  function handleChange({ target: { id, value } }: any) {
    setInputProduct({ ...inputProduct, [id]: value });
  }

  function handleClickButton({ target }: any) {
    const methodClass = target.classList;
    methodClass.contains('click') ? methodClass.remove('click') :
      methodClass.add('click');
  }

  return (
    <form onSubmit={ handleSubmitNewProduct } className={`flex flex-col px-4 py-8 w-full items-center ${inter.className}`}>
      <h3 className="mb-4 text-2xl ">Cadastre um produto</h3>
      <label className="my-2 flex flex-col w-full max-w-lg" htmlFor="title">
        Título
        <input
          className="text-black p-1 mt-2 w-full rounded-md"
          id="title"
          onChange={ handleChange }
          value={ inputProduct['title'] }
          minLength={8}
          required
        />
      </label>
      <label className="my-2 flex flex-col w-full max-w-lg" htmlFor="file">
        Arquivo
        <input
          className="text-black p-1 mt-2 w-full rounded-md"
          id="file"
          value={ inputProduct['file'] }
          onChange={ handleChange }
          required
        />
      </label>
      <label className="my-2 flex flex-col w-full max-w-lg" htmlFor="describe">
        Descrição
        <input
        className="text-black p-1 mt-2 w-full rounded-md"
          id="describe"
          value={ inputProduct['describe'] }
          onChange={ handleChange }
          minLength={50}
          required
        />
      </label>
      <label className="my-2 flex flex-col w-full max-w-lg" htmlFor="category">
        Categoria
        <input
        className="text-black p-1 mt-2 w-full rounded-md"
          id="category"
          value={ inputProduct['category'] }
          onChange={ handleChange }
          minLength={3}
          required
        />
      </label>
      <label className="my-2 flex flex-col w-full max-w-lg" htmlFor="price">
        Preço
        <input
        className="text-black p-1 mt-2 w-full rounded-md"
          type='number'
          id="price"
          value={ inputProduct['price'] }
          onChange={ handleChange }
          required
        />
      </label>
      <label className="my-2 flex flex-col w-full max-w-lg" htmlFor="promotion">
        Preço promocional
        <input
        className="text-black p-1 mt-2 w-full rounded-md"
          type='number'
          id="promotion"
          value={ inputProduct['promotion'] }
          onChange={ handleChange }
          required
        />
      </label>
      <button type="submit" onClick={ handleClickButton } className='bg-yellow-500 text-black p-2 mt-4 max-w-xs w-full rounded-md flex justify-center'>
      { isChecked ? 
      (
        <> 
          <Image src="/check.svg" width={30} height={30} alt='clicado' /> 
        </>
      ) 
      : 'Enviar' }
      </button>
    </form>
  )
}
