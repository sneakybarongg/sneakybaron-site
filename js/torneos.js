'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var Torneos = function (_React$Component) {
  _inherits(Torneos, _React$Component);

  function Torneos(props) {
    _classCallCheck(this, Torneos);

    var _this = _possibleConstructorReturn(this, (Torneos.__proto__ || Object.getPrototypeOf(Torneos)).call(this, props));

    _this.state = {
      tournaments_data: {}
    };
    return _this;
  }

  _createClass(Torneos, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      axios.get('https://search.battlefy.com/tournament/organization/5cab48eb50ff000324ed0dbb/upcoming?page=1&size=9').then(function (response) {
        var json = response.data;
        _this2.setState({ tournaments_data: json });
      });
    }
  }, {
    key: 'renderComponents',
    value: function renderComponents() {
      var tournaments_data = this.state.tournaments_data;


      return tournaments_data.tournaments.map(function (tournament, index) {
        return React.createElement(
          'div',
          { className: 'col-lg-4 col-sm-6', key: index },
          React.createElement(
            'a',
            { className: 'portfolio-box', target: '_blank', href: 'https://battlefy.com/sneakybaron-powered-by-esports-gateway/' + tournament.slug + '/' + tournament._id + '/info?infoTab=details' },
            React.createElement('img', { className: 'img-fluid rounded-pill', src: tournament.bannerUrl, alt: '' }),
            React.createElement(
              'div',
              { className: 'portfolio-box-caption' },
              React.createElement(
                'div',
                { className: 'project-name text-uppercase' },
                tournament.name
              )
            )
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var tournaments_data = this.state.tournaments_data;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'h2',
          { className: 'text-center display-4 text-uppercase' },
          'Futuros Torneos'
        ),
        React.createElement('hr', { className: 'divider my-4 mt-0' }),
        React.createElement(
          'div',
          { className: 'row no-gutters' },
          Object.keys(tournaments_data).length ? this.renderComponents() : React.createElement(
            'div',
            { className: 'spinner-border', role: 'status' },
            React.createElement(
              'span',
              { className: 'sr-only' },
              'Loading...'
            )
          )
        )
      );
    }
  }]);

  return Torneos;
}(React.Component);

var domContainer = document.querySelector('#torneos');
ReactDOM.render(e(Torneos), domContainer);