import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <div>
                <div className="container page-section">
                    <div className="row justify-content-center">
                        <div class="col-lg-8 text-center">
                            <h2 className="mt-0 text-uppercase">Contacto</h2>
                            <hr className="divider my-4" />
                            <p className="text-muted mb-5">Si estás interesado en unirte, tenés alguna sugerencia o te gustaría contribuir con nosotros no dudes en escribirnos!</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col mr-auto text-center">
                        <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                        <a className="d-block" href="mailto:info@sneakybaron.gg">info@sneakybaron.gg</a>
                    </div>
                </div>
            </div>
        )

    }
}

export default Contact;