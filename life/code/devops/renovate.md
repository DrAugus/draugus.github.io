# Renovate

## schedule

[官方文档][schedule]

```json
"schedule": [
    "* 17 1 * *"
],
```

:::warning For Cron schedules, you must use the * wildcard for the minutes value, as Renovate doesn't support minute granularity. And the cron schedule must have five parts.
:::

[schedule]: https://docs.renovatebot.com/key-concepts/scheduling/
