class FetchData {

    getResourse = async url => {
        const res = await fetch(url);

        if(!res.ok) {
            throw new Error('Произошла ошибка' + res.status)
        }
 
        return res.json();
    }
    getPost = () => this.getResourse('db/database.json');
}


