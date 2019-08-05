import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '~/store/ducks/auth';

import styles from './styles';

class Main extends Component {
  static propTypes = {
    signOut: PropTypes.func.isRequired,
  };

  state = {
    region: {
      latitude: -15.8017028,
      longitude: -47.8935511,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          loadingEnabled={true}
          region={this.state.region}
        >
          <Marker coordinate={this.state.region}></Marker>
        </MapView>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  ...AuthActions,
}, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Main);
