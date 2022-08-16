### Seção tipos basicos (256)

# (256) type annotations
   - esta relacionando a qual tipo da tal variavel

   - O que vamos ver abaixo é o type annotation
   - se o typescript inferir, pode deixar, esta certo se der `any`...
   - se vc ver o tipo `any` significa que é qualquer coisa

   - tudo explicado...

# (257) typo any
    - Esse é um tipo que vc não vai querer no seus codigos

    - Any = seria uma falta de tipo ou qualquer tipo

    - Utiliza Any apenas em ultimo caso, pq ele n te da erro algum
       - e precisamos ser mais especifico ao tipo

# (258) tipo void
    - É um metodo ou uma func que n retorna nada
    - muito simples

# (259) tipo object (objetos em geral)
    - Muito importante porque tudo retorna um objeto em js
    - sempre que for criar um objetco extendido, tem duas opcões:
      - criar um objeto de uma vez
      - criar um chave com cada tipo de objetos que vai existir
    - se quiser pode usar o Record unknown como dito no exemplo
    - readonly  =  a cheve nunca vai ser alterada

    - não pode usar para tipar:
      - object
      - {}

# (260) tipo array
    - Duas formas de criar:
      - Array<T>  =  com generic
      - T[]
    - podemos passar nosso propio tipo
    - o tipo de uma func pode ser passado para uma var que o referencia

# (261) tipo tuple
    - Esse é tipo exclusivo do TS
    - seria um array com tipo e tamanho especificos

    - podemos fazer para ser imutavel

# (262) A007-tipo-null-undefined
   - null e undefined no typescript representa apenas um valor
     - mas a intersão de uso dele é diferente

     - undefined: a linguagem utiliza pra dizer que algo n foi definido
       - geralmente n usamos undefined

     - null: ja é mais usado

# (263) tipo never
   - ele é outro valor que representa um `nao valor`
   - significa que o metodo a função n vai retorna nada

   - quais situações n pode retornar nada:
     - num laço inifito (for)
     - ou em erro

# (264) tipo enum
   - esse tipo de dado só existe no typescript, javascript n existe
   - é uma estrutura de dados n ordenada que a gente utiliza qnd temos mais
     de uma opção para alguma coisa, geralmente queremos enumerar.
     por exemplo:
       - eu tenho uma estrutura de dados ao qual quero colocar cores e
       uma numeração para elas posso utilizar enum para isso

   - podemos criar um enum com string, numericos, com string e numeros

# (265) tipo unknown
   - ele é mesma coisa do any so que mais seguro
   - ele é o pai de todos os tipos

   - se vou receber uma coisa q n sei oq seria
     - uso unknown para tratar

# (266) tipo union (onion types)
   - seria eu falar que uma variavel, parametro, retorno de func
     pode ter mais de um

# (267) tipos literais
   - Seria utilizar valores como tipo

# (268) types alias
   - seria criarmos um apelido para nosso tipo, isso limpa nosso codigo
   - tipos criados por nós começa com letra maiuscula
   - são protocolos, contratos

# (269) intersection type
   - não é tão utilizado quanto union tipe
   - union  =  | (ou), intersection  =  &  (e, mas é usado cm intercessão msm)
     - podemos utilizar interfaces

# (270) funções como tipo
   - simplesmente usando `type` para tipar uma func, isso ajuda muito
   - quando tipamos da forma correta o ts ajuda muito

# (271) structural typing (tipagem estruturada)
   - para o typescritp a identidade do tipo n importa, somente as restrinções q
     estão naquele tipo
   - em Java o que da pra fazer no typescript usando essa estutura n iria da
   erto,
     ou seja, isso é bom
   - seria criar um tipo que obedesça as regras

# (272) types assertions (asseções)
   - seria um tipo casher (quando é convertido um tipo pro outro)

**Vanilha TypeScritp**
*Nao usa esse tipo de desenvolvimento, normalmente é uma lib, framework*

### Ate podemos trabalhar no back-end *back-end*
   - era so copitalar os arquivos da pasta `src`
     - npm tsc  =  ele vai criar a pasta `./dist` ww
   - qnd trabalhar no back teremos todos os arquivos na pasta `dist`
     - no front eu vou ter um webpack

# (273) configurar webpack
   - tarbalhar typescript no front-end
     - criando a pasta dento de `src`
       - objetivo: fazer o bandle

     - depenci:
       - npm i ts-loader webpack webpack-cli -D

     - criando pasta na rays: webpack.config.js
       - vc n precisa decorar nd, a doc tem tudo
       - configurar tudo

     - fazer o teste
       - npx webpack  == vai so copilar os arq
       - npx webpack -w  == vai ficar assistindo

     - podemos colocar pra rodar de daus formas:
       - npx webpack -w
       - criar um script dentro `packge.json`
         - "dev": "webpack -w"
         - npm run dev

     - criando um tsconfig para o frontend
       - mudando a saida para `./frontend`
       - mudando o `webpack.config.js``
         - mudando...

# conclusion webpack para front e back
   - se eu quise mexer no frontend vou para o arq `tsconfig-frontend.json`
   - se eu quise mexer no backend vou para o arq `tsconfig.json`

   - frontend:
     - colocar pra rodar =
       - npx webpack -w  ou  npm run dev
         - ele cria a pasta de `js`

   - backend:
     - colocar pra rodar =
         - npx tsc
         - ele cria a pasta `dist`

   - organizando os scripts em packege.json
        - build:frontend: 'webpack'
        - npm run build:frontend  ==  roda o front
    - build:backend: 'tsc'
        - npm run build:backend

# Conclusão final
  - Hoje em dia é usado fazer um back e front tudo separado,
    - o que foi ensinado acima, foi apenas para observar como era antes


