import React from 'react'



class Products extends React.Component{
    render(){
        return(
            <div className="page-section bg-dark-blue">
                <div className="container">
                    <h2 className="text-center text-uppercase display-5 text-light">Nuestras herramientas</h2>
                    <hr className="divider my-4"/>
                    <div className="row">
                        <div className="col text-center">
                            <div className="mt-5">
                                <i className="far fa-5x fa-sticky-note text-primary mb-4"></i>
                                <a href="https://notes.sneakybaron.gg"><h3 className="h4 mb-2 text-light">Sneaky Notes</h3></a>
                                <p className="text-muted mb-0">Mantenete informado sobre las últimas novedades de League of Legends.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Products;