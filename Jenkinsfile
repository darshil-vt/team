pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                exho ' rm -rf node_modules && npm install'
            }
        }
        stage('Run tests admin') {
            steps {
                sh 'npm test'
            }
        }    
        stage('Deploy') {
            when {
                expression { currentBuild.result == 'SUCCESS' }
            }
            steps {
                echo 'finish'
            }
        }
    }
}
