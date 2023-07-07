import { MinicartContext } from '@/context/MiniCart';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import { MinicartProducts, NewFormatProductItem } from './typings';

export default function BuyButton({ product }: { product: NewFormatProductItem }) {
  const [isChecked, setIsChecked] = useState(false);
  const { setMiniCartProducts } = useContext<any>(MinicartContext)

  function handleClickButton({ target }: React.MouseEvent<HTMLButtonElement> | any) {
    if (isChecked){
      setIsChecked(false);
      return target.classList.remove('click');
    }
    setIsChecked(true);
    setMiniCartProducts((previewState: MinicartProducts[]) => {
      const IsRepeat = previewState.find((productId: MinicartProducts) => productId[product.id])
      if (IsRepeat) {
        // Garantir que o produto que já foi adicionado não se repita, mas aumentar uma quantidade
        return previewState.map((productAdded: any) => {
          if (productAdded[product.id]) { 
            return { ...productAdded,
              [product.id]: { ...productAdded[product.id], quantity: productAdded[product.id]?.quantity + 1 }}
          }
          return productAdded
        })
      }
      // Garantir que o produto que ainda não foi adicionado, seja adicionado com 1 de quantidade
      return [...previewState, {[product.id]: {...product, quantity: 1}}]
    })
    setTimeout(() => {
      setIsChecked(false)
    }, 2000)
    return target.classList.add('click');
  }

  return (
    <button className='flex items-center' onClick={ handleClickButton } >
      { isChecked ? 
      (
        <> 
          <Image src="/check.svg" alt='clicado' width={24} height={24} className='mr-1' /> 
        </>
      ) 
      : 'Adicionar' }
    </button>
  )
}
