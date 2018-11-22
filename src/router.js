import Topics from "./pages/topics/Topics";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Tab from "./components/Table";
import News from "./pages/news/News"
const routes = [
    {
        path: "/",
        exact: true,
        component:Home,
        name:"首页数据"
    },
    {
        path: "/About",
        component:About,
        name:"图表数据"
    },
    {
        path: "/Topics",
        component:Topics,
        name:"时间轴数据"
    },{
        path: "/Tab",
        component:Tab,
        name:"表格数据"
    },{
        path: "/News",
        component:News,
        name:"新闻数据"
    }
];


export default  routes