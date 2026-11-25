/* ============================================================
   DADOS DAS 15 REDAÇÕES (mantenha igual ao seu)
============================================================ */
const redacoes = [ /* ... seus dados ... */ ];

/* ============================================================
   TUDO AQUI DENTRO DO DOMContentLoaded
============================================================ */
document.addEventListener("DOMContentLoaded", () => {

    /* ---------- PRELOADER ---------- */
    window.addEventListener("load", () => {
        setTimeout(() => {
            const preloader = document.getElementById("preloader");
            if (preloader) preloader.classList.add("hidden");
        }, 1200);
    });

    /* ---------- CURSOR PERSONALIZADO ---------- */
    const cursor = document.querySelector(".custom-cursor");
    const cursorDot = document.querySelector(".custom-cursor-dot");

    if (cursor && cursorDot && window.matchMedia("(min-width: 1024px)").matches) {
        document.addEventListener("mousemove", (e) => {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";
            cursorDot.style.left = e.clientX + "px";
            cursorDot.style.top = e.clientY + "px";
        });
    }

    /* ---------- HEADER SCROLL + BACK TO TOP ---------- */
    const header = document.getElementById("header");
    const backToTop = document.getElementById("backToTop");

    if (backToTop) {
        window.addEventListener("scroll", () => {
            const y = window.scrollY;
            if (header) header.classList.toggle("scrolled", y > 50);
            backToTop.classList.toggle("visible", y > 500);
        });

        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    /* ---------- MENU MOBILE ---------- */
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            menuBtn.classList.toggle("open");
            navLinks.classList.toggle("open");
        });

        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                menuBtn.classList.remove("open");
                navLinks.classList.remove("open");
            });
        });
    }

    /* ---------- TEMA ---------- */
    const themeToggle = document.getElementById("themeToggle");
    const root = document.documentElement;

    if (themeToggle) {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            root.setAttribute("data-theme", savedTheme);
            themeToggle.innerHTML = savedTheme === "dark"
                ? '<i class="fas fa-sun"></i>'
                : '<i class="fas fa-moon"></i>';
        }

        themeToggle.addEventListener("click", () => {
            const current = root.getAttribute("data-theme");
            const next = current === "dark" ? "light" : "dark";
            root.setAttribute("data-theme", next);
            localStorage.setItem("theme", next);
            themeToggle.innerHTML = next === "dark"
                ? '<i class="fas fa-sun"></i>'
                : '<i class="fas fa-moon"></i>';
        });
    }

    /* ---------- INTERSECTION OBSERVER ---------- */
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll("[data-anim]").forEach((el) => observer.observe(el));

    /* ---------- REDAÇÕES ---------- */
    const redacoesGrid = document.getElementById("redacoesGrid");

    function renderRedacoes(filter = "todos") {
        if (!redacoesGrid) return;
        redacoesGrid.innerHTML = "";

        const lista = filter === "todos"
            ? redacoes
            : redacoes.filter((r) => r.genero === filter);

        lista.forEach((redacao, index) => {
            const card = document.createElement("article");
            card.className = "redacao-card visible";
            card.style.transitionDelay = `${index * 0.05}s`;
            card.setAttribute("data-id", redacao.id);
            card.innerHTML = `
                <span class="card-number">${String(redacao.id).padStart(2, "0")}</span>
                <span class="card-genero">${redacao.genero}</span>
                <h3 class="card-titulo">${redacao.titulo}</h3>
                <p class="card-resumo">${redacao.resumo}</p>
                <span class="card-action">
                    Ler redação <i class="fas fa-arrow-right"></i>
                </span>
            `;
            card.addEventListener("click", () => abrirModal(redacao.id));
            redacoesGrid.appendChild(card);
        });
    }

    /* ---------- FILTROS ---------- */
    document.querySelectorAll(".filtro").forEach((btn) => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filtro").forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            renderRedacoes(btn.dataset.filter);
        });
    });

    /* ---------- MODAL ---------- */
    const modal = document.getElementById("modal");
    const modalClose = document.getElementById("modalClose");
    const modalBadge = document.getElementById("modalBadge");
    const modalTitle = document.getElementById("modalTitle");
    const modalMeta = document.getElementById("modalMeta");
    const modalBody = document.getElementById("modalBody");
    const modalCounter = document.getElementById("modalCounter");
    const modalPrev = document.getElementById("modalPrev");
    const modalNext = document.getElementById("modalNext");

    let redacaoAtual = 0;

    function abrirModal(id) {
        redacaoAtual = redacoes.findIndex((r) => r.id === id);
        if (redacaoAtual === -1) return;
        renderModal();
        modal.classList.add("open");
        document.body.style.overflow = "hidden";
    }

    function fecharModal() {
        modal.classList.remove("open");
        document.body.style.overflow = "";
    }

    function renderModal() {
        const r = redacoes[redacaoAtual];
        modalBadge.textContent = r.genero;
        modalTitle.textContent = r.titulo;
        modalMeta.textContent = `${r.genero} • ${r.data}`;
        modalBody.innerHTML = r.texto
            .split("\n\n")
            .map((p) => `<p>${p.replace(/\n/g, "<br>")}</p>`)
            .join("");
        modalCounter.textContent = `${redacaoAtual + 1} / ${redacoes.length}`;
        modalBody.scrollTop = 0;
        modalPrev.disabled = redacaoAtual === 0;
        modalNext.disabled = redacaoAtual === redacoes.length - 1;
        modalPrev.style.opacity = redacaoAtual === 0 ? 0.4 : 1;
        modalNext.style.opacity = redacaoAtual === redacoes.length - 1 ? 0.4 : 1;
    }

    if (modalClose) modalClose.addEventListener("click", fecharModal);
    if (modal) {
        modal.querySelector("[data-close]")?.addEventListener("click", fecharModal);
    }

    if (modalPrev) {
        modalPrev.addEventListener("click", () => {
            if (redacaoAtual > 0) { redacaoAtual--; renderModal(); }
        });
    }
    if (modalNext) {
        modalNext.addEventListener("click", () => {
            if (redacaoAtual < redacoes.length - 1) { redacaoAtual++; renderModal(); }
        });
    }

    document.addEventListener("keydown", (e) => {
        if (!modal || !modal.classList.contains("open")) return;
        if (e.key === "Escape") fecharModal();
        if (e.key === "ArrowLeft" && redacaoAtual > 0) { redacaoAtual--; renderModal(); }
        if (e.key === "ArrowRight" && redacaoAtual < redacoes.length - 1) { redacaoAtual++; renderModal(); }
    });

    /* ---------- INICIALIZAÇÃO ---------- */
    renderRedacoes("todos");

});
