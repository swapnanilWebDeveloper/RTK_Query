import React,{useRef} from 'react'
import { useGetProductsQuery , useAddProductsMutation,
         useDeleteProductsMutation , useUpdateProductsMutation} from '../Api/productAdmin'

function Products() {
    const {data, error, isLoadaing} = useGetProductsQuery();
    const [addProducts] = useAddProductsMutation(); 
    const [deleteProducts] = useDeleteProductsMutation();
    const [updateProducts] = useUpdateProductsMutation();
    
    const name = useRef();
    const brand = useRef();
    const price = useRef();
    const discount = useRef();

    const product_data = (content, productId) => {
        if(content === "add"){
            addProducts({
                name : name.current.value,
                brand : brand.current.value,
                price : Number(price.current.value),
                discount : Number(discount.current.value)
            })
        }
        else{
            updateProducts({
                id : productId,
                name : name.current.value,
                brand : brand.current.value,
                price : Number(price.current.value),
                discount : Number(discount.current.value)
            })
        }
    }

  return (
    <div>
         {
            data && data.map((element) => (
                <h3 key={element.id}>
                   <p>id : {element.id}, name : {element.name}, brand : {element.brand}, price : {element.price}, discount : {element.discount}%</p>
                   <button onClick={() => deleteProducts(element.id)}>delete Products</button>
                   <button onClick={() => product_data("update", element.id)}>
                     update product
                  </button>
                </h3>
            ))
        }

        <form >
            <p>name : </p><input type="text" ref={name} />
            <p>brand : </p><input type="text" ref={brand} />
            <p>price : </p><input type="text" ref={price} />
            <p>discount : </p><input type="text" ref={discount} />
            <button type="submit" onClick={() => product_data("add")}>add product</button>
         </form>
    </div>
  )
}

export default Products
