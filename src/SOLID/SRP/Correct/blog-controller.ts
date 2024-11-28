import { BlogService, blogService } from './blog-service';
class BlogController {

    displayHTML() {
        return `<h1>${blogService.name}</h1><p>${blogService.content}</p>`;
    }
}


const blogController = new BlogController();
console.log(blogController.displayHTML());
