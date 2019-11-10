import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([])

  const addGoalHandler = (goalTitle) => {
    // setCourseGoals(currentGoals => [...currentGoals, enteredGoal])
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalTitle }
    ])
  }
  return (
    <View style={styles.screen}>
    
    {/* <ScrollView> */}
    <GoalInput onAddGoal={addGoalHandler}/>
    <FlatList
    data={courseGoals}
    renderItem={itemData => (
    <GoalItem title = {itemData.item.value}/>
    )}  />
    
    </View>
      /* {courseGoals.map(goal => (
        <View key={goal} style={styles.listItems}>
      <Text>{goal}</Text>
      </View>)
      )}
    </ScrollView> */
    
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
