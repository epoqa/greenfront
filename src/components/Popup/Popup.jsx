import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addWeekAction } from "src/redux/actions/action";
import { backBaseURL } from "src/consts/consts";
import uniqid from "uniqid";
import { addWeekReq } from "src/reuseableFunctions/request";
const Popup = ({ owner, onHide, id, setChosenWeek, ...props }) => {
  const dispatch = useDispatch();
  const createNewWeekType = (type) => {
    const weekId = uniqid();
    dispatch(addWeekAction({ type, weekId }));
    onHide();
    addWeekReq(id, weekId, type);
    setChosenWeek(weekId);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <h5 id="contained-modal-title-vcenter">ახალი კვირის ტიპი</h5>
      </Modal.Header>
      <Modal.Body>
        <button
          type="button"
          onClick={() => createNewWeekType("GER")}
          className="btn btn-primary m-3"
        >
          {" "}
          Germination{" "}
        </button>
        <button
          type="button"
          onClick={() => createNewWeekType("VEG")}
          className="btn btn-success m-3"
        >
          {" "}
          Vegetation{" "}
        </button>
        <button
          type="button"
          onClick={() => createNewWeekType("FLO")}
          className="btn btn-warning m-3"
        >
          {" "}
          Flowering{" "}
        </button>
        <button
          type="button"
          onClick={() => createNewWeekType("HAR")}
          className="btn btn-danger m-3"
        >
          {" "}
          Harvest{" "}
        </button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => onHide()}>დახურვა</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Popup;
