/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import PersonIcon from "@mui/icons-material/Person";
import { timeSince } from "../../reuseableFunctions/timeSince";

const DiaryMainSpecs = ({ deleteDiary, diary, owner }) => {
  console.log(diary);
  return (
    <div>
      <div className="row">
        <div className="col-16 d-flex justify-content-end text-start">
          <h4 className="col fw-bold pb-1">{diary.diaryName}</h4>
          {owner ? (
            <button
              onClick={(e) => deleteDiary()}
              type="button"
              className="pb-1 btn btn-danger"
            >
              წაშლა
            </button>
          ) : null}
        </div>
      </div>
      <h6>
        <PersonIcon /> შექმნა {timeSince(diary.createdAt)} წინ{" "}
        <a href={`/grower/${diary.owner}`}> {diary.owner}</a>-მ
      </h6>

      <br />

      <div className="container">
        <div className="row">
          <div className="col-sm row">
            {" "}
            <span className="col-sm-3">
              <img
                width="40px"
                src="https://www.viridiansciences.com/hubfs/Viridian/Images/Hemp-pot-icon.png"
              />
            </span>
            <span className="col-sm-3">
              <p>
                {diary.facturer}
                <br />
                <small className="text-secondary">მწარმოებელი</small>
              </p>
            </span>
          </div>
          <div className="col-sm row">
            {" "}
            <span className="col-sm-3">
              <img
                width="45px"
                src="https://thumbs.dreamstime.com/b/eps-genetics-179892936.jpg"
              />
            </span>
            <span className="col-sm-3">
              <p>
                {diary.type}
                <br />
                <small className="text-secondary">ჯიში</small>
              </p>
            </span>
          </div>
          <div className="col-sm row">
            {" "}
            <span className="col-sm-3">
              <img
                width="40px"
                src="https://cdn-icons-png.flaticon.com/512/1670/1670075.png"
              />
            </span>
            <span className="col-sm-3">
              <p>
                {diary.fertilizer} <br />
                <small className="text-secondary">სასუქი</small>
              </p>
            </span>
          </div>
          <div className="col-sm row">
            {" "}
            <span className="col-sm-3">
              <img
                width="40px"
                src="https://cdn.iconscout.com/icon/free/png-256/soil-449916.png"
              />
            </span>
            <span className="col-sm-3">
              <p>
                {diary.ground} <br />
                <small className="text-secondary">ნიადაგი</small>
              </p>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-sm row">
            {" "}
            <span className="col-sm-3">
              <img
                width="50px"
                src="data:image/png;base64,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"
              />
            </span>
            <span className="col-sm-3">
              <p>
                {diary.light}
                <br />

                <small className="text-secondary">განათება</small>
              </p>
            </span>
          </div>
          <div className="col-sm row">
            {" "}
            <span className="col-sm-3">
              <img
                width="40px"
                src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Settings-icon.png"
              />
            </span>
            <span className="col-sm-3">
              <p>
                {diary.technology} <br />
                <small className="text-secondary">ტექნიკა</small>
              </p>
            </span>
          </div>
          <div className="col-sm row">
            {" "}
            <span className="col-sm-3">
              <img
                width="40px"
                src="https://cdn-icons-png.flaticon.com/512/2487/2487554.png"
              />
            </span>
            <span className="col-sm-3">
              <p>
                {diary.room} <br />
                <small className="text-secondary"> გარემო</small>
              </p>
            </span>
          </div>
          <div className="col-sm row">
            {" "}
            <span className="col-sm-3">
              <img
                width="40px"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr2SqDsrlS6eWRkU5ZypPucYB3x_NW_9PplA&usqp=CAU"
              />
            </span>
            <span className="col-sm-3">
              <p>
                {diary.id} <br />
                <small className="text-secondary">აიდი</small>
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiaryMainSpecs;
