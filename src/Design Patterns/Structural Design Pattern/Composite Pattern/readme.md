# Composite Pattern in TypeScript

The **Composite Pattern** is a structural design pattern that allows you to compose objects into tree-like structures and treat both individual objects and compositions of objects uniformly. It is used when you want to represent part-whole hierarchies in your application.

### Components of the Composite Pattern:
1. **Component**: The common interface for both individual objects (leaves) and compositions of objects (composites).
2. **Leaf**: The individual objects that do not have any children and perform basic operations.
3. **Composite**: The objects that contain child components and implement operations on them.

## Example in TypeScript

In this example, we will create a simple drawing application where we can represent shapes (like circles and rectangles) using the Composite Pattern. We will use the `Graphic` component interface, with concrete implementations of `Circle` and `Rectangle` as leaves, and a `Group` as the composite object that can hold multiple shapes.

### Code:

```typescript
// Component
interface FileSystemComponent {
  getSize(): number;
  showDetails(): void;
}

// Leaf - File
class File implements FileSystemComponent {
  private name: string;
  private size: number;

  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }

  getSize(): number {
    return this.size;
  }

  showDetails(): void {
    console.log(`File: ${this.name}, Size: ${this.size} KB`);
  }
}

// Composite - Directory
class Directory implements FileSystemComponent {
  private name: string;
  private children: FileSystemComponent[] = [];

  constructor(name: string) {
    this.name = name;
  }

  add(component: FileSystemComponent): void {
    this.children.push(component);
  }

  remove(component: FileSystemComponent): void {
    const index = this.children.indexOf(component);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  getSize(): number {
    return this.children.reduce((totalSize, child) => totalSize + child.getSize(), 0);
  }

  showDetails(): void {
    console.log(`Directory: ${this.name}`);
    this.children.forEach(child => child.showDetails());
  }
}

// Usage example:

const file1 = new File("file1.txt", 120);
const file2 = new File("file2.txt", 200);
const file3 = new File("file3.jpg", 500);

const dir1 = new Directory("Documents");
dir1.add(file1);
dir1.add(file2);

const dir2 = new Directory("Images");
dir2.add(file3);

const rootDir = new Directory("Root");
rootDir.add(dir1);
rootDir.add(dir2);

// Show details of the root directory and its contents
rootDir.showDetails();

// Get the total size of the root directory (including all files in subdirectories)
console.log(`Total size of 'Root' directory: ${rootDir.getSize()} KB`);
```

### Output:

```
Directory: Root
Directory: Documents
File: file1.txt, Size: 120 KB
File: file2.txt, Size: 200 KB
Directory: Images
File: file3.jpg, Size: 500 KB
Total size of 'Root' directory: 820 KB
```

### Explanation:

1. We define the `FileSystemComponent` interface that declares the common operations for both files and directories (components).
2. The `File` class represents a leaf object that has a name and size (leaf component).
3. The `Directory` class represents a composite object that can contain multiple files and directories (composite component).


### Advantages
- Allows you to work with complex tree structures in a uniform manner.
- Makes it easy to add new types of components without changing the existing code.
- It is inviolate to the `OCP` and `LSP` principles.
- 
### Disadvantages
- Can make the code more complex by introducing additional layers of abstraction.
- May not be suitable for cases where you need to perform different operations on individual objects and compositions.

