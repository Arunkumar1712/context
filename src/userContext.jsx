//usercontext.jsx file
import { createContext, useState ,useContext } from "react";


export let UserContext = createContext();

export const useCart =()=>{
    return useContext(UserContext);
}

export const UserProvider = ({children})=>{

    const [productlist,setProductlist] = useState([]);
    const removeFromCart =(productId) =>{
        setProductlist(productlist.filter((item)=> item.id !== productId))
    }
    return(
        
        <UserContext.Provider value ={{productlist,setProductlist,removeFromCart}}>
           {children}
        </UserContext.Provider>
    )
}