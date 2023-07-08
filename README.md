This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# MiniEcommerce Project

The project deployment in [https://mini-ecommerce-nextjs-beryl.vercel.app/](https://mini-ecommerce-nextjs-beryl.vercel.app/)
The Backend is in [https://github.com/AndersonPedrosa35/B8OneBack-end](https://github.com/AndersonPedrosa35/B8OneBack-end)

## Getting Started

First, install dependecies:

```bash
yarn
# or
npm install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can see the followings paths:

- [http://localhost:3000/](http://localhost:3000/)
    ### Home
- [http://localhost:3000/create](http://localhost:3000/create)
    ### Create Products
- [http://localhost:3000/delete](http://localhost:3000/delete)
    ### Delete Product By ID

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on :
- [http://localhost:3000/api/findAllProducts](http://localhost:3000/api/findAllProducts)
    ### METHOD GET - GET ALL PRODUCTS
- [http://localhost:3000/api/createProduct](http://localhost:3000/api/createProduct)
    ### METHOD POST - CREATE PRODUCT
- [http://localhost:3000/api/findProductById](http://localhost:3000/api/findProductById)
    ### METHOD GET - GET PRODUCT BY ID
- [http://localhost:3000/api/deleteProductById](http://localhost:3000/api/deleteProductById)
    ### TESTING - METHOD DELETE - DELETE PRODUCT BY ID
