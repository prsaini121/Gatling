pipeline {
    agent any  
    environment {
        SBT_VERSION = '1.5.5'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Setup') {
            steps {
                script {
                  
                    sh '''
                    if ! command -v sbt &> /dev/null
                    then
                        echo "SBT not found, installing..."
                        curl -s "https://get.sdkman.io" | bash
                        source "$HOME/.sdkman/bin/sdkman-init.sh"
                        sdk install sbt $SBT_VERSION
                    fi
                    '''
                }
            }
        }
        
        stage('Build') {
            steps {
                 sh 'sbt clean compile'
            }
        }
        
        stage('Test') {
            steps {
          
                sh 'sbt test'
            }
        }

        stage('Package') {
            steps {
              
                sh 'sbt package'
            }
        }
    }
    
    post {
        always {
            junit '**/target/test-logs/*.xml' 
        }
        success {
            echo 'Build and test successful!'
        }
        failure {
            echo 'Build or test failed!'
        }
    }
}
