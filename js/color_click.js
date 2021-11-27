function getColor(color, hex){
    document.getElementById("color_output").innerHTML = color;
    document.getElementById("color_hex").innerHTML = hex;
    
}






/*class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.previous = null;
    }
    constructor(data, previous, next){
        this.data = data;
        this.next = next;
        this.previous = previous;
    }

    head = null;
    node = new Node();
    populateWheel(){
        if(head == null){
            head = new Node(data);
        }
        else if(this.head.next == null){
            node = new Node(data, head, head);
            head.next = head.previous = node;
        }

        else{
            node = new Node(data, head.previous, head);
            temp = head.previous;
            temp.next = node;
            this.head.previous = node;
        }

    }

    displayWheel(){
        if(head == null){
            return "[]";
        }
        else if (head.next == null)
         return "[" + head.data + "]";

      
    }
    
}
populateWheel(1);
populateWheel(2);
document.getElementById("color_output").innerHTML = displayWheel();*/