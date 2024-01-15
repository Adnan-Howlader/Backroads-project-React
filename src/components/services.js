import Title from "./title";

import { services } from "../data";

function Services() {
    return (  

        <section className="section services" id="services">
      
      <Title first="our " second="services"></Title>
      <div className="section-center services-center">

        {services.map((obj)=>{
          return (

            <article className="service">
            <span className="service-icon"><i className={obj.icon}></i></span>
            <div className="service-info">
              <h4 className="service-title">{obj.title_data}</h4>
              <p className="service-text">
                {obj.text_data}
              </p>
            </div>
          </article>
          
           
          )
        })}
      


      </div>
    </section>
    );
}

export default Services;