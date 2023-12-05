--- 
title: Angular Services 
slug: /category/angular/services
---

# Angular Services Cheat Sheet

## What are Services?
Services in Angular are pieces of reusable code with a focused purpose, typically used in many components across an application. They efficiently manage data access, separating it from components, which should focus on presenting data to the user.

### Creating a Service
An Angular service is essentially a JavaScript function encapsulated within a class, offering methods and properties. It is created by defining a class, adding methods, and exporting it for use in components or other services.


```javascript
import { Product } from './product';

export class ProductService {
    public getProducts() {
        let products: Product[] = [
            new Product(1, 'Memory Card', 500),
            new Product(2, 'Pen Drive', 750),
            new Product(3, 'Power Bank', 100)
        ];
        return products;
    }
}
```
In this example, the `ProductService` class has a `getProducts` method returning a collection of products. The service class is exported so other components can import and use it.

### Inject Services
Injecting services into components replaces direct instantiation, reducing coupling and enhancing testability. It involves Angular's dependency injection mechanism to inject service instances into components.


```javascript
constructor(private productService: ProductService) {}
```
This constructor injection avoids the disadvantages of directly instantiating services, such as tight coupling and difficulty in testing.

### @Injectable()
The `@Injectable` decorator is crucial for Angular services using dependency injection. It does not register the service with the container but indicates that the service can have its own dependencies injected.


```javascript
@Injectable()
export class MyService {
    constructor(private httpClient: HttpClient) { }
}
```
This example demonstrates a service with a dependency on `HttpClient`, made injectable with the `@Injectable` decorator.

### HTTP Services
Angular's HTTP Client module, based on RxJS Observables, allows for efficient HTTP operations like GET, POST, PUT, and DELETE.


```javascript
this.httpClient.get<Course[]>('/api/courses')
```
This example shows an HTTP GET request returning an Observable of `Course[]`. The HTTP Client module handles JSON parsing and supports request parameters, error handling, and HTTP Interceptors for cross-cutting concerns like authentication.

### Service Lifecycle Hooks
Lifecycle hooks in Angular services are methods that allow actions at specific lifecycle events, such as initialization or destruction.

```javascript
ngOnInit() {
    // Initialization logic
}
ngOnDestroy() {
    // Cleanup logic
}
```
These hooks, `OnInit` and `OnDestroy`, handle initialization and cleanup tasks, ensuring efficient resource management.

### Best Practices
1. **Separate Business Logic:** Keep business logic out of services.
2. **Testability:** Design services for easy testing, avoiding global state.
3. **Use Interfaces:** Define services with interfaces for modularity.
4. **Size Management:** Keep services small and focused.
5. **Avoid View Logic in Services:** Handle view-related logic in components.
