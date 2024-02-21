# 基于权重的随机选择算法

lua 代码

:::code-group

```lua [线性扫描]
local function prepare_weighted_random1(values, weights)
    assert(#values == #weights)
    local sum = 0       -- 计算总权重
    for _, wt in ipairs(weights) do
        sum = sum + wt
    end
    return function()
        local n = math.random(1, sum)       -- 线性扫描
        for idx, wt in ipairs(weights) do
            if n <= wt then
                return values[idx], weights[idx]
            end
            n = n - wt
        end
    end
end
```

```lua [二分]
local function prepare_weighted_random2(values, weights)
    local totals = {}       -- 总和列表
    local sum = 0
    for i, w in ipairs(weights) do
        sum = sum + w
        totals[i] = sum
    end

    -- 返回选择器函数
    return function()
        local n = math.random() * sum
        local mid, distance
        local low, high = 0, #weights
        while low < high do
            mid = (low + high) // 2
            distance = totals[mid+1]
            if distance < n then
                low = mid + 1
            elseif distance > n then
                high = mid
            else
                low = mid
                break
            end
        end
        return values[low+1], weights[low+1]
    end
end
```

```lua [跳房子]
local function prepare_weighted_random3(values, weights)
    assert(#values == #weights)
    local tinsert = table.insert
    local ipairs = ipairs

    local sorted_indices  = {}      -- 排序的权重索引
    for i, _ in ipairs(weights) do
        tinsert(sorted_indices, i)
    end
    table.sort(sorted_indices, function(a, b)
        return weights[a] > weights[b]
    end)

    local sorted_weights = {}   -- 排序的权重列表
    for _, i in ipairs(sorted_indices) do
        tinsert(sorted_weights, weights[i])
    end

    local totals = {}       -- 总和列表
    local sum = 0
    for i, w in ipairs(sorted_weights) do
        sum = sum + w
        totals[i] = sum
    end

    -- 返回选择器函数
    return function()
        local n = math.random() * sum
        local idx = 1
        local distance, weight, sidx
        while true do
            if totals[idx] > n then     -- 找到
                sidx = sorted_indices[idx]
                return values[sidx], weights[sidx]
            end
            weight = sorted_weights[idx]
            distance = n - totals[idx]
            idx = idx + (1 + distance // weight)
        end
    end
end
```

```lua [最快]
local function prepare_weighted_random4(values, weights)
    assert(#values == #weights)
    local tinsert = table.insert
    local ipairs = ipairs

    local count = #weights
    local sum = 0       -- 计算总和
    for _, w in ipairs(weights) do
        sum = sum + w
    end
    local avg = sum / count     -- 平均权重

    local aliases = {}      -- 别名表
    for _, _ in ipairs(weights) do
        tinsert(aliases, {1, false})
    end

    local sidx = 1  -- 找到第1个小于平均值的索引
    while sidx <= count and weights[sidx] >= avg do
        sidx = sidx + 1
    end
    if sidx <= count then   -- 如果 small_i > count 表示所有权重值相等，什么也不用处理
        local small = {sidx, weights[sidx] / avg}
        local bidx = 1      -- 找到第1个大于等于平均值的索引
        while bidx <= count and weights[bidx] < avg do
            bidx = bidx + 1
        end
        local big = {bidx, weights[bidx] / avg}

        while true do
            aliases[small[1]] = {small[2], big[1]}  -- 桶的索引即是小权重的索引，从中去掉小权重的比例，剩余的放大权重
            big = {big[1], big[2] - (1-small[2])}   -- 大权重去掉已放入的比例
            if big[2] < 1 then  -- 如果大权重剩余的比例已小于1，表示小于平均权重
                small = big     -- 大权重变成小权重
                bidx = bidx + 1 -- 找下一个大权重的索引
                while bidx <= count and weights[bidx] < avg do
                    bidx = bidx + 1
                end
                if bidx > count then
                    break
                end
                big = {bidx, weights[bidx] / avg} -- 得到下一个大权重
            else    -- 大权重的比例大于等于1，表示不比平均权重小，继续找小权重
                sidx = sidx + 1     -- 找下一个小权重索引
                while sidx <= count and weights[sidx] >= avg do
                    sidx = sidx + 1
                end
                if sidx > count then
                    break
                end
                small = {sidx, weights[sidx] / avg}
            end
        end
    end

    return function()
        local n = math.random() * count
        local i = math.floor(n)
        local odds, alias = aliases[i+1][1], aliases[i+1][2]    -- 小权重比例，大权重索引
        local idx
        if n - i > odds then
            idx =  alias
        else
            idx = i + 1
        end
        return values[idx], weights[idx]
    end
end
```

:::

python 代码

:::code-group

```py [Linear Scan]
def weighted_random(weights):
    remaining_distance = random() * sum(weights)
    for i, weight in enumerate(weights):
        remaining_distance -= weight
        if remaining_distance < 0:
            return i
```

```py [Binary Search]
def prepare_binary_search(weights):
    # Computing the running totals takes O(N) time
    running_totals = list(itertools.accumulate(weights))
        
    def weighted_random():
        target_distance = random()*running_totals[-1]
        low, high = 0, len(weights)
        while low < high:
            mid = int((low + high) / 2)
            distance = running_totals[mid]
            if distance < target_distance:
                low = mid + 1
            elif distance > target_distance:
                high = mid
            else:
                return mid
        return low

    return weighted_random
```

```py [Hopscotch Selection]
def prepare_hopscotch_selection(weights):
    # This preparation will run in O(N*log(N)) time,
    # or however long it takes to sort your weights
    sorted_indices = sorted(range(len(weights)),
                            reverse=True,
                            key=lambda i:weights[i])

    sorted_weights = [weights[s] for s in sorted_indices]
    running_totals = list(itertools.accumulate(sorted_weights))

    def weighted_random():
        target_dist = random()*running_totals[-1]
        guess_index = 0
        while True:
            if running_totals[guess_index] > target_dist:
                return sorted_indices[guess_index]
            weight = sorted_weights[guess_index]
            # All weights after guess_index are <= weight, so
            # we need to hop at least this far to reach target_dist
            hop_distance = target_dist - running_totals[guess_index]
            hop_indices = 1 + int(hop_distance / weight)
            guess_index += hop_indices

    return weighted_random
```

```py [Fastest]
def prepare_aliased_randomizer(weights):
    N = len(weights)
    avg = sum(weights)/N
    aliases = [(1, None)]*N
    smalls = ((i, w/avg) for i,w in enumerate(weights) if w < avg)
    bigs = ((i, w/avg) for i,w in enumerate(weights) if w >= avg)
    small, big = next(smalls, None), next(bigs, None)
    while big and small:
        aliases[small[0]] = (small[1], big[0])
        big = (big[0], big[1] - (1-small[1]))
        if big[1] < 1:
            small = big
            big = next(bigs, None)
        else:
            small = next(smalls, None)

    def weighted_random():
        r = random()*N
        i = int(r)
        odds, alias = aliases[i]
        return alias if (r-i) > odds else i

    return weighted_random
```

:::

## 参考资料

- 基于权重 的随机选择算法 - co lin的文章 - 知乎 <https://zhuanlan.zhihu.com/p/146216606>
- [A Faster Weighted Random Choice](https://blog.bruce-hill.com/a-faster-weighted-random-choice)
- [Darts, Dice, and Coins: Sampling from a Discrete Distribution](https://www.keithschwarz.com/darts-dice-coins/)
