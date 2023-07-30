import React from 'react';
import { FlatList } from 'react-native';
import { styles } from './TaskList.styles';
import { TaskItem } from './components';
import { TASK } from '../../../interfaces';

type Props = {
    data: TASK[];
    deleteTask: (id: string) => void;
}

const TaskList = ({ data, deleteTask }: Props) => {
    return (
        <FlatList
            style={styles.list}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
                return (
                    <TaskItem
                        task={item}
                        deleteTask={(id: string) => deleteTask(id)} />
                )
            }
            }
        />
    )
};

export default TaskList;

