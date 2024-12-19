class Node {
    constructor(value) {
        this.value = value; 
        this.next = null;   
    }
}

class LinkedList {
    constructor() {
        this.head = null;  
        this.size = 0;     
    }

    append(value) {
        const newNode = new Node(value); 

        if (this.head === null) {
         
            this.head = newNode;
        } else {
          
            let current = this.head;
            while (current.next !== null) {
                current = current.next; 
            }
            current.next = newNode; 
        }

        this.size++; 
        this.print(); 
    }


    print() {
        let current = this.head;
        let values = [];

        while (current !== null) {
            values.push(current.value); 
            current = current.next;    e
        }

        console.log(values.join(" -> ")); 
    }
}


const list = new LinkedList();


list.append("Data Structures - Array");

list.append("Variable Type - Integer");

list.append("Sorting Algorithm - Bubble Sort");