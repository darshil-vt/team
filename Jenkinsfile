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
                sh 'npx test'
                sh 'process.exit(0)'
            }
        }    

    }
}
