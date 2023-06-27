import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const FooterNote = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className=" flex min-w-full grow flex-row items-center gap-5 rounded-md bg-[#020c14] p-5 text-white md:flex-col "
    >
      <div className="flex min-w-full flex-col items-center gap-4 p-4">
        <div>
          <text className="text-center text-2xl">Contact</text>
        </div>
        <ul className="flex min-w-full flex-col items-stretch gap-4 text-center text-lg md:flex-row">
          <li className="basis-1/3">
            <ul>
              Email
              <li className="p-3">
                <Link
                  href="mailto:c.m.cedricm17@gmail.com"
                  className="hover:text-orange-400"
                >
                  c.m.cedricm17@gmail.com
                </Link>
              </li>
            </ul>
          </li>
          <li className="basis-1/3">
            <ul>
              Github
              <li className="p-3">
                <Link
                  href="https://github.com/CMCedricM"
                  className="hover:text-orange-400"
                >
                  @CMCedricM
                </Link>
              </li>
            </ul>
          </li>

          <li className="basis-1/3">
            <ul>
              Instagram
              <li className="p-3">
                <Link
                  href="https://www.instagram.com/cm015/"
                  className="hover:text-orange-400"
                >
                  @CM015
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default FooterNote;
