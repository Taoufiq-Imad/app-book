let keyword='book_'

//import Book from './Book.js';
//n'est pas travail dons mon navigateur
class Book{
    constructor(data){
        for(let owner of data.keys()){
            this[owner] = data.get(owner) 
        }
        this.id=keyword
    }
    add(){
        let  er = {}
        for(let owner of Object.keys(this)){
            if(this[owner] === undefined || this[owner] ==='') {
                er[owner] = "le champ ${owner} est vide"
            }
        }
        if(Object.keys(er).length === 0){
                this.id=`${this.id+getidlastbook()}`
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
        return true
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
               if(Book.remove(key)){
                this.parentNode.parentNode.removeChild(this.parentNode)
               }
            }
        })
        
    }
}

let getidlastbook = ()=>{
    let id
    let max
    for(let key=0 ;key<localStorage.length;key++){
        if(localStorage.key(key).includes(keyword)){
            id=parseInt(localStorage.key(key).substring(keyword.length))
            if(max === undefined){
                max=id
            }else if(id>max){
                    max=id
                }
        }
    }
    if(max === undefined){
        return 0
    }
    else{
        return max+1
    }

}



let affichelastadd=(book)=>{
    let divbooks = document.getElementById('books')
    let div = document.createElement('div')
    for (const key of Object.keys(book)) {
        if(key==='id'){
            div.setAttribute(key,book[key])
        }
        else{
            let p = document.createElement('p')
            p.innerHTML=book[key]
            div.appendChild(p)
        }
        
    }
    
    let deletbutton = document.createElement('button')
    deletbutton.setAttribute("class","delet")
    deletbutton.setAttribute("type","submit")
    deletbutton.innerHTML="remove"
    div.appendChild(deletbutton)
    let editbutton = document.createElement('button')
    editbutton.setAttribute("class","edit")
    editbutton.setAttribute("type","submit")
    editbutton.innerHTML="edit"
    div.appendChild(editbutton)
    divbooks.appendChild(div)
    


}

let afficheall=()=>{
let books=Book.getAll()
for (const book of books) {
    affichelastadd(book)
    }
}




(()=>{
    let form = document.getElementById('form_book')
    form.addEventListener('submit',function(e){
    e.preventDefault()
    let data = new FormData(form)
    let b=new Book(data)
    for (const elemnt of form.querySelectorAll('[name]')) {
        elemnt.value = ''
    }
    affichelastadd(b)
    delet()

})
afficheall()
    delet()
}
)()



