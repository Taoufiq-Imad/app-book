 export class Book{
    constructor(data){
        for(let owner of data.keys()){
            this[owner] = data.get(owner) 
        }
    }
    add(){
        let  er = {}
        for(let owner of Object.keys(this)){
            if(this[owner] === undefined || this[owner] ==='') {
                er[owner] = "le champ ${owner} est vide"
            }
        }
        if(Object.keys(er).length === 0){
                localStorage.setItem(`${keyword+getidlastbook()}`,JSON.stringify(this))
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
        console.log(this)
    }
    edit(){

    }
}

let delet=()=>{
    let buttons = document.getElementsByClassName('delet')
    for (const button of buttons) {
        button.addEventListener('click',function(e){//j'ai etilise function par ce que besion de this qui reffirace a button click
            e.preventDefault()
            let key = this.parentNode.getAttribute("id")
            if(confirm('volez vous supprime ce  livre ')){
               Book.remove(key)
                this.parentNode.parentNode.removeChild(this.parentNode)
            }
        })
        
    }
}