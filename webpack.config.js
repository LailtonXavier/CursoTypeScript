const path = require('path');

module.exports = {
  mode: 'development', // ele fica mais rapido
  entry: './src/A019-exercicio/A019-exercicio.ts', // mudando aqui
  module: {
    rules: [
      {
        // pra todos os arq ts ou tsx que encontrar ele usa o ts-loader
        test: /\.tsx?$/,
        loader: 'ts-loader', // estava = use: 'ts-loader'
        exclude: /node_modules/, // excluindo pasta
        // adicionando o arq de configuração que vou utilizar
        options: {
          configFile: 'tsconfig-frontend.json',
        },
      },
    ],
  },
  resolve: {
    // resolução de modulo
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    // pasta de saida, dento do dist nosso bundle
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'frontend', 'assets', 'js'),
  },
  // source map == mapear os arqs js para ts, dessa forma eu vejo a linha do ts
  // que apresentou determinado erro  =  muito bom
  devtool: 'source-map',
};
