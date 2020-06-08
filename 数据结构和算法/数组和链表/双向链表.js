function Node(element){
    this.element=element
    this.next=null
    this.pre=null
}
function LList(){
    this.head=new Node('head')
    this.find=find
    this.findLast=findLast
    this.insert=insert
    this.display=display
    this.disReverse=disReverse
    this.remove=remove
}

function find(item){
    var current=this.head
    while(current.element!==item){
        current=current.next
    }
    return current
}

function findLast(){
    var current=this.head
    while(current.next!==null){
        current=current.next
    }
    return current
}

function insert(newEle,item){
    var findItem=this.find(item)
    var newElement=new Node(newEle)

    newElement.next=findItem.next
    newElement.pre=findItem
    findItem.next=newElement
}

function display(){
    var current=this.head
    while(current.next!==null){
        console.log(current.next.element)
        current=current.next
    }
}

function disReverse(){
    var current=this.findLast()
    while(current.pre!==null){
        console.log(current)
        current=current.pre
    }
}

function remove(ele){
    var delElement=this.find(ele)
    if(delElement.next!==null){
        delElement.pre.next=delElement.next
        delElement.next.pre=delElement.pre
        delElement.pre=null
        delElement.next=null
    }else{
        delElement.pre.next=null 
    }
}

var fruits = new LList();

fruits.insert('Apple' , 'head');
fruits.insert('Banana' , 'Apple');
fruits.insert('Pear' , 'Banana');
console.log(fruits.display()); 
fruits.remove("Banana")
console.log("-----------"); 
console.log(fruits.display()); 
console.log("-----------"); 
// console.log(fruits.disReverse()); 