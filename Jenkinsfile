pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'grunt build'
            }
        }
        stage('test') {
            steps {
                sh 'echo \'Test the SAP UI5 project...\''
            }
        }
        stage('deploy') {
            steps {
                sh 'echo \'Deploy the SAP UI5 project...\''
            }
        }
    }
}