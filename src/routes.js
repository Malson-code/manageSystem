/**
 *   Create by Malson on 2018/5/29
 */
import React from 'react';
import MalLayout from './common/layout/MalLayout';
import {Route,Switch} from 'react-router-dom';
import Login from './docs/log/LoginPage';
import Error404 from './docs/components/404';

//左侧菜单路径  转换为路由信息
import LeftMenuParams from './common/layout/LeftMenuParams';

/**
 *  path:匹配路径
 *  component:渲染的组件
 *  parent:'malLayout'   使用何种父组件  要用的时候自己一一匹配
 *  exact:是否严格匹配
 *  strict:是否匹配末尾斜杠
*/
//遍历左侧菜单  找出有component属性的(即可跳转的)
let leftRoutes = [],layoutType1 = 'malLayout';
changeToRoutes(LeftMenuParams);
function changeToRoutes(Arr=[]) {
  Arr.map(item=>{
    let Com = item.component;
    if(!Com && item.children){
      changeToRoutes(item.children);
    }else{
      if(!Com) return;
      let routeObj = {
        path:item.to,
        component:Com,
        parent:layoutType1,
        exact:true
      };
      leftRoutes.push(routeObj);
    }
  })
}

console.log(leftRoutes);


let routes = [
  { path:'/', component:Login, exact:true },
  { path:'/login', component:Login, exact:true },
    ...leftRoutes
];

//默认404为路由的最后一个  parent决定这个报错页面放到框架（某个框架）里面 还是外面
routes.push({ path:'*', component:Error404 ,parent:layoutType1});

//遍历
let Routes = [];
for(let i=0;i<routes.length;i++){
  let Component = routes[i].component;
  //判断parent类型，找寻匹配的父级菜单
  let natureCom = <Route
      path={routes[i].path}
      component={routes[i].component}
      exact={routes[i].exact}
      key={routes[i].path}
  />;
  // 如果 route的 parent 是 'malLayout' 则去匹配  <MalLayout />  这个父组件
  let RouteCom = routes[i].parent === layoutType1
      ?<Route
          path={routes[i].path}
          render={()=><MalLayout><Component /></MalLayout>}
          exact={routes[i].exact}
          key={routes[i].path}
      />
      :natureCom;
  Routes.push(RouteCom);
}
export default  Routes ;