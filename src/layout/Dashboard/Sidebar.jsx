import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        // <>
        //     {/* <Link to="/dashboard/demo">
        //     One
        //     </Link>
        //     <Link to="/dashboard/demo2">
        //     One2
        //     </Link> */}

        //     <div className="flex absolute inset-y-0 left-0 w-23">
        //         <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
        //             <div className="space-y-3">
        //                 <div className="flex items-center">
        //                     <h2 className="text-xl font-bold">Dashboard</h2>
        //                 </div>
        //                 <div className="flex-1">
        //                     <ul className="pt-2 pb-4 space-y-1 text-sm">
        //                         <li className="rounded-sm">
        //                             <Link
        //                                 to="/dashboard/home"
        //                                 className="flex items-center p-2 space-x-3 rounded-md"
        //                             >
        //                                 <svg
        //                                     xmlns="http://www.w3.org/2000/svg"
        //                                     className="w-6 h-6"
        //                                     fill="none"
        //                                     viewBox="0 0 24 24"
        //                                     stroke="currentColor"
        //                                     strokeWidth={2}
        //                                 >
        //                                     <path
        //                                         strokeLinecap="round"
        //                                         strokeLinejoin="round"
        //                                         d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        //                                     />
        //                                 </svg>
        //                                 <span>Home</span>
        //                             </Link>
        //                         </li>
        //                         <li className="rounded-sm">
        //                             <Link
        //                                 to="/dashboard/add-products"
        //                                 className="flex items-center p-2 space-x-3 rounded-md"
        //                             >
        //                                 <svg
        //                                     xmlns="http://www.w3.org/2000/svg"
        //                                     className="w-6 h-6"
        //                                     fill="none"
        //                                     viewBox="0 0 24 24"
        //                                     stroke="currentColor"
        //                                     strokeWidth={2}
        //                                 >
        //                                     <path
        //                                         strokeLinecap="round"
        //                                         strokeLinejoin="round"
        //                                         d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
        //                                     />
        //                                 </svg>
        //                                 <span>Add Products</span>
        //                             </Link>
        //                         </li>
        //                         <li className="rounded-sm">
        //                             <Link
        //                                 to="/dashboard/orders"
        //                                 className="flex items-center p-2 space-x-3 rounded-md"
        //                             >
        //                                 <svg
        //                                     xmlns="http://www.w3.org/2000/svg"
        //                                     className="w-6 h-6"
        //                                     fill="none"
        //                                     viewBox="0 0 24 24"
        //                                     stroke="currentColor"
        //                                     strokeWidth={2}
        //                                 >
        //                                     <path
        //                                         strokeLinecap="round"
        //                                         strokeLinejoin="round"
        //                                         d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        //                                     />
        //                                 </svg>
        //                                 <span>Orders</span>
        //                             </Link>
        //                         </li>
        //                         <li className="rounded-sm">
        //                             <Link
        //                                 to="/dashboard/settings"
        //                                 className="flex items-center p-2 space-x-3 rounded-md"
        //                             >
        //                                 <svg
        //                                     xmlns="http://www.w3.org/2000/svg"
        //                                     className="w-6 h-6"
        //                                     fill="none"
        //                                     viewBox="0 0 24 24"
        //                                     stroke="currentColor"
        //                                     strokeWidth={2}
        //                                 >
        //                                     <path
        //                                         strokeLinecap="round"
        //                                         strokeLinejoin="round"
        //                                         d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        //                                     />
        //                                     <path
        //                                         strokeLinecap="round"
        //                                         strokeLinejoin="round"
        //                                         d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        //                                     />
        //                                 </svg>
        //                                 <span>Settings</span>
        //                             </Link>
        //                         </li>
        //                         <li className="rounded-sm">
        //                             <Link
        //                                 to="/dashboard/login"
        //                                 className="flex items-center p-2 space-x-3 rounded-md"
        //                             >
        //                                 {/* <svg
        //                                     xmlns="http://www.w3.org/2000/svg"
        //                                     className="w-6 h-6"
        //                                     fill="none"
        //                                     viewBox="0 0 24 24"
        //                                     stroke="currentColor"
        //                                     strokeWidth={2}
        //                                 >
        //                                     <path
        //                                         strokeLinecap="round"
        //                                         strokeLinejoin="round"
        //                                         d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
        //                                     />
        //                                 </svg> */}
        //                                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
        //                                 <span>Login</span>
        //                             </Link>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </div>

        //     </div>
        // </>
        // <>
        //     <div x-cloak className="fixed inset-y-0 left-0 z-30 h-screen w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0">
        //         <div className="flex items-center justify-center mt-8">
        //             <div className="flex items-center">                    
        //                 <span className="mx-2 text-2xl font-semibold text-white">Dashboard</span>
        //             </div>
        //         </div>

        //         <nav className="mt-10">
        //             <Link className="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100" to="/home">
        //                 <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        //                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        //                 </svg>

        //                 <span className="mx-3">Dashboard</span>
        //             </Link>

        //             <Link className="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100" to="/add-products">
        //                 <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
        //                 </svg>

        //                 <span className="mx-3">Add Product</span>
        //             </Link>

        //             <Link className="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100" to="/tables">
        //                 <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        //                 </svg>

        //                 <span className="mx-3">Orders</span>
        //             </Link>

        //             <Link className="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100" to="/forms">
        //                 <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        //                 </svg>

        //                 <span className="mx-3">Forms</span>
        //             </Link>
        //         </nav>
        //     </div>
        // </>
        <></>
    )
}
export default Sidebar;