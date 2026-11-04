
pipeline {

    agent any

    triggers {
        pollSCM('H/2 * * * *')
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                    set -e
                    npm ci --omit=dev
                '''
            }
        }

        stage('Deploy Application') {
            steps {
                sh '''
                    set -e

                    mkdir -p /opt/nodeapp

                    rsync -a --delete \
                    --exclude='.git' \
                    ./ /opt/nodeapp/

                    cd /opt/nodeapp

                    npm ci --omit=dev

                    pm2 startOrReload ecosystem.config.js \
                    --update-env

                    pm2 save
                '''
            }
        }
    }

    post {
        success {
            echo 'Application deployed successfully!'
        }

        failure {
            echo 'Deployment failed. Check Jenkins console output.'
        }
    }
}
