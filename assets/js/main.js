
// =========================================================================
// ADICIONE OU EDITE OS PROJETOS AQUI
// Tipos aceitos: 'criado', 'contribuicao', 'breve'
// =========================================================================
const projetos = [
    {
        titulo: "🎓 Fluxograma BCC",
        tipo: "contribuicao",
        descricao: "Sistema interativo para acompanhamento da grade curricular, pré-requisitos e previsão de formatura do Bacharelado em Ciência da Computação (IFSP).",
        tags: ["HTML/CSS", "JavaScript", "GitHub Pages"],
        linkDemo: "https://petercen.github.io",
        linkRepo: "https://github.com/gejunior"
    },
    {
        titulo: "🧠 Gerador de Mapas Mentais",
        tipo: "breve",
        descricao: "Ferramenta web para estruturar revisões, conceitos de programação orientada a objetos e organizar tópicos de estudo visualmente.",
        tags: ["JavaScript", "Canvas/SVG", "UI/UX"],
        linkDemo: "",
        linkRepo: ""
    },
    {
        titulo: "🛡️ AISS - Anti-Golpe",
        tipo: "contribuicao",
        descricao: "Aplicativo mobile voltado à segurança digital, com controle de acesso multi-perfil e integração de eventos.",
        tags: ["Ionic", "Angular", "Capacitor"],
        linkDemo: "",
        linkRepo: ""
    }
];

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
        if (proj.linkRepo) {
            botoesHTML += `<a href="${proj.linkRepo}" target="_blank" class="btn-link btn-secondary">Código (GitHub)</a>`;
        }
        if (!proj.linkDemo && !proj.linkRepo) {
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