import React from 'react';

const Scale = props => (
  <div class="scale">
    <input
      type="text"
      value={props.value}
      name={props.name}
      onChange={e => props.handlers(e)}
    />
    <select>
      <option>Celsius</option>
      <option>Fahrenheit</option>
      <option selected="1">Kelvin</option>
    </select>
  </div>
);

export default Scale;
