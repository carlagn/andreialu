# andreialu

Para inicializar nova página de projecto:

Adicionar no ficheiro "global.js" na pasta "mixin" o seguinte parámetro:

{
    name: "Titulo do projecto"
    path: "/work/titulo-do-projecto"
}

em path: para adicionar um novo projecto, o prefixo tem que ser sempre "/work/", sendo que o nome do URL deverá, de preferência, ser um titulo separado por hifens.
em name: O título escrito nesta secção é o que aparecerá nos botões "Antes" e "Depois" no rodapé das páginas dos projectos individuais.

Para CRIAR a página que vai ter conteúdo:

Criar um novo ficheiro na pasta "work" dentro da pasta "pages". O nome do ficheiro tem que ser IGUAL ao texto definido acima na variável "path", menos o prefixo de "/work/", e ser guardado como um ficheiro ".vue".

Para inserir conteúdo, ver o ficheiro "style-guide.vue" para referência de como colocar os elementos. Podes inclusivé copiar todo o ficheiro e alterar o seu conteudo.