import React from 'react'

const About = () => {
  return (
    
<div className='row justify-content-center'>
    <div className="col-md-4">
      <div className="card-shadow p-4">
        <h6 className='text-success'><i className="bi bi-telephone fs-6 text-primary"></i>
        Contact us through:</h6>
        <ul>
            <li>0745444452</li>
            <li>0746422121</li>
            <li>+1-6766-72872</li>
        </ul>
      </div>
    </div>
    <div className="col-md-4 text-center bg-warning card-shadow p-4 ">
        <h3 className='text-info '>Our motto:</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quam itaque blanditiis dolor vero. Consequatur, ad. Fugit inventore laudantium delectus omnis deserunt quibusdam veritatis ex amet, perspiciatis minus sed odio.</p>
        <h3 className='text-info'>We also apsire to</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum nihil labore perferendis, inventore, pariatur deserunt nesciunt veniam exercitationem iste commodi, similique dicta repellat odit ab voluptatibus cum maiores quibusdam!</p>
    </div>
    <div className="col-md-4 mb-4">
       <div className="card-shadow mt-4 bg-light">
        <form >
            <input type="email" placeholder='Add your email here' className='form-control' /><br /><br />
            <textarea  className="form-control"placeholder='Feel free to add your comments about how you feel about this website'  rows={10} cols={19} ></textarea><br />
            <button type="submit" className="cta w-100">
  <span className="span">Submit</span>
  <span className="second">
    <svg
      width="50px"
      height="20px"
      viewBox="0 0 66 43"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none">
        <path
          className="one"
          d="M40.1543933,3.89485454 ..."
          fill="#FFFFFF"
        ></path>
        <path
          className="two"
          d="M20.1543933,3.89485454 ..."
          fill="#FFFFFF"
        ></path>
        <path
          className="three"
          d="M0.154393339,3.89485454 ..."
          fill="#FFFFFF"
        ></path>
      </g>
    </svg>
  </span>
</button>
        </form>
       </div>


    </div>
<p className='text-success mb-3'> <b>You are welcome to shop with us ! Thank you</b></p>
</div>
  )
}

export default About