pipeline {
    agent any

    environment {
        DOCKERHUB_USER = 'dilini2003'
        DOCKER_PASS = 'Yuren1999'
    }

    stages {
        stage('Checkout Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/dilini2003/web-application.git'
            }
        }

        stage('Login to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                }
            }
        }

        stage('Build and Push Frontend Image') {
            steps {
                dir('frontend') {
                    sh """
                        docker build -t ${DOCKERHUB_USER}/web-application-frontend:latest .
                        docker push ${DOCKERHUB_USER}/web-application-frontend:latest
                    """
                }
            }
        }

        stage('Build and Push Backend Image') {
            steps {
                dir('backend') {
                    sh """
                        docker build -t ${DOCKERHUB_USER}/web-application-backend:latest .
                        docker push ${DOCKERHUB_USER}/web-application-backend:latest
                    """
                }
            }
        }

        stage('Build and Push Admin Image') {
            steps {
                dir('admin') {
                    sh """
                        docker build -t ${DOCKERHUB_USER}/web-application-admin:latest .
                        docker push ${DOCKERHUB_USER}/web-application-admin:latest
                    """
                }
            }
        }
    }

    post {
        success {
            echo '✅ Build and push completed successfully!'
        }
        failure {
            echo '❌ Build or push failed. Check logs for details.'
        }
        always {
            sh 'docker logout'
        }
    }
}