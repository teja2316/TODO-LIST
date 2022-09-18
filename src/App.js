import React, { useState } from 'react';
import Todolists from './Todolists';

const App = () => {

  const [inputList, setinputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {

    setinputList(event.target.value)
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return ([...oldItems, inputList]);
    });

    setinputList('');

  };

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });


  }


  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1>Todo List</h1>
          <br />
          <input value={inputList} type="text" placeholder='Add a Task' onChange={itemEvent} />

          <button onClick={listOfItems}> + </button>

          <ol>{
            items.map((itemval, index) => {
              return <Todolists
                key={index}
                id={index}
                text={itemval}
                onSelect={deleteItems}

              />
            })
          }

          </ol>

        </div>

      </div>
    </>
  )
}

export default App



