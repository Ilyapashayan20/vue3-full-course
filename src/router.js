import  {createRouter,createWebHistory} from "vue-router"
import DcHeros from "./pages/DcHeros"
import Calendar from "./pages/Calendar"
import Home from "./pages/Home"
import Markdown from "./pages/Markdown"
import Slider from "./pages/Slider"
import Calculator from "./pages/Calculator"
import ReuseableModal from "./pages/ReuseableModal"
import Chat from "./pages/Chat"
import UserCrud from "./pages/UserCrud"
import Tensorflow from "./pages/Tensorflow"

const routes = [
    {path:"/", component:Home},
    {path:"/dc-heros", component:DcHeros},
    {path:"/calendar", component:Calendar},
    {path:"/markdown", component:Markdown},
    {path:"/slider", component:Slider},
    {path:"/calculator", component:Calculator},
    {path:"/reuseableModal", component:ReuseableModal},
    {path:"/chat", component:Chat},
    {path:"/user-crud", component:UserCrud},
    {path:"/tensorflow", component:Tensorflow},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;