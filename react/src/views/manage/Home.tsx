import React from "react";
import { Outlet,useSearchParams } from "react-router-dom";

export default function Home(){
    const [searchArr] = useSearchParams();
    console.log(searchArr.get('name'),'name');  // 获取name这个参数
    console.log(searchArr.get('id'),'id');
    // 可以给获取到的某个参数再添加值
    searchArr.append('name','11111')
    console.log(searchArr.getAll('name'));
    return (
        <div>
            Home
            <Outlet></Outlet>
        </div>
    )
}