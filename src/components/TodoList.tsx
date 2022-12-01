import React from 'react'

type props = {
    todos: any[], 
    toggle(id: number): void,
    delete(id: number): void
}

export const TodoList: React.FC<props> = (props) => {

    return  <ul>
        {props.todos.map(el => {
        const classes = ['todo']

        if (el.completed) {
          classes.push('completed')
        }

        return <li className={classes.join(' ')} key={el.id}>
            <label>
               <input type="checkbox" checked={el.completed} onChange={() => props.toggle(el.id)}/>
               <span>{el.text}</span>
               <i className='material-icons red-text' onClick={() => props.delete(el.id)}>delete</i>
            </label>
          </li>
        })}
    </ul>
}