import { render } from "@testing-library/react";
import React, { useState } from 'react';
//This imports React and UseState from 'react';

type Props = {
    email?: string;
}

const EMAILQrCode: React.FC<Props> = (props) => {
    const [email, setEmail] = useState(props.email);
    const QRCode = require('qrcode.react');//qrcode-react is not yet ES6 module feature compliant, hence this approach to declaration.

    const [visible, setVisibility] = useState()
    
    const changeEmailToGreet = (event: any) => {
        setEmail(event.target.value);
    }



    //Displays our QRCode
    return (
        <html>
            <div className="field">
                <h1 className="label">EMAIL</h1>
            </div>
            <div className="control">
                <input className="input is-rounded" type="email" placeholder="Enter Email..." name="name_to_greet"
                    onInput={changeEmailToGreet} />
            </div>

            
            <div className="qrcode">
                {
                    <QRCode value={JSON.stringify({
                        email: email,
                    })} size={256} />
                }
            </div>
            <button className="button" onClick={() => setVisibility(visible)}>
                Generate QRCode
            </button>
        </html>
    )
}

export default EMAILQrCode;//This makes the component visible

