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
                script {
                    def exitCode = sh(returnStatus: true, script: 'npm test')
                    if (exitCode != 0) {
                        error('Tests failed. Aborting pipeline.')
                    }
                }
            }
        }    
    }

    post {
        always {
            echo 'Pipeline completed.'
//             return // Exit the pipeline
        }
    }
}
