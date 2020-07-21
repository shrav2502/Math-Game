import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Link } from "react-router-dom";

const ModalExample = (props) => {
  const { className, score, restartGame, buttonClick } = props;

  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  const gameRestart = () => {
    let score = 0;
    let time = 20;
    restartGame(score, false, time);
    buttonClick();
  };

  const scoreDisplay = {
    marginLeft: "150px",
    fontSize: "25px",
  };

  const buttonStyling = {
    marginRight: "180px",
  };

  const header = {
    marginLeft: "180px",
    borderBottom: "none",
    fontSize: "40px",
    color: "orange",
  };

  return (
    <div>
      <Modal centered isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} style={header}>
          Game Over
        </ModalHeader>
        <ModalBody style={scoreDisplay}>
          Your score is :
          <span style={{ color: "red", fontSize: "30px" }}>{score}</span>
        </ModalBody>
        <ModalFooter>
          <Link to="/">
            <Button color="primary" onClick={gameRestart} style={buttonStyling}>
              Play Again
            </Button>{" "}
          </Link>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
