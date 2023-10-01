---
title: Dockerfile 
sidebar_position: 1
slug: /category/dockerfile  
---

# Dockerfile Cheat Sheet

The Dockerfile is a script that contains a collection of commands and instructions for building a Docker container image. This cheat sheet provides essential keys and commands to help programmers write efficient Dockerfiles.

## Essential keys

### FROM

This instruction sets the base image for your Docker container. 

```bash
FROM ubuntu:20.04
```

The example above starts the Dockerfile by using the Ubuntu 20.04 image as the base. It's the first instruction in a Dockerfile.

### MAINTAINER

This key sets the author field of the generated images.

```bash
MAINTAINER John Doe <johndoe@example.com>
```

In the modern Docker versions, it's recommended to use the <code>LABEL</code> instruction for this.

### RUN

This key executes commands in a new layer on top of the current image.

```bash
RUN apt-get update && apt-get install -y curl
```

The above command updates the package lists and installs curl.

### CMD

Provides defaults for the executing container. Only one CMD is allowed.

```bash
CMD ["echo", "Hello, World!"]
```

If the container is run without specifying a command, it will execute the above echo command.

### ENTRYPOINT

Allows you to configure the container to run as an executable.

```bash
ENTRYPOINT ["echo"]
CMD ["Hello, World!"]
```

With this configuration, if you run the container without arguments, it will echo "Hello, World!".

### WORKDIR

This key sets the working directory inside the container.

```bash
WORKDIR /app
```

All the following instructions in the Dockerfile will be run in the <code>/app</code> directory.

### USER

This instruction sets the user or UID and optionally the group or GID to use when running the image.

```bash
USER developer
```

The image will be run using the "developer" user.

### EXPOSE

Informs Docker that the container will listen on the specified network ports at runtime.

```bash
EXPOSE 80
```

This tells Docker that our container will listen on port 80.

### ENV

Sets an environment variable.

```bash
ENV MY_NAME John
```

This sets an environment variable called <code>MY_NAME</code> with the value "John".

## Copying and adding files

### ADD

This instruction copies new files, directories, or remote file URLs and adds them to the filesystem of the image.

```bash
ADD source /destination
```

While powerful, it's often recommended to use <code>COPY</code> unless you need the tar and remote URL handling of <code>ADD</code>.

### COPY

This key is similar to ADD, but without the tar and remote URL capabilities.

```bash
COPY local-file-path /destination-in-container
```

<code>COPY</code> is more transparent because it only supports the basic copying of local files into the container.

## Volumes

### VOLUME

This key creates a mount point for externally mounted volumes or other containers.

```bash
VOLUME /data
```

This will create a mount point at <code>/data</code> which can be mounted by the host or other containers.

## Arguments and environment variables

### ARG

Defines a variable that users can pass at build-time to the builder.

```bash
ARG MY_VAR=default_value
```

You can pass a value to this during build with the <code>--build-arg</code> flag.

### ENV

We already covered ENV under essential keys. It's important to note that while both ARG and ENV can set environment variables, <code>ARG</code> is only available during the build of a Docker image and not in the container when it runs.

## Layer optimization

### Minimize the number of layers

Docker images are composed of layers. To make images smaller, you can minimize the number of layers.

```bash
RUN apt-get update && apt-get install -y curl && apt-get clean
```

By combining commands with <code>&&</code>, you create a single layer instead of three.

### Grouping commands

By grouping related commands, you can reduce the number of layers and make your Dockerfile more readable.

```bash
RUN apt-get update && \
    apt-get install -y curl vim && \
    apt-get clean
```

The backslashes allow us to break one long command into readable segments.

### Cleaning up in the same layer

After installing packages, it's good to clean up cache to reduce image size.

```bash
RUN apt-get update && \
    apt-get install -y curl && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
```

The cleanup commands ensure that the intermediate cache and package data are not stored in the final image layer.