import React from 'react'
import { StyleSheet, Text, View, Modal,TouchableWithoutFeedback,TextInput ,TouchableOpacity} from 'react-native'

export default function ModalInvite({visible,onRequestClose,onPress,submit,onChangeText}) {
    return (
        <View>
        <Modal
        visible={visible}
        transparent={true}
        onRequestClose={onRequestClose}>
        <TouchableWithoutFeedback onPress={onPress}>
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
                <Text style={{fontSize: 15, marginBottom: 20}}>Invite to board</Text>

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
                  placeholder="Email Address"
                  onChangeText={onChangeText}
                />

                <TouchableOpacity
                  onPress={submit}>
                  <View
                    style={{
                      padding: 10,
                      width: '100%',
                      backgroundColor: '#FFEEE1',
                      borderRadius: 20,
                      alignItems: 'center',
                      marginTop: 8,
                    }}>
                    <Text style={{color: 'orange'}}>Invite</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
        </View>
    )
}

const styles = StyleSheet.create({})
