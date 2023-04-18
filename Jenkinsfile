pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                echo ' rm -rf node_modules && npm install'
            }
        }
        stage('Run tests admin') {
            steps {
                sh '''
                npm test-- --process.exit()
                '''
            }
        }    
        stage('Deploy') {
            steps {
                echo 'done'
            }
        }
    }
}
