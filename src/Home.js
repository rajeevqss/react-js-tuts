import { render } from "@testing-library/react";
import React , {useState,useEffect} from "react";
import { Link } from "react-router-dom";

import Users from "./Users";

//import Header from './Header'
//state is an object and is a collection of variables
//spread operators ...
//state -- can be updated , can only be used in a single component
//props -- cannot be updated , can be used in the whole project , used to transfer data between components --> parent to child components


// parent to child using props

// one page to another page using location and history via routing

// child to parent using props callback functions

//using Links and localstorage




const Home = (props) =>{

    

    useEffect( () => {

        

    } , [])

    

   





    const [userData , setUsers ] = useState([]);


    


    const [object , setFormData ] = useState({});

    const saveData = (event) =>{

        //user registration api 

        

        //save data to api
        let body = {};
        body["name"] = object.firstname;

        let headers = {};
        headers["Content-type"] = "application/json; charset=UTF-8";

        fetch("https://jsonplaceholder.typicode.com/users" , {
            method : "POST",
            body : JSON.stringify(body)  ,
            headers : headers ,
        })
        .then(res => res.json())
        .then(response =>{
            //redirect 
            //display on screen
            // save to state

            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })

        
        
        // if(event == "submit"){
        //     props.history.push({

        //     pathname : "/about" ,

        //     data : object

        // });
        // }else if(event == "reset"){

            
        //     setFormData({ ...object,  firstname : "" , lastname : "" , email : "" })
            
        // }
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        // let body = {};
        // let header = {};
        // header['Content-type'] = "application/json; charset=UTF-8";
        // fetch('https://jsonplaceholder.typicode.com/users', {
        //         method: 'POST',
        //         body: JSON.stringify(body),
        //         headers: header
        //         })
        //         .then(response => response.json())
        //         .then(data => {
        //         console.log(data);
        //         }).catch(err=> console.log(err));


        

        //send data to new page

        
    }

    
    
    
    const handleApiResponse = (data) => {

        let apiurl = "https://jsonplaceholder.typicode.com/students";

        let object = {};
        object['users'] = data;
        
        
        let body = data;

        let headers = {};
        headers["Content-type"] = "application/json;Charset=UTF-8";

        fetch(apiurl,{
            body : JSON.stringify(body),
            headers : headers,
            method : 'POST'
        })
        .then(res=> res.json())
        .then(response => {
            console.log(response)
        })
        .catch(err=>{
            console.log(err)
        })

        setUsers(data);
        console.log(data)
    }
    
    

    return(
        <>
           <h1>This is a home page</h1>

           {
               userData.map( (object,index)=>{
                    return(
                        <p> { object.name } </p>
                    )

               })
           }
           
           <Link to={
               {
                   pathname : '/about',
                   state : userData
               }
           } >
            About Us
           </Link>

            <Users onSendData = {  (data) => handleApiResponse(data) } />
           

           <form onSubmit={ (e) => e.preventDefault() }>

                
                
                <input type="text" value={object.firstname} onChange= { (e) => setFormData({ ...object,  firstname : e.target.value }) }  />

                <input type="text" value={object.lastname} onChange= { (e) => setFormData({ ...object,  lastname : e.target.value }) }  />
                
                <input type="text" value={object.email} onChange= { (e) => setFormData({ ...object,  email : e.target.value }) }  />

                
                <button onClick={ () => saveData("submit") }>submit</button>

                <button onClick={ () => saveData("reset") }>reset</button>
            </form> 


            {/* <Link
            to={{
                pathname: "/about",
                state: data
            }}
            ></Link> */}

           
        </>
    )
}

export default Home;