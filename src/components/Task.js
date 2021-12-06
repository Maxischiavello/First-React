import React from 'react';
import PropTypes from 'prop-types';

class Task extends React.Component {

    styleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'green' : 'red',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render() {
        const {task} = this.props;

        return <div style={this.styleCompleted()}>
            {task.title} -
            {task.description} -
            {task.done} -
            {task.id}
            < input type="checkbox" />
            <button style={btnDelete}>
                X
            </button>
        </div>
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

const btnDelete = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    margin: '10px',
    borderRadius: '50%',
    cursor: 'pointer'
}

export default Task;