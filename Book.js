 export class Book{
    constructor(data){
        for(let owner of data.keys()){
            this[owner] = data.get(owner) 
        }
        this.id=`${keyword+getidlastbook()}`
    }
    add(){
        let  er = {}
        for(let owner of Object.keys(this)){
            if(this[owner] === undefined || this[owner] ==='') {
                er[owner] = "le champ ${owner} est vide"
            }
        }
        if(Object.keys(er).length === 0){
            //this.id=`${this.id+getidlastbook()}`
            localStorage.setItem(this.id,JSON.stringify(this))  
            return true
        }
        else{
            return er
        }
    }

    static getAll(){
        let books=[]
        for (let k=0;k<localStorage.length; k++){
            if(localStorage.key(k).includes(keyword)){
                books[books.length] = JSON.parse(localStorage.getItem(localStorage.key(k)))
                books[books.length-1]=Object.assign({id:localStorage.key(k)},books[books.length-1])
            }
        }
        return books
    }
    static remove(key){
        localStorage.removeItem(key)
        return true
    }
    
    modifier(){
        let  er = {}
        for(let owner of Object.keys(this)){
            if(this[owner] === undefined || this[owner] ==='') {
                er[owner] = "le champ ${owner} est vide"
            }
        }
        if(Object.keys(er).length === 0){
            this.id=keyedit
            localStorage.setItem(this.id,JSON.stringify(this))  
            return true
        }
        else{
            return er
        }

    }
}
