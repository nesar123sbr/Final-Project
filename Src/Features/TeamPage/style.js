import {StyleSheet} from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

export const TeamStyle = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:moderateScale(16)
  },
  teamName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#e6e3e3',
    padding: 10,
    borderRadius: 10,
    width: "100%",
    alignSelf: 'center',
  },
});
