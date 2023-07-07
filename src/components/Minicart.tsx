import { MinicartContext } from '@/context/MiniCart'
import Image from 'next/image'
import { useContext, useEffect } from 'react'
import { MinicartProducts } from './typings'

function removeItem(products: any, product: any) {
	return products.filter((productId: any) => !productId[product.id])
}

export default function Minicart() {
	const {
		miniCartProducts,
		setMiniCartProducts,
		total,
		setTotal,
		setIsOpen,
		isOpen
	} = useContext(MinicartContext)
	
	useEffect(() => {
		setTotal(0)
		miniCartProducts.map((product: MinicartProducts, index: number) => {
			const [ _item, arrayMinicart ]: any = Object.entries(product)[0]
			setTotal((prevState: number) => prevState + (arrayMinicart?.promotion * arrayMinicart?.quantity))
		})
	}, [miniCartProducts])
	return (
		<section>
			<div className={`fixed right-0 top-0 bg-white ${isOpen ? 'show' : ''} h-full z-10 flex flex-col componentTransitionWidth`}>
				<div className='flex justify-between items-center border-b-2 p-6 border-gray-500'>
					<h2 className={isOpen ? 'text-lg' : 'text-[0px]'}>Meu Carrinho</h2>
					<button type='button' onClick={() => setIsOpen(false)} className='bg-transparent border-none'>
						<Image src="/closeButton.svg" alt='Fechar carrinho' width={30} height={30} />
					</button>
				</div>
				{ miniCartProducts.map((product: MinicartProducts, index: number) => {
					const [ _item, arrayMinicart ]: any = Object.entries(product)[0]				
					return (
						<div key={index} className='max-w-xs overflow-y-auto'>
							<div className='flex justify-between'>
								<img src={arrayMinicart?.file} alt={arrayMinicart?.title} width={60} height={60} />
								<button type='button' onClick={() => setMiniCartProducts(removeItem(miniCartProducts, arrayMinicart))} className='bg-transparent border-none'>
									<Image src="/trash.svg" alt='Lixeira' width={30} height={30} />
								</button>
							</div>
							<div>
								<h3>{arrayMinicart?.title}</h3>
								<div className='flex justify-between'>
									<h3>{`Quant. ${arrayMinicart?.quantity}`}</h3>
									<h3>{`R$ ${arrayMinicart?.promotion},00 a unid.`}</h3>
								</div>
								
							</div>
						</div>
				)}) }
				<h3 className={`absolute bottom-0 pb-6 ${isOpen ? 'text-lg' : 'text-[0px]'}`}>{`Total R$ ${total}`}</h3>
			</div>
		</section>
	)
}
