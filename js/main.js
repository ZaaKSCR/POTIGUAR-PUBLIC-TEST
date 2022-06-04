document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    // --------------------------------------------------
    // ESTA SEÇÃO PERTENCE AO servicos.hmtl
    document.querySelectorAll('.item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.target.scrollIntoView({
                inline: 'center',
                behavior: 'smooth',
            });
        });
    });
    // --------------------------------------------------
    // ESTA SEÇÃO PERTENCE AO help.html
    const questions = document.querySelectorAll(".question");

    questions.forEach(function(question) {
        const btn = question.querySelector(".question-btn");
        // console.log(btn);

        btn.addEventListener("click", function() {
            // console.log(question);

            questions.forEach(function(item) {
                if (item !== question) {
                    item.classList.remove("show-text");
                }
            });

            question.classList.toggle("show-text");
        });
    });
    // --------------------------------------------------
    if (el.classList.contains('chamado-option') && tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    } else {
        console.info('[INFO]Default previnido!');
    }
});

async function carregaPagina(el) {
    try {
        const href = el.getAttribute('href');
        const response = await fetch(href);

        if (response.status !== 200) throw new Error('ERRO DE ACESSO!');

        const html = await response.text();
        carregaResultado(html);
    } catch (e) {
        console.error('ERRO:', e);
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}