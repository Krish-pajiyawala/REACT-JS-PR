import { getproductData, setProductData } from "../Storage/StorageData"

const initialvalue = 
    {
        products: getproductData(),
        product: null,
        isLoding: false
    }





export const AddProductRedux = (state = initialvalue, action) => {

    switch (action.type) {
        case "ADD_PRODUCT":
            let data = getproductData()
            data.push(action.payload)
            setProductData(data)
            return {
                ...state,
                products: data
            }

        case "GET_PRODUCTS":
            const allproducts = getproductData()
            return{
                ...state,
                products:allproducts ||[]
            }
        case "DELETE_PRODUCT":
            const productall = getproductData()
            let uproducts = productall.filter((product)=>product.id !==action.payload)
            setProductData(uproducts)
            return{
                ...state,
                products:uproducts
            }     
        case "EDIT_PRODUCT" :
      let getproducts = getproductData() 
            let findeproduct = getproducts.find((product)=>product.id === action.payload) 
             
      return{
        ...state,
        product:findeproduct
      }

      case "UPDATE_PRODUCT" :
      let productData = getproductData()
        const updatedProducts = productData.map((product) =>
    product.id === action.payload.id ? action.payload  : product
  );
      setProductData(updatedProducts)
     return{
      ...state,
      products:updatedProducts,
      product:null
     }       
        default:
            return state
    }
}