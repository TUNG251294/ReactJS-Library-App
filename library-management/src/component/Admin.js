import React from 'react';
import{useNavigate, Link} from 'react-router-dom';
import "../css/Admin.css";

export default function Admin() {
    const navigate = useNavigate();

    return (
        <div class="container">
          {/* <Link to={"/library/order"}>View</Link> */}
	<div class="row">
		<div class="col-sm-12 col-md-8 col-lg-6 mt-8">
                <div class="card">
                    <img class="card-img-top" src="https://picsum.photos/200/150/?random"/>

                    <div class="card-block">
                        <figure class="profile">
                            <img src="https://www.bing.com/th?id=OIP.QmLnoonXJmpDhXqZcD0A7AHaFj&w=178&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" class="profile-avatar" alt=""/>
                        </figure>
                        <h4 class="card-title mt-3" style={{color:'black', textAlign:'left'}}>Quản trị viên</h4>
                        
                        <div class="card-text" style={{textAlign:'left'}}>
                        Administrator of the library
                        </div>
                    </div>
                    
                    <div style={{textAlign: 'left'}}>
                      <div>
                        <button onClick={() => navigate("/library/order")} style={{backgroundColor: 'grey', width: "9em", marginBottom: "0.25em"}}>Borrow</button> 
                      </div>
                      <div>
                        <button onClick={() => navigate("/opinion/list")} style={{backgroundColor: 'grey', width: "9em", marginBottom: "0.25em"}}>Opinion</button> 
                      </div>
                      <div>
                        <button onClick={() => navigate("/book/list")} style={{backgroundColor: 'grey', width: "9em", marginBottom: "0.25em"}}>Book Store</button> 
                      </div>
                      <div>
                        <button onClick={() => navigate("/library/history")} style={{backgroundColor: 'grey', width: "9em", marginBottom: "0.25em"}}>History</button> 
                      </div>
                    </div>
                </div>
            </div>
	</div>
</div>
    )
}


