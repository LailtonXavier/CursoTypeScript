// Encadeamento opcional = ?
// Coalescencia nula = checa somento null e undefined = ??

type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
}

const documento: Documento = {
  titulo: 'um titulo',
  texto: 'um texto',
  data: new Date()
}

console.log(documento.data?.toDateString() ?? 'ixi, n existe');
