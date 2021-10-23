import { FC } from 'react';
import Link from 'next/link';

const Header: FC = () => (
  <nav className="p-4 border-b border-gray-200 mx-2">
    <div>
      <Link href="/">
        <a className="hover:text-indigo-500 transition-colors ease-in">Store</a>
      </Link>
    </div>
  </nav>
);

export default Header;
