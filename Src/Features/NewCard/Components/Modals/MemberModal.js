import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import {setMembers, setSelectedMembers} from '../../Redux/newCardAction';

const MemberModal = (props) => {
  const {selectedMembers, setSelectedMembers} = props;
  const [getMembers, setGetMembers] = useState(props.AllMembers);

  const addMembers = (item, index) => {
    if (item.id === props.selectedMembers[index]?.id) {
      const filteredMember = selectedMembers.filter(
        (data) => data.id !== item.id,
      );
      setSelectedMembers(filteredMember);
    } else {
      setSelectedMembers([...selectedMembers, item]);
    }
  };

  const removeMember = (item) => {
    const newArray = selectedMembers.filter((data) => data.id !== item.id);
    setSelectedMembers([...newArray]);
    console.log(selectedMembers);
  };

  const SelectedMemberContainer = () => {
    return (
      <>
        <View
          style={{
            borderWidth: 1,
            height: moderateScale(50),
            borderRadius: moderateScale(5),
            width: '100%',
            borderColor: 'gray',
            borderWidth: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            paddingHorizontal: moderateScale(7),
            paddingVertical: moderateScale(8),
          }}>
          {selectedMembers.length ? (
            <FlatList
              horizontal
              data={props.selectedMembers}
              keyExtractor={(item) => item.id.toString()}
              renderItem={(item) => MySelectedMembers(item)}
            />
          ) : (
            <Text style={{color: 'gray'}}>Choose members for this card</Text>
          )}
        </View>
      </>
    );
  };

  const MySelectedMembers = ({item}) => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: moderateScale(5),
            justifyContent: 'space-between',
            paddingHorizontal: moderateScale(8),
            marginRight: moderateScale(7),
          }}>
          <Text>{item.title}</Text>
          <TouchableOpacity onPress={() => removeMember(item)}>
            <AntDesign name="close" style={{marginLeft: 6}} />
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const MyMember = ({item, index}) => {
    return (
      <>
        <TouchableOpacity
          onPress={() => addMembers(item, index)}
          style={{
            marginRight: 12,
            padding: moderateScale(7),
            alignItems: 'center',
            borderRadius: moderateScale(5),
            justifyContent: 'center',
          }}>
          <View>
            <Text>{item.title}</Text>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  const ListMember = () => {
    return (
      <>
        <FlatList
          data={getMembers}
          keyExtractor={(item) => item}
          renderItem={(item, index) => MyMember(item, index)}
        />
      </>
    );
  };

  return (
    <>
      <View
        style={{
          height: 400,
          width: '100%',
          backgroundColor: 'white',
          borderRadius: 20,
          opacity: 1,
          marginTop: 400,
          alignSelf: 'center',
        }}>
        <View style={{margin: 20}}>
          <Text style={{fontSize: 15, marginBottom: 20}}>Assign To</Text>
          <SelectedMemberContainer />
          <Text style={{color: 'gray'}}>Select an option or create one</Text>

          <ListMember />

          {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{padding: 10}}>
              <View
                style={{
                  backgroundColor: 'green',
                  borderRadius: 50,
                  width: 40,
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Fontisto name="person" size={moderateScale(25)} />
              </View>
            </View>
            <Text>Susi Susanti</Text>
          </View> */}

          <TouchableOpacity onPress={() => setAddMember(false)}>
            <View
              style={{
                padding: 10,
                width: '100%',
                backgroundColor: '#FFEEE1',
                borderRadius: 20,
                alignItems: 'center',
                marginTop: 8,
              }}>
              <Text style={{color: 'orange'}}>Done</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const mapStateToProps = (state) => ({
  AllMembers: state.newCardReducer.members,
  selectedMembers: state.newCardReducer.selectedMembers,
});

const mapDispatchToProps = {
  setMembers,
  setSelectedMembers,
};

export default connect(mapStateToProps, mapDispatchToProps)(MemberModal);
