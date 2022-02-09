import PropTypes from 'prop-types';
import React from 'react';
import {useState} from 'react';
import { useContext } from 'react';
import { context } from '../App/App';
import { Transition } from 'react-transition-group';
import styles from './square.sass';


export function Square() {


  const {state} = useContext(context);

  return (

    <Transition
    timeout={5000}
    in={state}
    unmountOnExit
    >

      { state => <div className={ `square ${state}` }/>}

    </Transition>

  )
}
