import React, { FormEvent, useState } from 'react';
import { deleteProduct } from '../api/cyclicBackend';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function DeleteProduct() {
  const router = useRouter()
  const [inputProduct, setInputProduct] = useState<string>('');
  const [isChecked, setIsChecked] = useState(false);
  async function handleSubmitNewProduct(e: FormEvent) {
    e.preventDefault();
    setIsChecked(!isChecked);
    await deleteProduct(inputProduct);
    setInputProduct('');
    setTimeout(() => router.push('/'), 1000);
  }

  function handleClickButton({ target }: any) {
    const methodClass = target.classList;
    methodClass.contains('click') ? methodClass.remove('click') :
      methodClass.add('click');
  }

  return (
    <form onSubmit={ handleSubmitNewProduct } className={`flex flex-col px-4 py-8 w-full items-center ${inter.className}`}>
      <h3 className="mb-4 text-2xl ">Exclua um produto</h3>
      <label className="my-2 flex flex-col w-full max-w-lg" htmlFor="title">
        ID
        <input
          className="text-black p-1 mt-2 w-full rounded-md"
          id="id"
          onChange={ ({ target }) => setInputProduct(target.value) }
          value={ inputProduct }
          maxLength={100}
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
