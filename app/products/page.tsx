import React from 'react'

export default async function Products() {
    const res = await fetch("http://localhost:3000/api/products");
    const data= res.json();
  return (
    <div className='text-white'>Products
        <p>{data}</p>
    </div>

  )
}
