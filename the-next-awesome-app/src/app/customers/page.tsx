import { Customer } from "@/model/Customer";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
//import axios from "axios"

export const metadata: Metadata = {
  title: "Next Awesome App: Customers",
  description: "List of Customer",
  keywords: "Customers, OnlineStore, React, Next"
};

export default async function ListCustomersPage(){

     //simulate delay
    await new Promise((resolve => setTimeout(resolve, 2000)))
    return (
        <div>
            <h3>List Customers</h3>

            <Suspense fallback={<div className="alert alert-warning">Loading Customers #1</div>}>
                <CustomerPage interval={3000}/>
            </Suspense>

             <Suspense fallback={<div className="alert alert-success">Loading Customers #2</div>}>
                <CustomerPage interval={7000}/>
            </Suspense>
            
            
        </div>
    )
}


export async function CustomerPage({interval}: {interval: number}){


    //simulate delay
    await new Promise((resolve => setTimeout(resolve, interval)))

    //api call
    const url = "http://localhost:9000/customers";
    // const response = await axios.get<Customer []>(url);
    // const customers = response.data;
    const response = await fetch(url, {method: "GET", cache: "no-store"});
    const customers = await response.json() as Customer[];


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
                            <td> <Link href={"/customers/" + customer.id}>{customer.name}</Link> </td>
                            <td>{customer.location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}