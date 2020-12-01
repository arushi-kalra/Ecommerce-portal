node {
    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'DockerHubM') {

        def customImage = docker.build("pd0015/image1")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}
