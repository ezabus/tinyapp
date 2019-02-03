pipeline {
    agent {
        docker {
            image 'node:8.11.3'
        }
    }
    stages {
        stage('build') {
            steps {
                sh 'npm i -SE custdev-sapui5-infra-util --registry=http://nexus.wdf.sap.corp:8081/nexus/content/groups/build.milestones.npm'
                sh 'echo \'custdev-sapui5-infra-util installed\''
                sh 'npm install'
                sh 'npm run build'
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