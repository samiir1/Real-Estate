import {FaSearch} from 'react-icons/fa'
function Header() {
  return (
    <header className='bg-slate-200 shadow-sm'>
     <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap cursor-pointer'>
        <span className='text-red-500'>Farhan</span>
        <span className='text-blue-600'>Libaxa</span>
    </h1>
    <form className='bg-slate-100 p-2 rounded-lg flex items-center'>
        <input type="text" placeholder='Search....' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
        <FaSearch className='text-slate-300 cursor-pointer'/>
    </form>
    <ul className='flex gap-4 items-center cursor-pointer'>
        <li className='hidden sm:inline text-slate-600 hover:underline'>Home</li>
        <li className='hidden sm:inline text-slate-600 hover:underline'>About</li>
        <li className='hidden sm:inline text-slate-600 hover:underline'>Sign in</li>
    </ul>
    </div>
    </header>
  )
}

export default Header