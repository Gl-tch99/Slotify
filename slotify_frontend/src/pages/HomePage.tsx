import Navbar from '../components/Navbar';
import HomepageImage from '../assets/homepage_image.png';
import { TypeAnimation } from 'react-type-animation';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Navbar />
      <div className="text-2xl w-11/12 flex flex-col gap-5 text-black dark:text-amber-50 ">
        <div className="flex flex-1 flex-col md:flex-row h-1/3 gap-5">
          <div className="flex-1/2 justify-center items-center flex p-5">
            <div className="text-7xl text-left hover:underline hover:decoration-4">
              Game On,
              <br />{' '}
              <TypeAnimation
                sequence={['Anytime.', 1000, 'Anywhere.', 1000, 'with Anyone.', 1000]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </div>
          </div>
          <div className="flex-1/2">
            <img className="rounded-2xl" src={HomepageImage} alt="" />
          </div>
        </div>
        <div className="h-1/3 max-h-1/3 flex-2 border-2 rounded-3xl flex flex-col overflow-y-scroll scrollbar-hide md:justify-evenly md:items-center gap-5 p-5">
          <div className="flex flex-row w-full place-content-between p-2">
            <div className="text-3xl">Book Venues</div>
            <div className="text-xl">See More...</div>
            {/* #Linked to Venues page. */}
          </div>
          <div className="h-1/3 max-h-1/3 flex-2 flex flex-col overflow-y-scroll md:overflow-x-scroll scrollbar-hide md:flex-row md:justify-evenly md:items-center gap-5">
            <div className=" border-2 rounded-xl min-w-1/5 dark:bg-dark-accent bg-light-accent">
              <img className="rounded-4xl w-100 h-60 p-5" src={HomepageImage} alt="" />
              <div className="p-5">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien
                vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
                Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec
                metus bibendum egestas.
              </div>
            </div>
            <div className=" border-2 rounded-xl min-w-1/5 dark:bg-dark-accent bg-light-accent">
              <img className="rounded-4xl w-100 h-60 p-5" src={HomepageImage} alt="" />
              <div className="p-5">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien
                vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
                Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec
                metus bibendum egestas.
              </div>
            </div>
            <div className=" border-2 rounded-xl min-w-1/5 dark:bg-dark-accent bg-light-accent">
              <img className="rounded-4xl w-100 h-60 p-5" src={HomepageImage} alt="" />
              <div className="p-5">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien
                vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
                Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec
                metus bibendum egestas.
              </div>
            </div>
            <div className=" border-2 rounded-xl min-w-1/5 dark:bg-dark-accent bg-light-accent">
              <img className="rounded-4xl w-100 h-60 p-5" src={HomepageImage} alt="" />
              <div className="p-5">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien
                vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
                Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec
                metus bibendum egestas.
              </div>
            </div>
            <div className=" border-2 rounded-xl min-w-1/5 dark:bg-dark-accent bg-light-accent">
              <img className="rounded-4xl w-100 h-60 p-5" src={HomepageImage} alt="" />
              <div className="p-5">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien
                vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
                Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec
                metus bibendum egestas.
              </div>
            </div>
            <div className=" border-2 rounded-xl min-w-1/5 dark:bg-dark-accent bg-light-accent">
              <img className="rounded-4xl w-100 h-60 p-5" src={HomepageImage} alt="" />
              <div className="p-5">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien
                vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
                Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec
                metus bibendum egestas.
              </div>
            </div>
            <div className=" border-2 rounded-xl min-w-1/5 dark:bg-dark-accent bg-light-accent">
              <img className="rounded-4xl w-100 h-60 p-5" src={HomepageImage} alt="" />
              <div className="p-5">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien
                vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
                Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec
                metus bibendum egestas.
              </div>
            </div>
          </div>
        </div>
        <div className="h-1/3">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
          pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
          aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
          aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem
          ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
          pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
          aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
          aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem
          ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
          pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
          aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
          aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem
          ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
          pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
          aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
          aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem
          ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
          pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
          aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
          aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
        </div>
      </div>
    </div>
  );
};

export default HomePage;
