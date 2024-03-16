import { Link } from "react-router-dom"

function Home() {

    return(
        <div>
            <div>
            <h1 id="homeHeader">Where would you like to go first?</h1>
            </div>
            <div className="homeNavContainer">
                    <p><Link to= "/projects"><a className="homeLinks"href = "#" >Projects</a></Link></p>
                    <p><Link to= "/resume"><a className="homeLinks" href = "#" >Resume</a></Link></p>
                    <p><Link to= "/contactme"><a  className="homeLinks"href = "#" >Contact Me</a></Link></p>
            </div>
        </div>
        
        
    );
}


export default Home