// pages/404.jsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-4">Oops! Page not found.</p>
        <p className="text-md mb-8">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/">
          <button className="inline-block px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 focus:outline-none">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
