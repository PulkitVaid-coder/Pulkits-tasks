import React, { Component } from 'react';
import { View, StyleSheet, Button,Text } from 'react-native';
import Card from './Card'
import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form;

const User = t.struct({
  name: t.String,
  gender: t.String,
  age: t.Integer,
  location: t.enums({Mexico: 'Mexico', France: 'France'}, 'location'),
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}

const options = {
  fields: {
    gender: {
      error: 'Enter your gender please !'
    },
    name: {
      error: 'Enter your name please !'
    },
    age: {
      error: 'Enter your age please !'
    },
    location: {
      error: 'Enter your location please !'
    },
  },
  stylesheet: formStyles,
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show : false
    }
  }
  
  
  render() {
    let{ show } = this.state
    const showCard = () => {
      if (show) {
        return (
          <Card>
            {this._form.getValue()}
          </Card>
        )
      }
      else {
        return (
            <Text></Text>
        )
      }
    }

    const handleSubmit = () => {
    this.setState({ show: true })
    const value = this._form.getValue();
    console.log('value: ', value);
  }
    
    return (
      <View style={styles.container}>
        <Form 
          ref={c => this._form = c}
          type={User} 
          options={options}
        />
        <Button
          title="Sign Up!"
          onPress={handleSubmit}
        />
        {showCard()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});
1