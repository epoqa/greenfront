import Avatar from "@mui/material/Avatar";
import React, { useRef, useState } from "react";


const DefaultImage = ({ setAvatar }) => {
    const [image, setImage] = useState(0);

    const arr = [
        'https://www.shareicon.net/data/512x512/2016/08/18/810266_man_512x512.png',
        'https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png',
        'https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png',
        'https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png',
        'https://cdn-icons-png.flaticon.com/512/168/168732.png',
        'https://static.vecteezy.com/system/resources/previews/002/272/240/non_2x/boy-avatar-simple-icon-design-rockstar-with-shades-star-free-vector.jpg',
        'https://mir-s3-cdn-cf.behance.net/project_modules/max_632/ce54bf11889067.562541ef7cde4.png'
    ]

    const changeAvatar = () => {
        setImage(Math.floor(Math.random() * arr.length));

        setAvatar(arr[image]);



    }

  return (
    <div className="justify-content-center">
        <br/>
        <Avatar 
            alt="random avatar"
            src={arr[image]}
            sx={{
                width: "150px",
                height: "150px",
                border: "1px solid black",

            }}

        
        />
        <br/>
        <button onClick={e => changeAvatar()} className='w-100 btn btn-primary '>სხვა ფოტო</button>

        <br/>
    </div>
  );
};
export default DefaultImage;
