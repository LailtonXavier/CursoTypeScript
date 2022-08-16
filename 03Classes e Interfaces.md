### Seção Classes e Interfaces - POO

# (279) Classes em TypeScript
   - A classe em TypeScript tamberm funciona como um tipo
   - Pode ser uma classe e um tipo ao mesmo tempo

   - se falar public no atributo, ele sem nada ja é publico

   - readonly é similhar ao const

   - strutor all types  =  o TS trabalha dessa forma, se em nosso Obj
    tem os mesmo atributor podemos alterar
    - porque Classe criam objetos

# (281) modificadores public private
  - PUBLIC
  - um metodo ou atributo `public` ele é acessivel dentro da classe, fora e em todas
    as subs-classes
    - dessa forma, posso acessar de qualquer lugar
  - se n fosse `readonly` eu poderia ate alterar fora da classe
  - se remover o nome `public` o atributo ou metodo fica publico tbm
  - utilizo o atributo com `public` obrigatorio qnd uso o atalho (Colaborador)

  - PRIVATE
  - O atributo ou metodo q for `private` dentro da classe só acesseivel dentro da
    propria classe em q foi criada
    - com isso estou emcapsulando
    - para ter o acesso preciso criar metodos que chame p fora
  - PQ é private? se for public possa fazer coisas pelas as costas como:
    pegar o atributo e dar um pop(), isso fora da classe e se for public
  - se n for `readonly` podemos ate fazer receber um array vazio
  - só asseval nela mesmo, nem em sub-classe

