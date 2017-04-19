import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from "react-native";
import { Redirect } from "react-router-native";
import styles from "./Styles";

class SearchForm extends Component {
  state = {
    term: "",
    sent: false
  };
  handleSearch = () => {
    this.setState({
      sent: true
    });
  };
  render() {
    if (this.state.sent) return <Redirect to={`/search/${this.state.term}`} />;
    return (
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ term: text })}
          value={this.state.term}
        />
        <TouchableOpacity onPress={this.handleSearch} style={styles.submit}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SearchForm;
