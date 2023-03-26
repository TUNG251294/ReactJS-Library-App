import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import axios,{HttpStatusCode} from 'axios';

export default function WriteOpinion() {
    // khai báo chi tiết các props chỉ có tác dụng tường minh
    const [opinion, setOpinion] = useState({
        user: {},
        opinion: '',
        status: ''
    })
    const {username} = useParams();

    // nếu đã khởi tạo giá trị ban đầu cho opinion và nó bao gồm một đối tượng user trống ( {} ), 
    // thì biểu thức !opinion.user sẽ không hoạt động đúng vì opinion.user đã được khởi tạo
    useEffect(() => {
        // if (!opinion.user) {
        if (Object.keys(opinion.user).length === 0) {
          axios
            .get(`http://localhost:8080/${username}`)
            .then(res => {
              console.log(res.status);
              console.log(res.data);
              if (res.status === HttpStatusCode.Ok) {
                setOpinion({ ...opinion, user: res.data });
              }
            })
            .catch(err => {
              console.log(err);
              throw err;
            });
        }
      }, [opinion, username]);
    // console.log("property user of opinion: " + JSON.stringify(opinion.user));

    const handleChange = (e)   => {
        setOpinion({...opinion,[e.target.name]: e.target.value});
    }
    const handleSend = (e) => {
        e.preventDefault();
        axios
          .post(`http://localhost:8080/opinion/save`, opinion)
          .then(res => {
            console.log(res.status)
            if(res.status === HttpStatusCode.Ok){
                alert("opinion have been submitted")
                } else{
                    alert("opinion have not been submitted")}
            }
          )
          .catch(err => {
            console.log(err)
            throw err;
          });
    }
    return (
        <div>
            <p>Write opinion</p>
            <input type='text' name='opinion' onChange={handleChange} style={{color: 'black'}}/>
            <button type='button' onClick={handleSend}>Send</button>
        </div>
    )
}
