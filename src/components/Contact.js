import React from 'react';

export default class Contact extends React.Component{
  constructor(){
    super();
    this.state={
      map: this.initMap()
    }
  }

  initMap(){
  }

  render(){
    return(
        <div className="contact">
          <div className="container">
            <div>
              <div className="circle">
                <i className="icon-paper-plane"></i>
              </div>
              <h2>Mail</h2>
            </div>
            <div>
              <div className="circle">
                <i className="icon-linkedin"></i>
              </div>
              <h2>Resume</h2>
            </div>
            <div>
              <div className="circle">
                <i className="icon-twitter"></i>
              </div>
              <h2>Feedback</h2>
            </div>
          </div>

          <hr/>
          <h2>Lake Oswego, OR</h2>
          <div className="mapCanvas" ref="mapCanvas"></div>

        </div>

    )
  }

  componentDidMount(){
    setTimeout(function(){
    this.setState({map: this.createMap() })
  }.bind(this), 401)

  }

  createMap() {
    let mapOptions = {
      zoom: 13,
      center: {lat:45.4224778, lng: -122.6917916},
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
      styles: mapStyles,
      draggable: false,
      disableDoubleClickZoom: true,
      scrollwheel: false
    }
    return new google.maps.Map(this.refs.mapCanvas, mapOptions)
  }
}

var mapStyles =
[
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#9c8b82"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#34495e"
            },
            {
                "visibility": "on"
            }
        ]
    }
];
