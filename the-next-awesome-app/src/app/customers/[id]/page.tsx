import { Customer } from "@/model/Customer";
import Link from "next/link"

type ViewCustomerProps = {
    params: Promise<{id: number}>
}

export default async function ViewCustomer(props: ViewCustomerProps){


    const id = (await (props.params)).id;
    await new Promise((resolve => setTimeout(resolve, 1000)))

    const response = await fetch("http://localhost:9000/customers/" + id);
    const customer = await response.json() as Customer;

    return (
        <div>
            <h3>View Customer: {id}</h3>
            <div>
                <p>Name: {customer.name}</p>
                <p>Location: {customer.location}</p>
            </div>

            <Link href="/customers">Back</Link>
        </div>
    )
}