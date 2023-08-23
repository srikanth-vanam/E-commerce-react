import { Button, Card, Form, FormControl, FormLabel } from "react-bootstrap";
import Header from "./Header";
import { useRef } from "react";

const Contact = () => {
  const inputName = useRef();
  const inputEmail = useRef();
  const inputPhoneNumber = useRef();
  
  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      name: inputName.current.value,
      email: inputEmail.current.value,
      phoneNumber: inputPhoneNumber.current.value,
    };
    postUserDataHandler(userData);
    inputName.current.value = "";
    inputEmail.current.value = "";
    inputPhoneNumber.current.value = "";
  };

  const postUserDataHandler = async (userData) => {
    try {
      const response = await fetch(
        `https://react-httprequests-2c86d-default-rtdb.firebaseio.com/customerInfo.json`,
        {
          method: "POST",
          body: JSON.stringify(userData),
          header: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("cannot post data to fireBase");
      } else {
        console.log("sucessfully posted Customer data");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Header onHide={true} />
      <Card className="p-2" style={{ width: "35rem", margin: "1rem auto" }}>
        <Form onSubmit={submitHandler}>
          <FormLabel>Name</FormLabel>
          <FormControl ref={inputName}></FormControl>
          <FormLabel>Email-Id</FormLabel>
          <FormControl ref={inputEmail}></FormControl>
          <FormLabel>Phone Number</FormLabel>
          <FormControl ref={inputPhoneNumber}></FormControl>
          <Button className="mt-2" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default Contact;
