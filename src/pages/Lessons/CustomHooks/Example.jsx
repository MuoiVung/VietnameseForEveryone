import React, {useState} from 'react';
import {BiUpArrow} from 'react-icons/bi';
import {BiDownArrow} from 'react-icons/bi';

const Example = ({setDisplay}) => {
  const [hiden, setHiden] = useState (true);
  const handleShowExmple = () => {
    hiden ? setHiden (false) : setHiden (true);
    hiden ? setDisplay ('block') : setDisplay ('none');
  };
  return (
    <div
      onClick={handleShowExmple}
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
        {!hiden
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
