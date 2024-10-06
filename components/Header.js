import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Image
              src="/images/logo-placeholder.svg"
              alt="Logo"
              width={40}
              height={40}
            />
            <nav className="ml-10 space-x-4">
              <Link href="/" className="text-gray-500 hover:text-gray-900">
                Home
              </Link>
              <Link
                href="/features"
                className="text-gray-500 hover:text-gray-900"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-gray-500 hover:text-gray-900"
              >
                Pricing
              </Link>
              <Link href="/login" className="text-gray-500 hover:text-gray-900">
                Login
              </Link>
            </nav>
          </div>
          <div>
            <Link
              href="/signup"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
