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
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            posts.push(post);
            const error = false;
            if(!error){
                resolve();

            }else{
                reject('Error: Something went wrong');
            }
        },2000);
    });    
}

async function init(){
    await createPost({title: "post 3", body: "This is post three"});
    getPosts();
}

init(); 