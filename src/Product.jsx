import React, { useEffect, useState } from 'react'

const Product = () => {
    const [product, setProduct] = useState([]);
    const urlApi = 'api/products'

    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch(urlApi)
            let data = await response.json()
            setProduct(data.products)
        }
        fetchData()
    }, [])

    console.log(product);


  return (
    <div>
        <h1>Catálogo de perfumes</h1>
        <br />
        <hr />
        {product.map((p) => (
            <div>
                <h3>{p.title}</h3>
                <img src={p.image} alt="" height={200} width={200} />
                <p>{p.description}</p>
                <h4>Precio: {p.price}</h4>
                <br />
                <hr />
            </div>
        ))}
    </div>
  )
}

export default Product
