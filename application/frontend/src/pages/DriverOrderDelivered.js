import React from "react";
import '../assets/css/driver.css';
import map_sample from '../assets/img/map_customerorder.png';



const DriverOrderDelivered = () =>{
    return(
        <div className = "container-fluid">
            <div className = "order_header h3 text-white text-center mx-auto py-2 w-50">Order Details</div>
            <div className = "card border card_customerorder_body w-75 d-flex mx-auto mb-5">
            <div className = "card-header card_customerorder h4 pt-3 font-italic font-weight-bold text-white">Customer Order:<span className = "h4">#112233</span></div>
                <div className = "card-body">
                    <div className = "py-2 px-5">
                    <div className = "h3 text-center font-weight-bold">Head to Customer</div>
                    <img src = {map_sample} alt = "map_sample" className = "border d-block img-fluid customer_order_map pb-4 ml-auto mr-auto mb-4" />
                    <div className = "row justify-content-around">
                        <div className = "col-4">
                            <div className = "row">
                        <div className = "h4">Order Details</div>
                    <ul>
                        <br/><li className = "items">Sandwich</li>
                        <li className = "items">Coke</li>
                    </ul>
                        </div>
                        <div className = "row h5 font-weight-bold pt-4">Total: <span> &#36;24</span></div>
                        <div className = "row h5 pt-3 pt-4">Order Status: <span className = "font-italic text-info font-weight-bold pl-1">Pending</span></div>
                        </div>

                        <div className = "col-3">
                            <div className = "row">
                                <div className = "h4">Customer:</div>
                                <ul className = "customer_info"> <br/>
                                    <li className = "items px-2">Will Smith</li>
                                    <li className = "items px-2">(415) 123-4567</li>
                                </ul>
                            </div>
                            <button type = "myDirections" className = "row btn btn-warning mb-2 ml-2 text-white mt-4" onclick = "myDirections()">Directions</button>
                            <div className = "delivery_instructions h6 pt-4 row">Delivery Instructions: <br/><span className = "font-italic">Our apartment is located at the back of the building</span></div>
                        </div>
                    </div>
                    <div className = "click_delivered text-center mt-5 mb-2 text-muted">*Click delivered once food is handed to customer*</div>
                    <button type = "button" className = "mx-auto delivered_button btn btn-block w-25 text-white" onclick = "myDirections()"><span className = "delivered_text">Delivered!</span></button>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default DriverOrderDelivered;