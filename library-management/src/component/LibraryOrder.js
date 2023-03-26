import React,{useState, useEffect} from 'react';
import axios,{HttpStatusCode} from 'axios';

export default function LibraryOrder() {
    const [history, setHistory] = useState([{}]);
    useEffect(() => {
        loadOrders();
      }, []);
      
      const loadOrders = async () => {
        try {
          const res = await axios.get("http://localhost:8080/library/not-returned-yet-order");
          console.log(res.status);
          console.log(res.data);
          if (res.status === HttpStatusCode.Ok) {
            setHistory(res.data);
          }
        } catch (err) {
          console.log(err);
          throw err;
        }
      };

    

    return (
        <div>
            <table>
            <tr>
                <th>UserId</th>
                <th>Username</th>
                <th>Email</th>
                <th>BookId</th>
                <th>Tên sách</th>
                <th>Ngày mượn</th>
                <th>Trạng thái</th>
            </tr>
            {history.map(element => (
                <tr>
                    <td style={{color: 'black'}}>{element[0]}</td>
                    <td style={{color: 'black'}}>{element[1]}</td>
                    <td>{element[2]}</td>
                    <td style={{color: 'black'}}>{element[3]}</td>
                    <td style={{color: 'blue'}}>{element[4]}</td>
                    <td style={{color: 'blue'}}>{element[5]}</td>
                    <td style={{color: 'red'}}>Đang mượn</td>
                </tr>
            ))}
            
        </table>
        </div>
    )
}

