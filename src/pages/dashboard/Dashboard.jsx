import React, {useLayoutEffect} from 'react'

import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    PieChartOutlined,
  } from '@ant-design/icons';
  import { Button, Menu } from 'antd';
import { useProfileQuery } from '@/redux/api/Auth.api';
import { useDispatch } from 'react-redux';
import { logout } from '@/redux/features/Auth.slice';
import { data, Navigate } from 'react-router-dom';
  const items = [
    {
      key: '1',
      icon: <PieChartOutlined />,
      label: 'Option 1',
    },
    {
      key: '2',
      icon: <DesktopOutlined />,
      label: 'Option 2',
    },
    {
      key: '3',
      icon: <ContainerOutlined />,
      label: 'Option 3',
    },
    {
      key: 'sub1',
      label: 'Navigation One',
      icon: <MailOutlined />,
      children: [
        {
          key: '5',
          label: 'Option 5',
        },
        {
          key: '6',
          label: 'Option 6',
        },
        {
          key: '7',
          label: 'Option 7',
        },
        {
          key: '8',
          label: 'Option 8',
        },
      ],
    },
    {
      key: 'sub2',
      label: 'Navigation Two',
      icon: <AppstoreOutlined />,
      children: [
        {
          key: '9',
          label: 'Option 9',
        },
        {
          key: '10',
          label: 'Option 10',
        },
        {
          key: 'sub3',
          label: 'Submenu',
          children: [
            {
              key: '11',
              label: 'Option 11',
            },
            {
              key: '12',
              label: 'Option 12',
            },
          ],
        },
      ],
    },
  ];

const Dashboard = () => {

    const {isError} = useProfileQuery({})
    const dispatch = useDispatch()
    useLayoutEffect(()=> {
        if(isError){
            dispatch(logout())
        }
    }, [isError])

  return (
    <section className='flex font-Poppins text-white '>
        <div className='w-[20%] sticky top-0 left-0 overflow-y-auto h-screen bg-[#001529] flex flex-col  '>
            <div className='h-24 flex items-center justify-center border-b border-white/10 '>
                <h2 className='uppercase text-[26px] font-bold '>Horizon <span className='font-normal'>free</span></h2>
            </div>
            <div className='flex-1 py-6 flex flex-col gap-8'
      style={{
        width: '100%',
      }}
    >
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        items={items}
        className='flex-1'
      />
      <div className='px-1 '>
        <button onClick={() => dispatch(logout())} className='w-full cursor-pointer py-2 text-white bg-blue-600 rounded-lg text-sm '>Log Out</button>
      </div>
    </div>
        </div>
        <div className='flex-1 min-h-screen bg-primary-purple'>

        </div>
    </section>
  )
}

export default Dashboard