import PropTypes from 'prop-types';
import React from 'react';
import {useState} from 'react';
import { useContext } from 'react';
import { context } from '../App/App';

import styles from './button.sass';


export function Button() {

  const {handleSetState} = useContext(context);
  const [state, setState] = useState();

  return (

    <button
      className='button'
      onClick={handleSetState}>
        Click Me!
    </button>

  )
}
