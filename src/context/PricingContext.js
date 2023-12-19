import { createContext } from "react";
import { useState } from "react";
export const PricingContext = createContext();

export const PricingProvider = ({ children }) => {
    const allPricing = {
        Full: {
            Basic :{
                Name: "Basic",
                Price: "$199.99",
                Storage: "500 GB",
                Users: "2",
                Send: "3",
            },
            Pro :{
                Name: "Professional",
                Price: "$249.99",
                Storage: "1 TB",
                Users: "5",
                Send: "10",
            },
            Master :{
                Name: "Master",
                Price: "$399.99",
                Storage: "2 TB",
                Users: "10",
                Send: "20",
            },
        },
        Montly: {
            Basic :{
                Name: "Basic",
                Price: "$19.99",
                Storage: "500 GB",
                Users: "2",
                Send: "3",
            },
            Pro :{
                Name: "Professional",
                Price: "$24.99",
                Storage: "1 TB",
                Users: "5",
                Send: "10",
            },
            Master :{
                Name: "Master",
                Price: "$39.99",
                Storage: "2 TB",
                Users: "10",
                Send: "20",
            },
        },
    };
    const [enabled, setEnabled] = useState(false)
    return (
        <PricingContext.Provider value={{ allPricing, enabled, setEnabled }}>
            {children}
            </PricingContext.Provider>
    )
}