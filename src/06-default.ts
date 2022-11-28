export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10
) => (
    {
      id,
      stock,
      isNew
    }
  )

 const p1 = createProduct(1, false, 5)
 const p2 = createProduct(2)

 console.log(p1, p2)
