import React from 'react';

const Select = props => {
  return (
    <select onChange={props.onChange}>
      <option value=''>Select</option>
      {props.country &&
        props.country.map(arr => (
          <option value={arr[0]} key={arr[0]}>
            {arr[1]}
          </option>
        ))}
    </select>
  );
};

export default Select;
