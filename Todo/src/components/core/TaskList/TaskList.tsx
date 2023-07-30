import React from 'react';
import { FlatList, SectionList, Text, View } from 'react-native';
import { styles } from './TaskList.styles';
import { TaskItem } from './components';
import { SECTIONS, TASK } from '../../../interfaces';

type Props = {
    data: SECTIONS[];
    deleteTask: (id: string) => void;
}

const TaskList = ({ data, deleteTask }: Props) => {
    return (
        <SectionList
            style={styles.list}
            sections={data}
            keyExtractor={(item, index) => item.id + index}
            renderSectionHeader={({ section }: any) => (<Text style={styles.section}>{section.title}</Text>)}
            renderItem={({ item }) => (
                <TaskItem
                    task={item}
                    deleteTask={(id: string) => deleteTask(id)} />
            )}
        />
    )
};

export default TaskList;

