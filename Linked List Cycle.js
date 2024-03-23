function ListNode(val) {
    this.val = val;
    this.next = null;
}

function createLinkedListWithCycle(arr, pos) {
    if (arr.length === 0) return null;
    const nodes = arr.map(val => new ListNode(val));
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }
    if (pos !== -1) {
        nodes[nodes.length - 1].next = nodes[pos];
    }
    return nodes[0];
}

function hasCycle(head) {
    if (!head || !head.next) {
        return false;
    }

    let slow = head;
    let fast = head.next;

    while (slow !== fast) {
        if (!fast || !fast.next) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }

    return true;
}

// Example usage:
let head1 = createLinkedListWithCycle([3, 2, 0, -4], 1);
console.log(hasCycle(head1));

let head2 = createLinkedListWithCycle([1, 2], 0);
console.log(hasCycle(head2));

let head3 = createLinkedListWithCycle([1], -1);
console.log(hasCycle(head3));