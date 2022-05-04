import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Portfolio = () => {
  let navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div>
      Portfolio
      <Button onClick={handleBack} variant="link">go home</Button>
      </div>
  )
}

export default Portfolio