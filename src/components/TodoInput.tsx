import {useState} from 'react'

export const TodoInput: React.FC<{addTodo(text: string): void}> = (props) => {
    const [text, setText] = useState<string>('')

    const addText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
      }
    
      const enter = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
          if (text) {
            props.addTodo(text)
            setText('')
          }
        }
      }

    const btnAdd = () => {
      if (text) {
        props.addTodo(text)
        setText('')
      }
    }   


      return <div className="input-field">
      <div className="file-path-wrapper">
        <input 
          onKeyPress={enter} 
          onChange={addText} 
          value={text} 
          className="file-path" 
          type="text" 
          placeholder="text"/>
      </div>

      <div className="btn" onClick={btnAdd}>
        <span>add</span>
      </div>
    </div>
}