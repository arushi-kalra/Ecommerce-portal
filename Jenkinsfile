node {

    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {

        def customImage = docker.build("arushi75/hello1-doc")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}
