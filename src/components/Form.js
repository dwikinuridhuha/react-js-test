import React, { useEffect, useMemo, useState } from "react";

function Checkbox() {
  const [checked, setChecked] = React.useState(true);

  useEffect(() => {
    console.log(checked);
  }, [checked]);

  return (
    <label>
      <input
        type="checkbox"
        defaultChecked={checked}
        onChange={() => setChecked(!checked)}
      />
      Check Me!
    </label>
  );
}

const prepareForm = (formArr) => {
  return formArr.reduce((r, v) => {
    return { ...r, [v.payload]: v.defaultValue };
  }, {});
};

export default function Form({ formArray, handleFormChange }) {
  const initialForm = useMemo(() => prepareForm(formArray), [formArray]);
  const [form, setForm] = useState(initialForm);
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div>
      <h1>Testing</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(form);
        }}
      >
        {formArray.map((data) => {
          if (data.type === "checkbox") {
            return (
              <>
                <label>{data.label}</label>
                <input
                  type="checkbox"
                  name={data.payload}
                  defaultChecked={form[data.payload]}
                  onChange={(e) => {
                    e.target.value = !form[data.payload];
                    handleChange(e)
                  }}
                />
              </>
            );
          } else {
            return (
              <>
                <label>{data.label}</label>
                <input
                  onChange={handleChange}
                  type={data.type}
                  name={data.payload}
                  value={form[data.payload]}
                />
              </>
            );
          }
        })}
        <br />
        <Checkbox />

        <button>Filter</button>
      </form>
    </div>
  );
}
