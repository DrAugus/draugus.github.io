---
outline: [2, 4]
---

# 库

## 库合并

```bash
mkdir /tmp/abseil
cd /tmp/abseil
ls /home/lib64/libabsl_*.a | xargs -n1 ar x  # 批量解压

ar cru libabseil.a *.o   # 打包成单一的库
ranlib libabseil.a  
cp libabseil.a /home/lib64/
```

<script setup>
import ACardLinks from '../../.vitepress/components/ACardLinks.vue'

import { LIBS_DATA } from '../../.vitepress/data/libs'
</script>

<ACardLinks v-for="{title, items} in LIBS_DATA" :title="title" :items="items" :long="true" />
