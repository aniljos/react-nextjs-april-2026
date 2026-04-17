'use client'

import { JSX, useRef, useState } from "react"
import { sayHello } from "@/actions/sayHelloAction";

export default function SuppliersPage(){

    const messageInputRef = useRef<HTMLInputElement>(null)
    const [messageResult, setMessageResult] = useState<JSX.Element>()

    async function handleClick(){
        //alert("Hello " + messageInputRef.current?.value);
        const value = messageInputRef.current?.value
        if(value){
            const result = await sayHello(value);
            //alert(result);
            setMessageResult(result);
        }
    }

    return (
        <div>
            <h3>Suppliers</h3>
            <div>
                <input ref={messageInputRef} className="form-control" type="text" placeholder="Messsage"/>
            </div>
            <div>
                <button className="btn btn-info" onClick={handleClick}>Fetch Message</button>
            </div>
            <br />
            <div>
                {messageResult}
            </div>

        </div>
    )
}