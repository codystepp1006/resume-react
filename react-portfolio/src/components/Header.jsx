import { Link } from "react-router-dom"

function Header(){

    return(
        <header className="headerContainer">
            <div className="navbar">
            <div className="logo"><Link to= "/"><a href = "#" >Cody`s Portfolio</a></Link></div>
                <ul className = "links">
                    <li><Link to= "/home"><a href = "#" >Home</a></Link></li>
                    <li><Link to= "/projects"><a href = "#" >Projects</a></Link></li>
                    <li><Link to= "/resume"><a href = "#" >Resume</a></Link></li>
                    <li><Link to= "/contactme"><a href = "#" >Contact Me</a></Link></li>
                </ul>
                </div>
        </header>
    );
}

export default  Header