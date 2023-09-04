import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })

// Insert api here


export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Google Analytics Demo</title>
        <meta name="description" content="Learning Google Analytics with Next.js and Tailwind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-semibold">Google Analytics Demo</h1>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto p-4 text-center">
        <h2 className="text-4xl font-semibold mb-4 text-gray-800">Welcome to the Demo</h2>
        <p className="text-lg mb-4">This is a demo to understand Google Analytics.</p>
        <button className="bg-blue-600 px-4 py-2 rounded">Get Started</button>
      </section>

      {/* Features Section */}
      <section className="bg-white p-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-100 rounded">
              <h4 className="text-xl font-semibold mb-2 text-gray-800">Feature 1</h4>
              <p>Description of feature 1.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded">
              <h4 className="text-xl font-semibold mb-2 text-gray-800" >Feature 2</h4>
              <p>Description of feature 2.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded">
              <h4 className="text-xl font-semibold mb-2 text-gray-800">Feature 3</h4>
              <p>Description of feature 3.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4">
        <div className="container mx-auto text-center">
          <p>Google Analytics Demo &copy; 2023</p>
        </div>
      </footer>
    </div>
  )
}
