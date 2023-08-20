# add front
class Node:
    def __init__(self, val):
        self.val = val
        self.next = None


class SLL:
    def __init__(self, head = None):
        self.head = head

# add to the front
    def add_front(self, new_val):
        new_node = Node(new_val)
        new_node.next = self.head
        self.head = new_node

#   print the linked list
    def list_print(self):
        if self.head == None:
            print('Null')
        
        current = self.head

        while current is not None:
            print(current.val)
            current = current.next

    def remove_front(self):
        if self.head is not None:
            temp = self.head
            self.head = self.head.next
            temp = None
        else:
            print('Null')

    def front_val(self):
        if self.head is not None:
            print(self.head.val)
        else:
            print('Null')


SLL1 = SLL()
SLL1.add_front(18)
SLL1.list_print()
SLL1.front_val()
print()
# expected output: Node {data: 18, next: null}

SLL1.add_front(5)
SLL1.list_print()
SLL1.front_val()
print()
# expected output: Node {data: 5, next: Node{data: 18, next: null}}

SLL1.add_front(73)
SLL1.list_print()
SLL1.front_val()
print()
# expected output:{data: 73, next: Node {data: 5, next: Node{data: 18, next: null}}

SLL1.remove_front()
SLL1.list_print()
SLL1.front_val()
print()

SLL1.remove_front()
SLL1.list_print()
SLL1.front_val()
print()

SLL1.remove_front()
SLL1.list_print()
SLL1.front_val()
print()


