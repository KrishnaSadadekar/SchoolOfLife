import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import ATrainers from "./ATrainers";
import { useNavigate } from "react-router-dom";
const AdminD = () => {
    useEffect(() => {
        document.title = "Admin Dashboard!";
    }, []);

    // alert(axios.defaults.headers.common["Authorization"]);
    
    const [msg, setmsg] = useState([]);
    let token = `Bearer ${sessionStorage.getItem("data")}`;
    console.log(token);

    const getAllCoursesFromServer = () => {
        console.log(sessionStorage.getItem("data"));
        axios.get('http://localhost:8080/admin/dashboard', { headers: { Authorization: token } })
            .then(response => {
                setmsg(response.data);
                console.log(msg);

            })
            .catch(error => {
                // Handle errors
                
                console.log(error);
                toast.error("Something went wrong!");
            });
    };


        useEffect(() => {
        
        getAllCoursesFromServer();
    }, [getAllCoursesFromServer]); // Add getAllCoursesFromServer to the dependency array

    return (
        <div>
            <div className="breadcrumbs aos-init aos-animate" data-aos="fade-in">
                <div className="container">
                    <h2>Admin Dashboard</h2>
                    <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
                </div>
            </div>
            
        </div>

    );
};

export default AdminD;
