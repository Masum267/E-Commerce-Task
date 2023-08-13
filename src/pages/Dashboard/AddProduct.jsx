import React from 'react'

const AddProduct = () => {
    return (
        <div className='row-span-2 col-span-2'>
            <div className="container mx-auto mt-8">
                <div className="bg-white p-8 rounded shadow-md">
                    <h1 className="text-2xl font-semibold mb-4">Add Product</h1>

                    <form>
                        <div className="mb-4">
                            <label for="product-name" className="block text-sm font-medium text-gray-700">Product Name</label>
                            <input type="text" id="product-name" name="product-name" className="mt-1 p-2 w-full border rounded-md"/>
                        </div>

                        <div className="mb-4">
                            <label for="product-category" className="block text-sm font-medium text-gray-700">Product Category</label>
                            <select id="product-category" name="product-category" className="mt-1 p-2 w-full border rounded-md">
                                <option>Please Select</option>
                                <option>Category 1</option>
                                <option>Category 2</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Product Freshness</label>
                            <div className="mt-1">
                                <label className="inline-flex items-center">
                                    <input type="radio" className="form-radio" name="product-freshness" value="brand-new"/>
                                        <span className="ml-2">Brand New</span>
                                </label>
                                <label className="inline-flex items-center ml-4">
                                    <input type="radio" className="form-radio" name="product-freshness" value="second-hand"/>
                                        <span className="ml-2">Second Hand</span>
                                </label>
                                <label className="inline-flex items-center ml-4">
                                    <input type="radio" className="form-radio" name="product-freshness" value="refurbished"/>
                                        <span className="ml-2">Refurbished</span>
                                </label>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label for="image" className="block text-sm font-medium text-gray-700">Image of Product</label>
                            <input type="file" id="image" name="image" className="mt-1 p-2 w-full border rounded-md"/>
                        </div>

                        <div className="mb-4">
                            <label for="additional-description" className="block text-sm font-medium text-gray-700">Additional Description</label>
                            <textarea id="additional-description" name="additional-description" rows="4" className="mt-1 p-2 w-full border rounded-md"></textarea>
                        </div>

                        <div className="mb-4">
                            <label for="product-price" className="block text-sm font-medium text-gray-700">Product Price</label>
                            <input type="number" id="product-price" name="product-price" className="mt-1 p-2 w-full border rounded-md"/>
                        </div>

                        <div className="mb-4">
                            <label for="comments" className="block text-sm font-medium text-gray-700">Comments</label>
                            <textarea id="comments" name="comments" rows="4" className="mt-1 p-2 w-full border rounded-md"></textarea>
                        </div>

                        <div className="flex justify-end">
                            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProduct
