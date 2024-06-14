<template>

    <div class="info custom-block" v-for="(v, i) in CMD_INFO">

        <p class="custom-block-title">{{ v.name }}

            <span v-if="v.platform">
                <span v-if="Array.isArray(v.platform)">
                    <Badge v-for="(vv, ii) in v.platform" :text="vv" :type="platformBadge(vv)" />
                </span>
                <span v-else>
                    <Badge :text="v.platform" :type="platformBadge(v.platform)" />
                </span>
            </span>

        </p>
        <ul>
            <li v-if="v.intro" v-html="v.intro"></li>
            <li v-if="v.homepage">
                <a :href="v.homepage">主页</a>
            </li>
            <li v-if="v.repo">
                <a :href="v.repo">仓库</a>
            </li>
            <li>
                使用记录：<a :href="prefixCommandTools + v.id">跳转</a>
            </li>
        </ul>
    </div>

</template>

<script setup lang="ts">
import TitleFormat from "./TitleFormat.vue";
import { CMD_INFO } from '../data/cmdInfo';
import { Platform } from "../type";

const prefixCommandTools = '/code-notes/cmd-line-tools/'

const modifyPlatformInfo = (platform: Platform | Platform[]) => {
    if (!platform) return '';
    let res = '平台支持：'
    if (Array.isArray(platform)) {
        platform.forEach(item => res += item + ', ')
        return res.slice(0, -2);
    }
    return res + platform;
}

const platformBadge = (platform: Platform) => {
    switch (platform) {
        case 'Windows': return 'info';
        case 'Linux': return 'tip';
        case "Mac": return 'warning';
        default:
            break;
    }
    return '';
}

</script>