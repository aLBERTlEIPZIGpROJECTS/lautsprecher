import { useState } from "react";

const FormField = ({type, pholder, border, maxLength, cols, rows, id, onChange, value}) => {

  const [labelClass, setLabelClass] = useState(props.class);
    
  return (
    <div className="form-field">
      <label htmlFor="" className={labelClass}>
        {props.label}
        <input
          type={type}
          pholder={pholder}
          border={border}
          maxLength={maxLength}
          cols={cols}
          rows={rows}
          id={id}
          onChange={onChange}
          value={value}
        />
      </label>
    </div>
  );
};

export default FormField;