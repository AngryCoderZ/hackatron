import React,{FC} from 'react'
import Navbar1 from '@/components/navbar1/Navbar1'

interface props{
    children:React.ReactNode;
}
const Layout:FC<props> = ({children}) => {
  return (
    <div className='w-[85%] mx-auto p-3 space-y-20'>
        <Navbar1/>
        {children}
    </div>
  )
}

export default Layout