pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/dilini2003/web-application.git',
                    credentialsId: 'github-token'
            }
        }
    }
}