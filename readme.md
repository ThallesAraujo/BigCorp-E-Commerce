![alt text](readme-assets/bigcorp-logo.png "BigCorp - Logo")

# Projeto BigCorp LTDA

![alt text](readme-assets/screenshot.png "BigCorp - Screenshot")

### Requisitos (ambiente):

- NodeJS
- Angular CLI
- Python 3 (API)
- Pip + Virtualenv (API)

## Instruções (Front-End)

- Instalar as dependências com `npm install`
- Definir o endereço de API no atributo `BaseURL` no environment a ser utilizado
- Executar a aplicação com `npm start` ou `ng serve`

## Instruções (API - MacOS)

A aplicação vem pré-configurada com uma API já publicada no Heroku. Caso prefira, você pode executá-la em ambiente de desenvolvimento local seguindo esses passos:

- Instalar o Python 3 do site oficial
- Instalar o pip usando o comando `python3 -m pip install pip --upgrade`
- Instalar o Virtualenv usando o comando `sudo pip install virtualenv`
- Na pasta do projeto, criar o ambiente virtual usando o comando `virtualenv <<Nome do ambiente>>`
- Ativar o ambiente usando o comando `source <<Nome do ambiente>>/bin/activate`
- Instalar as dependências usando o comando `pip install requirements.txt`
- No arquivo `app.py`, comentar as linhas para execução em produção:
    ```
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
    ```
- descomentar a linha de execução em ambiente dev (`app.run()`)
- Iniciar a aplicação usando o comando `python3 app.py` 