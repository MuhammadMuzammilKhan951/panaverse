import React from 'react'

export default function dropdown() {
  return (
    <div className='mt-[-13px]  m:hidden l:hidden ll:hidden lll:hidden'>
      <div className="dropdown dropdown-end">
  <label tabIndex={0} className="btn m-1 bg-slate-900 rounded-full pr-2 pl-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" h-6 sw-6">
  <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
</svg>
</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 border border-black shadow rounded-box w-52 bg-slate-100">
     <li className=' border-b border-gray-400'><a href='#home' className=' p-3 font-bold hover:bg-slate-200'>Home</a></li>
     <li className=' border-b border-gray-400'><a href='#about' className=' p-3 font-bold hover:bg-slate-200'>About</a></li>
     <li className=' border-b border-gray-400'><a href='#academic' className=' p-3 font-bold hover:bg-slate-200'>Academic</a></li>
     <li className=' border-b border-gray-400'><a href='#contact' className=' p-3 font-bold hover:bg-slate-200'>Contact</a></li>
  </ul>
</div>
    </div>
  )
}
