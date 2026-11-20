function alternarTema() {
    const isDark = document.body.classList.toggle("dark-theme");
    const btn = document.getElementById("theme-toggle");
    
    btn.textContent = isDark ? "☀️ Alterar Tema" : "🌙 Alterar Tema";
    localStorage.setItem("tema-portfolio", isDark ? "dark" : "light");
  }
  
  // Carrega a preferência salva (mantém claro se não houver nada salvo)
  (function carregarTemaSalvo() {
    const temaSalvo = localStorage.getItem("tema-portfolio");
    if (temaSalvo === "dark") {
      document.body.classList.add("dark-theme");
      const btn = document.getElementById("theme-toggle");
      if (btn) btn.textContent = "🌙 Alterar Tema";
    }
  })();