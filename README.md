Para rodar e testar esse repositório, é necessário utilizar [Docker](https://docs.docker.com/get-docker/ "Get Docker") e [Docker Compose](https://docs.docker.com/compose/install/ "Install Docker Compose").

Tendo o docker instalado e funcionando, abra o terminal de sua preferência e navegue para pasta que clonou o repositório. Iremos rodar o seguinte comando:
```bash
docker-compose up
```
O projeto estará rodando no host local (`127.0.0.1` ou `localhost`), na porta 8080, podendo ser acessado usando, por exemplo, a url `http://127.0.0.1:8080/recipes/?i=orange,vanilla`

---
Os testes também precisam rodar de dentro do container. Felizmente existe um comando que já irá nos levar direto para lá:
```bash
docker exec -it $(docker ps | grep dmtech | awk '{print $1;}') /bin/bash
```
Assim, estaremos dentro do container da aplicação (dica, basta executar `exit` para sair). Lá de dentro podemos rodar
```bash
npx jest
```
E os testes serão executados.
Caso queira validar a cobertura, basta executar
```bash
npx jest --coverage=true
```
