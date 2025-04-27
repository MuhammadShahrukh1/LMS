import { NavLink, Link  } from 'react-router-dom';
import { Home, FileText, PlusCircle, User, LogOut } from 'lucide-react';
import { faHamburger } from '@fortawesome/free-solid-svg-icons/faHamburger';
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';

const Sidebar = (props) => {
  // console.log(props.isActive)
  // const linkClass = ({ isActive }) =>
  //   `flex items-center gap-2 p-2 rounded hover:bg-blue-100 ${
  //     isActive ? "text-blue-600 font-semibold" : "text-gray-700"
  //   }`;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      <div className="hidden md:block w-64 min-h-screen bg-white border-r border-white rounded-r-md px-4 py-6 fixed shadow shadow-emerald-900">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 ml-4">Customer Portal</h2>
        <nav className="flex flex-col gap-2 text-gray-700 bg-white">
          <Link to='/dashboard' className='flex items-center gap-3 p-[0.6rem] no-underline rounded-r-md hover:text-gray-100 hover:bg-blue-500 hover:font-bold hover:border-l-8 hover:border-solid hover:border-blue-300 cursor-pointer' ><Home size={18} /> Dashboard</Link>
          <Link to='/my-request' className='flex items-center gap-3 p-[0.6rem] no-underline rounded-r-md hover:text-gray-100 hover:bg-blue-500 hover:font-bold hover:border-l-8 hover:border-solid hover:border-blue-300 cursor-pointer'><FileText size={18} /> My Loan Requests</Link>
          <Link to='/loan-request' className='flex items-center gap-3 p-[0.6rem] no-underline rounded-r-md hover:text-gray-100 hover:bg-blue-500 hover:font-bold hover:border-l-8 hover:border-solid hover:border-blue-300 cursor-pointer'><PlusCircle size={18} /> New Loan</Link>
          <a className='flex items-center gap-3 p-[0.6rem] no-underline rounded-r-md hover:text-gray-100 hover:bg-blue-500 hover:font-bold hover:border-l-8 hover:border-solid hover:border-blue-300 cursor-pointer'><User size={18} /> Profile</a>
          <a className='flex flex-end items-center gap-3 p-[0.6rem] no-underline roundec-r-md hover:text-gray-100 hover:bg-blue-500 hover:font-bold hover:border-l-8 hover:border-solid hover:border-blue-300 cursor-pointer'><LogOut size={18} />Sign Out</a>
        </nav>
      </div>



      <div className="md:hidden h-16 w-full fixed z-51 flex justify-between items-center bg-white px-4 py-6 shadow-lg">
        <h2 className="text-2xl font-bold text-blue-600 ml-6">Customer Portal</h2>
        <div className="flex items-center mr-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
      </div>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="absolute inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-64 overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end">
            {/* <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a> */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a className='flex items-center gap-3 p-[0.6rem] no- rounded-r-md hover:text-gray-100 hover:bg-blue-500 hover:font-bold hover:border-l-8 hover:border-solid hover:border-blue-300' ><Home size={18} /> Dashboard</a>
                <a className='flex items-center gap-3 p-[0.6rem] no- rounded-r-md hover:text-gray-100 hover:bg-blue-500 hover:font-bold hover:border-l-8 hover:border-solid hover:border-blue-300'><FileText size={18} /> My Loan Requests</a>
                <a className='flex items-center gap-3 p-[0.6rem] no- rounded-r-md hover:text-gray-100 hover:bg-blue-500 hover:font-bold hover:border-l-8 hover:border-solid hover:border-blue-300'><PlusCircle size={18} /> New Loan</a>
                <a className='flex items-center gap-3 p-[0.6rem] no- rounded-r-md hover:text-gray-100 hover:bg-blue-500 hover:font-bold hover:border-l-8 hover:border-solid hover:border-blue-300'><User size={18} /> Profile</a>
             

              <a
                href="#"
                className="flex items-center gap-3 p-[0.6rem] no- rounded-r-md hover:text-gray-100 hover:bg-blue-500 hover:font-bold hover:border-l-8 hover:border-solid hover:border-blue-300"
              ><LogOut size={18} />
                Sign Out
              </a>
              </div>

            </div>
          </div>
        </DialogPanel>
      </Dialog>

    </>
  );
};

export default Sidebar;