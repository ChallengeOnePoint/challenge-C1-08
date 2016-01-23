import React , {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';

class GoogleMap extends Component {

  static propTypes = {
    zoom: PropTypes.number,
    instas: PropTypes.object,
  };

  static defaultProps = {
    initialZoom: 2,
    mapCenterLat: 20.860835,
    mapCenterLng: 2.341463,
  };

  constructor(props) {
    super(props);
    this.map = {};
  }

  componentDidMount() {
    let mapOptions = {
      center: new google.maps.LatLng(this.props.mapCenterLat, this.props.mapCenterLng),
      zoom: this.props.initialZoom,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    };
    this.map = new google.maps.Map(ReactDOM.findDOMNode(this), mapOptions);
    this.setState({map: this.map});
  }

  render() {
    return (
      <div className='map-gic'></div>
    );
  }
}

export default GoogleMap;