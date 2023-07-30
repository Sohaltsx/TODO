import React, { useState } from 'react';
import { Alert } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { TASK } from './interfaces';
import { Button, Container, Header, Input, TaskList } from './components';

const App = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState<TASK[]>([]);

  const addTask = () => {
    if (task.trim() !== '') {
      const newTask = { id: uuidv4(), title: task.trim() };
      setTaskList((prevTaskList) => [...prevTaskList, newTask]);
      setTask('');
      return
    }
    Alert.alert("Please enter task!")
  };

  const deleteTask = (id: string) => {
    setTaskList((prevTaskList) => prevTaskList.filter((task) => task.id !== id));
  };

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
