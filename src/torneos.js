'use strict';

const e = React.createElement;

class Torneos extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        tournaments_data: {}
      };
  }

  componentDidMount() {
    axios.get('https://search.battlefy.com/tournament/organization/5cab48eb50ff000324ed0dbb/upcoming?page=1&size=9')
    .then(response => {
      let json = response.data
      console.log(json)
      this.setState({ tournaments_data: json })
    })
  }

  renderComponents() {
    const { tournaments_data } = this.state

    return(
      tournaments_data.tournaments.map((tournament, index) =>
        <div className="col-lg-4 col-sm-6" key={index}>
          <a className="portfolio-box" target="_blank" href={'https://battlefy.com/sneakybaron-powered-by-esports-gateway/' + tournament.slug + '/' + tournament._id + '/info?infoTab=details'}>
          <img className="img-fluid rounded-pill" src={tournament.bannerUrl} alt=""/>
            <div className="portfolio-box-caption">
              <div className="project-name text-uppercase">
              {tournament.name}
              </div>
            </div>
          </a>
        </div>
      )

    )
  }

  render() {
    const { tournaments_data } = this.state
    return (
      <div>
        <h2 className="text-center display-4 text-uppercase">Futuros Torneos</h2>
        <hr className="divider my-4 mt-0"/>
        <div className="row no-gutters">
        {
          Object.keys(tournaments_data).length ? this.renderComponents() : (<div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          )
        }
        </div>
      </div>
    );
  }
}

const domContainer = document.querySelector('#torneos');
ReactDOM.render(e(Torneos), domContainer);
