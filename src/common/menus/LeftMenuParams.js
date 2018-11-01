/**
 *   Create by Malson on 2018/5/29
 */
import AsyncComponent from '../AsyncComponent';

const MainPage = AsyncComponent(()=>import("../../docs/main/MainPage"));
const MainDetailPage = AsyncComponent(()=>import("../../docs/main/component/MainDetailPage"));
const ChartsPage = AsyncComponent(()=>import("../../docs/charts/ChartsPage"));
/**
 *  name:显示字段
 *  to：点击跳转的url
 *  icon：显示字段前面的图标
 *  children : 下拉菜单子项
 *  component:点击加载的展示组件
 *  childrenRoutes:子路径  不显示在菜单
*/
let menuParams = [
  {
    name:"home主菜单",
    to:"/home",
    icon:'home',
    component:MainPage,
    childrenRoutes:[
      {
        to:"/home/:id",
        component:MainDetailPage,
      }
    ]
  },
  {
    name:"次级菜单",
    to:"/docs",
    icon:'area-chart',
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