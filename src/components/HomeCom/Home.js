import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import backgroundImage from '../../assets/placeholder.png'


const Homepage = () => {
  return (
    <>
      <div className="border">

        <div className='text'>
        <h2 className="text-inner">Popular Movies</h2>
         </div>
      </div>
      <div className="cards">
        <Link to="/series" style={{ padding: 5, textDecoration : "none" }}>
          <div className="card" style={{backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "auto"
    }}>
            <div className="card__copy">
              <h1>Series</h1>
            </div>
          </div>
        <h5 className ="title" >Popular Series</h5>
        </Link>
        <Link to="/movies" style={{ padding: 5, textDecoration : "none" }}>
          <div className="card" style={{backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "auto"
    }}>
            <div className="card__copy">
              <h1> Movies</h1>
            </div>
          </div>
          <h5 className ="title title2" >Popular Movies</h5>
        </Link>
        <div>

        </div>
      </div>
    </>
  );
};
export default Homepage;
