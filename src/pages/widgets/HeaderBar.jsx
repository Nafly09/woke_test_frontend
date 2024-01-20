import { Dialog } from '@headlessui/react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { removeToken } from '../../hooks/storage';

const HeaderBar = ({ name, birthday, phone, email }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div>
            <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
                <button onClick={() => setIsDrawerOpen(true)}>
                    <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                <span className="text-xl">Woke Test</span>
            </div>
            <Dialog open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex justify-end min-h-screen">
                    <Dialog.Panel className="w-1/6 bg-white p-4">
                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                            Hello {name}
                        </Dialog.Title>
                        <div className="mt-2">
                            <p>Birthday: {birthday}</p>
                            <p>Phone: {phone}</p>
                            <p>Email: {email}</p>
                        </div>
                        <button
                            type="submit"
                            onClick={() => {navigate('/'); removeToken()}}
                            className="mt-4 inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200"
                        >
                            Logout
                        </button>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </div>
    );
};

HeaderBar.propTypes = {
    name: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
};

export default HeaderBar;
