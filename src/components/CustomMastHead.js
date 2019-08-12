import React from 'react'



class CustomMastHead extends React.Component {

    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }

    render() {

        return (
            <div className="bg-masthead">
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-10 align-self-end">
                            <h1 className="text-uppercase text-white font-weight-bold">Una comunidad hecha por gamers para gamers</h1>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomMastHead;