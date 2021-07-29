class Posts {
    constructor({ posts = [] }) {
        this.posts = posts;
    }

    addPost(tweets) {
        this.tweets.push(tweets, i, arr);
        console.log(tweets);
        console.log(i);
        console.log(arr);
        this.posts.push(tweets);
    }

    deletePost(id) {

    }

    likePost(id) {

    }
}


class Post {
    constructor({ id, userName, nickname, postDate, text, img, likes = 0 }) {
        this.id = id || this.generateID();
        this.userName = userName;
        this.nickname = nickname;
        this.postDate = postDate ? new Date(postDate) : new Date();
        this.test = text;
        this.img = img;
        this.likes = likes;
        this.liked = false;
    };

    changeLike() {
        this.liked = !this.liked;
        if (this.liked) {
            this.likes++;
        } else {
            this.likes--;
        }
    }

    generateID() {
        return Math.random().toString(32).substring(2) + (+new Date).toString(32);
    }

    getDate() {

        const options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: '2-digit',
            minutes: '2-digit',
        }

        return this.postDate.toLocaleString('ru-Ru', options)
    }
}

new Twitter({
    listElem: '.tweet-list'
})


const twitter = new Twitter({
    listElem: '.tweet-list'
})