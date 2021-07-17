import React from 'react';
import Button from './Button';
import ACL from './ACL';

class Tasks extends React.Component{

    state ={
        tasks: [
            {id: 1, title: 'Task 1'},
            {id: 2, title: 'Task 2'},
        ]
    }

    render() {
        console.log(this.props.permission);
        return (
            <div>

                <Button permission="add_task">
                    Add task
                </Button>

                <ol>
                    {this.state.tasks.map(task => <li
                        key={task.id}
                    >{task.title}
                    <Button permission="remove_task">
                        Remove Task
                    </Button>
                    </li>
                    )}
                </ol>
            </div>
        )
    }
}

const MyACL = ACL(Tasks)

export default MyACL;