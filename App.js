import React, {useState} from 'react';
import { StyleSheet, Button, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = (goalTitle) => {
    // setCourseGoals(currentGoals => [...currentGoals, enteredGoal])
    if(!goalTitle){
      return
    }
    else{
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ])
    setIsAddMode(false)
  }
  }


  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }

const cancelGoalAdditionHandler = () => {
  setIsAddMode(false);
}

  return (
    <View style={styles.screen}>
    
    {/* <ScrollView> */}
    <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
    <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler}/>
    <FlatList
    keyExtractor={(item, index) => item.id}
    data={courseGoals}
    renderItem={itemData => (
    <GoalItem 
    id={itemData.item.id} 
    onDelete={removeGoalHandler} 
    title={itemData.item.value}/>
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
