



export const Footer = () => {
  return (
         <footer className="py-8 bg-[#1a1814] text-[#8a8578]">
             <div className="max-w-7xl mx-auto px-4 text-center">
             <p className="text-sm">
      © {new Date().getFullYear()} Bookend & Hookbrass. All rights reserved.
    </p>
    <p className="text-xs mt-2 flex items-center justify-center gap-1">
      Created with AI assistance by  
      <a href="https://github.com/OxY623" target="_blank" rel="noopener noreferrer" className=" hover:underline underline-offset-4 focus:outline-none focus:ring focus:ring-violet-300"> OxY623</a>.
    </p>
  </div>
</footer>
  )
}