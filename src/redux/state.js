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
            { message: "Hello world!", likesCnt: 3 },
            { message: "I am learning React", likesCnt: 6 },
            { message: "How are you?", likesCnt: 4 },
        ],
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

export default state;