FROM node:18.17.0-slim

RUN apt update && apt install -y \
    git \
    ca-certificates \
    wget \
    curl \
    default-jre \
    && apt autoremove -y \
    && apt clean -y \
    && rm -rf /var/lib/apt/lists/*

ENV JAVA_HOME="/usr/lib/jvm/java-11-openjdk-amd64"

USER node

WORKDIR /home/node/app

RUN echo 'HISTFILE=/home/node/zsh/.zsh_history' >> ~/.zshrc

CMD ["sh", "-c", "npm i && tail -f /dev/null"]