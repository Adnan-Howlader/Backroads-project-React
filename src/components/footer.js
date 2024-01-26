import { pagelink,sociallink } from "../data";

function Footer() {
    return ( 

        <footer className="section footer">
      <ul className="footer-links">
        {pagelink.map((obj)=>{
            return(

              <li>
              <a href={obj.href} className="footer-link">{obj.text}</a>
              </li>

            )
        })}
      
      </ul>
      <ul className="footer-icons">
        {sociallink.map((obj)=>{
          return (
            <li>
          <a href={obj.href} target="_blank" className="footer-icon"
            ><i className={obj.icon}></i
          ></a>
         </li>
            
          )
          
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
     );
}

export default Footer;