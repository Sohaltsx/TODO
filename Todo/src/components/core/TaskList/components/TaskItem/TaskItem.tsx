import { Icon, ListItem } from "react-native-elements"
import { TASK } from "../../../../../interfaces";

type Props = {
    task: TASK;
    deleteTask: (id: string) => void
}

const TaskItem = ({ task, deleteTask }: Props) => {
    return (
        <ListItem bottomDivider>
            <ListItem.Content>
                <ListItem.Title>{task.title}</ListItem.Title>
            </ListItem.Content>
            <Icon
                name="delete"
                type="material"
                color="red"
                onPress={() => deleteTask(task.id)}
            />
        </ListItem>
    )
}

export default TaskItem