import React, { useState } from "react";
import { Modal, Button, ButtonToolbar, Placeholder } from "rsuite";

const LoadingModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <ButtonToolbar>
        <Button onClick={handleOpen}> Open</Button>
      </ButtonToolbar>

      <Modal size="xs" open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Placeholder.Paragraph />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoadingModal;
/*
import loader from "../../assets/loading.json";
import orange_loader from "../../assets/orangeLoading.json";
import Lootie from "lottie-react";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loader,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const LoadingModalX = () => {
  return (
    <ModalWrapper>
      <Modal>
        <Lootie animationData={loader} />
      </Modal>
    </ModalWrapper>
  );
    <LoadingModal/>
      <ModalWrapper open={loading}>
        <Modal>
          <button onClick={() => setLoading()}>close</button>
        </Modal>
      </ModalWrapper>
};
const ModalWrapper = styled.div`
  width: 99%;
  height: 100vh;
  border: solid 5px blue;

  display: ${({ open }) => (open ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  padding: 10px;
  position: fixed;
  z-index: 1;
  :after {
    content: "";
    background: grey;
    opacity: 70%;
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;
const Modal = styled.div`
  width: 200px;
  height: 200px;
  align-items: center;
  justify-content: center;
  background: black;
  border-radius: 5px;
  z-index: 2;
`;
*/
