---
title: Docker Compose
sidebar_position: 1
slug: /category/docker-compose 
---

# Docker Compose Cheat Sheet

Docker Compose is a tool for defining and running multi-container Docker applications. It uses a configuration file to provide all the necessary details about the services, networks, and volumes. Let's dive into the essential aspects of Docker Compose for programmers.

## Building Images

Building images is an essential step in the Docker Compose workflow. You can define the build context, Dockerfile path, and other parameters in the `docker-compose.yml` file for each service.

```yaml
version: '3'
services:
  webapp:
    build:
      context: ./path_to_code
      dockerfile: Dockerfile.custom_name
```

This defines a service named `webapp` that uses the build context from `./path_to_code` and a Dockerfile named `Dockerfile.custom_name`.

## Running Images

Once images are built, you can run them as containers using Docker Compose. The image to run can be specified in the `docker-compose.yml` file.

```yaml
version: '3'
services:
  webapp:
    image: my_custom_image:latest
```

Here, the `webapp` service runs the image `my_custom_image` with the `latest` tag.

## Basic Commands

Docker Compose comes with a suite of commands to manage the lifecycle of your containers.

### docker-compose up

This command starts all the services defined in your `docker-compose.yml` file.

```bash
docker-compose up
```

When run, it reads the `docker-compose.yml` file and starts the services accordingly. You can also use `-d` flag to run services in detached mode.

### docker-compose down

Stops and removes all the services that are running.

```bash
docker-compose down
```

This command stops the services and also removes the containers, networks, and volumes defined in the `docker-compose.yml` file.

### docker-compose logs

Displays the logs of your services.

```bash
docker-compose logs webapp
```

In this case, it will show the logs for the service named `webapp`.

### docker-compose build

Builds the service images.

```bash
docker-compose build webapp
```

It builds the `webapp` service using the specified build context and Dockerfile in the `docker-compose.yml` file.

### docker-compose ps

List the services.

```bash
docker-compose ps
```

This command provides an overview of the current state of the services.

## docker-compose.yml

The `docker-compose.yml` file is a YAML file that defines the services, networks, and volumes for your application.

### Defining Services

Services are the heart of your application, representing the containers that will run.

```yaml
services:
  webapp:
    image: my_custom_image:latest
    ports:
      - "5000:5000"
```

This defines a service `webapp` that runs the image `my_custom_image:latest` and maps port 5000 inside the container to port 5000 on the host.

### Defining Networks

Networks facilitate communication between containers.

```yaml
services:
  webapp:
    image: my_custom_image
    networks:
      - my_custom_network

networks:
  my_custom_network:
```

This configuration sets up a custom network named `my_custom_network` and associates the `webapp` service with this network.

### Common Keys

There are multiple keys in the `docker-compose.yml` file that dictate the behavior of services, networks, and volumes.

For services, some common keys include:

- `image`: The Docker image to use for the service.
- `build`: Instructions to build the Docker image.
- `ports`: Ports mapping between the host and the container.
- `volumes`: Mount paths for data persistence.

### Volumes

Volumes are used for data persistence and sharing data among containers.

```yaml
services:
  webapp:
    image: my_custom_image
    volumes:
      - my_data:/app/data

volumes:
  my_data:
```

Here, a volume named `my_data` is defined and mounted to `/app/data` in the `webapp` service container.

### Secrets

Secrets are used to manage sensitive data.

```yaml
services:
  webapp:
    image: my_custom_image
    secrets:
      - my_secret

secrets:
  my_secret:
    file: ./path_to_secret_file
```

In this configuration, a secret named `my_secret` is defined, and its value is taken from the file at `./path_to_secret_file`. The `webapp` service can then access this secret.

With this cheat sheet, you now have a comprehensive overview of the core components and functionalities of Docker Compose. Happy containerizing!