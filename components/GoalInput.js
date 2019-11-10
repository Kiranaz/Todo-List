import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native'

const GoalInput =  props => {
    
    const [enteredGoal, setEnteredGoal] = useState('')

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
      }

    const addGoalHandler = () => {
      props.onAddGoal(enteredGoal)
      setEnteredGoal('')
    }

    return (
    <Modal visible={props.visible} animationaTypes="slide">
    <View style={styles.inputContainer}>
      <TextInput 
      placeholder="Add Task" 
      style={styles.input} 
      onChangeText={goalInputHandler}
      value={enteredGoal}
      />
      {/* <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)}/> */}
      <View style={styles.buttonContainer}>
      <View style={styles.button}>
      <Button title="ADD" onPress={addGoalHandler}/>
      </View>
      <View style={styles.button}>
      <Button title="CANCEl" color="red" onPress={props.onCancel}/>
      </View>
      </View>
    </View>
    </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
      },
      button: {
        width: '40%'
      }

  });

  export default GoalInput;
  