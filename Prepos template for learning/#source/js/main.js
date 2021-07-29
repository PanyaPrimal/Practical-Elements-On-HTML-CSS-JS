class Twitter {
    constructor({ listElem }) {
        const fetchData = new FetchData();
        this.tweets = new Posts({});
        this.elements = {
            listElem: document.querySelector(listElem)
        }

        fetchData.getPost()
            .then(data => {
                data.forEach(item => {
                    this.tweets.addPost
                }, this)
            });

        console.log('this.tweets: ', this.tweets);
    }

    renderPost() {

    }

    showUserPost() {

    }

    showLikesPost() {

    }

    showAllPost() {

    }

    openModal() {

    }
}

