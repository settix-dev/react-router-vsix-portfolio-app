import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const About = () => {
  let navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      About
      <Button onClick={handleBack} variant="link">
        Back
      </Button>
    </div>
  );
};

export default About;
