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
                sh '''#!/bin/bash
                set -e
                npm test -- --forceExit
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
