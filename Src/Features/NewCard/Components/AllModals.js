import React, {useState} from 'react';
import {
  View,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
} from 'react-native';
import {OptionsModal} from './Modals/OptionsModal';
import MemberModal from './Modals/MemberModal';
import {CalendarModal} from './Modals/CalendarModal';
import PriorityModal from './Modals/PriorityModal';
import LabelModal from './Modals/LabelModal';
import {connect} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {moderateScale} from 'react-native-size-matters';
import {NewcardStyle} from '../style';

const AllModals = (props) => {
  const [addMember, setAddMember] = useState(false);
  const [addDate, setAddDate] = useState(false);
  const [addPriority, setAddPriority] = useState(false);
  const [addLabel, setAddLabel] = useState(false);
  const [addOptions, setAddOptions] = useState(false);
  const [addList, setAddList] = useState('');
  return (
    <>
      <View>
        <TouchableOpacity
          style={{marginBottom: 20}}
          onPress={() => setAddMember(true)}
          disabled={props.selectedMembers.length ? true : false}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              maxWidth: moderateScale(245),
            }}>
            {props.selectedMembers.length ? (
              props.selectedMembers.map((value) => {
                return (
                  <View
                    key={value.id.toString()}
                    style={NewcardStyle.buttonContainer}>
                    <Text>{value.title}</Text>
                  </View>
                );
              })
            ) : (
              <Text style={{color: 'gray'}}>Choose Members</Text>
            )}
            {props.selectedMembers.length ? (
              <TouchableOpacity
                onPress={() => setAddMember(true)}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AntDesign
                  name="pluscircle"
                  size={moderateScale(20)}
                  style={{color: '#15C39A'}}
                />
              </TouchableOpacity>
            ) : null}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{marginBottom: 20}}
          onPress={() => setAddPriority(true)}
          disabled={props.priority.length ? true : false}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              maxWidth: moderateScale(245),
            }}>
            {props.priority.length ? (
              props.priority.map((value) => {
                return (
                  <View
                    key={value.id.toString()}
                    style={NewcardStyle.buttonContainer}>
                    <View style={{minWidth: moderateScale(40)}}>
                      {value.icon()}
                    </View>
                    <Text>{value.title}</Text>
                  </View>
                );
              })
            ) : (
              <Text style={{color: 'gray'}}>Choose Priority</Text>
            )}
            {props.priority.length ? (
              <TouchableOpacity
                onPress={() => setAddPriority(true)}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}></TouchableOpacity>
            ) : null}
          </View>
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={{marginBottom: 20}}
          onPress={() => setAddPriority(true)}>
          <Text style={{color: 'gray'}}>Add Priority</Text>
        </TouchableOpacity> */}

        <TouchableOpacity
          style={{marginBottom: 20}}
          onPress={() => setAddDate(true)}>
          <Text style={{color: 'gray'}}>Choose Date</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{marginBottom: 20}}
          onPress={() => setAddLabel(true)}
          disabled={props.selectedLabels.length ? true : false}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              maxWidth: moderateScale(245),
            }}>
            {props.selectedLabels.length ? (
              props.selectedLabels.map((value) => {
                return (
                  <View
                    key={value.id.toString()}
                    style={NewcardStyle.buttonContainer}>
                    <Text>{value.title}</Text>
                  </View>
                );
              })
            ) : (
              <Text style={{color: 'gray'}}>Choose Labels</Text>
            )}
            {props.selectedLabels.length ? (
              <TouchableOpacity
                onPress={() => setAddLabel(true)}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AntDesign
                  name="pluscircle"
                  size={moderateScale(20)}
                  style={{color: '#15C39A'}}
                />
              </TouchableOpacity>
            ) : null}
          </View>
        </TouchableOpacity>
      </View>

      <Modal
        visible={addOptions}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setAddOptions(false)}>
        <TouchableWithoutFeedback onPress={() => setAddOptions(false)}>
          <View style={{backgroundColor: 'gray', flex: 1, opacity: 0.88}}>
            <OptionsModal />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Modal
        visible={addMember}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setAddMember(false)}>
        <TouchableWithoutFeedback onPress={() => setAddMember(false)}>
          <View style={{backgroundColor: 'gray', flex: 1, opacity: 0.88}}>
            <MemberModal />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Modal
        visible={addDate}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setAddDate(false)}>
        <TouchableWithoutFeedback onPress={() => setAddDate(false)}>
          <View style={{backgroundColor: 'gray', flex: 1, opacity: 0.88}}>
            <CalendarModal />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Modal
        visible={addPriority}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setAddPriority(false)}>
        <TouchableWithoutFeedback onPress={() => setAddPriority(false)}>
          <View style={{backgroundColor: 'gray', flex: 1, opacity: 0.88}}>
            <PriorityModal />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Modal
        visible={addLabel}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setAddLabel(false)}>
        <TouchableWithoutFeedback onPress={() => setAddLabel(false)}>
          <View style={{backgroundColor: 'gray', flex: 1, opacity: 0.88}}>
            <LabelModal onPress={() => setAddLabel(false)} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  selectedLabels: state.newCardReducer.selectedLabels,
  priority: state.newCardReducer.priority,
  selectedMembers: state.newCardReducer.selectedMembers,
  selectedDate: state.newCardReducer.selectedDate,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AllModals);
