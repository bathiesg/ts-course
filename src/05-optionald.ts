export const createProduct = (
    id: string | number,
    isNew?: boolean,
    stock?: number
  ) => (
      {
        id,
        stock: stock ?? 10,
        isNew: isNew ?? true
      }
    )

   const p1 = createProduct(1, false, 5)
   const p2 = createProduct(2)

   console.log(p1, p2)
