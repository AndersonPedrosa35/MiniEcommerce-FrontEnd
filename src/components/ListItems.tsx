import React, { useContext, useEffect, useState } from 'react'
import { findAll } from '../pages/api/cyclicBackend';
import Favorite from './Wishlist';
import Button from './BuyButton';
import { ProductItemWithParcel } from './typings';

export function formatPrices(price: any) {
  const index = price.length;
  if(index > 3) {
    const arrayPrice = [...price]; 
    arrayPrice.splice(index - 3, -1, '.');
    price = arrayPrice.join('');
  }
  if (index > 6) {
    const arrayPrice = [...price]; 
    arrayPrice.splice(index - 6, -1, '.');
    return price = arrayPrice.join('');
  }
  return price;
}

export default function ListItems() {
  const [products, setProducts] = useState([]);

  function parcelPrice(promotion: number) {
    const parcel = (promotion / 10).toFixed(2);
    return `10x de R$ ${parcel} `
  }

  useEffect(() => {
    const request = async () => findAll()
      .then((data) => {
        const result = data?.result
        result?.forEach((item: ProductItemWithParcel) => {
          item.price = formatPrices(item.price);
          item.parcel = parcelPrice(item.promotion)
          item.promotion = formatPrices(item.promotion);
        })
        setProducts(result);
      });
    request()
  }, []);

  return (
    <div className='grid sm:grid-cols-3 lg:grid-cols-4 grid-cols-2'>
   { products && products.map(({ _id: id, title, file, price, promotion, parcel }, index) => (
      <section key={index} className="flex flex-col w-full max-w-sm relative mx-4">
        <Favorite />
        <div className='flex justify-center p-4 overflow-hidden'>
          <img src={ file } alt={ `Ilustração da ${ title }` } width={200} height={200} className='w-full max-w-[150px] sm:max-w-[200px] object-contain'/>
        </div>
        <div className='p-2 flex flex-col items-start'>
          <li className="list-none text-xl mb-2 productTitle min-h-[56px]">{ title }</li>
          <li className="list-none text-base line-through">{ `R$ ${ price },00` }</li>
          <li className="list-none text-base">{ `R$ ${promotion},00` }</li>
          <small className='productParcel'>em até <strong>{ parcel }</strong> sem juros</small>
          <div className='w-full flex justify-center bg-blue-900 text-white p-2 rounded-md mt-2 transition hover:bg-blue-300 hover:text-black delay-200 duration-150'>
          <Button product={{ id, title, file, price, promotion, parcel }}  />
          </div>
        </div>
      </section>
    ))}
    </div>
  )
}
