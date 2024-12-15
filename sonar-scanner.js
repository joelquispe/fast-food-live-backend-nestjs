import sonarqubeScanner from 'sonarqube-scanner';

sonarqubeScanner(
  {
    serverUrl: 'http://localhost:9000',
    options: {
      'sonar.projectKey': 'nestjs-project',
      'sonar.projectName': 'fast-food-app',
      'sonar.projectVersion': '1.0',
      'sonar.sources': 'src',
      'sonar.exclusions': 'node_modules/**,dist/**',
      'sonar.typescript.tsconfigPath': 'tsconfig.json',
    },
  },
  () => {
    console.log('SonarQube scan complete.');
  },
);
