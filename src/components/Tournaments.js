import React from 'react';

import icon from '../assets/tournament.png';
import { getTournaments } from '../utils';


class Tournaments extends React.Component {
    render() {
        const tournaments = getTournaments();
        return (
            <div>
                <div className="container-fluid page-section">
                    <h2 className="text-center display-4 text-uppercase">Futuros Torneos</h2>
                    <hr className="divider my-4 mt-0"></hr>
                </div>
                <div className="row no-gutters">
                    {
                        tournaments.map(( a , index) =>
                            <div key={index} className="col-4 mb-3">
                                <a href={tournaments[index]["link"]} target="_blank">
                                    <div className="portfolio-box">
                                        <img className="img-fluid rounded-pill" src={icon} alt=""/>
                                        <div className="portfolio-box-caption">
                                            <div className="project-category text-white-50">
                                                {tournaments[index]['title']} - 
                                        </div>
                                            <div className="project-name">
                                                Región: LAS - 
                                                 {tournaments[index]['date']}
                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}


export default Tournaments;