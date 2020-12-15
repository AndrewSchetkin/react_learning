import { rerenderEntirePage } from "../render";

let state = {
    navbarLinks: [
        { title: "Profile", link: "/profile/" },
        { title: "Messages", link: "/dialogs/" },
        { title: "News", link: "/news/" },
        { title: "Music", link: "/music/" },
        { title: "Settings", link: "/settings/" },
    ],
    profile: {
        myPosts: [
            {id: 1, message: "Hello world!", likesCnt: 3 },
            {id: 2, message: "I am learning React", likesCnt: 6 },
            {id: 3, message: "How are you?", likesCnt: 4 },
        ],
        newMsgValue: "ok",
    },
    dialogs: {
        users: [
            { id: 1, name: "Andrey" },
            { id: 2, name: "Sasha" },
            { id: 3, name: "Vasya" },
            { id: 4, name: "Dasha" },
        ],
        messages: [
            { text: "Hey!" },
            { text: "How r u?" },
            { text: "c ya!" },
        ]
    }
}

export let addPost = () => {
    let post = {
        id: 4, 
        message: state.profile.newMsgValue, 
        likesCnt: 0
    }
    state.profile.myPosts.push(post);
    state.profile.newMsgValue = "";
    rerenderEntirePage(state);
}

export let changePostMsg = (postMsg) => {
    state.profile.newMsgValue = postMsg;
    rerenderEntirePage(state);
}

export default state;