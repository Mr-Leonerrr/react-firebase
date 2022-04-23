import React from "react";
import { firebase } from "firebase";

const Form = () => {
    return (
        <div className="form">
        <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone" />
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
            <button type="submit">Save</button>
        </form>
        </div>
    );
}

export default Form;