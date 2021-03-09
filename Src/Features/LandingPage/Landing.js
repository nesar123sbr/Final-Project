import React, { useState } from "react";
import {
  View,
  FlatList,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Nunito from "../../Shared/Component/Nunito";
import { moderateScale } from "react-native-size-matters";
import CardBoard from "../../Shared/Component/Card/CardBoard";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
<<<<<<< HEAD
import { getListTeam } from "../TeamPage/Redux/teamAction";
=======
>>>>>>> 0836c2e6432f28d81246e3ea47dc391ae143faeb

// cardTitle1, cardTitle2, progress,onPress,countTask
const fromAPI = [
  {
    title: "idev abal2",
  },
  {
    title: "e-project abal2",
  },
  {
    title: "e-idev abal2",
  },
];
const dummytitle = fromAPI.map((value, index) => {
  return {
    index: index,
    title: value.title,
    expanded: true,
  };
});
const dataFromDummyAPI = [
  {
    cardTitle1: "idev internal23",
    cardTitle2: "on idev Project",
    progress: "Done",
    countTask: 5,
  },

  {
    cardTitle1: "idev internal45",
    cardTitle2: "on idev Project",
    progress: "Done",
    countTask: 5,
  },

  {
    cardTitle1: "idev internal67",
    cardTitle2: "on idev Project",
    progress: "Done",
    countTask: 5,
  },
];

function Landing(props) {
  const { navigation } = props;
  const [data, setData] = useState(dummytitle);
  const [even, setEven] = useState(true);

  const setFuncCollaps = (index) => {
    const currentData = data[index];
    const newData = { ...currentData, expanded: !currentData.expanded };
    dummytitle[index] = newData;
    setData(dummytitle);
    setEven(!even);
  };
  // console.log(data2)

  const renderTitle = ({ item, index }) => {
    const ItemSeparatorView = () => {
      return (
        <View
          style={{
            width: moderateScale(15),
          }}
        />
      );
    };

    return (
      <View style={{ backgroundColor: "white" }}>
        <StatusBar
          barStyle="light-content"
          // dark-content, light-content and default
          hidden={false}
          //To hide statusBar
          backgroundColor="#4859EF"
          //Background color of statusBar only works for Android
          translucent={false}
          //allowing light, but not detailed shapes
          networkActivityIndicatorVisible={true}
        />
        <View
          style={{
            marginTop: moderateScale(25),
            marginBottom: moderateScale(25),
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignSelf: "flex-start",
              marginLeft: moderateScale(16),
              marginBottom: moderateScale(10),
            }}
          >
            <Nunito
              title={item.title}
              type="SemiBold"
              size={moderateScale(15)}
              color="black"
            />
            <TouchableOpacity
              style={{ paddingLeft: moderateScale(5) }}
              onPress={() => setFuncCollaps(index)}
            >
              <MaterialCommunityIcons
                name={
                  item.expanded
<<<<<<< HEAD
                    ? "arrow-up-drop-circle"
                    : "arrow-down-drop-circle"
=======
                    ? "arrow-down-drop-circle"
                    : "arrow-up-drop-circle"
>>>>>>> 0836c2e6432f28d81246e3ea47dc391ae143faeb
                }
                size={moderateScale(25)}
                color="#80848D"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomColor: "#E1E1E1",
              borderBottomWidth: 1,
              width: "94%",
            }}
          />
        </View>
        <View>
          {item.expanded ? (
            <FlatList
              horizontal
              data={dataFromDummyAPI}
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={ItemSeparatorView}
              keyExtractor={(item, index) => item.cardTitle1}
              renderItem={({ item }) => (
                <CardBoard
                  cardTitle1={item.cardTitle1}
                  cardTitle2={item.cardTitle2}
                  progress={item.progress}
                  countTask={item.countTask}
                  onTap={() => navigation.navigate("TeamBoard")}
                />
              )}
            />
          ) : null}
        </View>
      </View>
    );
  };
  return (
<<<<<<< HEAD
    <View style={{ paddingBottom: hp(10) }}>
=======
    <View style={{ paddingBottom: hp(10),backgroundColor: "white" }}>
>>>>>>> 0836c2e6432f28d81246e3ea47dc391ae143faeb
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: moderateScale(10),
          paddingLeft: moderateScale(5),
          paddingRight: moderateScale(5),
          backgroundColor: "white",
        }}
      >
        <Nunito title="Boards" type="SemiBold" size={moderateScale(28)} />
<<<<<<< HEAD

        <TouchableOpacity onPress={() => props.getListTeam()}>
=======
        <TouchableOpacity onPress={() => navigation.navigate("Team")}>
>>>>>>> 0836c2e6432f28d81246e3ea47dc391ae143faeb
          <Nunito
            title="TEAM "
            type="SemiBold"
            size={moderateScale(15)}
            color="blue"
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        renderItem={(item) => renderTitle(item)}
        keyExtractor={(item, index) => item.title}
      />
    </View>
  );
}
const mapStateToProps = (state) => ({});

<<<<<<< HEAD
const mapDispatchToProps = {
  getListTeam,
};
=======
const mapDispatchToProps = {};
>>>>>>> 0836c2e6432f28d81246e3ea47dc391ae143faeb

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
