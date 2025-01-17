/* Como validar um CEP utilizando o Regexp */
const validaCEP = /\d{5}[\s-]?\d{3}/g;

const ceps = ["00000-000", "00000 000", "00000000"];

for (cep of ceps) {
  console.log(cep, cep.match(validaCEP));
}

/* Como validar um CPF pelo Regexp */
const validaCPF = /(?:\d{3}[.-]?){3}\d{2}/g;
const cpfs = [
  "000.000.000-00",
  "000-000-000-00",
  "000.000.000.00",
  "000000000-00",
  "00000000000",
];
for (cpf of cpfs) {
  console.log(cpf, cpf.match(validaCPF));
}

/* Validar CNPJ pelo Regexp */
const validaCNPJ = /\d{2}[.-]?(?:\d{3}[.-]?){2}[/.]?\d{4}[-.]?\d{2}/g;
const cnpjs = [
  "00.000.000/0000-00",
  "00000000000000",
  "00-000-000-0000-00",
  "00.000.000/000000",
  "00.000.000.000000",
  "00.000.000.0000.00",
];
for (cnpj of cnpjs) {
  console.log(cnpj, cnpj.match(validaCNPJ));
}
