import { useEffect, useState } from "react";
import axios from "axios";
import { setAuthToken } from "../auth/auth";
const AdminDashboard = () => {
    useEffect(() => {
        document.title = "Admin Dashboard!";
    }, []);


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

export default AdminDashboard;
