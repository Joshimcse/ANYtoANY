import React from 'react';

import UnitSelect from './unit';
import Scale from './scale';
import Formula from './formula';

const Converter = props => {
  return (
    <div class="container">
      <UnitSelect />
      <Scale name="first" value={props.data.first} handlers={props.handlers} />
      <div class="equal">=</div>
      <Scale
        name="second"
        value={props.data.second}
        handlers={props.handlers}
      />
      <Formula />
    </div>
  );
};

export default Converter;
