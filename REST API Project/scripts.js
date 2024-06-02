async function getdata()
{
    const userendpoint = "https://jsonplaceholder.typicode.com/users";
    let userresponse = await fetch(userendpoint);
    let userdata = await userresponse.json();

    const postendpoint = "https://jsonplaceholder.typicode.com/posts";
    let postresponse = await fetch(postendpoint);
    let postdata = await postresponse.json();
    
    const allposts = document.getElementById("allposts");
    allposts.innerHTML = "";
    postdata.forEach(post => {
        const postdiv = document.createElement('div');
        postdiv.id = "post"+String(post.id)
        postdiv.className = "post";
        postdiv.innerHTML = "<p class='title'>"+String(post.title)+"</p>"+
        "<p class='name'>"+String(userdata[post.userId-1].name)+"</p>"+
        "<p class='email'>"+String(userdata[post.userId-1].email)+"</p>"+
        '<button onclick="showpost('+post.id+')">Details</button>'
        ;
        allposts.appendChild(postdiv);
    });
}

async function showpost(postId)
{
    const commentendpoint = "https://jsonplaceholder.typicode.com/comments?postId=<"+String(postId)+">";
    let commentresponse = await fetch(commentendpoint);
    let commentdata = await commentresponse.json();  
    
    const post = document.getElementById("post"+String(postId));
    console.log(commentdata);
}