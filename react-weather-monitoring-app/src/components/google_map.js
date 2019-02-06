import React, { Component } from 'react';

export default class GoogleMap extends Component {
componentDidMount() { // one of the lifecycle method which will be called after compopnent has been rendred on screen.
// will create embedded google map
  new google.maps.Map(this.refs.map,{ 
    zoom : 12,
    center : {
      lat: this.props.lat,
      lng: this.props.lon
    }
  });

}

render() {
   // In react we use ref for referencing so anywhere if we do this.refs.map we will get this div element.
   return <div ref = "map" />
 }


}
