import React from 'react';
import { useNavigate } from 'react-router-dom';


const DashboardLinks = () => {
    const navigate = useNavigate();

    const routeChange = (url) => {
        navigate(url);
    }

    const logout = () => {

    }

    return (
        <>

            <div class="col-xl-4 col-lg-4">
                <div class="tp-faq-inner__tab-btn">
                    <nav>
                        <div class="nav nav-tab" id="nav-tab" role="tablist">
                            <button class="nav-links active" id="nav-1-tab" >Dashboard<i class="fa-light fa-arrow-up"></i></button>
                            <button class="nav-links" id="nav-2-tab" onClick={() => routeChange('/dashboard_users')}>Users<i class="fa-light fa-arrow-up"></i></button>
                            <button class="nav-links" id="nav-2-tab" onClick={() => routeChange('/dashboard_experts')}>Experts<i class="fa-light fa-arrow-up"></i></button>
                            <button class="nav-links" id="nav-3-tab" onClick={() => routeChange('/dashboard_reviews')}>Reviews<i class="fa-light fa-arrow-up"></i></button>
                            <button class="nav-links" id="nav-4-tab" onClick={() => logout()}>Logout<i class="fa-light fa-arrow-up"></i></button>
                        </div>
                    </nav>
                </div>
            </div>

        </>
    )
}

export default DashboardLinks
