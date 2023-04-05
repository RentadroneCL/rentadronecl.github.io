"use strict";(self.webpackChunksimplemap_github_io=self.webpackChunksimplemap_github_io||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"revolutionize-your-application-deployment-with-this-one-tool-docker compose","metadata":{"permalink":"/blog/revolutionize-your-application-deployment-with-this-one-tool-docker compose","editUrl":"https://github.com/RentadroneCL/rentadronecl.github.io/tree/main/blog/2023-04-05-docker-compose/index.md","source":"@site/blog/2023-04-05-docker-compose/index.md","title":"Revolutionize Your Application Deployment with this One Tool","description":"What is Docker Compose?","date":"2023-04-05T00:00:00.000Z","formattedDate":"April 5, 2023","tags":[{"label":"docker","permalink":"/blog/tags/docker"},{"label":"code","permalink":"/blog/tags/code"},{"label":"tutorial","permalink":"/blog/tags/tutorial"},{"label":"how-to","permalink":"/blog/tags/how-to"}],"readingTime":3.69,"hasTruncateMarker":false,"authors":[{"name":"Alvaro Farias","title":"Lead Developer","url":"https://github.com/afariasfermin","imageURL":"https://github.com/afariasfermin.png","key":"alvaro"}],"frontMatter":{"slug":"revolutionize-your-application-deployment-with-this-one-tool-docker compose","title":"Revolutionize Your Application Deployment with this One Tool","authors":["alvaro"],"tags":["docker","code","tutorial","how-to"]},"nextItem":{"title":"Hello World!","permalink":"/blog/welcome"}},"content":"## What is Docker Compose?\\n\\nDocker Compose is a tool that simplifies the process of creating, running, and managing multi-container Docker applications. It allows you to define and configure all the services that make up your application in a single YAML file, known as the \\"Compose file\\". Docker Compose then uses this file to spin up and manage all the containers that your application needs to run.\\n\\n### Why Use Docker Compose?\\n\\nThere are several benefits to using Docker Compose to manage your containerized applications:\\n\\n1. Simplifies the management of complex applications: With Docker Compose, you can define all the services that make up your application in a single YAML file, which makes it much easier to manage and deploy complex applications.\\n\\n2. Reproducibility: By defining all the services that make up your application in a single YAML file, you can ensure that your application is reproducible across different environments.\\n\\n3. Scalability: Docker Compose makes it easy to scale your application up or down by simply changing the number of instances of each service that you want to run.\\n\\n4. Isolation: By running each service in its own container, you can ensure that they are isolated from each other, which improves security and stability.\\n\\nHow to Use Docker Compose\\n\\nTo use Docker Compose, you need to create a Compose file that defines all the services that make up your application. The Compose file is written in YAML and consists of a series of services, each of which is defined by a set of parameters.\\n\\nHere is an example Compose file that defines two services: a web server and a database server:\\n\\n```yaml\\nservices:\\n  web:\\n    image: nginx:latest\\n    ports:\\n      - \\"80:80\\"\\n  db:\\n    image: mysql:latest\\n    environment:\\n      MYSQL_ROOT_PASSWORD: password\\n      MYSQL_DATABASE: mydb\\n      MYSQL_USER: myuser\\n      MYSQL_PASSWORD: mypassword\\n```\\n\\nIn this Compose file, we define two services: `web` and `db`. The `web` service uses the `nginx` image and maps port `80` on the host machine to port `80` in the container. The `db` service uses the `mysql` image and sets some environment variables that are used to configure the database.\\n\\nTo start the services defined in this compose file, you simply run the following command:\\n\\n```bash\\ndocker compose up\\n```\\n\\nThis will start both the `web` and `db` services in separate containers and link them together as specified in the Compose file.\\n\\n## Commonly used commands\\n\\n```bash\\ndocker compose up\\n```\\n\\nThis command starts all the services defined in your Compose file. It creates and starts containers for each service and links them together according to the configuration in the compose file.\\n\\n```bash\\ndocker compose down\\n```\\n\\nThis command stops and removes all the containers that were created by `docker compose up`. It also removes any networks that were created.\\n\\n```bash\\ndocker compose ps\\n```\\n\\nThis command shows the status of all the containers that were created by `docker compose up`. It shows the container ID, container name, and the status of each container.\\n\\n\\n```bash\\ndocker compose build\\n```\\n\\nThis command builds the Docker images for all the services defined in your compose file. It reads the Dockerfile for each service and builds the corresponding image.\\n\\n```bash\\ndocker compose start\\n```\\n\\nThis command starts the containers that were created by `docker compose up` but have since been stopped.\\n\\n```bash\\ndocker compose stop\\n```\\n\\nThis command stops the containers that were created by `docker compose up` but keeps them around. You can start them again later using `docker compose start`.\\n\\n```bash\\ndocker compose restart\\n```\\n\\nThis command restarts the containers that were created by `docker compose up`. It first stops them and then starts them again.\\n\\n```bash\\ndocker compose logs\\n```\\n\\nThis command shows the logs for all the containers that were created by `docker compose up`. You can use the `-f` flag to follow the logs in real-time.\\n\\n```bash\\ndocker compose exec\\n```\\n\\nThis command runs a command in a running container. You can specify the service name and the command to run. For example, `docker compose exec web bash` runs the `bash` command in the `web` container.\\n\\n## Conclusion\\n\\nDocker Compose is a powerful tool that simplifies the management of multi-container Docker applications. By defining all the services that make up your application in a single YAML file, you can ensure that your application is reproducible, scalable, and isolated. We hope that this blog post has given you a basic understanding of Docker Compose and how to use it to manage your containerized applications."},{"id":"welcome","metadata":{"permalink":"/blog/welcome","editUrl":"https://github.com/RentadroneCL/rentadronecl.github.io/tree/main/blog/2023-03-21-welcome/index.md","source":"@site/blog/2023-03-21-welcome/index.md","title":"Hello World!","description":"Dear members of our open source community,","date":"2023-03-21T00:00:00.000Z","formattedDate":"March 21, 2023","tags":[{"label":"hello","permalink":"/blog/tags/hello"},{"label":"welcome","permalink":"/blog/tags/welcome"}],"readingTime":1.235,"hasTruncateMarker":false,"authors":[{"name":"Alvaro Farias","title":"Lead Developer","url":"https://github.com/afariasfermin","imageURL":"https://github.com/afariasfermin.png","key":"alvaro"}],"frontMatter":{"slug":"welcome","title":"Hello World!","authors":["alvaro"],"tags":["hello","welcome"]},"prevItem":{"title":"Revolutionize Your Application Deployment with this One Tool","permalink":"/blog/revolutionize-your-application-deployment-with-this-one-tool-docker compose"}},"content":"Dear members of our open source community,\\n\\nIt is my great pleasure to extend a warm welcome to each and every one of you. Whether you are a seasoned contributor or a newcomer to the world of open source, we are thrilled to have you as part of our community.\\n\\nAs you know, open source is all about collaboration, innovation, and the power of community. By sharing our knowledge, skills, and resources, we can create truly transformative technologies and drive progress in a variety of fields. And at the heart of it all is the community, made up of individuals like you who are passionate about making a difference.\\n\\nOur community is dedicated to building and improving open source projects that are accessible, inclusive, and impactful. We believe in fostering an environment that values diversity, encourages experimentation, and supports growth and learning. We welcome people of all backgrounds, experiences, and perspectives to join us on this journey.\\n\\nAs a member of our community, you will have the opportunity to collaborate with talented individuals from around the world, contribute to exciting open source projects, and learn from some of the best and brightest minds in the industry. We are committed to providing a supportive, inclusive, and respectful environment for all members of our community, and we look forward to working with you to achieve our goals.\\n\\nThank you for joining our open source community. We can\'t wait to see what we can accomplish together.\\n\\n*Happy coding!*\\n\\nAlvaro Farias"}]}')}}]);