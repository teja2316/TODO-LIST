import React from 'react'

const Todolists = (props) => {


  return (

    <div className='todo_style'>
      <button class="btn"><i class="fa fa-close"  onClick={() => { props.onSelect(props.id) }} /></button>
      <li> {props.text}  </li>

    </div>
    
  )
}

export default Todolists;

//<button class="btn"><i class="fa fa-close"  onClick={() => { props.onSelect(props.id) }} /></button>