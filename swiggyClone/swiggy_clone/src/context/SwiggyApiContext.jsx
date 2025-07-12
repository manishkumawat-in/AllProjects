import { createContext, useContext, useEffect, useState } from "react"

const ApiContext = createContext();

export const ApiContextProvider = ({children}) => {

    const [categories, setCategories] = useState([]);
    const [topRestaurantChains, setTopRestaurantChains] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        ;(
          async () => {
          
                try {
                  const response1 = await fetch('http://localhost:5000/categories');
                  if (!response1.ok) {
                      throw new Error(`http error while fetching Categories! status : ${response1.status}`);
                  }                 

                  const response2 = await fetch('http://localhost:5000/top-restaurant-chains');
                  if (!response2.ok) {
                    throw new Error(`http error while fetching Top Restaurant chains! status : ${response2.status}`);
                  }
                  const result1 = await response1.json(); 
                  const result2 = await response2.json();
                  setCategories(result1);                    
                  setTopRestaurantChains(result2);
                                        
                } catch (error) {
                    setError(error);
                    console.log("error : " + error);  
                } finally {
                  setIsLoading(false);
                }           
          }
        )();       
    }, []);

    return (
    <ApiContext.Provider value={{ categories, topRestaurantChains, isLoading, error }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApiData = () => {
  return useContext(ApiContext);
}
