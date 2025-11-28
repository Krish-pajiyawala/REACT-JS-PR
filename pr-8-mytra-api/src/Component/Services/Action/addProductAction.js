

export const addproduct = (data)=>{
    return{
        type:"ADD_PRODUCT",
        payload:data
    }
}


export const getallproduct = ()=>{
    return{
        type:"GET_PRODUCTS"
    }
}


export const deleteproduct = (data)=>{
    return {
        type:"DELETE_PRODUCT",
        payload:data
    }
} 


export const Editproduct = (data)=>{
    return{
        type:"EDIT_PRODUCT",
        payload:data
    }
}


export const updateProduct = (data)=>{
    return{
        type:"UPDATE_PRODUCT",
        payload:data
    }
}