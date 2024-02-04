import React from 'react'

function Footer() {
  return (
    <div className="flex flex-col mt-10">
      <main className="flex-grow">
        {/* Your main content goes here */}
      </main>
      <footer className="bg-orange-500 text-white p-4">
        <div className="container mx-auto">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer;