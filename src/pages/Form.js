import * as React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';


import { useState } from 'react';





function Form() {
    const [inputs, setInputs] = useState("");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${inputs}`)
    }


    return (
        <> 
        <div className='App-wrapper'>
            <form onSubmit={handleSubmit}>
            <fieldset>
                <label> Author:
                    <input
                    type='text'
                    name='author'
                    placeholder='Author'
                    className='form-field'
                    value={inputs.author || ""}
                    onChange={handleChange}
                    />
                </label>
                <label> Customer:
                    <input type='text'
                    name='customer'
                    placeholder='Customer'
                    className='form-field'
                    value={inputs.customer || ""}
                    onChange={handleChange}
                    />
                </label>
                <label> Building:
                    <input type='text'
                    name='building'
                    placeholder='Building'
                    className='form-field'
                    value={inputs.building || ""}
                    onChange={handleChange}
                    />
                </label>
                <label> Battery:
                    <input type='text'
                    name='battery'
                    placeholder='Battery'
                    className='form-field'
                    value={inputs.battery || ""}
                    onChange={handleChange}
                    />
                </label>
                <label> Column:
                    <input type='text'
                    name='column'
                    placeholder='Column'
                    className='form-field'
                    value={inputs.column || ""}
                    onChange={handleChange}
                    />
                </label>
                <label> Elevator:
                    <input type='text'
                    name='elevator'
                    placeholder='Elevator'
                    className='form-field'
                    value={inputs.elevator || ""}
                    onChange={handleChange}
                    />
                </label>
                <label> Employee:
                    <input type='text' 
                    name='employee'
                    placeholder='Employee'
                    className='form-field'
                    value={inputs.employee || ""}
                    onChange={handleChange}
                    />
                </label>
                <label> Result:
                    <input type='text' 
                    name='result'
                    placeholder='Result'
                    className='form-field'
                    value={inputs.result || ""}
                    onChange={handleChange}
                    />
                </label>
                <label> Report:
                    <input type='text'
                    name='report'
                    placeholder='Report'
                    className='form-field'
                    value={inputs.report || ""}
                    onChange={handleChange}
                    />
                </label>
                <label> Status:
                    <input type='text' 
                    name='status'
                    placeholder='Status'
                    className='form-field'
                    value={inputs.status || ""}
                    onChange={handleChange}
                    />
                </label>
                <input type='submit' />
            </fieldset>
            </form>
        </div>                   
                            
                    
                    
        <p>       
            <Link to="/home">Back to Home Page</Link>
        </p>
        </> 
               
    );

}

export default Form


{/* <fieldset>
                                <div class="field">
                                    <label></label> customer_id, class: "" >
                                    <select_tag "customer", options_from_collection_for_select(Customer.all, "id", "id"), prompt: "Customer", class: "col-md-8">
                                    <select_tag "building", options_from_collection_for_select(Building.all, "id", "customer_id"), prompt: "", class: "col-md-8">
                                    <select_tag "battery", options_from_collection_for_select(Battery.all, "id", "building_id"), prompt: "", class: "col-md-8">
                                    <select_tag "column", options_from_collection_for_select(Column.all, "id", "battery_id"), prompt: "", class: "col-md-8">
                                    <select_tag "elevator", options_from_collection_for_select(Elevator.all, "id", "column_id"), prompt: "", class: "col-md-8">
                                </div>

                                <div class="field">
                                    <form.label employee />
                                    <form.select id class="col-md-8" />
                                </div>

                                <div class="field">
                                    <form.label description />
                                    <form.text_area report class="col-md-8" />
                                </div>

                                <div class="actions">
                                <form submit />
                                </div>
                            </fieldset>
                    
                            </div>
                        </div>
                    </div>
                    </section> */}