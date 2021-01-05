import React from 'react';
import MyFlow from './components/flowchart/Nodecomponent';


export default function App() {
  return (
    <div>
      {/* Navbar */}
       <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link nav-brandName" href="#" style={{color:'white', fontWeight:500}}>Your Automation Pipeline</a>
      </li>
      <li>
        <form className="form-inline my-2 my-lg-0" style={{marginLeft:'752px'}}>
    <button className="btn btn-outline-light my-2 my-sm-0 mr-4" type="submit">Discard</button>
      <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Post to Site</button>
    </form>
      </li>
    </ul>
  </div>
</nav>
   <MyFlow/>
    </div>
  )
}
