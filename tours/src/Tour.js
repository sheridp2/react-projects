import React, { useState } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

import Reviews from "./Reviews";

export default function Tour({ id, image, info, price, name, removeTour }) {
  const [readMore, setReadMore] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleReviewPress = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Flippy
      isFlipped={isFlipped}
      flipOnHover={false} // default false
      flipOnClick={false}
    >
      <FrontSide style={{ padding: 0 }}>
        <article className="single-tour">
          <img src={image} alt={name} />
          <footer>
            <div className="tour-info">
              <h4>{name}</h4>
              <h4 className="tour-price">${price}</h4>
            </div>
            <p>
              {readMore ? info : `${info.substring(0, 200)}...`}
              <button onClick={() => setReadMore(!readMore)}>
                {readMore ? "show less" : "read more"}
              </button>
            </p>
            <button className="delete-btn" onClick={() => removeTour(id)}>
              Not interested
            </button>
            <button onClick={() => handleReviewPress()}>See Reviews</button>
          </footer>
        </article>
      </FrontSide>
      <BackSide style={{ padding: 0 }}>
        <main>
          <section className="container">
            <Reviews handleReviewPress={handleReviewPress} />
          </section>
        </main>
      </BackSide>
    </Flippy>
  );
}
