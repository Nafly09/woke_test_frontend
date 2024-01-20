import { useLayoutEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getAvailableCompanies, getUserData, signCompanies } from '../services/DataServices';
import HeaderBar from './widgets/HeaderBar';
import Spinner from './widgets/LoadingSpinner';

const MainPage = () => {
    const [selectedCompanies, setSelectedCompanies] = useState(new Set());
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [signedCompanies, setSignedCompanies] = useState([]);
    const [availableCompanies, setAvailableCompanies] = useState([]);

    useLayoutEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const userData = await getUserData()
                const availableCompanies = await getAvailableCompanies()
                setUser(userData)
                setSignedCompanies(userData.companies)
                setAvailableCompanies(availableCompanies)
                setIsLoading(false)
            } catch (error) {
                toast.error('Error fetching data. Please refresh the page.');
                setIsLoading(false)
            }
        };
        fetchData();
    }, []);

    const toggleCompanySelection = (companyId) => {
        setSelectedCompanies((prevSelectedCompanies) => {
            const newSelection = new Set(prevSelectedCompanies);
            if (newSelection.has(companyId)) {
                newSelection.delete(companyId);
            } else {
                newSelection.add(companyId);
            }
            return newSelection;
        });
    };

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
        <HeaderBar name={user.name} birthday={user.birthday} email={user.email} phone={user.phone}/>
            <div className="flex-1 p-8">
                <h2 className="mb-4 text-xl font-bold">Signed Companies</h2>
                <div className="mb-8">
                    {signedCompanies.map((company) => (
                        <div key={company.name} className="flex items-center justify-between p-4 bg-white shadow mb-2">
                            <span>{company.name}</span>
                            <span>{company.companyEmail}</span>
                        </div>
                    ))}
                </div>

                <h2 className="mb-4 text-xl font-bold">Available Companies</h2>
                <div>
                    {availableCompanies.map((company) => (
                        <div key={company.name} className="flex items-center justify-between p-4 bg-white shadow mb-2">
                            <span>{company.name}</span>
                            <span>{company.companyEmail}</span>
                            <input
                                type="checkbox"
                                className="form-checkbox h-6 w-6 text-blue-600"
                                checked={selectedCompanies.has(company.id)}
                                onChange={() => toggleCompanySelection(company.id)}
                            />
                        </div>
                    ))}
                </div>
                <button
                    className={`mt-4 px-4 py-2 text-white font-bold ${selectedCompanies.size > 0 ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
                        }`}
                    disabled={selectedCompanies.size === 0}
                    onClick={() => {signCompanies(selectedCompanies); window.location.reload()}}
                >
                    Confirm
                </button>
            </div>
            </>
    );
};

export default MainPage;
