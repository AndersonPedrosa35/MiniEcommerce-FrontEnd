import { MinicartProducts } from '@/components/typings'
import React, { SetStateAction, createContext, useState } from 'react'
import type { PropsWithChildren } from 'react'

interface MinicartContextProps {
  miniCartProducts: MinicartProducts[] | any,
  setMiniCartProducts: React.Dispatch<SetStateAction<MinicartProducts[] | any>>,
  total: number,
  setTotal: React.Dispatch<SetStateAction<number>>,
  isOpen: boolean,
  setIsOpen: React.Dispatch<SetStateAction<boolean>>
}

export const MinicartContext = createContext<MinicartContextProps>(
  {
    miniCartProducts: [],
    setMiniCartProducts: () => {},
    total: 0,
    setTotal: () => {},
    isOpen: false,
    setIsOpen: () => {}
  })

export default function MiniCartProvider({ children }: PropsWithChildren) {
  const [miniCartProducts, setMiniCartProducts] = useState([])
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [total, setTotal] = useState<number>(0)
  const states = {
    miniCartProducts,
    setMiniCartProducts,
    total,
    setTotal,
    isOpen,
    setIsOpen
  }

  return (
    <MinicartContext.Provider value={states}>
      {children}
    </MinicartContext.Provider>
  )
}
