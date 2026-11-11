# Núcleo de Termografia — PEB/COPPE/UFRJ

**Site:** [www.nucleodetermografia.com.br](https://www.nucleodetermografia.com.br)

Site de comunicação científica sobre **termografia infravermelha** do Programa de Engenharia Biomédica (PEB) da COPPE/UFRJ, com as pesquisas realizadas no **LAPIS — Laboratório de Processamento de Imagens e Sinais**.

## Para que serve

1. **Comunicar com o participante de pesquisa.** Quem recebe um convite precisa encontrar o laboratório na internet, entender o que vai acontecer no exame e confiar no que lê. O site reúne objetivos das pesquisas, etapas do atendimento, o que levar, perguntas frequentes e a informação de que o **TCLE é lido e assinado no dia do exame**.
2. **Explicar termografia em linguagem simples** para qualquer pessoa: o que é, onde é usada e por que a medida precisa de protocolo.
3. **Expor o problema central da área — reprodutibilidade —** e a proposta de um núcleo multiusuário de termografia, aberto a pesquisas de toda a UFRJ, com protocolos validados e ambiente controlado.
4. **Dar identidade visual** séria e consistente ao grupo.

> Página de referência das nossas pesquisas em termografia — não é um site institucional. As pesquisas descritas são realizadas no LAPIS/PEB/COPPE/UFRJ.

## Seções

| Seção | Conteúdo |
|---|---|
| Participe | Convite, as duas pesquisas e seus objetivos, TCLE, etapas, FAQ, contato |
| O que é termografia | Explicação para leigos e áreas de uso |
| O desafio | Fatores que afetam a reprodutibilidade |
| Nossa proposta | Núcleo multiusuário e papel da Engenharia Biomédica |
| Vídeos | Miniaturas do YouTube girando; abre o vídeo no próprio site |
| Artigos comentados | Estudos relevantes com comentário em linguagem simples |
| Espaço do pesquisador | Pesquisas em andamento e links para resultados |
| Equipe | Foto, mini currículo e links (Lattes, ORCID) |
| Comunicação | Identidade visual, eventos e ciclo de visitas abertas |
| Fotos | Galeria de eventos e do laboratório |
| Engenharia Biomédica | PEB em destaque e links dos laboratórios do programa |
| Links importantes | UFRJ, COPPE, PEB, LAPIS, FINEP, FAPERJ, CAPES, CNPq |
| Como chegar | Mapa do NTIEB na Cidade Universitária |

## Como atualizar (sem programar)

Todo o conteúdo que muda fica em **um único arquivo: [`js/conteudo.js`](js/conteudo.js)**.

1. No GitHub, abra `js/conteudo.js` e clique no **lápis** (Edit).
2. Siga os exemplos comentados (linhas que começam com `//`). Para ativar um exemplo, apague as `//` do início.
3. Clique em **Commit changes**. O site atualiza em cerca de 1 minuto.

| Quero… | Onde |
|---|---|
| Publicar um vídeo | `videos:` — cole o link do YouTube |
| Comentar um artigo | `artigos:` — use sempre DOI ou link conferido |
| Divulgar evento ou visita | `eventos:` / `visitas:` — datas no formato `AAAA-MM-DD`; datas passadas somem sozinhas |
| Pôr foto da equipe | envie para `img/equipe/` com o nome indicado em `equipe:` (quadrada, ~400×400 px) |
| Pôr fotos do campus no topo | envie para `img/campus/` e liste em `fotosCampus:` |
| Galeria | envie para `img/fotos/` e liste em `fotos:` |
| Tirar a faixa do topo | `modoProposta: false` |

Para enviar imagens: abra a pasta no GitHub → **Add file → Upload files**.

## Estrutura

```
index.html          página única do site
css/estilo.css      visual (cores, tipografia, layout)
js/conteudo.js      ← CONTEÚDO EDITÁVEL
js/site.js          funcionamento (não precisa mexer)
fonts/              Roboto e Open Sans (licença OFL), servidas pelo próprio site
img/nute-logo.png   logotipo NUTE (e versões mini/favicon)
img/logos/          logotipos institucionais
img/equipe/ img/campus/ img/fotos/
CNAME               domínio personalizado
```

HTML, CSS e JavaScript puros: sem frameworks, sem etapa de compilação, sem serviços de terceiros para funcionar. Fontes e imagens ficam no repositório. Só os vídeos (YouTube) e o mapa (Google Maps) dependem desses serviços, por natureza.

## Publicação (GitHub Pages)

1. **Settings → Pages → Build and deployment:** Source = *Deploy from a branch*, Branch = `main`, pasta `/ (root)`.
2. **Custom domain:** `www.nucleodetermografia.com.br` (o arquivo `CNAME` já está no repositório). Depois que o DNS propagar, marque **Enforce HTTPS**.
3. **DNS no Registro.br** (zona do domínio):
   - `www` → **CNAME** → `SEU-USUARIO.github.io`
   - domínio raiz (`nucleodetermografia.com.br`) → registros **A**: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`

## Identidade visual

- **Marca:** logotipo NUTE — Vesta, deusa do fogo sagrado, segurando a chama: o calor que medimos e a medida mantida sempre do mesmo jeito. Dialoga com a Minerva do brasão da UFRJ.
- **Cores:** Azul-noite `#0A2342` · Azul-engenharia `#1F5FA8` · Azul-sinal `#3B8ED8` · Azul-gelo `#9BD6F4` · Branco-névoa `#F4F8FC`.
- **Tipografia:** Roboto (títulos) e Open Sans (textos).
- **Emblema NUTE:** versão solene (certificados, placas, eventos), em `img/nute-emblema.jpg`.

## Equipe

- Prof. Dr. Carlos Julio Tierra Criollo — chefe do laboratório
- Prof. Dr. Maurício Cagy — professor orientador
- Márcia Ramos da Silva do Nascimento — doutoranda
- Rachel Ingrid Pereira da Rocha Jannuzzi — mestranda

## Agradecimentos

FINEP, que financiou boa parte do prédio e dos equipamentos; FAPERJ; CAPES; CNPq.

## Direitos

© Núcleo de Termografia — PEB/COPPE/UFRJ. Todos os direitos reservados. Logotipos pertencem às respectivas instituições. Fontes Roboto e Open Sans sob SIL Open Font License.
