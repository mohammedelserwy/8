import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { firstPageStyles } from './components/assets/styles/Styles';
import Icon from 'react-native-vector-icons/Ionicons';
class App extends Component {
  render() {
    return (
      <ScrollView style={firstPageStyles.pageView}>
        <View style={firstPageStyles.firstView}>
          <TouchableOpacity>
            <View style={firstPageStyles.itemView}>
              <Icon name="arrow-forward" color={'white'} size={30} />
              <Text style={firstPageStyles.seventhText}>المهام الرئيسية </Text>
            </View>
          </TouchableOpacity>

          <View style={firstPageStyles.secondView}>
            <View style={firstPageStyles.innerFirstView}>
              <Image source={require("./components/assets/images/bank.png")} />
            </View>
            <View style={firstPageStyles.innerSecondView}>
              <View style={firstPageStyles.firstContainer}>
                <Image source={require("./components/assets/images/card.png")} />
                <Text style={firstPageStyles.firstTextInContainer}> عنوان المهمة</Text>
              </View>
              <View style={firstPageStyles.secondContainer}>
                <Image source={require("./components/assets/images/marker.png")} />
                <Text style={firstPageStyles.secondTextInContainer}>Mecca, Al Jumum</Text>
              </View>
            </View>
          </View>

        </View>
        <View style={firstPageStyles.sameContainerOne}>
          <View style={firstPageStyles.innerFirstView}>
            <Image source={require("./components/assets/images/bank.png")} />
          </View>
          <View style={firstPageStyles.innerSecondView}>
            <View style={firstPageStyles.firstContainer}>
              <Image source={require("./components/assets/images/card.png")} />
              <Text style={firstPageStyles.firstTextInContainer}> عنوان المهمة</Text>
            </View>
            <View style={firstPageStyles.secondContainer}>
              <Image source={require("./components/assets/images/marker.png")} />
              <Text style={firstPageStyles.secondTextInContainer}>Mecca, Al Jumum</Text>
            </View>
          </View>
        </View>
        <View style={firstPageStyles.sameContainerTwo}>
          <View style={firstPageStyles.innerFirstView}>
            <Image source={require("./components/assets/images/bank.png")} />
          </View>
          <View style={firstPageStyles.innerSecondView}>
            <View style={firstPageStyles.firstContainer}>
              <Image source={require("./components/assets/images/card.png")} />
              <Text style={firstPageStyles.firstTextInContainer}> عنوان المهمة</Text>
            </View>
            <View style={firstPageStyles.secondContainer}>
              <Image source={require("./components/assets/images/marker.png")} />
              <Text style={firstPageStyles.secondTextInContainer}>Mecca, Al Jumum</Text>
            </View>
          </View>
        </View>
        <View style={firstPageStyles.sameContainerTwo}>
          <View style={firstPageStyles.innerFirstView}>
            <Image source={require("./components/assets/images/bank.png")} />
          </View>
          <View style={firstPageStyles.innerSecondView}>
            <View style={firstPageStyles.firstContainer}>
              <Image source={require("./components/assets/images/card.png")} />
              <Text style={firstPageStyles.firstTextInContainer}> عنوان المهمة</Text>
            </View>
            <View style={firstPageStyles.secondContainer}>
              <Image source={require("./components/assets/images/marker.png")} />
              <Text style={firstPageStyles.secondTextInContainer}>Mecca, Al Jumum</Text>
            </View>
          </View>
        </View>
        <View style={firstPageStyles.sameContainerTwo}>
          <View style={firstPageStyles.innerFirstView}>
            <Image source={require("./components/assets/images/bank.png")} />
          </View>
          <View style={firstPageStyles.innerSecondView}>
            <View style={firstPageStyles.firstContainer}>
              <Image source={require("./components/assets/images/card.png")} />
              <Text style={firstPageStyles.firstTextInContainer}> عنوان المهمة</Text>
            </View>
            <View style={firstPageStyles.secondContainer}>
              <Image source={require("./components/assets/images/marker.png")} />
              <Text style={firstPageStyles.secondTextInContainer}>Mecca, Al Jumum</Text>
            </View>
          </View>
        </View>
        <View style={firstPageStyles.sameContainerTwo}>
          <View style={firstPageStyles.innerFirstView}>
            <Image source={require("./components/assets/images/bank.png")} />
          </View>
          <View style={firstPageStyles.innerSecondView}>
            <View style={firstPageStyles.firstContainer}>
              <Image source={require("./components/assets/images/card.png")} />
              <Text style={firstPageStyles.firstTextInContainer}> عنوان المهمة</Text>
            </View>
            <View style={firstPageStyles.secondContainer}>
              <Image source={require("./components/assets/images/marker.png")} />
              <Text style={firstPageStyles.secondTextInContainer}>Mecca, Al Jumum</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    );
  }
}
export default App;
