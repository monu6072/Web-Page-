import React from 'react'
import "./Layout2.css";
import image5 from './Images/image5.png';
import image6 from './Images/image6.png';
import image7 from './Images/image7.png';
import image8 from './Images/image8.png';

function Layout2() {
  return (
    <div style={{color:'white'}} className='container-lg m-0'>
        <h5>Explore Your First Evvents</h5>
        <h1 style={{color:'white'}}>Event Name</h1>
        <span className='bold mx-auto'>Vanue</span>

        <p>Lorem ipsum dolor sit amet <br/>consectetur adipisicing elit. Accusantium aut illo sed <br/>reiciendis saepe omnis assumenda ratione <br/>deleniti ut repudiandae id totam tenetur
        </p><br/>

        <h5 className='bolder'>Artist Lineup</h5>
        <div className='d-flex container-lg' id='imgs'>
        <img src={image6} alt="image6" className='rounded  '/>
            <img src={image5} alt="image5" className='rounded '/>
            <img src={image7} alt="image7" className='rounded '/>
        </div>

        <div className=' mt-5 row '>
          <img src={image8} alt="" className='col-md-2 rounded img-fluid'/>
          <button type="button"  class="col-md-2 btn btn-warning mx-auto">Join Waitlist</button>
        </div>
    </div>
  )
}

export default Layout2