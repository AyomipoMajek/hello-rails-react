import React, { useEffect } from "react";
import { greetapi } from "../reducers/greetslice";
import { useDispatch, useSelector } from "react-redux";

const Greeting = () => {
  const greet = useSelector((state) => state.Greet.greetings)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(greetapi())
  }, [dispatch])

  return (
    <div>
      <h1>Random Greeting</h1>
      <p>{greeting.message}</p>
    </div>
  );
};

export default Greeting;