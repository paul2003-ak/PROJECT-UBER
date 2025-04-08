import React, { createContext, useState } from 'react'

 export const captainDatacontext=createContext();

const Captaincontext = ({children}) => {

    const [captain, setCaptain] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [error, setError] = useState(null)

    const updateCaptain=(captainData)=>{
        setCaptain(captainData)
    }

    const value={
        captain,
        setCaptain,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaptain
    }
  return (
    <div>
        <captainDatacontext.Provider value={value}>
            {children}
        </captainDatacontext.Provider>
    </div>
  )
}

export default Captaincontext