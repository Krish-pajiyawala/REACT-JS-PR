
export const setProductData = (data)=>{
    localStorage.setItem('products',JSON.stringify(data))
} 

export const getproductData = ()=>{
   return JSON.parse(localStorage.getItem('products')) || []
}