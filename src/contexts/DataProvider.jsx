import { useState, useEffect, createContext, useContext } from "react";
import { getFirestore, getDocs, collection, doc, getDoc } from '@firebase/firestore'

export const DataContext = createContext()

export const DataProvider = function(props) {
    const [cars, setCars] = useState([])
    const db = getFirestore()
    useEffect(() => {
        async function getCars() {
            const querySnapshot = await getDocs(collection(db, "inventory"))
            const loadedInventory = []
            querySnapshot.forEach((doc) => {
                loadedInventory.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            setCars(loadedInventory)
        }
        getCars()
    }, [])

    async function getCar(id) {
        /* const response = await fetch (`https://my-json-server.typicode.com/Llang8/cars-api/cars/${id}`)
        const data = await response.json()
        return data */ 
        const docRef = doc(db, 'inventory', id)  
        const docSnap = await getDoc(docRef)
        if (!docSnap.exists()){
            throw new Error
        }
        return docSnap.data() 
    }


    const value = {
        cars,
        getCar
    }

    return (
        <DataContext.Provider value={value}>
            { props.children }
        </DataContext.Provider>
    )
}