import React from 'react'

function Customer() {
    return (
        <>
            <div className="container mx-auto mt-8">
                <div className="bg-white p-8 rounded shadow-md">
                    <h1 className="text-2xl font-semibold mb-4">Add New Customer</h1>

                    <form>
                        <div className="mb-4">
                            <label for="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md" />
                        </div>

                        <div className="mb-4">
                            <label for="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" />
                        </div>

                        <div className="mb-4">
                            <label for="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input type="tel" id="phone" name="phone" className="mt-1 p-2 w-full border rounded-md" />
                        </div>

                        <div className="mb-4">
                            <label for="address" className="block text-sm font-medium text-gray-700">Address</label>
                            <textarea id="address" name="address" rows="4" className="mt-1 p-2 w-full border rounded-md"></textarea>
                        </div>

                        <div className="flex justify-end">
                            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add Customer</button>
                        </div>
                    </form>
                </div>
            </div>

            {/* customer list */}
            <div className="container mx-auto mt-8">
                <div className="bg-white p-8 rounded shadow-md">
                    <h1 className="text-2xl font-semibold mb-4">Customer List</h1>

                    <table className="w-full border">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="py-2 px-4 border">Full Name</th>
                                <th className="py-2 px-4 border">Email Address</th>
                                <th className="py-2 px-4 border">Phone Number</th>
                                <th className="py-2 px-4 border">Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4 border">John Doe</td>
                                <td className="py-2 px-4 border">john@example.com</td>
                                <td className="py-2 px-4 border">123-456-7890</td>
                                <td className="py-2 px-4 border">123 Main St, City, Country</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border">Jane Smith</td>
                                <td className="py-2 px-4 border">jane@example.com</td>
                                <td className="py-2 px-4 border">987-654-3210</td>
                                <td className="py-2 px-4 border">456 Elm St, Town, Country</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


            <div className="container mx-auto mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                        <img className="w-full" src="product1-image.jpg" alt="Product 1 Image" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Product 1 Name</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio ac ante.
                            </p>
                        </div>
                        <div className="px-6 py-4">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                                Category
                            </span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                                $99.00
                            </span>
                        </div>
                    </div>

                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                        <img className="w-full" src="product2-image.jpg" alt="Product 2 Image" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Product 2 Name</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio ac ante.
                            </p>
                        </div>
                        <div className="px-6 py-4">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                                Category
                            </span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                                $79.00
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Customer
