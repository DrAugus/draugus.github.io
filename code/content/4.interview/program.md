# 程序设计

## 如何删除单向链表的中间节点

要删除单向链表中间的节点，需要找到链表的中间节点，并修改前一个节点的指向，即跳过中间节点，再将中间节点从内存中释放。

以下是一个Python实现的例子：

```py
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def deleteNode(head: ListNode) -> ListNode:
    # 如果链表为空或者只有一个节点，直接返回head
    if head is None or head.next is None:
        return head
    
    # 使用快慢指针找到中间节点
    slow, fast = head, head.next
    while fast is not None and fast.next is not None:
        slow = slow.next
        fast = fast.next.next
    
    # 删除中间节点
    slow.next = slow.next.next
    
    return head
```

在上面的实现中，我们使用了两个指针，一个指针每次走一步，另一个指针每次走两步，当快指针走到链表末尾时，慢指针就会到达链表中间，然后我们就可以删除中间节点。最后返回头节点即可。
