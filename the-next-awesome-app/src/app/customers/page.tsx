import { Customer } from "@/model/Customer";
import axios from "axios"

export default async function CustomerPage(){

    //api call

    const url = "http://localhost:9000/customers";
    const response = await axios.get<Customer []>(url);
    const customers = response.data;

    return (
        <div>
            <h3>Customers</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Name</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.location}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )

}