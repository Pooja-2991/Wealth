import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DatePickerInput = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [dateString, setDateString] = useState('');


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDateString(currentDate.toLocaleDateString());
  };


  const showDatePicker = () => {
    setShow(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={dateString}
          placeholder="Select date"
          editable={false}
        />
        <TouchableOpacity style={styles.icon} onPress={showDatePicker}>
          <Icon name="calendar-today" size={24} color="#AE68DC" />
        </TouchableOpacity>
      </View>

      {/* Date Picker Modal */}
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 200,
    paddingBottom: 400,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '90%',
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#BFBFBF',
  },
  icon: {
    marginLeft: 10,
  },
});

export default DatePickerInput;