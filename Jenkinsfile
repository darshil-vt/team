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
                sh 'npm test -- --forceExit' // Add --forceExit flag here
            }
        }    
    }

    post {
        always {
            echo 'Pipeline completed.'
        }
    }
}
