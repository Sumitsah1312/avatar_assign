import React, { useState } from "react";
import "./Carousel.css";

function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(3);
  const [prevIndex, setPrevIndex] = useState(currentIndex - 1);
  const [nextIndex, setNextIndex] = useState(currentIndex + 1);

  const movePrev = () => {
    let newIndex = (currentIndex - 1 + items.length) % items.length;
    if(currentIndex===0){
      newIndex=items.length-1;
    }
    setCurrentIndex(newIndex);
    setIndexes(newIndex);

    
  };
  
  const moveNext = () => {
    const newIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(newIndex);
    setIndexes(newIndex);
  };
  
  const setIndexes = (index) => {
    let pre,nex;
    if (index === 0) {
      pre=(items.length - 1);
    } else {
      pre=(index - 1);
    }
    if (index === items.length - 1) {
      nex=0;
    } else {
      nex=((index + 1)%(items.length));
    }
    setPrevIndex(pre);
    setNextIndex(nex);
    console.log(pre+" "+index+" "+nex);
  };

  return (
    <div className="body">
      <div className="carousel-container">
        <button className="prev-button" onClick={movePrev}>
          Prev
        </button>

        <div className="carousel">
          {items.map((item, index) => {
            const isPrev = index === prevIndex;
            const isNext = index === nextIndex;
            const isActive = index === currentIndex;

            let classNames = "carousel-item";
            if (isActive) classNames += " active";
            if (isPrev) classNames += " carousel-item-left";
            if (isNext) classNames += " carousel-item-right";

            return (
              <div key={index} className={classNames}>
                <img src={item}   alt="" />
              </div>
            );
          })}
        </div>

        <button className="next-button" onClick={moveNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Carousel;
