import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {moderateScale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TeamStyle} from './style';
import {connect} from 'react-redux';
import {setTeam} from './Redux/teamAction';

// const getRandomColor = () => {
//   return (
//     'rgb(' +
//     Math.floor(Math.random() * 256) +
//     ',' +
//     Math.floor(Math.random() * 256) +
//     ',' +
//     Math.floor(Math.random() * 256) +
//     ')'
//   );
// };

const Team = (props) => {
  // const [randomColor, setRandomColor] = useState(getRandomColor());
  const [addTeam, setAddTeam] = useState(false);
  const [saveTeam, setSaveTeam] = useState('');
  const [generateID, setGenerateID] = useState(0);

  const addExistingTeam = (item) => {
    const newTeam = {
      id: generateID,
      title: saveTeam,
    };

    const findExistingTeam = props.teams.find(
      (value) => value.title === saveTeam,
    );

    if (findExistingTeam) {
      Alert.alert('Team name already exist!');
    } else if (newTeam.title === '') {
      props.setTeam([...props.teams]);
    } else {
      props.setTeam([...props.teams, newTeam]);
      setGenerateID(newTeam.id + 1);
    }
  };

  const MyTeam = ({item, index}) => {
    return (
      <>
        <TouchableOpacity>
          <View
            style={{
              width: '100%',
              height: 50,
              backgroundColor: 'whitesmoke',
              borderRadius: moderateScale(5),
              marginBottom: 10,
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: moderateScale(12),
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons
                  size={moderateScale(15)}
                  name="account-group"
                  style={{
                    padding: 3,
                    backgroundColor: '#0EE799',
                    borderRadius: 50,
                    color: 'white',
                    marginRight: moderateScale(10),
                  }}
                />
                <Text>{item.title}</Text>
              </View>
              <AntDesign
                style={{marginRight: moderateScale(10)}}
                size={moderateScale(15)}
                name="right"
              />
            </View>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  const ListTeam = () => {
    return (
      <>
        <View style={{margin: 13}}>
          <FlatList
            data={props.teams}
            keyExtractor={(item) => item}
            renderItem={(item) => MyTeam(item)}
          />
        </View>
      </>
    );
  };
  return (
    <>
      <ScrollView>
        <View>
          <View style={TeamStyle.header}>
            <View style={{flexDirection: 'row'}}>
              <AntDesign size={moderateScale(20)} name="left" />
              <Text style={{fontSize: 20, marginLeft: 10}}>Teams</Text>
            </View>
            <TouchableOpacity onPress={() => setAddTeam(true)}>
              <Text>+ NEW TEAM</Text>
            </TouchableOpacity>
          </View>
          <ListTeam />
        </View>
      </ScrollView>

      <Modal
        visible={addTeam}
        transparent={true}
        onRequestClose={() => setAddTeam(false)}>
        <TouchableWithoutFeedback onPress={() => setAddTeam(false)}>
          <View style={{backgroundColor: 'gray', flex: 1, opacity: 0.88}}>
            <View
              style={{
                height: 400,
                width: '100%',
                backgroundColor: 'white',
                borderRadius: 20,
                opacity: 1,
                marginTop: 570,
                alignSelf: 'center',
              }}>
              <View style={{margin: 20}}>
                <Text style={{fontSize: 15, marginBottom: 20}}>New Team</Text>

                <TextInput
                  style={{
                    height: 40,
                    width: '100%',
                    borderColor: 'gray',
                    borderWidth: 1,
                    backgroundColor: 'white',
                    borderRadius: 5,
                  }}
                  placeholderTextColor="gray"
                  placeholder="Team Name"
                  onChangeText={(text) => setSaveTeam(text)}
                />

                <TouchableOpacity
                  onPress={() => {
                    addExistingTeam();
                    setAddTeam(false);
                  }}>
                  <View
                    style={{
                      padding: 10,
                      width: '100%',
                      backgroundColor: '#FFEEE1',
                      borderRadius: 20,
                      alignItems: 'center',
                      marginTop: 8,
                    }}>
                    <Text style={{color: 'orange'}}>Create team</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

// <Modal
//         visible={addOptions}
//         transparent={true}
//         onRequestClose={() => setAddOptions(false)}>
//         <TouchableWithoutFeedback onPress={() => setAddOptions(false)}>
//           <View style={{backgroundColor: 'gray', flex: 1, opacity: 0.88}}>
//             <OptionsModal />
//           </View>
//         </TouchableWithoutFeedback>
//       </Modal>

const mapStateToProps = (state) => ({
  teams: state.teamReducer.teams,
});

const mapDispatchToProps = {
  setTeam,
};

export default connect(mapStateToProps, mapDispatchToProps)(Team);
