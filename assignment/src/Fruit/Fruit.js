import React from 'react'
import classes from './Fruit.css'


const fruit = (props) => {
  return (
    <div className={classes['input-area']}>
      <p>Fruits</p>
      <form onSubmit={props.submit}>
        <input
          type="text"
          placeholder="enter fruit-quantity"
          onChange={props.changed}
          value={props.value}
        />
        { props.editMode ? 
        <button className={classes.edit}>Save Edits</button> :
        <button className={classes.submit}>Submit</button> 
        }
        
      </form>
    </div>
  );
}

export default fruit;