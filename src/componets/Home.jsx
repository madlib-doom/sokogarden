import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './stylings/Signup.css'; // Make sure this contains both the loader and hero CSS


const Home = () => {
  const Loader = () => {
    return (
      <div className="loader-wrapper d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
        <div className="container-loader">
          {[...Array(21)].map((_, i) => (
            <div className="item" key={i} style={{ "--i": i }}></div>
          ))}
        </div>
      </div>
    );
  };
  
  // Declare your hooks
  const[products,setProducts]=useState([]);
  const[loading,setLoading]=useState(false);
  const[error,setError]=useState("");
  
  const navigate=useNavigate();

  // Declare the image url and store it inside of a variable
  const img_url="https://rexkinoo.pythonanywhere.com/static/images/"
  // create a function that will automatically be called when the home component is accesed 
  const fetchProduct=async()=>{
    // update the loading hook with message
    setLoading(true)
    try{
const response= await axios.get("https://rexkinoo.pythonanywhere.com/api/getproducts")

// Update the products hook with the products fetched from the api endpoint
setProducts(response.data)
// stop the loading hook
setLoading(false)
    }
    catch(error){
      setLoading(false)
      setError("There was an error encountered.Please try again later...")
    }
  }
  // useEffect hook
  useEffect(()=>{
    fetchProduct()
  },[])


  return (
    <div className=' m-3'>

        <h3 className='text-primary'>Availabe products</h3>
   <div className="row">
    <div className="col-md-4"></div>
    <div className="col-md-4">     {loading && <Loader />}
    {error && <div className="alert alert-danger">{error}</div>}</div>
    <div className="col-md-4"></div>
   </div>
        <div className="row">
      {products.map((product,index)=>(
          <div className="col-md-3 mb-4">
            <div className="card shadow h-100">
              <img src={img_url + product.product_photo} alt="product" className='card-img product_img mt-3'/>
              <div className="card-body">
                <h4>{product.product_name}</h4>
                <p className='text-success'>{product.product_description.slice(0,50)}...</p>
                <b className="text-danger">{product.product_cost}</b><br />
                <button className='btn btn-info mt-2' onClick={()=>navigate('/mpesapayment',{ state:
                  {product}
                })}>Buy Now</button>
              </div>
            </div>
          </div>
          ))}

        </div>
    </div>
  )
}


export default Home