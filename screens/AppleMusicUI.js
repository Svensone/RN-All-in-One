import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Slider,
  PanResponder,
  ScrollView,
  Image,
  Dimensions,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default class AppleMusicUI extends React.Component {

  state = {
    isScrollEnabled: false
  };

  componentWillMount() {
    this.scrollOffset = 0;

    this.animation = new Animated.ValueXY({ x: 0, y: HEIGHT - 227 });

    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        if (
          (this.state.isScrollEnabled &&
            this.scrollOffset <= 0 &&
            gestureState.dy > 0) ||
          (!this.state.isScrollEnabled && gestureState.dy < 0)
        ) {
          return true;
        } else {
          return false;
        }
      },
      onPanResponderGrant: (evt, gestureState) => {
        this.animation.extractOffset();
      },
      onPanResponderMove: (evt, gestureState) => {
        this.animation.setValue({ x: 0, y: gestureState.dy });
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dy < 0) {
          this.setState({ isScrollEnabled: true });

          Animated.spring(this.animation.y, {
            toValue: -HEIGHT + 120,
            tension: 1
          }).start();
        } else if (gestureState.dy > 0) {
          this.setState({ isScrollEnabled: false });
          Animated.spring(this.animation.y, {
            toValue: HEIGHT - 120,
            tension: 1
          }).start();
        }
      }
    });
  }

  render() {
    const animatedHeight = {
      transform: this.animation.getTranslateTransform()
    };

    animatedImageHeight = this.animation.y.interpolate({
      inputRange: [0, HEIGHT - 90],
      outputRange: [200, 32],
      extrapolate: "clamp"
    });

    animateSongTitleOpacity = this.animation.y.interpolate({
      inputRange: [0, HEIGHT - 500, HEIGHT - 90],
      outputRange: [0, 0, 1],
      extrapolate: "clamp"
    });

    animatedImageMarginLeft = this.animation.y.interpolate({
      inputRange: [0, HEIGHT - 90],
      outputRange: [WIDTH / 2 - 100, 10],
      extrapolate: "clamp"
    });
    animatedHeaderHeight = this.animation.y.interpolate({
      inputRange: [0, HEIGHT - 90],
      outputRange: [HEIGHT / 2, 90],
      extrapolate: "clamp"
    });
    animateSongDetailsOpacity = this.animation.y.interpolate({
      inputRange: [0, HEIGHT - 500, HEIGHT - 90],
      outputRange: [1, 0, 1],
      extrapolate: "clamp"
    });

    animateBorderRadiusImage = this.animation.y.interpolate({
      inputRange: [0, HEIGHT - 90],
      outputRange: [5, 0],
      extrapolate: "clamp",
    });


    return (
      <ImageBackground source={require('../assets/background.jpg')} style={{ width: "100%", height: "100%"}} >
      
      <Animated.View style={{ flex: 1, backgroundColor: "transparent" }}>
        <Animated.View
          {...this.panResponder.panHandlers}
          style={[
            animatedHeight,
            {
              position: "absolute",
              left: 0,
              right: 0,
              zIndex: 10,
              backgroundColor: "#fff",
              height: HEIGHT
            }
          ]}
        >
          <ScrollView
            scrollEnabled={this.state.isScrollEnabled}
            scrollEventThrottle={16}
            onScroll={event => {
              this.scrollOffset = event.nativeEvent.contentOffset.y;
            }}
          >
            <Animated.View
              style={{
                height: animatedHeaderHeight,
                borderTopWidth: 1,
                borderTopColor: "#ebe5e5",
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <View
                style={{ flex: 4, flexDirection: "row", alignItems: "center" }}
              >
                <Animated.View
                  style={{
                    height: animatedImageHeight,
                    width: animatedImageHeight,
                    marginLeft: animatedImageMarginLeft
                    
                  }}
                >
                  <Image
                    source={require("../assets/pic2.jpg")}
                    style={{ flex: 1, width: null, height: null}}
                  />
                </Animated.View>
                <Animated.Text
                  style={{
                    opacity: animateSongTitleOpacity,
                    fontSize: 18,
                    paddingLeft: 10
                  }}
                >
                  Beach Life
                </Animated.Text>
              </View>
              <Animated.View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-around",
                  opacity: animateSongTitleOpacity
                }}
              >
                <Ionicons name="md-pause" size={32} />
                <Ionicons name="md-play" size={32} />
              </Animated.View>
            </Animated.View>

            <Animated.View
              style={{
                height: animatedHeaderHeight,
                opacity: animateSongDetailsOpacity
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  alignItems: "center"
                }}
              >
                <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                  {" "}
                  Beach Life{" "}
                </Text>
                <Text style={{ fontSize: 18, color: "#fa95ed" }}>
                  {" "}
                  only in Bali - tropical life
                </Text>
              </View>

              <View style={{ height: 40, width: WIDTH, alignItems: "center" }}>
                <Slider
                  stlye={{ width: 300 }}
                  step={1}
                  minimumValue={18}
                  maximumValue={71}
                  value={18}
                />
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around"
                }}
              >
                <Ionicons name="md-rewind" size={40} />
                <Ionicons name="md-pause" size={50} />
                <Ionicons name="md-fastforward" size={40} />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  paddingBottom: 20,
                  paddingHorizontal: 20
                }}
              >
                <Ionicons
                  name="md-add"
                  size={32}
                  style={{ color: "#fa95ed" }}
                />
                <Ionicons
                  name="md-more"
                  size={32}
                  style={{ color: "#fa95ed" }}
                />
              </View>
            </Animated.View>
            <View style={{ height: 1000 }} />
          </ScrollView>
        </Animated.View>
      </Animated.View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
