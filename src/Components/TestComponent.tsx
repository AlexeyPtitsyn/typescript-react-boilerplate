/**
 * @file Test component.
 * @copyright Alexey Ptitsyn <alexey.ptitsyn@gmail.com>, 2022
 */
import React, { useState } from 'react';

import './TestComponent.scss';

interface IProps {
  test: string
}

function TestComponent(props: IProps) {
  const [variable, setVariable] = useState(0);

  return (
    <div className="test-div" onClick={() => { setVariable(variable + 1)}}>
      { variable }
    </div>
  );
}

export default TestComponent;
