# Vitepress

## 常用的，默认主题组件

### Badge

:::code-group

```md [Markdown]
Title <Badge type="info" text="default" />
Title <Badge type="tip" text="^1.9.0" />
Title <Badge type="warning" text="beta" />
Title <Badge type="danger" text="caution" />
```

```vue [Vue]
Title <Badge type="info" text="default" />
Title <Badge type="tip" text="^1.9.0" />
Title <Badge type="warning" text="beta" />
Title <Badge type="danger" text="caution" />
```

:::

### Detials/Tip/Warning/Danger

::::code-group

```md [Markdown]

:::tip tip title
this is one tip
:::

:::details This is summary
This is the content.
:::

```

```vue [Vue]
<!-- tip/danger/warning -->
<div class="tip custom-block">
    <p class="custom-block-title">tip title</p>
    <p>this is one tip</p>
</div>
<!-- details -->
<details class="details custom-block">
    <summary>This is summary</summary>
    This is the content.
</details>
```

::::
