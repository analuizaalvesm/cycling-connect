# Cycling Connect

O objetivo deste projeto é desenvolver e implementar um aplicativo móvel dedicado para otimizar o treinamento de ciclistas, visando melhorar o processo de comunicação e acompanhamento entre o treinador e os atletas. A aplicação buscará superar as limitações do atual método manual de envio de planilhas diárias via WhatsApp, proporcionando uma experiência mais eficiente e personalizada para cada ciclista. O foco está na criação de um ambiente virtual que permita a fácil disponibilização das fichas de treino, adaptação dinâmica conforme as necessidades individuais, e a implementação de mecanismos eficazes de acompanhamento do progresso, facilitando a avaliação da aderência ao programa de treinamento.

## Alunos integrantes da equipe

- Ana Luiza Machado Alves
- André Augusto Silva Carvalho
- Lucas Henrique Chaves de Barros
- Samuel Ribeiro de Freitas

## Professores responsáveis

- Eveline Alonso Veloso
- Lucas Henrique Pereira
- Pedro Pongelupe Lopes

# Instruções de utilização

Este guia tem como objetivo fornecer instruções passo a passo para configurar e executar um projeto React Native CLI para desenvolvimento Android/IOS.

<details>
<summary>
<strong>[Windows] Target OS: Android</strong>
</summary>

### Pré-requisitos

