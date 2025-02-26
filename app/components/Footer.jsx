import { assets } from '@/assets/assets';

const Footer = () => {
  return (
    <div className="mt-20">
      {/* <div className="text-center">
        <Image src={assets.logo} alt="" className="w-36 mx-auto mb-2" />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="" className="w-6" />
          <a
            href="mailto:wadudshuvro199@gmail.com"
            className="text-blue-500 underline"
          >
            wadudshuvro@gmail.com
          </a>
        </div>
      </div> */}
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>Email: saurabhk.sharma1410@gmail.com</p>
        
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
          <a href="mailto:saurabhk.sharma1410@gmail.com">Email</a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/saurabhk1410"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/saurabhkumar-sharma797/"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://leetcode.com/u/saurabhk1410/"
              rel="noreferrer"
            >
              leetcode
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
