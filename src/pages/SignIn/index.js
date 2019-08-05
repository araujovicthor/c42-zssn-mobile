import React, { Component } from 'react';
import Slider from '@react-native-community/slider';
import PropTypes from 'prop-types';

import {
  View,
  Platform,
  KeyboardAvoidingView,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Picker,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '~/store/ducks/auth';
import logo from '~/assets/images/logo.png';

import styles from './styles';

class SignIn extends Component {
  static propTypes = {
    signUpRequest: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    age: '',
    gender: '',
    water: 0,
    food: 0,
    medication: 0,
    ammunition: 0,
  };

  handleSubmit = () => {
    const {
      name, age, gender, water, food, medication, ammunition,
    } = this.state;
    const items = `Water:${water};Food:${food};Medication:${medication};Ammunition:${ammunition}`;
    const { signUpRequest } = this.props;
    signUpRequest(name, age, gender, items);
  };

  render() {
    const {
      name, age, gender, water, food, medication, ammunition,
    } = this.state;

    return (
      <View
        style={styles.container}
      >
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
          <View>
            <View style={styles.div}>
              <Image source={logo} style={styles.image} />
            </View>

            <TextInput
              placeholder="Fullname"
              value={name}
              onChangeText={text => this.setState({ name: text })}
              style={styles.input}
              underlineColorAndroid="transparent"
              autoFocus
              returnKeyType="next"
              onSubmitEditing={() => this.ageInput.focus()}
            />
            <TextInput
              placeholder="Age"
              value={age}
              onChangeText={text => this.setState({ age: text })}
              style={styles.input}
              keyboardType="number-pad"
              underlineColorAndroid="transparent"
              autoFocus
              ref={(el) => {
                this.ageInput = el;
              }}
            />
            <Picker
              selectedValue={gender}
              style={styles.input}
              autoFocus
              onValueChange={(itemValue) =>
                this.setState({gender: itemValue})
              }>
              <Picker.Item label="Select a gender" value="" />
              <Picker.Item label="Male" value="M" />
              <Picker.Item label="Female" value="F" />
            </Picker>
            <View style={styles.slider}>
              <Text style={styles.label}>Water Quantity: {water}</Text>
              <Slider
                minimumValue={0}
                maximumValue={10}
                step={1}
                onValueChange={(itemValue) =>
                  this.setState({water: itemValue})
                }
                thumbTintColor="#e5293e"
                minimumTrackTintColor="#B16B76"
                maximumTrackTintColor="#E29994"
              />
            </View>
            <View style={styles.slider}>
              <Text style={styles.label}>Food Quantity: {food}</Text>
              <Slider
                minimumValue={0}
                maximumValue={10}
                step={1}
                onValueChange={(itemValue) =>
                  this.setState({food: itemValue})
                }
                thumbTintColor="#e5293e"
                minimumTrackTintColor="#B16B76"
                maximumTrackTintColor="#E29994"
              />
            </View>
            <View style={styles.slider}>
              <Text style={styles.label}>Medication Quantity: {medication}</Text>
              <Slider
                minimumValue={0}
                maximumValue={10}
                step={1}
                onValueChange={(itemValue) =>
                  this.setState({medication: itemValue})
                }
                thumbTintColor="#e5293e"
                minimumTrackTintColor="#B16B76"
                maximumTrackTintColor="#E29994"
              />
            </View>
            <View style={styles.slider}>
              <Text style={styles.label}>Ammunition Quantity: {ammunition}</Text>
              <Slider
                minimumValue={0}
                maximumValue={10}
                step={1}
                onValueChange={(itemValue) =>
                  this.setState({ammunition: itemValue})
                }
                thumbTintColor="#e5293e"
                minimumTrackTintColor="#B16B76"
                maximumTrackTintColor="#E29994"
              />
            </View>

            <TouchableOpacity onPress={this.handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Join</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(SignIn);
