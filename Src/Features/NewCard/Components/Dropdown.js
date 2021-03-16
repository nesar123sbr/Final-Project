import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import { View } from "react-native";

export const Dropdown = (props) => {
  const [label, setLabel] = useState(props.listData[0]._id);

  useEffect(() => {
    props.putListId(label);
  }, [label]);

  return (
    <View>
      <Picker
        selectedValue={label}
        onValueChange={(value) => setLabel(value)}
        style={{ backgroundColor: "whitesmoke" }}
      >
        {props.listData.length &&
          props.listData.map((value, index) => {
            return (
              <Picker.Item
                key={index.toString()}
                label={value.title}
                value={value._id}
              />
            );
          })}
      </Picker>
    </View>
  );
};
