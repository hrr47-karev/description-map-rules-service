import React from 'react';
import PropTypes from 'prop-types';

const GMAPS_API_KEY = 'AIzaSyCXW3Ydo1l2YtL0QI1J7GHOaemXMLyzvm8'; // INSERT API_KEY HERE

const Map = ({ latitude, longitude }) => (
  <iframe
    title="hostel-map"
    width="100%"
    height="500px"
    frameBorder="0"
    style={{ border: '0' }}
    src={`https://www.google.com/maps/embed/v1/place?q=${latitude}%2C${longitude}&key=${GMAPS_API_KEY}`}
    allowFullScreen
  />
);

Map.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};

export default Map;
