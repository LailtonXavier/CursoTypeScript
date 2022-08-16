### TypeScript

  # start
    - npm init -y

  # (250 aula) instalar o typescript
    - n vms instalar de forma global, apenas para cada projeto
      - npm i typescript -D
    -- versão do typescript do professor: 3.9.5

    - Colocar pra rodar
      - npx tsc index.ts

      Dois modulo
        - script module: um arq javascript enorme
          -- seria dois aquivos o mesmo nome, da um erro 'duplicate'

        - model module: seria a correção de cima, qnd exportamos alguma coisa isso corrigi =
        - geralmente vms trabalhar no model mudule

  # (251) ts-node code runner
      - npm i ts-node -D
       - isso n vai rodar em produçao, so para testes msm
      - Criar uma pasta (.vscode) e dentro (settings.json)

        - essa configuração seria do VSC so deste projeto
        - dentro: digite = code-runner.executorMap e dar enter
        - limpa tudo e deixa apenas o = typescript
          - typescript: " npx ts-node --files";  =  mude para isso.
          - files = esta relacionado ou include e excluide do tsconfig.json
          - podemos colocar = --transpile-only   = mas ele n checa error, é mais rapido

        - Podemos utilizar para ficar assistindo = npx tsc -w (mais ainda n configurou)

  # Ambiente pronto

  # (252) Eslint configurar
    - npm i eslint -D
    - npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
    - e criar um arquivo `.eslintrc.js` = e preencher esta no git o codigo

  # (253) Prettier configurando
    - npm i prettier eslint-config-prettier eslint-plugin-prettier -D
    - agora é so ativar o arq `.eslintrc.js` = plugin:prettier/recommended
    - criar um arquivo = .pretierrc.js

  # (256) tsconfig.json
    - configurando o typescript
    - Para ver as opçoes:
      - npx tsc --help
    _ mas para facilitar, vms pegar algo ja pronto

      - npx tsc --init
      - mostrou um arquivo cheio de opçoes que vms falar logo adiante
        -- lib: []  ===  tenho q falar oq vou usar no meu projeto
      - `outDir` mostar em qual pasta vai ficar os arquivos de copilação
        -- outDir: './dist' =  se n tiver isso o js vai colocar todo mundo
        junto e so ia mudar a extensão de ts para js
      - strict  =  restringi muito coisa do js
        - strict: true  =  ele vai te dar erro enquanto esta digitando
      - esModuleInterop  =  permite import e exports

      - criando outra configuração dentro de tsconfig
        - include  =  vms colocar nosso arq de entrada
        - dessa forma podemos rodar  =  npx tsc
          - criou a tasta e os arqs em js dentro de `dist`
          - se quiser pode apagar, no momento so vms utilizar ts

  # (257) editorConfig
    - instalar a instessao e adicionar no projeto
    - isso é bom pq todo mundo vai ter essa configuração

  # proximo sessão tipos basicos
