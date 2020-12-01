node {
    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'DockerHubM') {

        def customImage = docker.build("image1")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}
