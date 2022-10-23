import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import {createWebHashHistory,createRouter} from 'vue-router'
import AvatarDemo from './components/AvatarDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import CardDemo from './components/CardDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import InputDemo from './components/InputDemo.vue'
import Markdown from "./components/Markdown.vue";
import intro from './markdown/intro.md'
import install from './markdown/install.md'
import begin from './markdown/begin.md'
import { h } from 'vue'
const md =(string)=>{
  return  h( Markdown, {content: string, key:string})
}

const history =createWebHashHistory()
export const router  =createRouter({
    history:history,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc,
        children:[
            {path:'',redirect:'/doc/intro'},
            
            {path:'intro',component:md(intro)},

            {path:'install',component:md(install)},

            {path:'begin',component:md(begin)},

            {path:'switch',component:SwitchDemo},
            {path:'button',component:ButtonDemo},
            {path:'dialog',component:DialogDemo},
            {path:'tabs',component:TabsDemo},
            {path:'card',component:CardDemo},
            {path:'avatar',component:AvatarDemo},
            {path:'Input',component:InputDemo},
    ]
    },
]
})
router.afterEach(()=>{
  
    // chrome
  document.body.scrollTop = 0

    // firefox
  document.documentElement.scrollTop = 0
  
    // safari
  window.pageYOffset = 0
})