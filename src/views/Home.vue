<template>
    <div>
        <div class="topnavAndBanner">
            <Topnav></Topnav>
            <div class="banner">
                <h1>Forest UI</h1>
                <h2>一个Vue3 UI 框架</h2>
                <p class="tagline">基于vue3的UI组件，目前功能有Button，Switch，Dialog，Tabs</p>
                <p class="actions">
                    <a class="github" href="https://github.com">View on GitHub</a>
                    <router-link to="/doc">开始使用</router-link>
                </p>
            </div>
        </div>
        <div class="features">
            <ul>
                <li>
                    <svg class="icon">
                        <use xlink:href="#icon-vue"></use>
                    </svg>
                    <h3>基于Vue3</h3>
                    <p>优先使用了 Vue3 Composition API</p>
                </li>
                <li>
                    <svg class="icon">
                        <use xlink:href="#icon-typescript"></use>
                    </svg>
                    <h3>基于最新TypeScript</h3>
                    <p>源码使用TypeScript书写</p>
                </li>
                <li>
                    <svg class="icon">
                        <use xlink:href="#icon-shandian"></use>
                    </svg>
                    <h3>文档易读</h3>
                    <p>每个组件的源代码及其简洁</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
    components: { Topnav }
}
</script>

<style lang="scss" scoped>
// $green: #02bcb0;
$green: #42b883;
// $border-radius: 4px;
$border-radius: 20px;
$color: #007974;

.topnavAndBanner {
    // background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
    // clip-path: ellipse(80% 60% at 50% 40%);

}

.features {
    margin: 64px auto;
    padding: 0 16px;

    @media (min-width:800px) {
        width: 800px;

        >ul {
            >li {
                width: 50%;
            }
        }
    }

    @media (min-width:1200px) {
        width: 1200px;

        >ul {
            >li {
                width: 33.3333%;
            }
        }
    }

    >ul {
        display: flex;
        flex-wrap: wrap;

        >li {

            margin: 16px 0;
            display: grid;
            justify-content: start;
            align-content: space-between;
            grid-template-areas:
                "icon title"
                "icon text";
            grid-template-columns: 80px auto;
            grid-template-rows: 1fr auto;


            >svg {
                grid-area: icon;
                width: 64px;
                height: 64px;
            }

            >h3 {
                grid-area: title;
                font-size: 28px;
                color: rgb(81, 90, 110);
            }

            >p {
                grid-area: text;
                color: #808695;
                font-size: 16px;
            }
        }
    }
}

.banner {
    color: $color;
    padding-top: 150px ;
    padding-bottom: 100px;
    // padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
        font-size: 48px;
        color: #42b883;
        letter-spacing: -.4px;
        line-height: 56px;
        font-weight: 700;
    }

    h2 {
        letter-spacing: -.4px;
        line-height: 56px;
        font-size: 48px;
        font-weight: 700;
        color: #213547;
    }

    .tagline {
        text-align: center;
        padding: 24px 16px 0;
        line-height: 36px;
        font-size: 24px;
        color: rgba(60, 60, 60, .7);
    }

    >.actions {
        // padding: 8px 0;
        padding-top:32px ;

        a {
            margin: 0 8px;
            background: $green;
            color: white;
            display: inline-block;
            padding: 8px 24px;
            border-radius: $border-radius;

            &:hover {
                text-decoration: none;
                background-color: #42d393;
            }
        }
        .github{
            border-color:#d1d1d1 ;
            background: #f2f2f2;
            color: #213547;
            &:hover{

                background-color: #e5e5e5;
            }
        }
    }
}
</style>