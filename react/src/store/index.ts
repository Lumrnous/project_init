import {legacy_createStore as createStore,combineReducers} from 'redux';
import {persistReducer} from 'redux-persist'
//  存储机制，可换成其他机制，当前使用sessionStorage机制
import storageSession from 'redux-persist/lib/storage/session'
// 持久化配置
const storeConfig = {
    key:'root',
    storage:storageSession,
    blacklist:['todo']  // reducer里不想持久化的名单, 是模块化的名字
}
// 仓库的模块
interface IStoreModule {
	user:{
		permissions:any,
		userInfo:any,
		menuList:any
	}
}

interface IActionProps {
    type:string,
    payload:any
}
const initData:IStoreModule = {
    user:{
        permissions:[],   // 按钮级别的权限
        userInfo:{},
        menuList:[]
    }
}

function userReducer(state=initData.user,action:IActionProps){
    switch(action.type) {
        case 'user/update':
            state.permissions = action.payload.permissions;
            state.userInfo = action.payload.userInfo;
            return {...state}
        case 'user/menus':
            state.menuList =  action.payload;
            
            return {...state}
    }
    return state
}

const reducerFun = combineReducers({
    user:userReducer
})

const store = createStore(persistReducer(storeConfig,reducerFun));

export default store;