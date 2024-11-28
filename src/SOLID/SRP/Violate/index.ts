/*
This class is violating the Single Responsibility Principle because it has multiple reasons to change.
If we need to change the way the blog is displayed, we need to change the displayHTML() method.
This class should be only responsible for managing the blog data, not displaying it.
*/
class Blog {
    title: string;
    content: string;

    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }

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


    displayHTML() {
        return `<h1>${this.title}</h1><p>${this.content}</p>`;
    }
}