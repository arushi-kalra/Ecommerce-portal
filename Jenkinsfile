node {

    checkout scm

    docker.withRegistry('https://registry.hub.docker.com') {

        def customImage = docker.build("arushikalra/hello1-doc")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}
