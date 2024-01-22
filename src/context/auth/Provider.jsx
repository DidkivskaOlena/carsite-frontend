import authContext from "./context"
import { useMemo, useState } from "react"

export default function Provider({children}){
    const [user, setUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onLogIn = () => {
        setUser({email: "bmv@gmail.com"});
        setIsLoggedIn(true)
    }

    const onLogOut = () => {
        setUser(null),
        setIsLoggedIn(false)
    }

    const providerValue = useMemo(() => {
        return {user, isLoggedIn, onLogIn, onLogOut}
    }, [isLoggedIn, user])

    return (
        <authContext.Provider value={providerValue}>
            {children}
        </authContext.Provider>
    )
}
