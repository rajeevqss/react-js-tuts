import React , {useState,useEffect} from "react";
const Users = (props) =>{

    console.log(props.data)

    

    useEffect( ()=>{
        getUsers()

        
    } , [])

    const getUsers = () =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(res=>{

            

            //res

            props.onSendData(res); // this function is sending data to parent component
            
            setUserDataArray(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }


    const [ userDataArray , setUserDataArray ] = useState([])

    
    return(
        <div>
            


        </div>
    )
};

export default Users;