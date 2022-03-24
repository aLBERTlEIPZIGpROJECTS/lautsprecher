import { useState } from "react";

const FormField = (props) => {

  const [labelClass, setLabelClass] = useState(props.class);
    
  return (
    <div className="form-field">
      <label htmlFor="" className={labelClass}>
        {props.label}
        <input
          type={props.type}
          pholder={props.pholder}
          border={props.border}
          maxLength={props.maxlength}
          cols={props.cols}
          rows={props.rows}
          id={props.id}
          onChange={props.onChange}
          value={props.value}
        />
      </label>
    </div>
  );
};

export default FormField;