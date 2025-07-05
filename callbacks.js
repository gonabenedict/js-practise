const post =[
    {title: "post 1", body:"This is post one"},
    {title: "post 2", body:"THis is post two"}
];

function getPosts(){
    setTimeout(() => {
        let output = '';
        post.forEach((post, index) =>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}

function createPost(post, callback){
    setTimeout(() =>{
        post.push(post);
        callback();
    },2000);    
}

