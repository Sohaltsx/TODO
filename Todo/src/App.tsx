import React, { useState } from 'react';
import { Alert } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { SECTIONS, TASK } from './interfaces';
import { Button, Container, Header, Input, TaskList } from './components';

const App = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState<SECTIONS[]>([]);

  // Method to push data into a particular section based on starting letter of the title
  const pushDataToSection = (newTask: TASK) => {
    const startingLetter = newTask.title.charAt(0).toUpperCase();
    const sectionIndex = taskList.findIndex((section) => section.title === startingLetter);

    if (sectionIndex !== -1) {
      taskList[sectionIndex].data.push(newTask);
    } else {
      // If the section doesn't exist, create a new one with the starting Letter as title
      taskList.push({
        title: startingLetter,
        data: [newTask],
      });
    }
    //update text input and list
    updateList()
  };

  const addTask = () => {
    if (task.trim() !== '') {
      const newTask: TASK = { id: uuidv4(), title: task.trim() };
      pushDataToSection(newTask)
      return
    }
    Alert.alert("Please enter task!")
  };

  // Method to delete task
  const deleteTask = (id: string) => {
    const updatedContactDetails = taskList.map((section) => ({
      ...section,
      data: section.data.filter((dataItem) => dataItem.id !== id),
    }));

    // Filter out sections with no task items
    const filteredTaskList = updatedContactDetails.filter((section) => section.data.length > 0);
    setTaskList(filteredTaskList)
  };

  const updateList = () => {
    setTaskList([...taskList])
    setTask('');
  }

  return (
    <Container>
      <>
        <Header title='Todo' />
        <Input
          placeholder='Enter task detail'
          value={task}
          onChange={(text) => setTask(text)} />
        <Button
          title='Add Task'
          onPress={() => addTask()} />
        <TaskList
          data={taskList}
          deleteTask={(id) => deleteTask(id)} />
      </>
    </Container>
  );
};

export default App;
