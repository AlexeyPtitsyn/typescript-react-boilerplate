/**
 * @file Test script.
 * @copyright Alexey Ptitsyn <alexey.ptitsyn@gmail.com>, 2022
 */
import React from 'react';
import ReactDOM from 'react-dom';

import TestComponent from './Components/TestComponent';

ReactDOM.render(
  <TestComponent test="123" />,
  document.getElementById('app')
);
