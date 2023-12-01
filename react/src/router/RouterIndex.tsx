import {Suspense,lazy} from 'react'

import { useRoutes,Navigate } from "react-router-dom";

// 路由懒加载
const modules = import.meta.glob('../views/**/*.tsx')
export const lazyFun = (pathName: string) => {
    const comFun = modules['../views/' + pathName+'.tsx']
    const ComName = lazy(comFun as any);
    return <Suspense fallback={<div>loading</div>}><ComName></ComName></Suspense>
 }
 
function RouterIndex() {
  const element = useRoutes([
    {
      path: "/home",
      element: lazyFun('manage/Home'),
      children: [
        { path: "user", element: lazyFun('manage/User') },
        { path: "role", element: lazyFun('manage/Role') },
      ],
    },
    { path: "/", element: <Navigate to={'/home'} /> },
    { path: "login/:id", element: lazyFun('Login') },
    { path: "reg",  element: lazyFun('Register') },
  ]);

  return element;
}

export default RouterIndex
