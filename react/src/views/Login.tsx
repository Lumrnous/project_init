import React from 'react'
import {useParams} from 'react-router-dom'
export default function Login(){
    const paramsObj = useParams();
    console.log(paramsObj,'参数');
    return (
        <div>
            Login
        </div>
    )
}