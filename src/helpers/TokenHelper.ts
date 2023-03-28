const REFRESH_TOKEN = 'REFRESH_TOKEN';
const ACCESS_TOKEN = 'ACCESS_TOKEN';

export const getAccessToken = ():string=>{
    
    let aToken:string|null = localStorage.getItem(ACCESS_TOKEN);

    if(aToken===null){
        return '';
    }else{
        return aToken;
    }
}

export const getRefreshToken = ():string=>{
    let rToken:string|null = localStorage.getItem(REFRESH_TOKEN);

    if(rToken===null){
        return '';
    }else{
        return rToken;
    }
}

export const setAccessToken = (access_token: string)=>{
    localStorage.setItem(ACCESS_TOKEN, access_token);
}

export const setRefreshToken = (refresh_token: string)=>{
    localStorage.setItem(REFRESH_TOKEN, refresh_token);
}

export const removeTokens = ()=>{
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
}
