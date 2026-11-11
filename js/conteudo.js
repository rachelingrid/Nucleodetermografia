/* =====================================================================
   CONTEÚDO DO SITE — o arquivo que você edita no dia a dia.
   Edite pelo GitHub (ícone de lápis) e clique em "Commit changes".
   Em cerca de 1 minuto o site atualiza.

   Regras simples:
   - Todo texto fica entre aspas: "assim".
   - Cada item termina com vírgula.
   - Linhas que começam com // são exemplos e não aparecem no site.
   ===================================================================== */

const SITE = {

  /* --- Contato ------------------------------------------------------- */
  contato: {
    email: "nucleodetermografia@gmail.com",
    whatsapp: "(21) 98081-3639",
    instagram: "fisio.rj",
  },

  /* --- Vídeos (YouTube): as miniaturas giram sozinhas --------------- */
  videos: [
    { titulo: "What is Infrared? — Teledyne FLIR", link: "https://www.youtube.com/watch?v=PCH0EzpAP34" },
    { titulo: "How Do Thermal Cameras Work? — Teledyne FLIR", link: "https://www.youtube.com/watch?v=dgQMw4406PI" },
    { titulo: "Industrial Thermography: Practical Applications", link: "https://www.youtube.com/watch?v=rlJw-98DQrI" },
    { titulo: "Veja como é feita uma termografia — Manutenção Predial", link: "https://www.youtube.com/watch?v=JMCvTpIAnCg" },
    { titulo: "Termografia", link: "https://youtu.be/Mhu9qSqZ2ao" },
    { titulo: "Aula #01 — O que é Termografia? — Escola de Termografia", link: "https://www.youtube.com/watch?v=W6sQLMPlUDM" },
    { titulo: "Aplicações da câmera termográfica — IPT", link: "https://www.youtube.com/watch?v=DK0_rhMwghE" },
    { titulo: "Termografia", link: "https://youtu.be/YdmCAKS_fmY" },
  ],

  /* --- Artigos comentados --------------------------------------------
     Publique só com DOI ou link conferido. */
  artigos: [
    {
      titulo: "Endothelial cell infection and endotheliitis in COVID-19",
      autores: "Varga Z, Flammer AJ, Steiger P, et al.",
      revista: "The Lancet",
      ano: "2020",
      tema: "COVID-19 e vasos",
      link: "https://doi.org/10.1016/S0140-6736(20)30937-5",
      comentario: "Um dos primeiros relatos a mostrar, em tecido de pacientes, inflamação da parede interna dos vasos (endotelite) em vários órgãos. Ajudou a mudar a visão da COVID-19: não só uma doença do pulmão, mas também dos pequenos vasos.",
    },
    {
      titulo: "COVID-19-related retinal micro-vasculopathy — a review of current evidence",
      autores: "Teo KYC, et al.",
      revista: "American Journal of Ophthalmology",
      ano: "2021",
      tema: "Retina",
      link: "https://doi.org/10.1016/j.ajo.2021.09.019",
      comentario: "Revisão que reuniu estudos de angiografia por tomografia de coerência óptica. Pacientes com COVID-19 apresentaram mais alterações nos pequenos vasos da retina, com menor densidade vascular, do que pessoas sem a doença.",
    },
    {
      titulo: "6-month neurological and psychiatric outcomes in 236 379 survivors of COVID-19",
      autores: "Taquet M, Geddes JR, Husain M, Luciano S, Harrison PJ",
      revista: "The Lancet Psychiatry",
      ano: "2021",
      tema: "Cérebro",
      link: "https://doi.org/10.1016/S2215-0366(21)00084-5",
      comentario: "Estudo com prontuários eletrônicos de mais de 236 mil pessoas. Nos seis meses após a COVID-19, diagnósticos neurológicos e psiquiátricos, incluindo demência, foram mais frequentes do que após gripe e outras infecções respiratórias.",
    },
    {
      titulo: "Clinical evaluation of fever-screening thermography: impact of consensus guidelines and facial measurement location",
      autores: "Zhou Y, Ghassemi P, Chen M, et al.",
      revista: "Journal of Biomedical Optics",
      ano: "2020",
      tema: "Canto interno do olho",
      link: "https://doi.org/10.1117/1.JBO.25.9.097002",
      comentario: "Comparou diferentes pontos do rosto medidos por câmera térmica com a temperatura oral. A região do canto interno do olho foi uma das que melhor acompanharam a temperatura do corpo, desde que a coleta siga um protocolo cuidadoso.",
    },
    {
      titulo: "Application of infrared thermography in the rehabilitation of patients in veterinary medicine",
      autores: "Casas-Alvarado A, Ogi A, Villanueva-García D, et al.",
      revista: "Revisão de acesso aberto (PubMed Central)",
      ano: "",
      tema: "Veterinária",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10930678/",
      comentario: "Revisão sobre o uso da câmera térmica para acompanhar inflamação, dor e recuperação de animais em reabilitação, sem contenção e sem contato.",
    },
  ],
};
