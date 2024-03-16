
function Projects() {

    return(
        <div>

             <div className = "repoImages">
                    <img id = "image" src = "https://github.com/codystepp1006/note-taker-express.js/raw/main/other/Screenshot%202024-02-19%20171558.png"/>
                    <div className="image__overlay">
                    <div className="image__title"><a  target="_blank" href ="https://github.com/codystepp1006/note-taker-express.js"><p className="image__title">Note Taker using Express.js</p></a></div>
                </div>
             </div>
             <div className = "repoImages">
                    <a  target="_blank" href ="https://github.com/codystepp1006/Backend-Ecommerce-Sequelize"><img id = "image" src = "https://github.com/codystepp1006/SQL-Employee-Tracker/raw/main/Screenshot%202024-03-01%20143858.png"/></a>
                    <div className="image__overlay">
                    <div className="image__title"><a  target="_blank" href ="https://github.com/codystepp1006/SQL-Employee-Tracker"><p className="image__title">MySQL Employee Tracker</p></a></div>
                </div>
             </div>
             <div className = "repoImages">
                    <a  target="_blank" href ="https://github.com/codystepp1006/Backend-Ecommerce-Sequelize"><img id = "image" src = "https://github.com/codystepp1006/weather-dashboard-api/raw/main/Screenshot%202023-11-17%20185226.png"/></a>
                    <div className="image__overlay">
                    <div className="image__title"><a  target="_blank" href ="https://github.com/codystepp1006/weather-dashboard-api"><p className="image__title">Weather Dashboard API</p></a></div>
                </div>
             </div>
        </div>
    );
}


export default Projects