const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postedUserAavatars = document.querySelectorAll(".post-user-avt");
const postedUserName = document.querySelectorAll(".post-user-name");
const postedUserLocation = document.querySelectorAll(".post-user-loc")
const postEls = document.querySelectorAll(".post");
const likes = document.querySelectorAll(".likes");
const usernames = document.querySelectorAll(".username");
const comments = document.querySelectorAll(".comment");
const likeBtns = document.querySelectorAll(".like-btn");

for (let i = 0; i < posts.length; i++) {
    postedUserAavatars[i].setAttribute("src", posts[i].avatar);
    postedUserName[i].textContent = posts[i].name;
    postedUserLocation[i].textContent = posts[i].location;
    postEls[i].setAttribute("src", posts[i].post);
    likes[i].textContent = posts[i].likes;
    usernames[i].textContent = posts[i].username;
    comments[i].textContent = posts[i].comment;
    likeBtns[i].addEventListener("click", () => {
        let curLikes = Number(likes[i].textContent);
        curLikes++;
        likes[i].textContent = curLikes;
    })
}


