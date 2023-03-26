import React,{useState, useEffect} from 'react';
import axios,{HttpStatusCode} from 'axios';

export default function Opinion() {
    const [opinions, setOpinions] = useState([]);

    const handleCheck = (id) => {
      axios
        .post(`http://localhost:8080/opinion/check/${id}`)
        .then((res) => {
          console.log(res.status);
          loadOpinions();
        })
        .catch((err) => {
          throw err;
        });
    };
  
    useEffect(() => {
      loadOpinions();
    }, []);
  
    const loadOpinions = async () => {
      try {
        const res = await axios.get("http://localhost:8080/opinion/list");
        // console.log(res.status);
        console.log(res.data);
        if (res.status === HttpStatusCode.Ok) {
          setOpinions(res.data);
        }
      } catch (err) {
        console.log(err);
        throw err;
      }
    };
  
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>UserId</th>
              <th>Username</th>
              <th>UserEmail</th>
              <th>Ý kiến</th>
              <th>Trạng thái</th>
              <th>Check</th>
            </tr>
          </thead>
          <tbody>
            {opinions.map((element) => (
              <tr key={element.id}>
                <td style={{ color: "black" }}>{element.id}</td>
                <td style={{ color: "black" }}>{element.user.id}</td>
                <td style={{ color: "black" }}>{element.user.username}</td>
                <td>{element.user.email}</td>
                <td style={{ color: "blue" }}>{element.opinion}</td>
                <td>
                  {element.status === "check" ? (
                    <td style={{ color: "blue" }}>{element.status}</td>
                  ) : (
                    <td style={{ color: "red" }}>{element.status}</td>
                  )}
                </td>
                <td>
                  <button onClick={() => handleCheck(element.id)}>Change</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
//   loại bỏ việc sử dụng opinion trong dependency array của useEffect. Khi handleCheck được gọi, 
//   nó sẽ gọi hàm loadOpinions để tải lại danh sách ý kiến từ máy chủ và cập nhật lại state opinion. 
//   Sau đó, component sẽ render lại với danh sách `opinion` mới nhất.