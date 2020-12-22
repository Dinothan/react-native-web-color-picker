import React from 'react';
import LinearGradient from 'react-native-web-linear-gradient';
import Uranium from 'uranium';

const LinearGradientCommon = props => {
  return (
    <LinearGradient
      colors={props.colors}
      style={props.style}
      start={props.start}
      end={props.end}>
      {props.children}
    </LinearGradient>
  );
};

export default Uranium(LinearGradientCommon);
