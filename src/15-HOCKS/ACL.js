import React from 'react';

const user ={
    name: 'Amir',
    family: 'Eftekhari',
    permission: ['view_task_list','add_task','remove_task']
}

export default function ACL (Component) {

    return class MyACL extends React.Component{
        render() {
            console.log('ACL',this.props.permission);
            // if (user.permission.includes(this.props.permission))
            // {
            //     return <components {...this.props}/>
            // }
            // return null

            return user.permission.includes(this.props.permission) &&
                <Component {...this.props}/>
        }
    }
}
