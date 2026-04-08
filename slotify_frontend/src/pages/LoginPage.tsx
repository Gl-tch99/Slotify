import Navbar from '../components/Navbar';
import LoginImage from '../assets/login_image.jpg';
import DarkLoginImage from '../assets/dark_login_image.png';
import { useState } from 'react';
import { apiRequest, API_ENDPOINTS } from '../util/api';
import { useNavigate } from 'react-router-dom';
import { useSetAtom } from 'jotai';
import { isLoggedInAtom } from '../atoms/isLoggedIn';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const setIsLoggedIn = useSetAtom(isLoggedInAtom)



  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent form submission
    setError("");
    handleLogin(); // Call your login logic
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await apiRequest(API_ENDPOINTS.login, 'post', formData);
      setSuccess(true);
      setIsLoggedIn(true);

      // Store token if returned
      if (response.token) {
        localStorage.setItem('authToken', response.token);
      }
      
      setTimeout(() => {
        navigate('/');
      }, 1500);

     
    } catch (err) {
      setError("Failed to Login. Please check your  credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <div className="flex flex-col md:flex-row items-center justify-center grow px-6 py-10">
        <div className="w-full md:w-3/5 flex justify-center mt-10 md:mt-0">
          <img
            src={LoginImage}
            alt="Login visual"
            className="block dark:hidden w-full max-w-2xl rounded-2xl shadow-2xl object-cover"
          />
          <img
            src={DarkLoginImage}
            alt="Login visual dark mode"
            className="hidden dark:block w-full max-w-2xl rounded-2xl shadow-2xl object-cover"
          />
        </div>
        <div className="w-full md:w-2/5 flex justify-center sm:mt-10 ">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 md:p-10 w-full max-w-md">
            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 flex items-start gap-3 animate-fade-in">
                <svg
                  className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="flex-1">
                  <p className="text-sm font-medium text-red-800 dark:text-red-200">
                    {error}
                  </p>
                </div>
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="mb-6 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 flex items-start gap-3 animate-fade-in">
                <svg
                  className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="flex-1">
                  <p className="text-sm font-medium text-green-800 dark:text-green-200">
                    Login Successful! Redirecting...
                  </p>
                </div>
              </div>
            )}

            {/* Loading Indicator */}
            {loading && (
              <div className="mb-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 flex items-center gap-3">
                <svg
                  className="animate-spin h-5 w-5 text-blue-600 dark:text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                  Logging in...
                </p>
              </div>
            )}
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  id="email"
                  className="placeholder:text-gray-500 w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder="email"
                  value={formData.email}
                  onChange={(e) => {
                    handleInputChange('email', e.target.value);
                  }}
                  required
                />
              </div>

              <div>
                <input
                  type="password"
                  id="password"
                  className="placeholder:text-gray-500 w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => {
                    handleInputChange('password', e.target.value);
                  }}
                  required
                />
              </div>

              <div className="text-center">
                <button type="submit" className="form-button">
                  Login
                </button>
              </div>

              <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-4">
                Don't have an account?{' '}
                <a href="/signup" className="text-blue-500 hover:underline">
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
