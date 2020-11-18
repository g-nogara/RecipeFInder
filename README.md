Para rodar e testar esse repositório, é recomendado utilizar [Docker](https://docs.docker.com/get-docker/ "Get Docker").
Além disso, irá precisar de uma chave de [API para o giphy](https://developers.giphy.com/docs/api#quick-start-guide "Quickstart GIPHY").
Tendo o docker instalado e rodando, abra o terminal de sua preferência e navegue para pasta que clonou o repositório. Iremos rodar os seguintes comandos:
```bash
docker build -t <nomeImagem> .
```
Onde `<nomeImagem>` pode ser o que quiseres. Mas detalhe com o ponto (<strong>.</strong>) no final do comando! Ele informa ao docker onde está o Dockerfile, que é necessário para construir a imagem.

Assim que esse comando terminar (pode demorar um pouco dependendo da velocidade da internet), iremos botar nossa imagem para rodar:
```bash
docker run -p <PORTPC>:<PORTDOCKER> -e PORT=<PORTDOCKER> -e giphyKEY=<chaveAPI> -d <nomeImagem>
```
Onde `<PORTPC>` é a porta da nossa rede, e `<PORTDOCKER>` é a porta exposta na rede do Docker. Além disso, `<chaveAPI>` é a chave da API do Giphy.
Aqui temos algumas informações extras. Caso não esteja muito familiarizado, as opções `-p <PORTPC>:<PORTDOCKER>` e `-e PORT=<PORTDOCKER>` podem ser omitidas, e a porta padrão será exposta na 8080.

Com esses comandos concluídos, o projeto já está rodando e pronto para ser utilizado!
