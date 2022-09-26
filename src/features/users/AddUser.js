import { useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { addUser } from "../../redux/userSlice";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleAddUser = () => {
    if (values.name && values.email) {
      console.log(values);
      dispatch(
        addUser({
          id: Math.floor(Math.random() * 1000),
          name: values.name,
          email: values.email,
        })
      );
      setValues({ name: "", email: "" });
      navigate("/");
    }
  };
  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        value={values.name}
        //here we use the spread operator to include the email, othervise it'll be erased
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: "text", placeholder: "John Doe" }}
      />
      <br />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "email", placeholder: "johndoe@mail.com" }}
      />
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  );
};

export default AddUser;
