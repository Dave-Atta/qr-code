import React, {useState} from 'react';

type Props = {
    sms?: string;
}

const SMSQrCode: React.FC<Props> = (props) => {
    const [sms, setSMS] = useState(props.sms);
    const QRCode = require('qrcode.react');

    const changeSMSToGreet = (event: any) => {
        setSMS(event.target.value);
    }

    const OnClick = useState("qrcode")


    return (
        <div>
            <div className="field">
                <h1 className="label">SMS</h1>
            </div>
            <p>
                <input type="text" placeholder="Enter SMS..." name="name_to_greet"
onInput={changeSMSToGreet}/>
            </p>
    
            <div className="qrcode">
                {
                    <QRCode value={JSON.stringify({
                        sms: sms,
                    })}size={256}/>
                }
            </div>
            <button className="button">Generate QRCode</button>
        </div>
    )
}

export default SMSQrCode;//This makes the component visible