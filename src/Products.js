import { render } from "@testing-library/react";
import React , {useState,useEffect} from "react";
import { Link } from "react-router-dom";

const Products = (props) =>{

    useEffect(  () => {
        getProducts();
    } , [])

    const getProducts = async () =>{
        let products = await fetch("https://fakestoreapi.com/products");
        products = await products.json();
        setProducts(products);
        console.log(products)

    }

    const [products , setProducts ] = useState([]);

    return(
        <>
           <h3>Products page</h3>

           {
               products.length > 0 ? 
               
               products.map((value,index)=>{
                
                    return(
                        <div style={{ display:"inline-flex" , overflow:"hidden"  }} >
                            
                            <div style={{ width : "250px" , height : "340px", backgroundColor : "#FFF", border : "1px solid #DCDCDC" ,padding:20 , margin : 10 , boxShadow : "0px 0px 5px #CCC" }}>

                                <img src={ value.image } style={ { display: "block" , margin:"0 auto", width:"200px",height:"200px" } } />
                                
                                <div>
                                    <h5 >
                                        { value.title }
                                        <small style={{textAlign:'right',float:"right"}}>${value.price}</small>
                                    </h5>
                                </div>

                                <div style={{textAlign:"center" ,  paddingTop:10 }}>
                                    <button style={{ marginRight:10, background : "#3495ED" , border:"0px", boxShadow:"0px 0px 2px #000", borderRadius : 5, padding : 10 , color:"#FFF" }}>View Product</button>
                                    <button style={{ background : "green" , border:"0px", padding : 10,borderRadius : 5, boxShadow:"0px 0px 2px #000", color:"#FFF" }}>Add To Cart </button>
                                </div>


                            </div>

                            
                            
                            


                        </div>


                        
                    )


               }) 
               
               : <p>No Products found</p>
           } 



           
        </>
    )
}

export default Products;