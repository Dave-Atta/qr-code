import React, {useState} from 'react';

type Props = {
    url?: string;
}

const URLQrCode: React.FC<Props> = (props) => {
    const [url, setURL] = useState(props.url);
    const QRCode = require('qrcode.react');

    const changeURLToGreet = (event: any) => {
        setURL(event.target.value);
    }

    return (
        <div>
            <div className="field">
                <h1 className="label">URL</h1>
            </div>
            <p>
                <input type="text" placeholder="Enter URL..." name="name_to_greet"
onInput={changeURLToGreet}/>
            </p>
        <div className="qrcode">
            {
                <QRCode value={JSON.stringify({
                        url: url,
                    })}size={256}/>
                }
            </div>
            <button className="button">Generate QRCode</button>
        </div>
    )
}

export default URLQrCode;//This makes the component visible