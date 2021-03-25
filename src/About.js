import { render } from "@testing-library/react";
import React , {useState,useEffect} from "react";
//import Header from './Header'
//state is an object and is a collection of variables
//spread operators ...
//state -- can be updated , can only be used in a single component
//props -- cannot be updated , can be used in the whole project , used to transfer data between components --> parent to child components



const About = (props) =>{

    console.log(props.location.state)

    //const [datafromprops , saveDatafromprops] = useState({});

    useEffect( ()=>{

        let object = localStorage.getItem("object"); //stringified

      
      

      
        object = JSON.parse(object) // converted to json object
        
        console.log(object);

        //saveDatafromprops(props.location.data)
    } , [])

    

    return(
        <>
           <h1>This is a about page</h1>

            {/* <p> Email - { datafromprops.email ? datafromprops.email : '' } </p>
            <p> Firstname - { datafromprops.firstname ? datafromprops.firstname : '' } </p>
            <p> Lastname - { datafromprops.lastname ? datafromprops.lastname : '' } </p> */}


            

           
           
        </>
    )
}

export default About;