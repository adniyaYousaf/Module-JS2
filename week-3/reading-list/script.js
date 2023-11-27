// for the tests, do not modify this array of books
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];
const ul = document.querySelector("#reading-list");

for(const item of books){
   const li=document.createElement("li");
   ul.appendChild(li);
   //Display title of the book
   const p =document.createElement("p");
   li.appendChild(p);
   p.textContent= item.title +'-------- '+item.author;
   p.style.fontWeight ='bold';
   p.style.fontWeight ='bold';
   
   const img= document.createElement("img");
   li.appendChild(img);
   //Display author of the book
 //Display title of the book
   img.src= item.bookCoverImage;
    
   if (item.alreadyRead===true){
    li.style.background='green';
   }else{
    li.style.background='red';

   }


}

