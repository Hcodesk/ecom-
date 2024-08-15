import React from 'react'
import Link from 'next/link'
import { House } from 'lucide-react';
import { Archive } from 'lucide-react';
import { Logs } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import { Users } from 'lucide-react';
import { Settings } from 'lucide-react';
import { LogOut } from 'lucide-react';
import Av from '@/components/icons/avatar';
import { ReactNode } from 'react';

interface AdminLayoutProps {
    children: ReactNode
}

const AdminLayout : React.FC<AdminLayoutProps> = ({ children }) => {
    return (
      <div>
        <header className='border-2  border-slate-500 text-black bg-stone-400 flex mx-24 items-center justify-between '>
        <div className='flex '>
            <div className='mx-10 flex '>
            <House />
            <p className='ml-[8px]'>Dashboard</p>
             </div>
        
            <div className='mx-10 flex'>
            <Archive />
            <p className='ml-[8px] '>Products</p>
            </div>
        
             <div className='mx-10 flex'>
            <ShoppingBag />
            <p className='ml-[8px] '>Orders</p>
            </div>
        
            <div className='mx-10 flex'>
             <Users />
            <p className='ml-[8px] '>Admins</p>
        </div>
        
        <div className='mx-10 flex'>
            <Settings />
            <p className='ml-[8px] '>Settings</p>
        </div>

        <div className='mx-10 flex'>
            <LogOut />
            <p className='ml-[8px] '>Logout</p>
        </div>
        </div>   
        <div className='mx-10 flex'>
            <Av/>
        </div>  
      </header>

      <main> {children} </main>
      </div>
     
    )
}

export default AdminLayout;