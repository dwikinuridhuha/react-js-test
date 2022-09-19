import Form from "./components/Form";

const App = () => {
  const formArray = [
    {
      type: "text",
      payload: "trend",
      defaultValue: "test",
      label: "show trend",
    },
    {
      type: "date",
      payload: "date-input",
      defaultValue: "2022-06-16",
      label: "show date",
    },
    {
      type: "email",
      payload: "emails",
      defaultValue: "test@email.com",
      label: "show email",
    },
    {
      type: "password",
      payload: "pwd",
      defaultValue: "",
      label: "show password",
    },
    {
      type: "checkbox",
      payload: "check",
      defaultValue: true,
      label: "show check",
    },
  ];

  return (
    <>
      <Form formArray={formArray} />
      {/* <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div> */}
    </>
  );
};

export default App;
