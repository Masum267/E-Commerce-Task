import React from 'react'

function Order() {
    return (
        <div className="container mx-auto mt-8">
            <div className="bg-white p-8 rounded shadow-md">
                <h1 className="text-2xl font-semibold mb-4">Orders</h1>

                <table className="w-full border">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border">Order ID</th>
                            <th className="py-2 px-4 border">Product Name</th>
                            <th className="py-2 px-4 border">Quantity</th>
                            <th className="py-2 px-4 border">Total Price</th>
                            <th className="py-2 px-4 border">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border">1</td>
                            <td className="py-2 px-4 border">Product A</td>
                            <td className="py-2 px-4 border">2</td>
                            <td className="py-2 px-4 border">$100.00</td>
                            <td className="py-2 px-4 border">Pending</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border">2</td>
                            <td className="py-2 px-4 border">Product B</td>
                            <td className="py-2 px-4 border">1</td>
                            <td className="py-2 px-4 border">$50.00</td>
                            <td className="py-2 px-4 border">Shipped</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Order
