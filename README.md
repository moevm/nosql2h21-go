# nosql2h21-go

## Installation

- Linux
  - (wsl) <https://stackoverflow.com/a/67938487/9398364> <https://dev.to/bowmanjd/install-docker-on-windows-wsl-without-docker-desktop-34m9>
  - apt-get update
  - apt-get upgrade
- Node.js
  - apt install node npm
  - sudo npm install -g npm stable
  - sudo npm install -g node
  - npm install -g yarn
- Docker
  - sudo apt remove docker docker-engine docker.io containerd runc
  - sudo apt install --no-install-recommends apt-transport-https ca-certificates curl gnupg2
  - source /etc/os-release
  - curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
  - echo "deb [arch=amd64] https://download.docker.com/linux/${ID} ${VERSION_CODENAME} stable" | sudo tee /etc/apt/sources.list.d/docker.list
  - sudo apt update
  - sudo apt install docker-ce docker-ce-cli containerd.io
  - sudo usermod -aG docker $USER

## How we created this

- [Next.js](https://nextjs.org/)
  - yarn create next-app --typescript
- Mongodb
  - yarn add mongoose

## How to start

- sudo dockerd
- sudo docker-compose build
- sudo docker-compose up

## How to stop

- sudo docker-compose down
