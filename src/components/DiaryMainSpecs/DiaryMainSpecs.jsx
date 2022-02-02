import PersonIcon from "@mui/icons-material/Person";
import { timeSince } from "../../reuseableFunctions/timeSince";

const DiaryMainSpecs = ({ diary, owner }) => {
  return (
    <div>
      <div className="row">
        <div className="col-16 d-flex justify-content-end text-start">
          <h4 className="col fw-bold pb-1">{diary.diaryName}</h4>
          {owner ? (
          <button onClick={e => console.log("delete")} type="button" className="pb-1 btn btn-danger">
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
          <div className="col-sm">
            {" "}
            <span>
              <p>
                {diary.type}
                <br />
                <small className="text-secondary">ჯიში</small>
              </p>
            </span>
          </div>
          <div className="col-sm">
            {" "}
            <span>
              <p>
                {diary.fertilizer} <br />
                <small className="text-secondary">სასუქი</small>
              </p>
            </span>
          </div>
          <div className="col-sm">
            {" "}
            <span>
              <p>
                {diary.ground} <br />
                <small className="text-secondary">ნიადაგი</small>
              </p>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <span>
              <p>
                {diary.light}
                <br />

                <small className="text-secondary">განათება</small>
              </p>
            </span>
          </div>
          <div className="col-sm">
            <span>
              <p>
                {diary.technology} <br />
                <small className="text-secondary">ტექნიკა</small>
              </p>
            </span>
          </div>
          <div className="col-sm">
            {" "}
            <span>
              <p>
                {diary.room} <br />
                <small className="text-secondary">გარემო</small>
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiaryMainSpecs;
