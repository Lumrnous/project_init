import {BrowserRouter,NavLink,LocationDescriptorObject} from 'react-router-dom'
import RouterIndex from './router/RouterIndex'

function App() {
  return (
    <BrowserRouter>
      <ul className='menu-list'>
        <NavLink to={'/login/1'}>登录</NavLink>
        <NavLink to={{pathname:'/reg',state:{age:20}} as LocationDescriptorObject}>注册</NavLink>
        <NavLink to={'/'}>系统页面</NavLink>
      </ul>
      <RouterIndex></RouterIndex>
    </BrowserRouter>
  )
}

export default App
