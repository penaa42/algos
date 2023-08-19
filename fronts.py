# add front
class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

# node1 = Node(8)
# print(node1)

class SLL:
    def __init__(self, head = None):
        self.head = head

# # add to the front
    def add_front(self, new_val):
        new_node = Node(new_val)
        new_node.next = self.head
        self.head = new_node


#   print the linked list
    def list_print(self):
        if self.head == None:
            print("List is empty")
        
        current = self.head

        while( current is not None):
            print(current.val)
            # print(current.next)
            current = current.next


    def remove_front(self):
        if self.head is not None:
            # return None
            # print('')
            temp = self.head
            self.head = self.head.next
            temp = None

    # def front_val(self):


# S1 = SLL(Node(8))
# print(S1)

# S1.add_front(10)
# print(S1)

SLL1 = SLL()
SLL1.add_front(18)
# SLL1.list_print()
# # expected output: Node {data: 18, next: null}
# SLL1.add_front(5)
# SLL1.list_print()
# # expected output: Node {data: 5, next: Node{data: 18, next: null}}
# SLL1.add_front(73)
# SLL1.list_print()
# # expected output:{data: 73, next: Node {data: 5, next: Node{data: 18, next: null}}
# SLL1.add_front(20).add_front(7).add_front(75)
# SLL1.list_print()
# print()
# SLL1.remove_front()
# SLL1.list_print()
# print()
# SLL1.remove_front()
# SLL1.list_print()
# print()
# SLL1.remove_front()
SLL1.list_print()
print()
# expected output: Node {data: 5, next: Node{data: 18, next:null}}
# expected output: Node{data: 18, next:null}

# front
# method to return the value at the head of the list; if empty, return null



