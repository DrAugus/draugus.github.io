<template>
    <div>
        <div class="m-nav-links">
            <button class="m-nav-link" v-for="letter in letters" :key="letter" :class="{ active: isActive(letter) }"
                @click="toggle(letter)">
                <article class="box">
                    {{ letter }}
                </article>
            </button>
        </div>
    </div>


    <!-- <div>
        <ul v-if="filteredKeys">
            <li v-for="(value, key) in filteredKeys" :key="key"> {{ key }}: 中奖 {{ value }} 元 </li>
        </ul>
    </div> -->
</template>

<script lang="ts">
import { ref, computed } from 'vue';



export default {
    setup() {
        const letters = [...Array(26)].map((_, i) => String.fromCharCode(i + 65));
        const selected = ref<string[]>([]);
        const filteredKeys = ref({});

        const toggle = (letter: string) => {
            const index = selected.value.indexOf(letter);

            if (index === -1) {
                if (selected.value.length === 3) {
                    selected.value = [letter];  // 如果尝试点击第四个字母，则清空其他三个
                } else {
                    selected.value.push(letter);
                }
            } else {
                selected.value.splice(index, 1);
            }

            // const regex = new RegExp(`^${selected.value}`, 'i');
            // filteredKeys.value = Object.keys(DataLottory[selectedCategory.value])
            //     .filter(key => regex.test(key))
            //     .reduce((obj, key) => {
            //         obj[key] = DataLottory[selectedCategory.value][key];
            //         return obj;
            //     }, {});

        };

        const isActive = (letter: string) => {
            return selected.value.includes(letter);
        };

        return {
            letters,
            toggle,
            isActive,
        };
    },
};
</script>

<style scoped>
.active {
    background-color: #6ee7ba !important
}
</style>

<style lang="scss" scoped>
.m-nav-links {
    margin: 30px;
    --m-nav-gap: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    grid-row-gap: var(--m-nav-gap);
    grid-column-gap: var(--m-nav-gap);
    grid-auto-flow: row dense;
    justify-content: center;
    margin-top: var(--m-nav-gap);
}

@each $media,
$size in (500px: 140px, 640px: 155px, 768px: 175px, 960px: 200px, 1440px: 240px) {
    @media (min-width: $media) {
        .m-nav-links {
            grid-template-columns: repeat(auto-fill, minmax($size, 1fr));
        }
    }
}

@media (min-width: 960px) {
    .m-nav-links {
        --m-nav-gap: 20px;
    }
}

.m-nav-link {
    --m-nav-icon-box-size: 40px;
    --m-nav-icon-size: 24px;
    --m-nav-box-gap: 12px;

    display: block;
    border: 1px solid var(--vp-c-bg-soft);
    border-radius: 8px;
    height: 100%;
    background-color: var(--vp-c-bg-soft);
    transition: all 0.25s;

    &:hover {
        box-shadow: var(--vp-shadow-2);
        border-color: var(--vp-c-brand);
        text-decoration: initial;
        background-color: var(--vp-c-bg-soft-up);
    }

    .box {
        display: flex;
        flex-direction: column;
        padding: var(--m-nav-box-gap);
        height: 100%;
        color: var(--vp-c-text-1);

        &-header {
            display: flex;
            align-items: center;
        }
    }


    .desc {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        flex-grow: 1;
        margin: calc(var(--m-nav-box-gap) - 2px) 0 0;
        line-height: 1.5;
        font-size: 12px;
        color: var(--vp-c-text-2);
    }

    .italic {
        font-style: italic;
    }

}

@media (max-width: 960px) {
    .m-nav-link {
        --m-nav-icon-box-size: 36px;
        --m-nav-icon-size: 20px;
        --m-nav-box-gap: 8px;
    }
}
</style>
