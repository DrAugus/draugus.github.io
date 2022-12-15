# QA

## `[Vue warn]: Data property "option" is already defined in Props.`

```vue
data () {
  return {
    // Rename the "option" property in the data option
    // to avoid the conflict with the "option" prop
    dataOption: undefined
  }
},
props: {
  option: {
    type: Object,
    required: true
  }
}
```

## `xAxis "0" not found`

> refer: <https://github.com/apache/echarts/issues/14071#issuecomment-762582442>

```vue
import 'echarts/lib/component/grid';
```
