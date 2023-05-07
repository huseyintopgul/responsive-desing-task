import React from 'react'
import { SearchOutlined, HomeOutlined, ShoppingCartOutlined, CopyOutlined, BarChartOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { Badge, Input } from 'antd'



const Header = () => {
    return (
        <div className="border-b mb-6">
            <header className="py-4 px-6 flex justify-between items-center gap-10">
                <div className="logo">
                    <a href="/">
                        <h2 className="text-2xl font-bold md:text-4xl">LOGO</h2>
                    </a>
                </div>
                <div className="header-search flex-1 flex justify-center">
                    <Input size="large"
                        placeholder="Search..."
                        prefix={<SearchOutlined />}
                        className="rounded-full"
                    />
                </div>
                {/* responsive menu-links alanı
                     - md ortaç ekran değeri olarak kullanılmdı.
                     - md : static ve width auto. 
                     - md> : bottom:0 w:100%
                */}
                <div className="menu-links flex justify-between items-center gap-7
                                md:static fixed z-50 bg-white md:bg-transparent bottom-0 md:w-auto w-full left-0 md:border-t-0 border-t md:px-0 px-5 py-1">
                    <a href="/" className='menu-link flex flex-col'>
                        <HomeOutlined className='md:text-2xl text-xl' />
                        <span className='text-[10px] md:text-md'>Ana Sayfa</span>
                    </a>
                    <Badge count={5} offset={[0, 5]} className='md:flex hidden '>
                        <a href="/" className='menu-link flex flex-col'>
                            <ShoppingCartOutlined className='md:text-2xl text-xl' />
                            <span className='text-[10px] md:text-md'>Sepet</span>
                        </a>
                    </Badge>
                    <a href="/" className='menu-link flex flex-col'>
                        <CopyOutlined className='md:text-2xl text-xl' />
                        <span className='text-[10px] md:text-md'>Faturalar</span>
                    </a>
                    <a href="/" className='menu-link flex flex-col'>
                        <UserOutlined className='md:text-2xl text-xl' />
                        <span className='text-[10px] md:text-md'>Müşteriler</span>
                    </a>
                    <a href="/" className='menu-link flex flex-col'>
                        <BarChartOutlined className='md:text-2xl text-xl' />
                        <span className='text-[10px] md:text-md'>İstatistik</span>
                    </a>
                    <a href="/" className='menu-link flex flex-col'>
                        <LogoutOutlined className='md:text-2xl text-xl' />
                        <span className='text-[10px] md:text-md'>Çıkış</span>
                    </a>
                </div>

                {/* md ekran altında responsive tasarım olarak görünecek */}
                <Badge count={5} offset={[0, 5]} className='flex md:hidden'>
                    <a href="/" className='resp-menu-link flex flex-col '>
                        <ShoppingCartOutlined className='text-2xl' />
                        <span className='text-[10px]'>Sepet</span>
                    </a>
                </Badge>
            </header>
        </div>
    )
};

export default Header;