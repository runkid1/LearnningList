function Node(element){
    this.element=element;
    this.next=null
}

function LList(){
    this.head=new Node('head')
    this.find=find;
    this.insert=insert;
    this.display=display
    this.findPre=findPre
    this.remove=remove
}

function find(element){
    var current=this.head
    while(current.element!=element){
        current=current.next
    }
    return current
}

function insert(element,item){
    var current=this.find(item)
    var node=new Node(element)
    node.next=current.next
    current.next=node
}

function display(){
    var current=this.head
    while(current.next!==null){
        console.log(current.next.element)
        current=current.next
    }
}

function findPre(element){
    var current=this.head
    while(current.element!==element&&current.next.element!==element){
        current=current.next
    }
    return current
}
function remove(element){
    var current=this.findPre(element)
    var delElement=this.find(element)
    current.next=delElement.next

}

var fruits=new LList();
fruits.insert("Apple",'head')
fruits.insert("Apple2",'Apple')
fruits.insert("Apple3",'Apple2')
fruits.remove("Apple2")
console.log(fruits.display())