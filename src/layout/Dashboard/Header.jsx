import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        // <>
        //     {/* <h3>I'm Header Component</h3> */}
        //     {/* <div className='col-span-2'>
        //         <div className="bg-white">
        //             <div className="flex-col flex">
        //                 <div className="w-full border-b-2 border-gray-200">
        //                     <div 
        //                         className="bg-white h-16 justify-center items-center mx-auto px-4 flex"
        //                     >
        //                         <div>
        //                             <h2>Dashboard</h2>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div> */}

        //     <header className="flex items-center justify-between px-6 py-4 bg-white border-b-4">
        //         <div className="flex items-center">
        //             <button className="text-gray-500 focus:outline-none lg:hidden">
        //                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                     <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        //                 </svg>
        //             </button>

        //         </div>

        //         <div className="flex items-center">
        //             <div x-data="{ notificationOpen: false }" className="relative">
        //                 <button className="flex mx-4 text-gray-600 focus:outline-none">
        //                     <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                         <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        //                     </svg>
        //                 </button>
        //             </div>

        //             <div x-data="{ dropdownOpen: false }" className="relative">
        //                 <button className="relative block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none">
        //                     <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80" alt="Your avatar" />
        //                 </button>                        
        //             </div>
        //         </div>
        //     </header>
        // </>
        <>
            <div className="flex w-screen h-screen text-gray-700">

                 {/* Component Start  */}
                <div className="flex flex-col items-center w-60 pb-4 overflow-auto border-r border-gray-300">
                    <Link className="flex items-center justify-center flex-shrink-0 w-full h-16 bg-gray-300" to="#">
                        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        
                    </Link>
                    <Link className="flex items-center justify-center flex-shrink-0 w-full h-10 mt-4 rounded hover:bg-gray-300" to="/add-products">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span className=''>Home</span>
                    </Link>
                    <Link className="flex items-center justify-center flex-shrink-0 w-full space-x-6 h-10 mt-4 rounded hover:bg-gray-300" to="#">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>Add Product</span>
                    </Link>
                    <Link className="flex items-center justify-center flex-shrink-0 w-full h-10 mt-4 rounded hover:bg-gray-300" to="#">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                        </svg>
                        <span>home</span>
                    </Link>
                    <Link className="flex items-center justify-center flex-shrink-0 w-full h-10 mt-4 rounded hover:bg-gray-300" to="#">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>Home</span>
                    </Link>
                    <Link className="flex items-center justify-center flex-shrink-0 w-full h-10 mt-4 rounded hover:bg-gray-300" to="#">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                        <span>Home</span>
                    </Link>
                    <Link className="flex items-center justify-center flex-shrink-0 w-full h-10 mt-4  rounded hover:bg-gray-300" to="#">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Home</span>
                    </Link>
                </div>
                
                <div className="flex flex-col flex-grow">
                    <div className="flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-300">
                        <h1 className="text-lg font-medium">Page Title</h1>
                        <button className="flex items-center justify-center h-10 px-4 ml-auto text-sm font-medium rounded hover:bg-gray-300">
                            Action 1
                        </button>
                        <button className="flex items-center justify-center h-10 px-4 ml-2 text-sm font-medium bg-gray-200 rounded hover:bg-gray-300">
                            Action 2
                        </button>
                        <button className="relative ml-2 text-sm focus:outline-none group">
                            <div className="flex items-center justify-between w-10 h-10 rounded hover:bg-gray-300">
                                <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                </svg>
                            </div>
                            
                        </button>
                    </div>
                    <div className="flex-grow p-6 overflow-auto bg-gray-200">
                        <div className="grid grid-cols-3 gap-6">
                            <div className="h-24 col-span-1 bg-white border border-gray-300 justify-between text-center ">
                                <Link to='/add-products'>
                                    add Products
                                </Link>
                            </div>
                            <div className="h-24 col-span-1 bg-white border border-gray-300"></div>
                            <div className="h-24 col-span-1 bg-white border border-gray-300"></div>
                            <div className="h-24 col-span-2 bg-white border border-gray-300"></div>
                            <div className="h-24 col-span-1 bg-white border border-gray-300"></div>
                            <div className="h-24 col-span-1 bg-white border border-gray-300"></div>
                            <div className="h-24 col-span-2 bg-white border border-gray-300"></div>
                            <div className="h-24 col-span-3 bg-white border border-gray-300"></div>
                            <div className="h-24 col-span-1 bg-white border border-gray-300"></div>
                            <div className="h-24 col-span-1 bg-white border border-gray-300"></div>
                            <div className="h-24 col-span-1 bg-white border border-gray-300"></div>
                            <div className="h-24 col-span-2 bg-white border border-gray-300"></div>
                            <div className="h-24 col-span-1 bg-white border border-gray-300"></div>
                            <div className="h-24 col-span-1 bg-white border border-gray-300"></div>
                            <div className="h-24 col-span-2 bg-white border border-gray-300"></div>
                            <div className="h-24 col-span-3 bg-white border border-gray-300"></div>
                            <div className="h-24 col-span-1 bg-white border border-gray-300"></div>
                            <div className="h-24 col-span-1 bg-white border border-gray-300"></div>
                            <div className="h-24 col-span-1 bg-white border border-gray-300"></div>
                            <div className="h-24 col-span-2 bg-white border border-gray-300"></div>
                            <div className="h-24 col-span-1 bg-white border border-gray-300"></div>
                            <div className="h-24 col-span-1 bg-white border border-gray-300"></div>
                            <div className="h-24 col-span-2 bg-white border border-gray-300"></div>
                            <div className="h-24 col-span-3 bg-white border border-gray-300"></div>
                        </div>
                    </div>
                </div>
                 {/* Component End   */}

            </div>

            <Link className="fixed flex items-center justify-center h-8 pr-2 pl-1 bg-blue-600 rounded-full bottom-0 right-0 mr-4 mb-4 shadow-lg text-blue-100 hover:bg-blue-600" to="#" target="_top">
                <div className="flex items-center justify-center h-6 w-6 bg-blue-500 rounded-full">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" class="r-jwli3a r-4qtqp9 r-yyyyoo r-16y2uox r-1q142lx r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
                </div>
                <span className="text-sm ml-1 leading-none">@abdullah</span>
            </Link>
        </>
    )
}
export default Header;