Instalação do NVM, Node.js e NPM no WSL
Recomendável remover todas as instalações existentes do Node.js ou do NPM do seu sistema operacional antes de instalar um gerenciador de versão.

Instale o Curl

sudo apt-get install curl
Instale o NVM

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
Reabra o terminal e execute o comando abaixo para verificar se o NVM foi instalado corretamente.

command -v nvm
Se o retorno for 'nvm' então o NVM foi instalado corretamente.

Instale a versão LTS estável atual do Node.js

nvm install --lts
execute o comando abaixo para verificar as versões do Node.js e NPM instaladas.

node --version
npm --version



npm install

npx expo start


Developing React Native with Expo/Android Emulators on WSL2 — Linux Subsystem
https://medium.com/@akbarimo/developing-react-native-with-expo-android-emulators-on-wsl2-linux-subsystem-ad5a8b0fa23c

https://stackoverflow.com/questions/62398464/how-to-run-android-emulator-on-windows-while-using-wsl2-with-zsh
