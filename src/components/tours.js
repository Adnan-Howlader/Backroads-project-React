import Title from "./title";

import { tours } from "../data";

function Tours() {
    return (
        <section className="section" id="tours">
          <Title first="featured " second="tours"></Title>
        
  
        <div className="section-center featured-center">
          {tours.map((obj)=>{
            return(
              <article className="tour-card">
            <div className="tour-img-container">
              <img src={obj.img} className="tour-img" alt="" />
              <p className="tour-date">{obj.date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{obj.title}</h4>
              </div>
              <p>
              {obj.description}
              </p>
              <div className="tour-footer">
                <p>
                  <span><i className="fas fa-map"></i></span> china
                </p>
                <p>{obj.days}</p>
                <p>{obj.price}</p>
              </div>
            </div>
          </article>

            )
          })}
        </div>
      </section>
      );
}

export default Tours;