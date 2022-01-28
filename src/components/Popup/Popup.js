
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
const Popup = (props) => {
    const createNewWeekType = (type) => {

        props.func(false)
        axios.put(`https://greenbackk.herokuapp.com/diary/week/${props.id}`, {
            week: type,
            owner: props.owner,
            type: type,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }).then(res => {
          props.rerenderfunc(res.data.weeks)

        })

    }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <h5 id="contained-modal-title-vcenter">
            ახალი კვირის ტიპი
          </h5>
        </Modal.Header>
        <Modal.Body>
          <button type="button" onClick={() => createNewWeekType("GER")} className="btn btn-primary m-3" > Germination </button>
          <button type="button" onClick={() => createNewWeekType("VEG")} className="btn btn-success m-3"> Vegetation </button>
          <button type="button" onClick={() => createNewWeekType("FLO")} className="btn btn-warning m-3"> Flowering </button>
          <button type="button" onClick={() => createNewWeekType("HAR")} className="btn btn-danger m-3"> Harvest </button>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>დახურვა</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default Popup