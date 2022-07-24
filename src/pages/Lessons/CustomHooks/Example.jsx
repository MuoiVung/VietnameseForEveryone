import React, {useState} from 'react';
import {BiUpArrow} from 'react-icons/bi';
import {BiDownArrow} from 'react-icons/bi';

const Example = ({setDisplayExample, order, a, setA}) => {
  console.log (a);
  const [hide, setHide] = useState (true);
  const handleShowExample = () => {
    setA (order);
    hide ? setHide (false) : setHide (true);
    a === 1 && hide ? setDisplayExample ('block') : setDisplayExample ('none');
  };
  return (
    <div
      onClick={handleShowExample}
      style={{
        display: 'flex',
        textAlign: 'center',
        cursor: 'pointer',
        position: 'absolute',
        right: '0px',
        top: '10px',
      }}
    >
      <span style={{paddingTop: '5px', marginRight: '10px'}}>
        Example
      </span>
      <div>
        {!hide
          ? <BiUpArrow
              style={{
                color: 'var(--color-primary)',
                lineHeight: '15px',
                marginTop: '12px',
                fontSize: '7px',
                parding: '0',
              }}
            />
          : <BiDownArrow
              style={{
                color: 'var(--color-primary)',
                lineHeight: '15px',
                marginTop: '12px',
                fontSize: '7px',
                parding: '0',
              }}
            />}
      </div>
    </div>
  );
};
export default Example;
