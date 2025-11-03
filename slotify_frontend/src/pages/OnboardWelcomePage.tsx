import Navbar from '../components/Navbar';
import OnboardingImage from '../assets/onboarding.png';
import { Link } from 'react-router-dom';
import GraphImage from '../assets/sales_graph.png';
import OnlineBooking from '../assets/online_booking.png';
import BuildCredibility from '../assets/build_credibility.png';
import Registration from '../assets/registration.png';

const OnboardWelcomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="grid">
        <div
          style={{ backgroundImage: `url(${OnboardingImage})` }}
          className="h-[790px] w-full bg-cover bg-center mt-5"
        >
          {/* APPLY FLEXBOX CLASSES HERE */}
          <div className="flex flex-col justify-center items-start h-full  p-4">
            <div className="text-5xl font-bold text-amber-100 mb-4">List Your Business</div>
            <div className="text-2xl text-amber-100">
              <p>
                Looking to target sports and fitness enthusiasts to increase your outreach and
                sales?
              </p>
              <p>Get that and much more just by listing your business on Slotify</p>
              <Link to="/onboard">
                <button className="mt-9  text-black dark:text-amber-50 border-2 border-light-ui bg-light-ui focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:border-2 dark:border-dark-ui dark:bg-dark-ui focus:outline-none dark:focus:ring-blue-800 hover:cursor-pointer">
                  I AM INTERESTED
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* I added border and text to make the div visible */}
            <div className="shadow-amber-100 h-96 p-2 text-xs">
              <div className="flex flex-col justify-center items-start h-full pl-9">
                <img src={GraphImage} className="h-20" />
                <div className="pt-6 dark:text-amber-100 font-sans font-bold text-2xl">
                  Increase sales & outreach
                </div>
                <div className="pt-6 dark:text-amber-100 font-sans text-xl">
                  Get access to the largest active sports community to boost your sales and increase
                  outreach
                </div>
              </div>
            </div>
            <div className="shadow-amber-100 h-96 p-2 text-xs">
              <div className="flex flex-col justify-center items-start h-full pl-9">
                <img src={OnlineBooking} className="h-20" />
                <div className="pt-6 dark:text-amber-100 font-sans text-2xl font-bold">
                  Enable advance reservations & online bookings
                </div>
                <div className="pt-6 dark:text-amber-100 font-sans text-xl">
                  Empower your users and members to reserve in advance or pay online to increase
                  court utilization and reduce no-shows
                </div>
              </div>
            </div>
            <div className="shadow-amber-100 h-96 p-2 text-xs">
              <div className="flex flex-col justify-center items-start h-full pl-9">
                <img src={BuildCredibility} className="h-20" />
                <div className="pt-6 dark:text-amber-100 font-sans text-2xl font-bold">
                  Build credibility
                </div>
                <div className="pt-6 dark:text-amber-100 font-sans text-xl">
                  Get reviews and ratings and build followership to get relevant feedback and build
                  visibility amongst prospective customers
                </div>
              </div>
            </div>
            <div className="shadow-amber-100 h-96 p-2 text-xs">
              <div className="flex flex-col justify-center items-start h-full pl-9">
                <img src={Registration} className="h-20" />
                <div className="pt-6 dark:text-amber-100 font-sans text-2xl font-bold">
                  Seamless registration management
                </div>
                <div className="pt-6 dark:text-amber-100 font-sans text-xl">
                  Seamlessly manage online and offline registrations and view payment status by
                  participant
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OnboardWelcomePage;
