import React from 'react';

const UnitSelect = () => (
  <div class="unit">
    <select>
      <option value="Area">Area</option>
      <option value="Data Transfer Rate">Data Transfer Rate</option>
      <option value="Digital Storage">Digital Storage</option>
      <option value="Energy">Energy</option>
      <option value="Frequency">Frequency</option>
      <option value="Fuel Economy">Fuel Economy</option>
      <option value="Length">Length</option>
      <option value="Mass">Mass</option>
      <option value="Plane Angle">Plane Angle</option>
      <option value="Pressure">Pressure</option>
      <option value="Speed">Speed</option>
      <option selected="1" value="Temperature">
        Temperature
      </option>
      <option value="Time">Time</option>
      <option value="Volume">Volume</option>
    </select>
  </div>
);

export default UnitSelect;
