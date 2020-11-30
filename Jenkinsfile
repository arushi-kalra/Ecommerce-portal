node {

    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {

        def customImage = docker.build("arushi75/hello-doc1")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}
