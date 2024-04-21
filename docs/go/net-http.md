---
title: net/http in Go 
---

# Go net/http Module

The Go net/http module offers a rich set of features for handling HTTP requests and responses in Go applications. Below, I detail key aspects of working with this module in Go version 1.22, providing insights into various functionalities like path parameters, method-based routing, middleware, subrouting, and context handling.

## Path Parameters

Path parameters are dynamic parts of the URL path, used to capture values specified at their position in the URL. In Go 1.22, handling path parameters has become more streamlined with enhancements in pattern matching in the `http.ServeMux`.

```go
http.HandleFunc("/posts/{id}", func(w http.ResponseWriter, r *http.Request) {
    id := r.PathValue("id")
    fmt.Fprintf(w, "Post ID: %s", id)
})
```

Here, `{id}` is a path parameter that the `http.ServeMux` will match against the URL path. The `r.PathValue("id")` retrieves the value of `id` from the path.

## Method Based Routing

Go 1.22 introduces method-based routing directly in the `http.ServeMux`, allowing you to specify HTTP methods in the route pattern itself.

```go
http.HandleFunc("GET /posts/{id}", handleGetPost)
http.HandleFunc("POST /posts", handleCreatePost)
```

This approach simplifies routing by linking HTTP methods and paths directly in route definitions, reducing the need for method checks within handlers.

## Middleware

Middleware in the net/http package can be implemented by wrapping `http.Handler` to perform additional processing on the HTTP request or response. Middleware can handle tasks like logging, authentication, and more.

```go
func loggingMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        log.Printf("Request received: %s %s", r.Method, r.URL.Path)
        next.ServeHTTP(w, r)
    })
}

http.Handle("/", loggingMiddleware(http.HandlerFunc(handler)))
```

This middleware logs each request before passing it to the actual handler.

## Subrouting

Subrouting, or nested routing, organizes routes into groups, which can simplify large applications with many routes. This can be achieved by creating multiple instances of `http.ServeMux`.

```go
subrouter := http.NewServeMux()
subrouter.HandleFunc("/posts", handlePosts)
subrouter.HandleFunc("/users", handleUsers)

mainRouter := http.NewServeMux()
mainRouter.Handle("/api/", http.StripPrefix("/api", subrouter))
```

In this setup, `subrouter` handles specific paths, which are then integrated into the `mainRouter` under a common path prefix.

## Context

The `context` package is essential for passing request-scoped values, cancellation signals, and deadlines across API boundaries. In the net/http server, each request comes with a context.

```go
http.HandleFunc("/data", func(w http.ResponseWriter, r *http.Request) {
    ctx := r.Context()
    select {
    case <-time.After(10 * time.Second):
        fmt.Fprintf(w, "Data received")
    case <-ctx.Done():
        err := ctx.Err()
        if err != nil {
            http.Error(w, err.Error(), http.StatusInternalServerError)
        }
    }
})
```

This example uses the request's context to handle timeouts or cancellations of HTTP requests effectively.

By leveraging these features, developers can build robust and efficient web applications using Go's standard library. The enhancements in Go 1.22, such as method-based routing and improved path parameter handling, make the net/http package even more powerful.