import { projetos } from "./projects.js"

const labelsTipo = {
    criado: { texto: "Criado por mim", classe: "badge-criado" },
    contribuicao: { texto: "Contribuição", classe: "badge-contribuicao" },
    breve: { texto: "Em breve", classe: "badge-breve" }
};

function renderizarProjetos(filtro = "todos") {
    const grid = document.getElementById("grid-projetos");
    grid.innerHTML = "";

    const filtrados = filtro === "todos"
        ? projetos
        : projetos.filter(p => p.tipo === filtro);

    filtrados.forEach(proj => {
        const badge = labelsTipo[proj.tipo];

        const tagsHTML = proj.tags.map(t => `<span class="tag">${t}</span>`).join("");

        let botoesHTML = "";
        if (proj.linkDemo) {
            botoesHTML += `<a href="${proj.linkDemo}" target="_blank" class="btn-link btn-primary">Acessar Site</a>`;
        }
        if(proj.linkPlayStore){
            botoesHTML += `<a href="${proj.linkPlayStore}" target="_blank" rel="noopener noreferrer" class="btn-link btn-primary">Ir para Google Play</a>`
        }
        if (proj.linkRepo) {
            botoesHTML += `<a href="${proj.linkRepo}" target="_blank" class="btn-link btn-secondary">Código (GitHub)</a>`;
        }
        if (!proj.linkDemo && !proj.linkPlayStore && !proj.linkRepo) {
            botoesHTML = `<span class="btn-link btn-disabled">Em construção</span>`;
        }

        const card = `
          <div class="card">
            <div>
              <div class="card-header">
                <h2 class="card-title">${proj.titulo}</h2>
                <span class="badge ${badge.classe}">${badge.texto}</span>
              </div>
              <p class="card-desc">${proj.descricao}</p>
            </div>
            <div>
              <div class="tags">${tagsHTML}</div>
              <div class="card-links">${botoesHTML}</div>
            </div>
          </div>
        `;
        grid.innerHTML += card;
    });
}

function filtrar(categoria, botaoClicado) {
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    botaoClicado.classList.add("active");
    renderizarProjetos(categoria);
}

// Inicializa a página
renderizarProjetos();

window.filtrar = filtrar;