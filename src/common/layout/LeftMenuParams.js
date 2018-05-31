/**
 *   Create by Malson on 2018/5/29
 */
import MainPage from '../../docs/main/MainPage';
import ChartsPage from '../../docs/charts/ChartsPage';
/**
 *  name:显示字段
 *  to：点击跳转的url
 *  icon：显示字段前面的图标
 *  children : 下拉菜单子项
 *  component:点击加载的展示组件
*/
let menuParams = [
  {
    name:"home主菜单",
    to:"/home",
    icon:'home',
    component:MainPage
  },
  {
    name:"次级菜单",
    to:"/docs",
    children:[
      {
        name:'charts菜单',
        to:'/docs/charts',
        component:ChartsPage
      },
      {
        name:'404',
        to:'/docs/404',
      },
    ]
  },
];
export default menuParams;