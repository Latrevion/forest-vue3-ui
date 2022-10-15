import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import {createWebHashHistory,createRouter} from 'vue-router'
import DocDemo from './components/DocDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import IntroDemo from './views/IntroDemo.vue'
import InstallDemo from './views/InstallDemo.vue'
import BeginDemo from './views/BeginDemo.vue'

const history =createWebHashHistory()
export const router  =createRouter({
    history:history,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc,
        children:[
            {path:'',component:DocDemo},
            {path:'intro',component:IntroDemo},
            {path:'install',component:InstallDemo},
            {path:'begin',component:BeginDemo},
            {path:'switch',component:SwitchDemo},
            {path:'button',component:ButtonDemo},
            {path:'dialog',component:DialogDemo},
            {path:'tabs',component:TabsDemo},
    ]
    },
]
})
router.afterEach(()=>{
    
})