- [Git](https://git-scm.com/)
- [Chocolatey](https://chocolatey.org/)
- Node na versão LTS (>= 18.20.1)
  - Caso você queira alternar entre diferentes versões do Node, utilize o [nvm](https://github.com/coreybutler/nvm-windows).
- JDK (Java Development Kit) na versão 17.0.10
- [Android Studio](https://developer.android.com/studio?hl=pt-br)
  - SDK Platforms: Android 14.0 (UpsideDownCake)
  - SDK Tools:
    - Android SDK Build-Tools: 33.0.1
    - NDK: 24.0.8215888
    - CMake: 3.22.1
    - Android Emulator
    - Android SDK Platform-Tools

_Verificar dependências para processadores AMD no site oficial do React Native._

_Observação: clone o projeto em um diretório com poucos caracteres - o CMake, utilizado para geração de build, possui problemas com path longos.
Opte por utilizar um diretório pequeno como, por exemplo: `C:/SeuNome/NossoProjeto` ao invés de `C:/SeuNome/EngSoftware/Projetos/plf-es-2024-1-ti3-8981100-cycling-connect/...`
Caso encontre problemas, renomeie o projeto (que será clonado como `plf-es-2024-1-ti3-8981100-cycling-connect`) para um nome mais curto._

### Passo a passo

#### 1. **Instalação das dependências**

```powershell
choco install -y nodejs-lts microsoft-openjdk17
```

_Observação: se você já possui o Node no seu sistema, certifique-se que esteja na versão 18 ou superior. Se você já possui o JDK no seu sistema, recomenda-se utilizar o JDK17. Pode ocorrer alguns problemas ao usar versões superiores do JDK._

#### 2. **Instalar o Android Studio**

Faça download e instale o Android Studio. Durante o processo de instalação, certifique-se de marcar os itens abaixo:

- `Android SDK`
- `Android SDK Platform`
- `Android Virtual Device`
- Se você ainda não utiliza o Hyper-V: `Performance (Intel ® HAXM)` ([Verificar para AMD ou Hyper-V](https://android-developers.googleblog.com/2018/07/android-emulator-amd-processor-hyper-v.html))

#### 3. **Instalar o Android SDK**

Após a instalação, abra o Android Studio e siga o passo a passo a seguir:

- Clique em "More Actions" e selecione a opção "SDK Manager"
- Selecione a aba "SDK Platforms" e ative a opção "Show Package Details" no canto inferior direito. Procure pela opção `Android 14.0 ("UpsideDownCake")` e certifique-se que os seguintes itens estão marcados:
  - `Android SDK Platform 33`
  - `Intel x86 Atom_64 System Image` ou `Google APIs Intel x86 Atom System Image`
- Em seguida, selecione a aba "SDK Tools" e ative novamente a opção "Show Package Details". Procure pela opção `"Android SDK Build-Tools"` e certifique-se que as seguintes versões estão instaladas:
  - `34.0.0`
  - `33.0.1`
- Por fim, clique em "Apply" para baixar e instalar o Android SDK e as ferramentas de build relacionadas.

#### 4. **Configurar a variável de ambiente ANDROID_HOME**

1. Utilize o comando `WINDOWS + R`, digite `sysdm.cpl` e aperte em OK
2. Clique na aba **"Avançado"** e depois em **"Variáveis de ambiente"**
3. Clique em **"Novo..."** para criar uma variável de usuário `ANDROID_HOME` que aponta para o diretório do seu Android SDK
   - O SDK normalmente é instalado, por padrão, no seguinte diretório:
     `   C:\Users\"Nome de Usuário"\AppData\Local\Android\Sdk`
     Você pode encontrar o diretório em que seu SDK está instalado pelo "SDK Manager" do Android Studio, em **Languages & Frameworks -> Android SDK**.
4. Para verificar se a variável foi setada corretamente, faça o seguinte passo a passo:
   - Abra o terminal
   - Copie e cole `Get-ChildItem -Path Env:\` no powershell
   - Verifique se `ANDROID_HOME` foi adicionado

#### 5. **Adicione platform-tools em Path**

1. Acesse novamente as variáveis de ambiente de usuário
2. Procure e selecione a opção de variável **"Path"**
3. Clique em **"Editar..."** e depois em **"Novo"**
4. Adicione o diretório do platform-tools na lista.
   - O diretório padrão para a pasta é:
     ```
     C:\Users\"Nome de Usuário"\AppData\Local\Android\Sdk\platform-tools
     ```

</details>

<details>
<summary>
<strong>[Windows] Dashboard: Web</strong>
</summary>
  
Este guia tem como objetivo fornecer instruções passo a passo para configurar e executar um projeto React para desenvolvimento Web.
### Pré-requisitos

- [Git](https://git-scm.com/)
- [Npm](https://docs.npmjs.com/)
- Node na versão LTS (>= 18.20.1)
  - Caso você queira alternar entre diferentes versões do Node, utilize o [nvm](https://github.com/coreybutler/nvm-windows).
- JDK (Java Development Kit) na versão 17.0.10
### Passo a passo

Navege até a pasta da aplicação web:
```powershell
cd .\Codigo\
cd CyclingConnectWeb
cd cycling-connect-web
```

#### 1. **Instalação do npm e suas configurações**

```powershell
npm install
```
 #### 2. **Como rodar o projeto**
 
 ```powershell
npm run dev
```
_Observação: Ao rodar esse comando será gerado um link com a url local_


_Observação: se você já possui o Node no seu sistema, certifique-se que esteja na versão 18 ou superior. Se você já possui o JDK no seu sistema, recomenda-se utilizar o JDK17. Pode ocorrer alguns problemas ao usar versões superiores do JDK._

</details>

### Configurações de Projeto

1. Clone o repositório do projeto
   ```
   git clone https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2024-1-ti3-8981100-cycling-connect.git
   ```
2. Instale as dependências do projeto

   Navegue até o diretório do projeto clonado e execute os seguintes comandos:

   ```bash
   cd .\Codigo\CyclingConnect
   npm install
   ```

3. Com o Android Studio aberto, crie um novo dispositivo virtual Android (AVD) através da opção Virtual Device Manager ou conecte um dispositivo Android físico ao seu computador. Você pode verificar se o dispositivo está conectado com o seguinte comando:
   ```bash
   adb devices
   ```
4. Abra um terminal na raiz do seu projeto e execute o seguinte comando para iniciar o server de desenvolvimento:
   ```bash
   npm start
   ```
5. Após a inicialização do Metro e com um emulador/dispositivo conectado, utilize a tecla **`a`** no mesmo terminal para rodar a aplicação ou abra outra janela e execute o seguinte comando:
   ```bash
   npm run android
   ```
6. Executar a aplicação back-end localmente

   - Volte na raiz do projeto e navegue até o diretório da aplicação Spring:

   ```bash
   cd .\Codigo\Cycling-api\src\main\java\com\CyclingConnect\cyclingconnect
   ```

   - Instale as dependências do Maven e execute o arquivo `CyclingconnectApplication.java` pela sua IDE.

Após a execução dos passos acima, o aplicativo será instalado e iniciado automaticamente no emulador ou dispositivo Android conectado e você poderá testar as funcionalidades com as requisições locais.

# [Android] Gerar APK e AAB

Por padrão, existe um APK na pasta `...\android\app\build\outputs\apk\debug` que é gerado para instalar o app no emulador durante o processo de desenvolvimento.

## Atualizar Gradle

1. Confira a versão atual do seu gradle:
   ```powershell
   ./gradle --version
   ./gradlew --version
   ```
2. No site [gradle.org/releases](http://gradle.org/releases) confira a versão mais atual e execute o comando:
   ```powershell
   ./gradlew wrapper --gradle-version lts
   ```
3. Digite novamente o comando `./gradlew --version` para completar o download e verificar a versão atualizada.

## Geração da build

1.  Acesse a pasta do aplicativo:
    ```powershell
    cd .\Codigo\CyclingConnect
    ```
2.  Execute o comando abaixo para gerar o arquivo keystore (chave):
    ```powershell
    keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
    ```
    - Será necessário inserir uma senha de 6 dígitos e mais algumas informações.
    - Ao finalizar, será gerado o arquivo de chave no diretório raiz `(my-upload-key.keystore)`.
3.  Copie a chave e cole no diretório `android/app` que fica dentro da pasta android do seu projeto: `"Nome do Aplicativo"\android\app`.
4.  Configure as variáveis do Gradle:

    Na pasta android do seu projeto `"Nome do Aplicativo"\android` no arquivo `gradle.properties`, insira os comandos a seguir:

    ```properties
    MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
    MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
    MYAPP_UPLOAD_STORE_PASSWORD=******
    MYAPP_UPLOAD_KEY_PASSWORD=******
    ```

5.  Na pasta `"Nome do Aplicativo"\android\app` no arquivo build.gradle insira as configurações abaixo, dentro de `android {signingConfigs}`:

    ```gradle
    release {
        if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
            storeFile file(MYAPP_UPLOAD_STORE_FILE)
            storePassword MYAPP_UPLOAD_STORE_PASSWORD
            keyAlias MYAPP_UPLOAD_KEY_ALIAS
            keyPassword MYAPP_UPLOAD_KEY_PASSWORD
        }
    }
    ```

    E dentro de `{buildTypes}` adicione o seguinte trecho:

    ```gradle
    release {
        ...
        signingConfig signingConfigs.release
    }
    ```

6.  Gerando o arquivo APK e AAB:

    **[APK]** No diretório `/android` do seu projeto, abra um terminal e execute o seguinte comando:

    ```bash
    ./gradlew assembleRelease
    ```

    **[AAB]** Dentro do diretório `/android` execute o seguinte comando:

    ```bash
    ./gradlew bundleRelease
    ```

7.  O APK se encontrará na pasta `...\android\app\build\outputs\apk\release`.
