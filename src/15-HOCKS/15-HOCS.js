import React from 'react';
import Tasks from './tasks'

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>
                    My App
                </h2>

                <hr />

                <Tasks permission="view_task_list"/>
            </div>
        )
    }
}

export default App