# (282) herança
  - Imagine a situação em que um `usuario` possui os mesmo campo que a `pesssoa`
    observe que fica redundante fazer duas classes com msm campos, dai entra
    `herença`.

  - Utilizando esse site para fazer os diagramas UML (https://www.yworks.com/yed-live/)
    - muito bom
  - Para quer criar um molde de classe e extender para outras?
    - pq assim eu reutiliso o codigo do pai e posso reescrever alguma coisa
  - qnd faço herença eu tenho relação do tipo `é um`:
    - `aluno` é uma `pessoa`, `cliente` é uma `pessoa`.

  - o professor prefere usar composição, agragaçõa, associação,  vms olhar isso

# (283) super para ter acesso á super classe
  - `super` = significa que é uma classe que esta acima na hierarquia das outras
    classes que extendem ao qual seria `sub`

  - para ter acesso a classe pai, usamos sub
    - por exemplo: eu quero subscrever o metodo e n quero mudar o comportamento
      real do metodo da super classe

# (284) modificador de acesso protected
  - Veja que `Colaborador` esta `private`, com isso a classe filha n pode pegar
    - `private` so pode ser acessado na classe q criou
    - `protected` pode ser acessado tanto na classe que foi criado qnd na
      nas sub-classes, classe filha - mas n tem acewsso fora das classes

# (285) getters e setters
  - Pq colocar um atributo `private` e criar um metodo publico para ter
    acesso?
      - Isso é utilizando para a gente fazer alguma coisa antes de entregar
      o valor e quando vc tiver o `setter` de alguma coisa
      - `get` vc pode modificar ou tratar antes de entregar o valor
      - `set` serve pra gente mudar o valor
  - a gente encapsulo por segurança se vms precisar de alguma coisa

  - forma atual de usar get e set
    - ele funciona tipo atributos da classe
    - qud utilizar para setar alguma coisa ou retorna
      uasesse o = (igual)
# (286) atributos e metodos
  - O que seria um metodo estatico (static) ?
    - É um metodo que pode ser acessado sem instanciar a classe, ou seja
      não acesso ao metodo pela a instancia da classe
      - Mas tenho acesso pela a propria classe

  - atributos estaticos
    - mesma ideia, eu posso acesssar fora da classe

# (287) constructor private (singleton = padrao de projeto)
  - Normalmente temos apenas uma conexão com banco dados.
    - como é o funcionamento:
      qnd chamar essa classe deve retorna uma instancia q ja foi criado no
      programa anteriomente, ou criar a instancia, caso n tenha criado.
    - resumindo: n pode criar outra instancia se já existe uma.

  - se colocar o `constructor` como `private`, n podemos da `new` da maneira
    antiga.
  - usando `static` para corrigir

# (288) abstract
  - Utililizamos classes `abstract` para termos duas coisas:
    - Para termos um tipo, tdas classes q extestenderem vai ter o msm tipo
    - Todas as classes q extenderem tenha o mesmo metodo e atributo

  - so da classes ser `abstract` ela so pode ser extendido pelas as filhas

# (289) associação
  - Falamos de `herança` é um tipo de ligação: É 1 (is a)
    - `Aluno` que `extends` de `Pessoa`, Aluno é uma pesso

  - `Associacao` tipo de ligação: Tem um (have a)
    - Relação mais fracas q podemos ter, ligar um obj a outro, fazendo que
    nenhum dependa do outro.

  - resumindo: é eu falar uma classe usa a outra para fezer algo, só isso.
    - sem depender uma da outra

  # (290) inversão de dependencia (dependecy inversion)
    - Classe `abstract` é um contrato que define o que todas as ferramentas
      devem ter

    - Classes Abstract e Interface me permite fazer inversão de dependencia
      - ao invees de  `Escritor` apontar para `Caneta`, o `Escritor` depende
         de um contrato `Ferramenta` ao qual ele é dificil de alterar, ser
         alterado.
          - Pq todo mundo que esta herdando de Ferramenta como Caneta e
          Maquina, se for alterada vai da merda.

    - Resumindo: é melhor fazer essa dependecia de Classe para um
      Contato (classe abrstract)

# (291) agregação entre classes
  - A composição e agregação são similiar
  - Explicando:
    - Imagine um carro, e ele tem rodas, o carro pode existir sem as rodas
      e as rodas tbm podem existir sem o carro, POREM o carro não funciona
      sem as rodas  -  esse tipo de relacao é chamado de agregação

# (292) composicao entre classes
  - Resumir:
    - associação relaçao mais fracas entre os Objetos

  - Quando falo de associacao significa que um Objeto vai utilizar outro
    dentro do codigo

  - Agregacao: uma relação mais fortes, um Objeto precisa de outro

  - Composiçao: Um Objeto tem outro Objeto como parte dele
    - Imagine o carro e motor, o carro precisa muito, ent é composição
      - Qnd liga o carro, vc liga o motor, qnd desligar o carro, o motor
        vai ser desligado tbm, ent o motor é o carro.
        O motor é parte integral do carro.
    - Ser Humano e coração, n tem como uma pessoa ter vida sem o coração,
      isso seria composicao
    - Uma Classe tem que fazer parte da outra

# (293) implementando type Alias em Classes
  - criando um contrato usando Abstract

  - public  = é o mais aberto possivel, posso acesar de qualquer lugar
  - protected  =  so posso acessar nas classes filhas
  - private  =  somente na classe que estou criando o atributo

  - Type Alias
    - qnd utilizar um Tipo ao inves de `extends` vai ser `implements`
    - posso implementar Varios tipos

# (294) interfaces typescript
  - 99% é igual a types Alias

  - Criar um type Alias ou interface, n faz nenhuma diferença, os dois
    fazem as mesmas coisas

  - Eles criam tipos ou contratos

  - O type tem uma vantagem, vc pode utilizar Union com Type

  - Diferença:
    - Interfaces, normalmente vc utilizar para objetos POO
    - consigo extender Interface
      - muito parecido com Type usando intersection
    - Trabalhando com Interfaces estou modelando uma forma
    - Mas Interfaces tem uma restrinção a mais,  onde eu posso suprir
      - extendendo mais de uma interfaces

  - Type:
    - usando: eu posso modelas uma coisa, outra, uma forma
    - tem um pouco de vantagens pq posso fazer o que eu quiser

# (295) exercicio-video
  - map:
    - Criar interface primeira VidoePlayer, esse seria do elementos
    - Criar outra interface das ações necessaria
    - foi bem simples

# (296) Declaration merging em interfaces
  - Type Alias e interfaces são praticamente a msm
    - pode utilizar um ou outro

  - interfaces eu posso utilizar o msm nome para dois tipos diferente
    - Type eu n posso fazer isso
    - isso se chama: Declaration merging ( as duas interfaces serao unidas)

  - isso foi so pra mostrar, mas normalmente n usamos muito
