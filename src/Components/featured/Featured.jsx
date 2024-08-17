import React from 'react'
import './Featured.scss'
import pfp from '../../Assets/pfp.png'; 
import BL from '../../Assets/Blue_Lock.png'; 
import BL_Poster from '../../Assets/BL_Poster.png'; 
import { InfoOutlined, PlayArrow } from '@material-ui/icons';


// Variable Initiated by type inside {}
const Featured = ({type}) => {
  return (
    <div className='featured'>

        {/* Variable Initiated for conditional rendering, i.e will show if condition met */}
        
        {type && (
        <div className="category">
            {/*On home.jsx <Featured type = 'movie'/> or <Featured type = 'anything_else = series'/> has to be mentioned*/}
            {/* Scss had to be altered/ added else the whole part was not visible since i am using asset pictures not links*/}
            
            {/*On home.jsx it is to be mentioned <Featured/> since we dont want it to bbe always be visible but only on clicking on navbar items */}
            {/*that adjust with code to toggle visibility*/}
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          {/*select tag creates a drop down*/}
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
        <img 
        src={BL_Poster} alt=""/>

        <div className="info">


        <img
          src={BL}
          alt=""
        />


        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          adipisci repellendus eum quasi illo, velit numquam, maxime tempora
          sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
          temporibus eum earum?
        </div>



        <div className="buttons">
            <button className='play'><PlayArrow/>Play</button>
            <button className='more'><InfoOutlined/>Info</button>
        </div>


        </div>
      
    </div>
  )
}

export default Featured
