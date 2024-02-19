
/**PALABRAS RESERVADAS EN JAVASCRIPT 
 * var de alcance local, pero se puede hacer de forma global *Nota ya no se utiliza.
 * let se puede reasignar
 * const  "llamada constante" pero puede mutar, sin embargo, no se puede reasignar.
 * 
*/

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor(head) {
      this.head = head;
      this.tail = head;
      this.size = 1;
    }
  
    size() {
      return this.size;
    }
  
    /**
     * Add a node to the linked list at the start.
     * 
     * @param {int} value node value
     */
    addStart(value) {
      const newNode = new Node(value);
  
      newNode.next = this.head;
      this.head = newNode;
      this.size +=1;
    }

    addEnd(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.size += 1;
    }

    addAfter(target, value){
        let aux = this.head;
        while(aux.next !== null){
          if(aux.value === target){
            const newNode = new Node(value);
            newNode.next = aux.next;
            aux.next = newNode;
            this.size += 1;
          }
          aux = aux.next;
        }
    }

    addBefore(target, value){
      let aux = this.head;
      let auxPrev; //Guarda el nodo anterior si este no es el objetivo
      //Preguntamos por el siguiente nodo, para que no añada al principio ni al final
      while(aux.next !== null){
        //Si valor del nodo es igual al del objetivo, entonces añadimos despues del target...
        if(aux.value === target){
          const newNode = new Node(value);
          //El newNode apuntara al nodo actual(aux), pero para ello necesitamos el next del nodo anterior, ya que apunta al nodo actual
          newNode.next = auxPrev.next;
          //Y el nodo anterior apuntara al newNode
          auxPrev.next = newNode;
          this.size += 1;
        }
        //Guardamos nodo actual como "nodo previo o anterior" para utilizar su puntero next en el siguiente ciclo while
        auxPrev = aux; 
        //Pasamos al siguiente nodo para el siguiente ciclo.
        aux = aux.next;
      }
    }


    deleteAfter(target){
      let aux = this.head;
      //Preguntamos por el siguiente nodo
      while(aux.next !== null){
        //Si el valor del nodo es igual al target, entonces eliminamos despues del target...
        if(aux.value === target){
          //Guardamos el nodo a eliminar en nodeToDelete
          let nodeToDelete = aux.next;
          //Hacemos que el nodo actual apunte al nodo que apunta el nodeToDelete, y así desaparece el enlace del nodo a eliminar.
          aux.next = nodeToDelete.next;
        }
        aux = aux.next;
      }
    }

    deleteBefore(target){
      let aux = this.head;
      let valuePrev;
      let auxPrev;
      while(aux.next !== null){
        if(aux.value === target){
          //Encontramos el valor del nodo a eliminar y lo guardamos en valuePrev
          auxPrev.value = valuePrev;
          //Repetimos el ciclo while para buscar el nodo con su valor y guardar su nodo antecesor y eliminar su liga con el
          aux = this.head;
          while(aux.next !== null){
            if(aux.value === valuePrev){
              //Encontramos el nodo a eliminar y lo guardamos en nodeToDelete
              let nodeToDelete = aux;
              //Eliminamos la liga del nodo a eliminar, estableciendo la liga  así:
              auxPrev.next = nodeToDelete.next;
              break; //Una vez encontrado y eliminado el nodo, paramos el ciclo while interno
            }
            auxPrev = aux;
            aux = aux.next;
          }
          break; //Paramos el ciclo while externo
        }
        auxPrev = aux; //Guardamos el nodo anterior o previo porque este sera el nodo a eliminar y necesitamos su value
        aux = aux.next;
      }
    }


    /**
     * Print the likend list
     */
    toString() {
      let str = ''
      let aux = this.head;
  
      str = aux.value + ' -> ';
  
      while (aux.next !== null) {
        aux = aux.next;
        str = str + aux.value + ' -> ';
      }
      console.log(str);
      console.log("Tamaño de la lista ligada: "+ this.size);
      console.log("Head: " + this.head.value + "  Tail: " + this.tail.value);
      console.log();
    }
  }
  
  const one = new Node(5);
  const list = new LinkedList(one);
  
  list.toString();
  list.addStart(2);
  list.toString();
  list.addEnd(20);
  list.toString();
  list.addStart(100);
  list.toString();
  list.addEnd(1);
  list.toString();
  list.addAfter(5, 190);
  list.toString();
  list.addBefore(2, 9);
  list.toString();
  list.deleteAfter(190);
  list.toString();
  list.deleteBefore(5);
  list.toString();

