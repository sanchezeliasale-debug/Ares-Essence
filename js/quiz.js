// Test "Encontrá tu fragancia" — matching basado en los perfiles reales
// de cada perfume (acordes principales y notas según Fragrantica).
// Cada opción de respuesta suma puntos a los perfumes con los que mejor
// coincide esa característica; al final se muestran los 3 con más puntos.

(function () {
  var PERFUMES = {
    hawas: {
      name: 'Hawas For Him',
      notes: 'Bergamota, canela, notas acuáticas y ámbar gris',
      occasion: 'Todo el año · versátil, día y noche',
      why: 'Aromático y acuático, versátil de la mañana a la noche: bergamota y canela arriba, un fondo amaderado con ámbar gris que nunca cansa.',
      link: 'https://aresessence.mitiendanube.com/'
    },
    urban: {
      name: 'Armaf Urban Man Elixir',
      notes: 'Bergamota, azahar, vetiver y ámbar',
      occasion: 'Otoño-invierno · noche y eventos formales',
      why: 'Ámbar denso y cálido con un fondo ahumado: pensado para dejar huella en eventos formales y salidas nocturnas.',
      link: 'https://aresessence.mitiendanube.com/'
    },
    khamrah: {
      name: 'Lattafa Khamrah',
      notes: 'Canela, dátiles, praliné y vainilla',
      occasion: 'Otoño-invierno · noche',
      why: 'Gourmand especiado y dulce, con dátiles y praliné: ideal si te gustan las fragancias cálidas y golosas de noche.',
      link: 'https://aresessence.mitiendanube.com/'
    },
    precieux: {
      name: 'Armaf Club De Nuit Precieux I',
      notes: 'Piña, caramelo, pimienta rosa y ámbar amaderado',
      occasion: 'Todo el año · día y noche',
      why: 'Un oriental amaderado versátil: la frescura frutal de la piña y la calidez del ámbar lo hacen funcionar en cualquier ocasión.',
      link: 'https://aresessence.mitiendanube.com/'
    },
    atlantis: {
      name: 'French Avenue Atlantis Extrait',
      notes: 'Naranja, sandía, coco y cacao amaderado',
      occasion: 'Primavera-verano · día',
      why: 'Cítricos, sandía y coco sobre un fondo de cacao y ámbar: tu opción para el verano, con una proyección que se nota.',
      link: 'https://aresessence.mitiendanube.com/'
    },
    vulcanfeu: {
      name: 'French Avenue Vulcan Feu',
      notes: 'Mango, jengibre, jazmín y praliné',
      occasion: 'Todo el año · tarde-noche',
      why: 'Mango y praliné sobre flores y maderas cálidas: dulce, llamativo y con muchísima proyección, ideal para la noche.',
      link: 'https://aresessence.mitiendanube.com/'
    },
    obsidian: {
      name: 'Rayhaan Obsidian',
      notes: 'Iris, cítricos, cuero y oud amaderado',
      occasion: 'Otoño-invierno · noche, eventos formales',
      why: 'Cuero, oud y maderas sobre un top fresco de iris y cítricos: intenso, sofisticado y pensado para eventos formales de noche.',
      link: 'https://aresessence.mitiendanube.com/'
    },
    tropicalvibe: {
      name: 'Rayhaan Tropical Vibe',
      notes: 'Mango, piña, coco y flores blancas',
      occasion: 'Primavera-verano · uso diurno',
      why: 'Mango, piña y coco con un fondo amaderado suave: fresco, playero y perfecto para el día a día en clima cálido.',
      link: 'https://aresessence.mitiendanube.com/'
    }
  };

  var QUESTIONS = [
    {
      question: '¿Para qué ocasión lo vas a usar más seguido?',
      options: [
        {
          label: 'Día a día, para trabajar o estudiar',
          scores: { hawas: 3, precieux: 2, atlantis: 1, tropicalvibe: 1 }
        },
        {
          label: 'Eventos formales, cenas o reuniones importantes',
          scores: { obsidian: 3, urban: 2, vulcanfeu: 1 }
        },
        {
          label: 'Una cita o salida romántica',
          scores: { vulcanfeu: 3, khamrah: 2, obsidian: 1 }
        },
        {
          label: 'Sin ocasión particular, lo quiero para todo',
          scores: { precieux: 3, hawas: 2, tropicalvibe: 1 }
        }
      ]
    },
    {
      question: '¿En qué época del año lo vas a usar más?',
      options: [
        {
          label: 'Primavera / Verano',
          scores: { tropicalvibe: 3, atlantis: 3, hawas: 1 }
        },
        {
          label: 'Otoño / Invierno',
          scores: { obsidian: 3, khamrah: 3, urban: 2, vulcanfeu: 1 }
        },
        {
          label: 'Todo el año, no distingo estaciones',
          scores: { precieux: 3, hawas: 2, vulcanfeu: 1 }
        }
      ]
    },
    {
      question: '¿Qué familia de aromas te atrae más?',
      options: [
        {
          label: 'Fresco y cítrico, que recuerde al agua o la fruta',
          scores: { atlantis: 3, hawas: 2, tropicalvibe: 2 }
        },
        {
          label: 'Dulce y gourmand, como vainilla, caramelo o praliné',
          scores: { khamrah: 3, vulcanfeu: 2, atlantis: 1 }
        },
        {
          label: 'Amaderado, con cuero o especias intensas',
          scores: { obsidian: 3, urban: 2, precieux: 1 }
        },
        {
          label: 'Ambarado, cálido y resinoso',
          scores: { urban: 3, obsidian: 2, khamrah: 1 }
        }
      ]
    },
    {
      question: '¿Qué intensidad preferís?',
      options: [
        {
          label: 'Sutil, que se note solo de cerca',
          scores: { tropicalvibe: 3, hawas: 1 }
        },
        {
          label: 'Equilibrado, notorio pero no invasivo',
          scores: { precieux: 2, hawas: 2, atlantis: 1 }
        },
        {
          label: 'Fuerte, que deje huella',
          scores: { obsidian: 3, urban: 3, khamrah: 2, vulcanfeu: 2 }
        }
      ]
    },
    {
      question: '¿Cuál de estas opciones te describe mejor?',
      options: [
        {
          label: 'Clásico y prolijo',
          scores: { precieux: 2, urban: 1 }
        },
        {
          label: 'Atrevido, que llama la atención',
          scores: { obsidian: 3, vulcanfeu: 2 }
        },
        {
          label: 'Relajado y natural',
          scores: { tropicalvibe: 3, hawas: 2, atlantis: 1 }
        },
        {
          label: 'Seductor y magnético',
          scores: { khamrah: 3, vulcanfeu: 2, obsidian: 1 }
        }
      ]
    }
  ];

  var state = {
    step: -1, // -1 = intro
    answers: new Array(QUESTIONS.length).fill(null)
  };

  var root = document.getElementById('quiz-root');
  if (!root) return;

  function render() {
    if (state.step === -1) {
      renderIntro();
    } else if (state.step < QUESTIONS.length) {
      renderQuestion(state.step);
    } else {
      renderResults();
    }
  }

  function renderIntro() {
    root.innerHTML =
      '<div class="quiz-intro">' +
      '<div class="eyebrow">Test</div>' +
      '<h1 class="quiz-intro__title">Encontrá tu fragancia ideal</h1>' +
      '<p class="quiz-intro__text">5 preguntas rápidas sobre tu estilo, la ocasión y el tipo de aroma que te gusta. Al final te mostramos los perfumes de nuestro catálogo que mejor coinciden con vos.</p>' +
      '<button class="btn" id="quiz-start">Empezar</button>' +
      '</div>';
    document.getElementById('quiz-start').addEventListener('click', function () {
      state.step = 0;
      render();
    });
  }

  function renderQuestion(i) {
    var q = QUESTIONS[i];
    var progress = Math.round(((i) / QUESTIONS.length) * 100);
    var html = '';
    html += '<div class="quiz-progress__label">Pregunta ' + (i + 1) + ' de ' + QUESTIONS.length + '</div>';
    html += '<div class="quiz-progress"><div class="quiz-progress__bar" style="width:' + progress + '%"></div></div>';
    html += '<h2 class="quiz-question">' + q.question + '</h2>';
    html += '<div class="quiz-options">';
    q.options.forEach(function (opt, idx) {
      var selected = state.answers[i] === idx ? ' is-selected' : '';
      html += '<button class="quiz-option' + selected + '" data-idx="' + idx + '">' + opt.label + '</button>';
    });
    html += '</div>';
    html += '<div class="quiz-nav">';
    html += '<button class="quiz-nav__back" id="quiz-back"' + (i === 0 ? ' disabled' : '') + '>&larr; Atrás</button>';
    html += '<button class="btn" id="quiz-next"' + (state.answers[i] === null ? ' disabled' : '') + '>' + (i === QUESTIONS.length - 1 ? 'Ver resultado' : 'Siguiente') + '</button>';
    html += '</div>';

    root.innerHTML = html;

    root.querySelectorAll('.quiz-option').forEach(function (btn) {
      btn.addEventListener('click', function () {
        state.answers[i] = parseInt(btn.getAttribute('data-idx'), 10);
        render();
      });
    });

    document.getElementById('quiz-back').addEventListener('click', function () {
      if (i > 0) {
        state.step = i - 1;
        render();
      }
    });

    document.getElementById('quiz-next').addEventListener('click', function () {
      if (state.answers[i] === null) return;
      state.step = i + 1;
      render();
    });
  }

  function computeScores() {
    var scores = {};
    Object.keys(PERFUMES).forEach(function (key) {
      scores[key] = 0;
    });
    state.answers.forEach(function (answerIdx, qIdx) {
      if (answerIdx === null) return;
      var opt = QUESTIONS[qIdx].options[answerIdx];
      Object.keys(opt.scores).forEach(function (key) {
        scores[key] += opt.scores[key];
      });
    });
    return Object.keys(scores)
      .map(function (key) {
        return { key: key, score: scores[key] };
      })
      .sort(function (a, b) {
        return b.score - a.score;
      });
  }

  function renderResults() {
    var ranked = computeScores().slice(0, 3);
    var labels = ['Tu mejor match', 'Segunda opción', 'Tercera opción'];

    var html = '';
    html += '<h2 class="quiz-results__title">Tus fragancias recomendadas</h2>';
    html += '<p class="quiz-results__text">Según tus respuestas, estos son los perfumes de nuestro catálogo que más se ajustan a lo que buscás.</p>';
    html += '<div class="match-grid">';

    ranked.forEach(function (item, idx) {
      var p = PERFUMES[item.key];
      html += '<div class="match-card' + (idx === 0 ? ' match-card--first' : '') + '">';
      html += '<div class="match-card__img">Foto — ' + p.name + '</div>';
      html += '<div>';
      html += '<div class="match-card__rank">' + labels[idx] + '</div>';
      html += '<div class="match-card__name">' + p.name + '</div>';
      html += '<div class="match-card__notes">' + p.notes + '</div>';
      html += '<div class="match-card__occasion">' + p.occasion + '</div>';
      html += '<p class="match-card__why">' + p.why + '</p>';
      html += '<div class="match-card__actions">';
      html += '<a href="' + p.link + '" class="btn-outline" target="_blank" rel="noopener">Ver en Tiendanube</a>';
      html += '<a href="catalogo.html" class="btn-outline">Ver ficha en el catálogo</a>';
      html += '</div>';
      html += '</div>';
      html += '</div>';
    });

    html += '</div>';
    html += '<div class="quiz-results__footer"><button class="quiz-results__retry" id="quiz-retry">Repetir el test</button></div>';

    root.innerHTML = html;

    document.getElementById('quiz-retry').addEventListener('click', function () {
      state.step = -1;
      state.answers = new Array(QUESTIONS.length).fill(null);
      render();
    });
  }

  render();
})();
