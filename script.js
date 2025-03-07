document.addEventListener('DOMContentLoaded', function () {
    const toggleEn = document.getElementById('toggle-en');
    const togglePt = document.getElementById('toggle-pt');
    const bioTitle = document.getElementById('bio-title');
    const bioText = document.getElementById('bio-text');
    const pubTitle = document.getElementById('pub-title');
    const pubList = document.getElementById('pub-list');

    const enContent = {
        bioTitle: 'About Me',
        bioText: 'Willian Fernandes Araujo holds a Ph.D. in Communication and Information from the Federal University of Rio Grande do Sul, a Master\'s degree in Cultural Processes and Manifestations from Feevale University, and a Bachelor\'s degree in Journalism from the Federal University of Santa Maria. He completed a sandwich doctorate at the Interdisciplinary Internet Institute (IN3) of the Open University of Catalonia (UOC, Barcelona). He is a permanent professor in the Graduate Programs in Education (PPGEdu) and Administration (PPGA) at the University of Santa Cruz do Sul (Unisc), where he also serves as deputy coordinator. Additionally, he is a faculty member in the Department of Business Management and Communication and sub-coordinator of the Communication and Creativity courses. He is the editor of the journal Reflexão e Ação, published by PPGEdu/Unisc. He was the coordinator of the Research Group in Communication and Digital Culture of Intercom (Brazilian Society of Interdisciplinary Communication Studies) in 2020 and 2021. His research focuses on digital platforms and algorithms, exploring technological mediation, particularly in areas such as algorithmic literacy, governmentality, and the production of subjects.',
        pubTitle: 'Selected Publications',
        pubList: [
            '<strong>Beyond Mechanical Turk:</strong> The work of Brazilians on global AI platforms (2021)',
            '<strong>Ciberativismo:</strong> Levantamento do estado da arte na pesquisa no Brasil (2011)',
            '<strong>O chão de fábrica (brasileiro) da inteligência artificial:</strong> A produção de dados e o papel da comunicação entre trabalhadores de Appen e Lionbridge (2021)',
            '<strong>A buzzfeedização do jornalismo:</strong> 5 coisas que você precisa saber sobre o caso Zero Hora (2015)',
            '<strong>Performance e práticas de consumo online:</strong> Ciberativismo em sites de redes sociais (2013)'
        ]
    };

    const ptContent = {
        bioTitle: 'Sobre Mim',
        bioText: 'Willian Fernandes Araujo é doutor em Comunicação e Informação pela Universidade Federal do Rio Grande do Sul, mestre em Processos e Manifestações Culturais pela Universidade Feevale e bacharel em Jornalismo pela Universidade Federal de Santa Maria. Realizou doutorado sanduíche no Instituto Interdisciplinar de Internet (IN3) da Universidade Aberta da Catalunha (UOC, Barcelona). É professor permanente dos Programas de Pós-Graduação em Educação (PPGEdu) e em Administração (PPGA) da Universidade de Santa Cruz do Sul (Unisc), no qual também exerce a função de coordenador adjunto. Além disso, é docente do Departamento de Gestão de Negócios e Comunicação e subcoordenador dos cursos de Comunicação e Criatividade. É editor da Revista Reflexão e Ação, publicada pelo PPGEdu/Unisc. Foi coordenador do Grupo de Pesquisa em Comunicação e Cultura Digital da Intercom (Sociedade Brasileira de Estudos Interdisciplinares da Comunicação) em 2020 e 2021. A sua investigação centra-se em plataformas digitais e algoritmos, explorando a mediação tecnológica, particularmente em áreas como a literacia algorítmica, a governamentalidade e a produção de sujeitos.',
        pubTitle: 'Publicações Selecionadas',
        pubList: [
            '<strong>Beyond Mechanical Turk:</strong> O trabalho de brasileiros em plataformas globais de IA (2021)',
            '<strong>Ciberativismo:</strong> Levantamento do estado da arte na pesquisa no Brasil (2011)',
            '<strong>O chão de fábrica (brasileiro) da inteligência artificial:</strong> A produção de dados e o papel da comunicação entre trabalhadores de Appen e Lionbridge (2021)',
            '<strong>A buzzfeedização do jornalismo:</strong> 5 coisas que você precisa saber sobre o caso Zero Hora (2015)',
            '<strong>Performance e práticas de consumo online:</strong> Ciberativismo em sites de redes sociais (2013)'
        ]
    };

    function updateContent(lang) {
        const content = lang === 'en' ? enContent : ptContent;
        bioTitle.textContent = content.bioTitle;
        bioText.textContent = content.bioText;
        pubTitle.textContent = content.pubTitle;
        pubList.innerHTML = content.pubList.map(item => `<li>${item}</li>`).join('');
    }

    toggleEn.addEventListener('click', () => {
        toggleEn.classList.add('active');
        togglePt.classList.remove('active');
        updateContent('en');
    });

    togglePt.addEventListener('click', () => {
        togglePt.classList.add('active');
        toggleEn.classList.remove('active');
        updateContent('pt');
    });

    // Set default language to English
    updateContent('en');
});