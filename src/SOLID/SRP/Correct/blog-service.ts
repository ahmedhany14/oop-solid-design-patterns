
class BlogService {
    constructor(public name: string, public content: string) { }

    publish() {
        console.log('Blog published');
    }

    save() {
        console.log('Blog saved');
    }

    edit() {
        console.log('Blog edited');
    }

    delete() {
        console.log('Blog deleted');
    }

}

const blogService = new BlogService('Title', 'Content');

export { BlogService, blogService };