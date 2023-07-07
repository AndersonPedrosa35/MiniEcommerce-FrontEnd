export interface CreateProductItem {
  category: string
  describe: string
  file: string
  title: string
}

export interface ProductItem extends CreateProductItem {
  _id: string
  price: number
  promotion: number
}

export interface ProductItemWithParcel extends ProductItem {
  parcel: string
}

export interface NewFormatProductItem {
  file: string
  price: number
  parcel: string
  promotion: number
  title: string
  id: string
  quantity?: number
}

export interface MinicartProducts {
  [id : string]: NewFormatProductItem
}
