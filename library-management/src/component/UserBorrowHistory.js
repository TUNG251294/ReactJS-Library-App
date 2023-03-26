import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import axios,{HttpStatusCode} from 'axios';
export default function UserBorrowHistory() {
    const [history, setHistory] = useState([{}]);
    const {username} = useParams();

    useEffect(() => {
    axios
          .get(`http://localhost:8080/history/${username}`)
          .then(res => {
            console.log(res.status)
            console.log(res.data)
            if(res.status === HttpStatusCode.Ok){
                setHistory(res.data);
            }
          })
          .catch(err => {
            console.log(err)
            throw err;
          });
        },[username])
    return (
        <table>
            <tr>
                <th>Tên sách</th>
                <th>Ngày mượn</th>
                <th>Trạng thái</th>
            </tr>
            {history.map(element => (
                <tr>
                    <td style={{color: 'blue'}}>{element[0]}</td>
                    <td style={{color: 'blue'}}>{element[1]}</td>
                    <td>
            {element[2] === false ? (
              <td style={{ color: 'red' }}>Đang mượn</td>
            ) : (
              <td style={{ color: 'blue' }}>Đã trả</td>
            )}
          </td>
                </tr>
            ))}
            
        </table>
    )
}

