import { getAccessToken, getRefreshToken, removeTokens } from "@/helpers";
import { createContext, ReactNode, useEffect, useState } from "react";


interface IUser{
    id: number,
    email: string,
    fullName: string
}

interface IToken{
    accessToken: string,
    refreshToken: string
}

interface IUserContext{
    user: IUser,
    tokens: IToken,
    setUserInfo?: (user: IUser)=>void,
    updateAccessToken?: (accessToken: string) => void,
    login?:(tokens: IToken)=>void,
    logout?: ()=>void
}

interface IUserContextprops {
    children: ReactNode
}

const initialTokens:IToken = {
    accessToken: '',
    refreshToken: ''
}

const initialUser = {
    id: 0,
    email: '',
    fullName: ''
}

export const TokenContext = createContext<IUserContext>({tokens:initialTokens, user: initialUser});


export const TokenContextProvider = ({children}: IUserContextprops):JSX.Element=>{

    useEffect(()=>{
        if(getAccessToken()!=='' && getRefreshToken()!== ''){
            login({accessToken:getAccessToken(), refreshToken:getRefreshToken()});
        }
    }, []);

    const [tokens, setTokens] = useState<IToken>({
        accessToken: '',
        refreshToken: ''
    });

    const [user, setUser] = useState<IUser>({
        id: 0,
        email: '',
        fullName: ''
    });

    const login = (tokens: IToken):void=>{
        setTokens(tokens);
    }

    const logout = ():void=>{
        setTokens(initialTokens);
        setUser(initialUser);
        removeTokens();
    }

    const setUserInfo  = (userInfo: IUser):void=>{
        setUser(userInfo);
    }

    const updateAccessToken  = (accessToken: string):void=>{
        setTokens(prev => {
            return {...prev, accessToken: accessToken};
        })
    }


    return(
        <TokenContext.Provider value={{tokens: tokens, user: user, login, logout, setUserInfo, updateAccessToken}}>
            {children}
        </TokenContext.Provider>
    )
}