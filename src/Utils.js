
export const CallAPI = (apiurl) => {

    return fetch(apiurl)
    .then(res=> res.json())
    .then(response=>{
        return response
    })
    .catch(error=>{
        return error
    })


}

export const checkAge = (age) => {
    if(age >= 18){
        return true
    }else{
        return false
    }


}
