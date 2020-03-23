const state = {
    profilePage: {
        posts: [
            { id: 1, author: "Eric Cartman", text: "Hello, world!", likeCount: 7 },
            { id: 2, author: "Eric Cartman", text: "Do you miss me?", likeCount: 3 },
            {
                id: 3,
                author: "Eric Cartman",
                text: "Why nobody write me?",
                likeCount: 12
            }
        ],
    },

    messagesPage: {
        dialogs: [
            { id: 1, name: "Kenny" },
            { id: 2, name: "Batters" },
            { id: 3, name: "Stan" },
            { id: 4, name: "Kyle" }
        ],
        messages: [
            { message: "How is going on?" },
            { message: "What a bore!" },
            { message: "You will respect my authority!" }
        ]
    }
}

export default state;