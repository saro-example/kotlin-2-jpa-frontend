## 준비과정 ([참고](https://code.visualstudio.com/docs/nodejs/vuejs-tutorial))
1. node.js 설치
   * [https://nodejs.org](https://nodejs.org)
1. yarn 설치
   ```
   npm install -g yarn
   ```
1. vue 설치
   ```
   yarn global add @vue/cli
   ```
1. git 설치
    * https://git-scm.com/
1. vscode 설치
   * https://code.visualstudio.com
   * IDE는 상관없으나 vscode 기준으로 서술
   * 확장도구(extensions)도 설치
      * [Vue VS Code Extension Pack](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-extensionpack)
      * [Terminal](https://marketplace.visualstudio.com/items?itemName=formulahendry.terminal)
         * IDE 오른쪽 하단에 >_ 모양의 Toggle Integated Terminal 라는 아이콘이 생김
   * git 으로 받은 후 열기
   * **tab size (중요)**
      * (File / Code) → Preferences → Settings
      * 다음과 같이 변경
         * editor.tabSize: 2
         * editor.insertSpaces: true
         * editor.detectIndentation: false
1. 모듈 내려받기
   * git을 내려받은 디렉토리로 이동
      * 혹은 vscode의 [Terminal](https://marketplace.visualstudio.com/items?itemName=formulahendry.terminal) 로 접속
   ```
   yarn install
   ```

## 실행
1. 실행
   * vscode의 [Terminal](https://marketplace.visualstudio.com/items?itemName=formulahendry.terminal) 혹은 커맨드에 접속
      * 프로젝트 경로로 이동 (vscode Terminal 사용시 자동이동)
      
   ```
   yarn serve
   ```
   
2. 접속
   * 메인 : http://localhost:8080/

## 빌드
빌드결과 폴더 : 프로젝트폴더/dist
```
yarn run build
```
