import PropTypes from 'prop-types';
import React from 'react';
import { useContext } from 'react';
import { context } from '../App/App';

import styles from './button.sass';


export function Button() {

  const {handleSetState} = useContext(context);

  return (

    <button
      className='button'
      onClick={handleSetState}>
        Click Me!
    </button>

  )
}
