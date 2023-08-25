import { useContext } from "react";
import { useRef } from "react";
import { Button, Card, Form, FormControl, FormLabel } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import CartContext from "./CartContext";

const Login = () => {
  const ctx = useContext(CartContext);
  const passwordInputRef = useRef();
  const emailInputRef = useRef();
  const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    const obj = {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    postDataHandler(obj);
  };

  const postDataHandler = (obj) => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC6fdqT-BKSYvdgNjdso0biEIf45XQLPXk",
      {
        method: "POST",
        body: JSON.stringify({
          email: obj.email,
          password: obj.password,
          returnSecureToken: true,
        }),
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMsg = "Authentication failed";
            if (data && data.error && data.error.message) {
              errorMsg = data.error.message;
            }
            throw new Error(errorMsg);
          });
        }
      })
      .then((data) => {
        console.log(data);
        ctx.addToken(data.idToken);
        history.replace("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <Card className="w-50 mt-2 m-auto p-3">
        <Card.Title className="text-center">
          {" "}
          <h2>User Login</h2>
        </Card.Title>
        <Card.Body>
          <Form>
            <FormLabel>Email</FormLabel>
            <FormControl ref={emailInputRef} placeholder="Email"></FormControl>
            <FormLabel>Password</FormLabel>
            <FormControl
              ref={passwordInputRef}
              placeholder="Password"
            ></FormControl>
            <Button className="mt-2" onClick={submitHandler}>
              login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Login;
