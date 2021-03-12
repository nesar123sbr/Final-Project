import React, { useState, useEffect } from "react";
import { View, FlatList, StatusBar, TouchableOpacity } from "react-native";
import Nunito from "../../Shared/Component/Nunito";
import { moderateScale } from "react-native-size-matters";
import CardBoard from "../../Shared/Component/Card/CardBoard";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { getListTeams } from "./Redux/Action";
import { getListTeam } from "../TeamPage/Redux/teamAction";

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
  props.ListTeam.map((value, index) => {
    return {
      index: index,
      teamName: value.teamName,
      expanded: true,
    };
  });
  const [data, setData] = useState(props.ListTeam);
  const [even, setEven] = useState(true);
  useEffect(() => {
    props.getListTeams();
  }, []);

  const setFuncCollaps = (index) => {
    const currentData = data[index];
    const newData = { ...currentData, expanded: !currentData.expanded };
    props.ListTeam[index] = newData;
    setData(props.ListTeam);
    setEven(!even);
  };

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
          hidden={false}
          backgroundColor="#4859EF"
          translucent={false}
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
            <TouchableOpacity
              style={{ paddingRight: moderateScale(10) }}
              onPress={() => setFuncCollaps(index)}
            >
              <MaterialCommunityIcons
                name={
                  item.expanded
                    ? "arrow-down-drop-circle"
                    : "arrow-up-drop-circle"
                }
                size={moderateScale(25)}
                color="#80848D"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Nunito
                title={item.teamName}
                type="SemiBold"
                size={moderateScale(15)}
                color="black"
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
    <View style={{ paddingBottom: hp(10), backgroundColor: "white" }}>
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

        <TouchableOpacity onPress={() => props.getListTeam()}>
          <Nunito
            title="TEAM "
            type="SemiBold"
            size={moderateScale(15)}
            color="blue"
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={props.ListTeam}
        renderItem={(item) => renderTitle(item)}
        keyExtractor={(item, index) => item._id}
      />
    </View>
  );
}
const mapStateToProps = (state) => ({
  ListTeam: state.LandingReducer.ListTeam,
});

const mapDispatchToProps = {
  getListTeams,
  getListTeam,
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
