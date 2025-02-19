import React from 'react'
import { Form, Button, Input } from 'antd'
import { useLoginMutation } from '@/redux/api/Auth.api'
import { useDispatch } from 'react-redux'
import { logIn } from '@/redux/features/Auth.slice'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const dispatch = useDispatch()
    const [login, {}] = useLoginMutation()
    const navigate = useNavigate()
    const onFinish = (values) => {
        login(values)
          .unwrap()
          .then(res => {
            dispatch(logIn(res.accessToken))
            navigate('/admin')
        })
    }

  return (
    <section className=' w-full h-screen bg-primary-purple '>
        <div className='container max-w-7xl mx-auto px-4 h-full'>
            <div className='w-full h-full flex items-center justify-center '>
                <div className=' max-w-[350px] w-full ' >
                    <Form layout='vertical' name="basic" style={{ maxWidth: '100%', }} initialValues={{ remember: true, }} onFinish={onFinish} autoComplete="off" >
                        <Form.Item label={<span className='text-white'>Username</span>} name="username"  rules={[ { required: true, message: 'Please input your username!', }, ]} >
                        <Input style={{ backgroundColor: 'transparent', color: 'white'}} />
                     </Form.Item>
                     <Form.Item label={<span className='text-white'>Passsword</span>} className='text-white' name="password" rules={[ { required: true, message: 'Please input your password!', }, ]} >
                        <Input.Password style={{ backgroundColor: 'transparent', color: 'white'}} />
                     </Form.Item>
                     <Form.Item label={null}>
                            <Button type="primary" className='w-full mb-2   ' htmlType="submit">
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Login