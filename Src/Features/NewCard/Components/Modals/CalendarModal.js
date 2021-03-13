import moment from "moment";
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";
import { setDate } from "../../Redux/newCardAction";
import { connect } from "react-redux";
import { NewcardStyle } from "../../style";

const CalendarModal = (props) => {
  const [addDate, setAddDate] = useState(false);
  const [currDate, setCurrDate] = useState(
    moment(new Date()).format("YYYY-MM-DD")
  );
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <>
      <View style={{ backgroundColor: "gray", flex: 1, opacity: 0.88 }}>
        <View style={NewcardStyle.calendarModal}>
          <Calendar
            onDayPress={(day) => {
              console.log("selected day", day);
              setSelectedDate(day.dateString);
              props.setDate(day.dateString);
            }}
            current={Date()}
            markedDates={{
              [selectedDate]: {
                selected: true,
                selectedColor: "blue",
              },
            }}
            minDate={currDate}
          />
          <Text>{selectedDate}</Text>
          <TouchableOpacity onPress={() => setAddDate(false)}>
            <View>
              <Text style={{ color: "orange" }}>Select date</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const mapStateToProps = (state) => ({
  selectedDate: state.newCardReducer.selectedDate,
});

const mapDispatchToProps = {
  setDate,
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarModal);
