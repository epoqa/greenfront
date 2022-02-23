import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import axios from "axios";
import { useDispatch } from "react-redux";
import { addWeekAction } from "src/redux/actions/action";
import { backBaseURL } from "src/consts/consts";
import uniqid from "uniqid";
import { addWeekReq } from "src/reuseableFunctions/request";
const ProfileEdit = ({ onHide, user, ...props  }) => {
  const [gender, setGender] = useState('')
  const [age, setAge] = useState(0)
  const [location, setLocation] = useState('')
  const [about, setAbout] = useState('')
  const [newPassword, setNewPassword] = useState("")


  useEffect(() => {
    setGender(user.gender)
    setAge(user.age)
    setLocation(user.location)
    setAbout(user.about)
  },[user])




  const save = () => {
    console.log('SAVE')


      
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{marginTop: '50px'}}
    >
      <Modal.Header>
        <h5 id="contained-modal-title-vcenter">პროფილის განახლება</h5>
      </Modal.Header>
      <Modal.Body>

      <form>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">სახელი</label>
    <input className="form-control" disabled id="exampleFormControlInput1" placeholder={user.username}/>
  </div>
  <br/>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">ემაილი</label>
    <input className="form-control" disabled id="exampleFormControlInput1" placeholder={user.email}/>
  </div>
  <br/>
  <div className="form-group">
    <label htmlFor="exampleFormControlSelect1">სქესი</label>
    <select  onChange={e => setGender((e.target.value === 'შეცვლა')? 'none': e.target.value)} className="form-control" id="exampleFormControlSelect1">
      <option >კაცი</option>
      <option >ქალი</option>
      <option selected>შეცვლა</option>
    </select>
  </div>
  <br/>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">ასაკი</label>
    <input onChange={e => setAge(e.target.value)} type="number" min="0" className="form-control" id="exampleFormControlInput1" value={user.age}/>
  </div>
  <br/>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">ლოკაცია</label>
    <input onChange={e => setLocation(e.target.value)} className="form-control" id="exampleFormControlInput1" value={user.location === 'none' ? '' : user.location}/>
  </div>
  <br/>

  <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">ჩემს შესახებ</label>
    <textarea onChange={e => setAbout(e.target.value)} className="form-control" id="exampleFormControlTextarea1" value={user.about === 'none' ? '' : user.about }  rows="3"></textarea>
  </div>

  <br/>
  <hr/>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">ახალი პაროლი</label>
    <input onChange={e => setNewPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <br/>
</form>

 
      </Modal.Body>
      <Modal.Footer>
      <button onClick={e => save()} className="btn btn-success">შენახვა</button>

        <Button onClick={onHide}>დახურვა</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProfileEdit;
