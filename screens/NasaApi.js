import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  WebView,
  ScrollView
} from "react-native";

import api from "../utils/api";

export default class NasaScreen extends React.Component {
  static navigationOptions = {
    title: "NASA"
  };

  state = {
    title: "",
    pic: "",
    explanation: "",
    date: "",
    media: ""
  };

  componentDidMount() {
    api
      .nasaPics()
      .then(res => {
        this.setState({
          title: res.title,
          pic: res.url,
          explanation: res.explanation,
          date: res.date,
          media: res.media_type
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.text}>{this.state.date}</Text>
          <Text style={styles.text}>{this.state.title}</Text>
          {this.state.media === "video" ? (
            <WebView
              javaScriptEnabled={true}
              source={{ url: this.state.pic }}
              style={{ width: 370, height: 200 }}
            />
          ) : (
            <Image
              source={{ url: this.state.pic }}
              style={{ width: 370, height: 200 }}
            />
          )}
          <Text style={styles.text}>{this.state.explanation}</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#fff",
    fontSize: 15,
    padding: 10
  }
});
