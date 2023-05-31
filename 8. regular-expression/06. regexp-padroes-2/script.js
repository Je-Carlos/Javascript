// telefone
const regexpTELEFONE = /(?:\+?55\s?)?(?:\(?\d{2}\)?[/s-]?)?\d{4,5}[-/s]?\d{4}/g;

const telefones = [
  "+55 11 98888-8888",
  "+55 11 98888 8888",
  "+55 11 988888888",
  "+55 11988888888",
  "+5511988888888",
  "5511988888888",
  "11 98888-8888",
  "11 98888 8888",
  "(11) 98888 8888",
  "(11) 98888-8888",
  "11-98888-8888",
  "11 98888 8888",
  "11988888888",
  "11988888888",
  "988888888",
  "(11)988888888",
  "98888 8888",
  "8888 8888",
];
for (telefone of telefones) {
  console.log(telefone, telefone.match(regexpTELEFONE));
}

// email
const regexpEMAIL = /[\w.-]+@[\w-]+\.[\w.-]+/gi;

const emails = [
  "email@email.com",
  "email@email.com.org",
  "email-email@email.com",
  "email_email@email.com",
  "email.email23@email.com.br",
  "email.email23@empresa-sua.com.br",
  "c@contato.cc",
];
for (email of emails) {
  console.log(email, email.match(regexpEMAIL));
}

// tag
const regexpTAG = /<\/?[\w\s="']+\/?>/gi;
const tags = [
  "<div>Isso é uma div</div>",
  '<div class="ativa">Essa está ativa</div>',
  '<img src="imagem" />',
  '<img src="imagem">',
  '<ul class="ativa">',
  "<li>Essa está ativa</li>",
  "</ul>",
];
for (tag of tags) {
  console.log(tag, tag.match(regexpTAG));
}

// tag apenas o nome
const regexpTagNome = /(?<=<\/)[\w]+/gi;
const tagsNome = [
  "<div>Isso é uma div</div>",
  '<div class="ativa">Essa está ativa</div>',
  '<img src="imagem" />',
  '<img src="imagem">',
  '<ul class="ativa">',
  "<li>Essa está ativa</li>",
  "</ul>",
];
for (tag of tagsNome) {
  console.log(tag, tag.match(regexpTAG));
}
