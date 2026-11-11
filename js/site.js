/* Funcionamento do site. Não é preciso editar este arquivo:
   o conteúdo fica em js/conteudo.js */
(function () {
  "use strict";
  const $ = (id) => document.getElementById(id);
  const esc = (t) => String(t ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const D = (typeof SITE !== "undefined" && SITE) || {};
  const reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const idYoutube = (link) => { const m = String(link).match(/(?:youtu\.be\/|v=|embed\/|shorts\/|live\/)([\w-]{11})/); return m ? m[1] : null; };

  /* Menu no celular */
  const btn = $("menuBtn"), menu = $("menu");
  if (btn && menu) {
    btn.addEventListener("click", () => btn.setAttribute("aria-expanded", menu.classList.toggle("aberto")));
    menu.addEventListener("click", (e) => { if (e.target.tagName === "A") { menu.classList.remove("aberto"); btn.setAttribute("aria-expanded", "false"); } });
  }

  /* Contato (preenche qualquer elemento com data-contato) */
  const c = D.contato || {};
  const wa = c.whatsapp ? "https://wa.me/55" + c.whatsapp.replace(/\D/g, "") : "";
  document.querySelectorAll("[data-contato]").forEach((el) => {
    const partes = [];
    if (c.email) partes.push(`<a href="mailto:${esc(c.email)}">${esc(c.email)}</a>`);
    if (wa) partes.push(`<a href="${wa}" target="_blank" rel="noopener">WhatsApp ${esc(c.whatsapp)}</a>`);
    if (c.instagram) partes.push(`<a href="https://www.instagram.com/${esc(c.instagram)}/" target="_blank" rel="noopener">@${esc(c.instagram)}</a>`);
    el.innerHTML = partes.join(el.dataset.contato === "linha" ? " · " : "<br>");
  });
  document.querySelectorAll("[data-wa]").forEach((a) => { if (wa) a.href = wa; else a.hidden = true; });
  document.querySelectorAll("[data-mail]").forEach((a) => { if (c.email) a.href = "mailto:" + c.email; else a.hidden = true; });
  document.querySelectorAll("[data-ano]").forEach((el) => (el.textContent = new Date().getFullYear()));

  /* Janela de vídeo */
  const modal = $("modal");
  function abrirVideo(id) {
    $("modalVideo").innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0" title="Vídeo" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    modal.hidden = false; modal.querySelector(".modal-fechar").focus();
  }
  if (modal) {
    const fechar = () => { modal.hidden = true; $("modalVideo").innerHTML = ""; };
    modal.addEventListener("click", (e) => { if (e.target.hasAttribute("data-fechar")) fechar(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) fechar(); });
  }

  /* Vídeos: miniaturas girando */
  const trilho = $("trilho"), car = $("carrossel");
  const videos = (D.videos || []).map((v) => ({ ...v, id: idYoutube(v.link) })).filter((v) => v.id);
  if (trilho && car) {
    if (!videos.length) { car.hidden = true; $("videosVazio").hidden = false; }
    else {
      const card = (v) => `<button class="video" data-id="${v.id}" aria-label="Assistir: ${esc(v.titulo)}">
        <div class="video-mini"><img src="https://i.ytimg.com/vi/${v.id}/hqdefault.jpg" alt="" loading="lazy"></div>
        <span>${esc(v.titulo)}</span></button>`;
      trilho.innerHTML = videos.map(card).join("").repeat(Math.max(2, Math.ceil(8 / videos.length)) * 2);
      let x = 0, pausa = false, larg = 0;
      const medir = () => { larg = trilho.scrollWidth / 2; };
      medir(); window.addEventListener("resize", medir); window.addEventListener("load", medir);
      ["mouseenter", "focusin", "touchstart"].forEach((ev) => car.addEventListener(ev, () => (pausa = true), { passive: true }));
      ["mouseleave", "focusout", "touchend"].forEach((ev) => car.addEventListener(ev, () => (pausa = false), { passive: true }));
      if (reduzMovimento) car.style.overflowX = "auto";
      else (function passo() {
        if (!pausa && larg) { x -= 0.4; if (-x >= larg) x = 0; trilho.style.transform = `translateX(${x}px)`; }
        requestAnimationFrame(passo);
      })();
      trilho.addEventListener("click", (e) => { const b = e.target.closest(".video"); if (b) abrirVideo(b.dataset.id); });
    }
  }

  /* Artigos comentados */
  const lista = $("listaArtigos");
  if (lista) {
    const artigos = D.artigos || [];
    if (!artigos.length) $("artigosVazio").hidden = false;
    lista.innerHTML = artigos.map((a) => `<article class="artigo">
        <div><div class="artigo-ano">${esc(a.ano)}</div><span class="artigo-tema">${esc(a.tema)}</span></div>
        <div><h3>${esc(a.titulo)}</h3>
          <p class="ref">${esc(a.autores)}${a.revista ? " · <em>" + esc(a.revista) + "</em>" : ""}</p>
          <p class="coment">${esc(a.comentario)}</p>
          ${a.link ? `<a href="${esc(a.link)}" target="_blank" rel="noopener">Ler o artigo original →</a>` : ""}</div>
      </article>`).join("");
  }
})();
