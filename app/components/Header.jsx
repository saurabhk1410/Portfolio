import { assets } from '@/assets/assets';
import Image from 'next/image';

const Header = () => {
  return (
    <div
      className="w-11/12 max-w-3x1 text-center mx-auto h-screen flex flex-col
    items-center justify-center gap-4"
    >
      <div>
        {/* <Image src={assets.profile_img} alt="" className="rounded-full w-32" /> */}
        <img src="https://avatars.githubusercontent.com/u/160416508?v=4&size=64" className='rounded-full w-32'/>
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2x1 mb-3 font-Ovo">
        Hi! I'm Saurabhkumar Sharma
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <h1 className="text-3x1 sm:text-6xl lg:text-[66px] font-Ovo">
        Full Stack Web Developer <br />
        based in Mumbai.
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
      I am currently in my third year, pursuing a B.Tech in Information Technology at Dwarkadas J. Sanghvi College of Engineering.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black
       text-white flex items-center gap-2"
        >
          contact me{' '}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>
        <a
          href="https://drive.google.com/file/d/1ofIqIeVOwH4D299iFERwP8_GnKtKg9uf/view?usp=sharing"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex
               items-center gap-2"
          target='blank'
        >
          my resume <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
