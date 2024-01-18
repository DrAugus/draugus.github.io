# TypeScript

```ts
function removeSubArrayWithDuplicates<T>(source: T[], toRemove: T[]): T[] {
    let tmpSource: T[] = source.slice(0);
    toRemove.forEach(item => {
        const index = tmpSource.indexOf(item);
        if (index > -1) {
            tmpSource.splice(index, 1);
        }
    });
    return tmpSource;
}
```
