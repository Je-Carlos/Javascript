/* Parâmetros

Nem todos os parâmetros que definimos são utilizados quando uma função é executada
Devido a falta de argumentos. Por isso é importante preparar para caso estes 
argumentos não sejam declarados.*/
function perimetroForma(lado, totalLados = 4) {
  totalLados = totalLados || 4;
  return lado * totalLados;
}
