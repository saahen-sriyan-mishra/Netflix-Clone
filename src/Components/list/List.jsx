{/*Do not adjust last ListItem Dynamically for blank space at end*/}

{/*import React, { useState, useEffect, useRef } from 'react';
import './List.scss';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import Listitem from '../listitem/Listitem';

function List() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const itemWidth = 230;
  const containerRef = useRef();

  useEffect(() => {
    const updateMaxIndex = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const totalItems = containerRef.current.childElementCount;
        const maxVisibleItems = Math.floor(containerWidth / itemWidth);
        setMaxIndex(totalItems - maxVisibleItems);
      }
    };

    updateMaxIndex();
    window.addEventListener('resize', updateMaxIndex);
    return () => window.removeEventListener('resize', updateMaxIndex);
  }, []);

  const handleClick = (direction) => {
    if (direction === "left" && slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    } else if (direction === "right" && slideIndex < maxIndex) {
      setSlideIndex(slideIndex + 1);
    }
  };

  return (
    <div className='list'>
      <span className='listTitle'>Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className={`ArrowSlider Left ${slideIndex === 0 ? 'disabled' : ''}`}
          onClick={() => handleClick("left")}
        />
        <div
          className="container"
          ref={containerRef}
          style={{
            transform: `translateX(${-slideIndex * itemWidth}px)`,
            transition: 'transform 0.5s ease'
          }}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <Listitem key={index} />
          ))}
        </div>
        <ArrowForwardIosOutlined
          className={`ArrowSlider Right ${slideIndex >= maxIndex ? 'disabled' : ''}`}
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

export default List;

*/}


import React, { useState, useEffect, useRef } from 'react';
import './List.scss';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import Listitem from '../listitem/Listitem';

function List() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const itemWidth = 240;
  const containerRef = useRef();

  useEffect(() => {
    const updateMaxIndex = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const totalItems = containerRef.current.childElementCount;
        const maxVisibleItems = Math.floor(containerWidth / itemWidth);
        const newMaxIndex = totalItems - maxVisibleItems;
        setMaxIndex(newMaxIndex);

        // Adjust slideIndex if it exceeds the new maxIndex
        if (slideIndex > newMaxIndex) {
          setSlideIndex(newMaxIndex);
        }
      }
    };

    updateMaxIndex();
    window.addEventListener('resize', updateMaxIndex);
    return () => window.removeEventListener('resize', updateMaxIndex);
  }, [slideIndex, itemWidth]);

  const handleClick = (direction) => {
    if (direction === "left" && slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    } else if (direction === "right" && slideIndex < maxIndex) {
      setSlideIndex(slideIndex + 1);
    }
  };

  return (
    <div className='list'>
      <span className='listTitle'>Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className={`ArrowSlider Left ${slideIndex === 0 ? 'disabled' : ''}`}
          onClick={() => handleClick("left")}
        />
        <div
          className="container"
          ref={containerRef}
          style={{
            transform: `translateX(${-slideIndex * itemWidth}px)`,
            transition: 'transform 0.5s ease'
          }}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <Listitem key={index} />
          ))}
        </div>
        <ArrowForwardIosOutlined
          className={`ArrowSlider Right ${slideIndex >= maxIndex ? 'disabled' : ''}`}
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

export default List;



/* 
OnClick={()=> HandelClick(left)}  is for onclick event handeler name
with arrow funcrion ()=> named handelclick triggered 
with argument/parameter Left 
*/


// how to add slider, make arrow into button, move 230px, overflow hidden, hide arrows
