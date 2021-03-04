import React from 'react';
import {View, TouchableOpacity, TextInput, Text, Image  } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Nunito from '../../Shared/Component/Nunito';
import {moderateScale} from 'react-native-size-matters';



function EmailSent (props) {
    const {navigation} = props;
    return(
        <>

        <View>
            <View style={{flexDirection:'row', justifyContent:'space-between', margin:15}}>
                <Image source={require('../../Assets/Logo/whiteboard.png')}/>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={{color:'#0018ed', backgroundColor:'#c4ccff', paddingVertical:10, paddingHorizontal:10}}>SignIn</Text>
                </TouchableOpacity>
            </View>
            <Text style={{marginTop:hp(20), paddingHorizontal:wp(5), fontSize:28, fontWeight:'bold'}}>Email has been sent!</Text>
            <Text style={{marginTop:15, paddingHorizontal:wp(5), marginBottom:15}}>Please check your inbox and click in the received link to reset a password</Text>
            {/* <TextInput style={{borderColor:'grey', paddingVertical:10, marginHorizontal:wp(5), borderWidth:2, paddingHorizontal:10}} placeholder="Email" /> */}
            <TouchableOpacity style={{paddingHorizontal:wp(5)}} onPress={() => navigation.navigate('ResetPassword')}>
                <Text style={{color:'white', backgroundColor:'#4354ef', paddingVertical:10, textAlign:'center', borderRadius:20, marginTop:20}}>Login</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row', justifyContent:'center'}}>
                <Text>Didn’t receive the link ?</Text>
                <TouchableOpacity>
                    <Text style={{color:'#4354ef'}}>Resent</Text>
                </TouchableOpacity>
            </View>
        </View>
        </>
    )


};

export default (EmailSent);
