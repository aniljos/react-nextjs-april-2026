'use server'


//server action
export async function sayHello(message: string){

    // access db, message q, email server
    console.log("invoking sayHello", message);
    //return "Hello " + message;
    return (
        <div>
            <h5>Hello {message}</h5>
        </div>
    )
    
}