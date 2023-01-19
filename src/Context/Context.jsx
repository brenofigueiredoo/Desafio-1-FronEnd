import { createContext, useState } from "react";
import api from "../service";

export const Context = createContext()

export const ContextProvider = ({children}) => {
    const [calculation, setCalculation] = useState([]);

    const onSubmit = (data) => {
        api
         .post("", { ...data })
         .then((res) => {
           setCalculation(res.data);
         })
         .catch((err) => console.log(err));
       }
    
    return (
        <Context.Provider value={{
            calculation,
            setCalculation,
            onSubmit
        }}>
            {children}
        </Context.Provider>
    )
}