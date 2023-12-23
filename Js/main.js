var siteName = document.getElementById('name');
var url = document.getElementById('email');
var btnSub = document.getElementsByClassName('btn-sub');
var btnVisit = document.getElementsByClassName('btn-visit');
var btnDelete = document.getElementsByClassName('btn-delete');
var booksList = [];

if (localStorage.getItem('list') !== null){
    booksList=JSON.parse(localStorage.getItem('list'))
    display();
}

function createBook(){
    var books = {
        name:siteName.value,
        email:url.value,
    }
    console.log(books);
    booksList.push(books);
    localStorage.setItem('list',JSON.stringify(booksList));
    clearForm()
    display()
}

function clearForm(){
    siteName.value = '';
    url.value = '';
}

function display(){
    var trs = '';
    for( var i = 0 ; i < booksList.length ; i++){
        trs += `
        
        <tr>
            <td>${i+1}</td>
            <td>${booksList[i].name}</td>              
            <td>
                <button class="btn btn-visit" data-index="0"">
                    <i class="fa-solid fa-eye pe-2"></i><a href="${booksList[i].email}" >Visit</a>
                </button>
            </td>
            <td>
                <button class="btn btn-delete pe-2" data-index="0" onclick="deleteForm()">
                    <i class="fa-solid fa-trash-can"></i>
                    Delete
                </button>
            </td>
        </tr>
        `
    }
    document.getElementById('tableBody').innerHTML= trs;
}

function deleteForm(index){
    booksList.splice(index,1);
    localStorage.setItem('list',JSON.stringify(booksList));
    display();
}