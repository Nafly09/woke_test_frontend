import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { signUp } from '../services/AuthServices';

const SignUpPage = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await signUp({name: name, email: email, birthday: birthday, password: password, phone: phone});
            navigate('/')
            toast.success('Sign up successful! Please log in.');
        } catch (error) {
            toast.error('Sign up failed. Please try again.');
            setErrorMessage(error.message || 'Sign up failed. Please try again.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
                <h3 className="text-2xl font-bold text-center">Sign Up</h3>
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                <form onSubmit={handleSignUp}>
                    <div>
                        <label className="block" htmlFor="name">Name</label>
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block">Birthday</label>
                        <input
                            type="date"
                            placeholder="Birthday"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            value={birthday}
                            onChange={(e) => setBirthday(e.target.value)}
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block">Phone Number</label>
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="flex items-baseline justify-between">
                        <button type="submit" className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;
