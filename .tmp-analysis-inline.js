
    const CONTACTS = {
      tel1: '998930050180',
      tel2: '998770086000',
      telegram: '@gekto_consulting',
      mail: 'info@gekto.uz',
      address: 'Chilonzor, Muqumiy k. 41/3'
    };
    const TELEGRAM_CONFIG = {
      botToken: '',
      chatId: '',
      topicId: ''
    };
    const ENDPOINT =
      "https://script.google.com/macros/s/AKfycbzN6zZrY27H4tqLSBPBPxj6A7fBqf0z7Zn0HsWwR8vsGKZe7WJ2t0qs9E14K5PYV9o5/exec";
    const SECRET = "mySecret123";
    const SECTORS = ['Agrobiznes', 'Arxitektura va dizayn', 'Avtoservis', 'Bank va moliya', 'Boshqa', 'Chakana savdo',
      'Dorixona', 'E-commerce', 'Eksport-import', 'Franshiza', 'Gozallik va salomatlik', 'HoReCa (kafe/restoran)',
      'IT va raqamli xizmatlar', 'Ishlab chiqarish', 'Konsalting', 'Logistika', 'Marketing agentligi', 'Qurilish',
      'Sanoat xizmatlari', 'Ta' + 'lim', 'Tekstil', 'Telekommunikatsiya', 'Turizm', 'Ulgurji savdo', 'Xizmat ko' +
      'rsatish', 'Yuridik xizmatlar'
    ];
    const FIN_CATS = ['cashflow', 'profitability', 'forecasting', 'working_capital', 'inventory', 'pricing',
      'tax_legal'];
    const MAN_CATS = ['processes', 'delegation', 'team_kpi', 'hr', 'motivation', 'planning', 'sales_ops'];
    const LABELS = {
      cashflow: 'CashFlow',
      profitability: 'Marja/Foyda',
      forecasting: 'Prognoz',
      working_capital: 'Qarz/Aylanma',
      inventory: 'Ombor',
      pricing: 'Narx',
      tax_legal: 'Soliq/Hujjat',
      processes: 'Jarayon/SOP',
      delegation: 'Delegatsiya',
      team_kpi: 'KPI/Nazorat',
      hr: 'HR',
      motivation: 'Motivatsiya',
      planning: 'Rejalash',
      sales_ops: 'Sales/CRM'
    };
    const NORMAL_FINANCE = ["Men biznesim oldida turgan barcha moliyaviy muammolarni muvaffaqiyatli hal qilaman.",
      "Men keyingi oyda / 3 oy / 6 oy / 12 oyda qancha sof foyda olishimni bilaman",
      "Men bu yil biznes foydasini kamida 50% ga qanday oshirishni aniq bilaman.",
      "So'nggi 12 oy ichida men biznes daromadlarining barqaror o'sishini ko'rdim.",
      "Mening biznesimdagi foyda menga zaxiralarni yaratishga imkon beradi",
      "Ba'zida pulim yo'qligi sababli marketing xarajatlarini kamaytirganim ham bo'ladi.",
      "Men doimiy ravishda o'z biznesimdagi xarajatlarni kamaytirish va optimallashtirish ustida ishlayapman.",
      "Ba'zida mavsumdan tashqari mening biznesimdagi daromadim sezilarli darajada kamayishi ham bo'lib turadi",
      "Barcha pulim oborotda va men uni qanday chiqarib olishni bilmayapman",
      "Mening biznesim o'sib bormoqda, ammo pulda o'zgarish yo'q.",
      "Men vaqti-vaqti bilan biznesdagi resurslarimning ABC tahlilini o'tkazaman.",
      "Mening biznesimning kreditlari va qarzlari meni bezovta qilmoqda",
      "Pul yetishmovchiligiga ko'p uchrayman, deyarli oddiy holday ko'rinadigan bo'lgan",
      "Pullarimni ombordagi tovarlar va asosiy vositalarga ko'p tikaman. Ularda muzlatib yuraman",
      "Men har doim ish haqini o'z vaqtida va kechiktirmasdan to'layman.",
      "Men har doim soliqlarni o'z vaqtida va kechiktirmasdan to'layman.",
      "Men pulni oqilona boshqaraman va barcha biznes xarajatlarini oldindan rejalashtiraman.",
      "Men biznes xarajatlarim nima ekanligini va har bir mahsulot qancha foyda keltirishini aniq bilaman.",
      "Biznesimda ishchilarga motivatsiya sistemasini shakllantirganman",
      "Men savdo, marketing va moliyaviy model orqali biznesdagi foydaga qanday ta'sir qilishni aniq bilaman"
    ];
    const NORMAL_MANAGEMENT = ["Barcha biznes jarayonlari aniq tuzilgan va men deyarli operatsionkada emasman",
      "Men 24/7 ishlayman va sog'ligimdan shubhalanaman.",
      "Men ko'pincha oilam oldida o'zimni aybdor his qilaman, chunki ular bilan kam vaqt o'tkazaman.",
      "Men vazifalarni xodimlarimdan ko'ra yaxshiroq bajaraman va ko'pincha o'zim qilaman",
      "Ba'zida ishchilarim kun davomida to'liq ishlashiga shubha qilaman",
      "Xodimlarimning ish samaradorligi pasayib borayotgani uchun dam ololmayapman.",
      "Mening biznesim katta oilaga o'xshaydi. Biz bir-birimizga ishonamiz va hech qanday rasmiy kelishuvlar tuzmaymiz.",
      "Mening xodimlarim ko'pincha ularning ishi kompaniyadagi boshqa xodimlarga qanday ta'sir qilishini tushunishmaydi.",
      "Mening biznesim boshqaruvida hal qila olmaydigan muammolar bor.",
      "Ish hajmidan ortiq ishlagan xodimlarni rag'batlantirish tizimini joriy qilganman.",
      "Mening har bir xodimim hisobotlarni yuritadi, bu menga biznesning asosiy ko'rsatkichlari va jamoaning ish yukini har kuni kuzatib borish imkonini beradi.",
      "Menda kompaniya uchun tashkiliy tuzilma bor va hamma kim nima uchun javobgar ekanligini tushunadi.",
      "Men biznesdagi rolimni aniq tushunaman",
      "Men biznesimdagi barcha biznes jarayonlarni bilaman va rivojlanish strategiyasi yozilgan",
      "Menda har bir xodim uchun nomoddiy motivatsiya aniq yozilgan.",
      "Men o'z biznesim uchun xodimlarni topishni oson deb bilaman, chunki ular qanday ko'nikma va malakalarga ega bo'lishi kerakligini va suhbat davomida ularni qanday sinab ko'rish kerakligini tushunaman.",
      "Men barcha yangi xodimlarni yozma tartib-qoidalar bilan ta'minlayman. Ushbu protseduralar ularga tez o'rganishga va birinchi kundanoq natijalarga erishishga yordam beradi.",
      "Men ishimdagi kundalik tartibdan stressdaman.",
      "Biznesda qattiqqo'llik qilib turaman. Bo'lmasa ishchilar ishni tashlab qo'yishadi",
      "Men ko'proq ishlay olaman, meni ko'p chalg'itishadi"
    ];
    const DEEP_FINANCE_BASE = [
      "Men har oy P&L (Daromad-Xarajat-Foyda) hisobotini tuzaman va qarorlarni shunga tayangan holda qilaman.",
      "Men har oy Balansni ko'raman: aktivlar, majburiyatlar va kapital o'zgarishini tushunaman.",
      "Men CashFlow rejani (kirim/chiqim prognoz) kamida 4 hafta oldinga tuzaman.",
      "Men Plan-Fakt tahlilini muntazam qilaman va chetga chiqish sabablarini yozib boraman.",
      "Men har bir mahsulot/xizmat bo'yicha sof marjani (to'liq xarajatlar bilan) aniq bilaman.",
      "Men unit-economicsni bilaman: 1 ta sotuvdan tushadigan foyda, o'zini oqlash nuqtasi.",
      "Men chegirmalar (skidka) foydaga qanday ta'sir qilishini hisoblayman va cheklov qo'yganman.",
      "Men ko'p sotdik, lekin foyda yo'q holatining sababini tez topa olaman (narx, marja, xarajat, qaytarim).",
      "Men debitor qarz bo'yicha limit, muddat, eslatma va undirish tartibini joriy qilganman.",
      "Men kreditor qarz bo'yicha to'lov ustuvorligi (prioritet) va kalendarini yuritaman.",
      "Men cash gap (naqdlik uzilishi) bo'lishidan oldin signal beradigan ko'rsatkichlarga egaman.",
      "Men ombordagi tovarlar bo'yicha ABC/XYZni muntazam qilaman va muzlagan pulni kamaytiraman.",
      "Men zaxiralar (stock) uchun min/max darajalarni belgilaganman.",
      "Men xarajatlarni kategoriyalarga ajratganman va keraksiz xarajatlar uchun limitlar bor.",
      "Men marketing bo'yicha ROIni kuzataman: qaysi kanal foyda beradi, qaysi biri yo'q.",
      "Men soliq va hujjatlar bo'yicha risklarni bilaman va oldindan rejalashtiraman.",
      "Men biznesdan pul yechish (dividend/egaga to'lov) bo'yicha aniq qoida ishlab chiqqanman.",
      "Men asosiy vositalarga investitsiya qilganda qaytish muddatini (payback) hisoblayman.",
      "Men narx siyosatini bozordagi o'zgarishlarga qarab yangilab turaman (kurs, xarid narxi, raqobat).",
      "Men 3-6-12 oyga moliyaviy model qilib, foyda va naqdlik ssenariylarini ko'raman."
    ];
    const DEEP_MANAGEMENT_BASE = ["Menda kompaniya bo'yicha SOP/reglamentlar yozilgan va xodimlar shunga amal qiladi.",
      "Har bir rol uchun aniq KPI bor va ular muntazam o'lchanadi.",
      "Men haftalik jamoa yig'ilishi (reja, muammo, natija) formatini joriy qilganman.",
      "Men xodimlar bilan 1:1 uchrashuvlar o'tkazaman (rivojlanish, muammo, feedback).",
      "Men vazifalarni delegatsiya qilganimda natija, muddat, standart va nazorat nuqtasini aniq belgilayman.",
      "Men kompaniyada kim nima uchun javobgar degan RACI/mas'uliyat matritsasini joriy qilganman.",
      "Yangi xodimlar uchun onboarding (1-7-30 kun) rejasi bor.",
      "Men xodimlarni o'qitish bo'yicha minimal standartni belgilaganman (skript, product knowledge, xizmat).",
      "Men intizom va qoidabuzarlik bo'yicha adolatli tizimga egaman (ogohlantirish, jarima/bonus qoidasi).",
      "Biznesda shoshilinch ishlar ko'payib ketmasligi uchun prioritet tizimi bor.",
      "Men mijozlar bilan ishlashda sifatni o'lchayman (NPS/feedback/shikoyatlar statistikasi).",
      "Men sotuv jarayonida CRM intizomini nazorat qilaman (lead → deal → yopilish).",
      "Menda kutilmagan xatoliklarga tayyor risk-reja bor (xodim ketishi, yetkazib berish, kurs).",
      "Men o'zimning ish kunimni tizimlashtirganman: fokus vaqti, uchrashuvlar, operatsionka balansi.",
      "Men kompaniya madaniyatini yozma tarzda belgilaganman (qadriyatlar, standartlar, xizmat sifati).",
      "Men xodimlar motivatsiyasini faqat pulga emas, o'sish va e'tirofga ham bog'laganman.",
      "Men har oy jamoa bilan maqsadlarni (OKR/plan) ko'rib chiqaman va yangilayman.",
      "Men rahbar sifatida hamma narsani o'zim qilaman odatini kamaytirish uchun reja qilganman.",
      "Men har bir bo'limdan asosiy metrikalarni bir joyga yig'ib turaman (dashboard).",
      "Men kompaniyada ma'lumot yo'qolishi bo'lmasligi uchun yagona ish kanallarini belgilaganman (chat/CRM/task)."
    ];
    const DEEP_FINANCE = DEEP_FINANCE_BASE.concat(NORMAL_FINANCE);
    const DEEP_MANAGEMENT = DEEP_MANAGEMENT_BASE.concat(NORMAL_MANAGEMENT);
    const DRAFT_KEY = 'analysis_draft_v2';
    const app = {
      mode: 'normal',
      questions: [],
      current: 0,
      answers: {},
      user: {
        name: '',
        phone: '',
        business: '',
        sector: ''
      },
      result: null,
      rawScore: 3,
      slider: null
    };
    const el = id => document.getElementById(id);
    const SCORE_LABELS = {
      1: 'Umuman mos emas',
      2: 'Kam mos',
      3: 'Qisman mos',
      4: "Ko'p mos",
      5: "To'liq mos"
    };

    function scoreClass(score) {
      if (score <= 1) return 'c-50';
      if (score === 2) return 'c-150';
      if (score === 3) return 'c-250';
      if (score === 4) return 'c-350';
      return 'c-500'
    }

    function nearestScore(raw) {
      return Math.max(1, Math.min(5, Math.round(raw)))
    }

    function updateSliderVisual(raw) {
      const score = nearestScore(raw);
      el('levelValue').textContent = String(score);
      el('levelText').textContent = SCORE_LABELS[score];
      el('sliderTheme').className = 'calc-top ' + scoreClass(score)
    }

    function initAnswerSlider() {
      if (app.slider) return;
      noUiSlider.create(el('answerSlider'), {
        start: [3],
        connect: [true, false],
        step: 0.01,
        range: {
          min: 1,
          max: 5
        },
        tooltips: [{
          to: (v) => SCORE_LABELS[nearestScore(v)].toUpperCase()
        }]
      });
      app.slider = el('answerSlider').noUiSlider;
      app.slider.on('update', (values) => {
        app.rawScore = Number(values[0]);
        updateSliderVisual(app.rawScore)
      });
      app.slider.on('change', (values) => {
        const score = nearestScore(Number(values[0]));
        app.rawScore = score;
        app.slider.set(score);
        saveCurrent()
      });
    }

    function fillSectors() {
      const s = el('sector');
      const sorted = [...SECTORS].sort((a, b) => a.localeCompare(b));
      s.innerHTML = '<option value="">Tanlang...</option>' + sorted.map(x => `<option value="${x}">${x}</option>`).join(
        '');
    }

    function levelByPercent(p) {
      if (p <= 24) return 'Kritk (kritik holat)';
      if (p <= 49) return 'Past (zaif tizim)';
      if (p <= 69) return "O'rtacha (barqaror emas)";
      if (p <= 84) return "Yaxshi (o'sish bor)";
      return "Kuchli (tizim yo'lga qo'yilgan)"
    }

    function catAt(cats, i) {
      return cats[i % cats.length]
    }

    function makeQuestions(list, block, prefix, cats) {
      return list.map((text, i) => ({
        id: prefix + (i + 1),
        text,
        block,
        category: catAt(cats, i),
        weight: 1
      }))
    }

    function interleave(a, b) {
      const out = [];
      const n = Math.max(a.length, b.length);
      for (let i = 0; i < n; i++) {
        if (i < a.length) out.push(a[i]);
        if (i < b.length) out.push(b[i]);
      }
      return out
    }

    function buildQuestions(mode) {
      if (mode === 'normal') return interleave(makeQuestions(NORMAL_FINANCE, 'finance', 'fn', FIN_CATS), makeQuestions(
        NORMAL_MANAGEMENT, 'management', 'mn', MAN_CATS));
      return interleave(makeQuestions(DEEP_FINANCE, 'finance', 'fd', FIN_CATS), makeQuestions(DEEP_MANAGEMENT,
        'management', 'md', MAN_CATS));
    }

    function show(screen) {
      ['screen-intro', 'screen-mode', 'screen-quiz', 'screen-result'].forEach(id => el(id).classList.add(
        'analysis-hidden'));
      el(screen).classList.remove('analysis-hidden')
    }

    function renderModeCards() {
      const m = document.querySelector('input[name="mode"]:checked').value;
      el('modeNormalCard').classList.toggle('active', m === 'normal');
      el('modeDeepCard').classList.toggle('active', m === 'deep')
    }

    function renderQuestion() {
      const q = app.questions[app.current];
      const total = app.questions.length;
      const v = app.answers[q.id] || 3;
      el('quizTitle').textContent = `Savol ${app.current+1} / ${total}`;
      el('progressBar').style.width = ((app.current + 1) / total * 100) + '%';
      el('questionText').textContent = q.text;
      el('blockTag').textContent = q.block === 'finance' ? 'Moliyaviy' : 'Menejment';
      initAnswerSlider();
      app.rawScore = v;
      app.slider.set(v);
      updateSliderVisual(v);
      el('quizBack').disabled = app.current === 0;
      el('quizNext').innerHTML = app.current === total - 1 ? '<span>Natijani ko\'rish</span>' : '<span>Keyingi</span>'
    }

    function saveCurrent() {
      const q = app.questions[app.current];
      app.answers[q.id] = nearestScore(app.rawScore)
    }

    function computeBlock(block) {
      const items = app.questions.filter(x => x.block === block);
      let raw = 0,
        min = 0,
        max = 0;
      const cp = {};
      items.forEach(q => {
        const v = app.answers[q.id] || 3;
        raw += v * q.weight;
        min += 1 * q.weight;
        max += 5 * q.weight;
        if (!cp[q.category]) cp[q.category] = {
          raw: 0,
          min: 0,
          max: 0
        };
        cp[q.category].raw += v * q.weight;
        cp[q.category].min += 1 * q.weight;
        cp[q.category].max += 5 * q.weight
      });
      const percent = Math.round(((raw - min) / (max - min)) * 100) || 0;
      const categoryPercent = {};
      Object.keys(cp).forEach(k => categoryPercent[k] = Math.round(((cp[k].raw - cp[k].min) / (cp[k].max - cp[k].min)) *
        100) || 0);
      return {
        percent,
        categoryPercent
      }
    }

    function extremes(desc) {
      const arr = app.questions.map(q => ({
        text: q.text,
        score: app.answers[q.id] || 3,
        category: q.category
      }));
      arr.sort((a, b) => desc ? b.score - a.score : a.score - b.score);
      return arr.slice(0, 5)
    }

    function weakCategories(fin, man) {
      const arr = [];
      Object.keys(fin.categoryPercent).forEach(k => arr.push({
        category: k,
        value: fin.categoryPercent[k]
      }));
      Object.keys(man.categoryPercent).forEach(k => arr.push({
        category: k,
        value: man.categoryPercent[k]
      }));
      arr.sort((a, b) => a.value - b.value);
      return arr.slice(0, 5)
    }

    function insightByCategory(c) {
      const map = {
        cashflow: "CashFlow reja + to'lov kalendari sust. Naqdlik uzilishi xavfi bor.",
        profitability: 'Marja va unit-economics nazorati zaif.',
        working_capital: 'Debitor/kreditor boshqaruvi sust.',
        inventory: 'Omborda muzlagan pul yuqori.',
        pricing: 'Narx va chegirma nazorati zaif.',
        tax_legal: 'Soliq-hujjat intizomi bo`yicha risklar bor.',
        forecasting: 'Plan-fakt va prognoz sust.',
        delegation: 'Delegatsiya zaif: operatsion yuk rahbarda.',
        processes: 'Jarayonlar odamga bog`langan.',
        team_kpi: 'KPI nazorati yetarli emas.',
        hr: 'Yollash/onboarding tizimi sust.',
        motivation: 'Motivatsiya tizimi notekis.',
        planning: 'Rejalash intizomi sust.',
        sales_ops: 'CRM/sales intizomi sust.'
      };
      return map[c] || 'Ushbu yo`nalishda tizimni kuchaytirish kerak.'
    }

    function mainConclusion(f, m, weak) {
      if (f < 50 && m >= 50) return "Tizimning ayrim elementlari bor, lekin pul nazorati sust.";
      if (f >= 50 && m < 50) return "Pul ko'rinadi, lekin jarayonlar rahbarga bog'langan.";
      if (f < 50 && m < 50) return "Operatsionka va pul oqimi bir vaqtda bosim qilmoqda.";
      if (f >= 70 && m >= 70) return "Tizimlar yaxshi yo'lga qo'yilgan, endi masshtablash bosqichi.";
      return `Asosiy risk zonasi: ${LABELS[weak]||weak}.`
    }

    function renderList(id, items) {
      const n = el(id);
      n.innerHTML = '';
      items.forEach(text => {
        const li = document.createElement('li');
        li.textContent = text;
        n.appendChild(li)
      })
    }

    function renderQA(id, items, isWeak) {
      const n = el(id);
      n.innerHTML = '';
      items.forEach(x => {
        const d = document.createElement('div');
        d.className = 'row-item';
        d.innerHTML =
          `<div>${x.text}</div><div style="font-size:12px;color:#5f6d68;margin-top:4px">Baho: <b>${x.score}/5</b> ${isWeak?'| Risk zona':'| Kuchli zona'}</div>`;
        n.appendChild(d)
      })
    }

    function planByWeak(weak) {
      const out = [];
      weak.forEach(x => {
        if (x.category === 'cashflow') out.push("To'lov kalendarini 4 haftaga joriy qiling.");
        if (x.category === 'profitability') out.push('Har mahsulot bo`yicha marja jadvalini yarating.');
        if (x.category === 'working_capital') out.push('Debitor bo`yicha limit va eslatma tartibini kiriting.');
        if (x.category === 'inventory') out.push('ABC/XYZ tahlili orqali muzlagan pulni kamaytiring.');
        if (x.category === 'delegation') out.push('RACI rol-mas`uliyat matritsasini yozing.');
        if (x.category === 'planning') out.push('Haftalik 30 daqiqalik reja yig`ilishini joriy qiling.');
        if (x.category === 'team_kpi') out.push('3-5 asosiy KPI ni kundalik dashboardga chiqaring.')
      });
      return [...new Set(out)].slice(0, 6)
    }

    function reportsByWeak(weak) {
      const s = new Set();
      weak.forEach(x => {
        if (['cashflow', 'forecasting'].includes(x.category)) s.add("CashFlow + To'lov kalendari");
        if (['profitability', 'pricing'].includes(x.category)) s.add('P&L va marja nazorati');
        if (x.category === 'working_capital') s.add('Debitor/Kreditor monitoring');
        if (x.category === 'inventory') s.add('ABC/XYZ (ombor)');
        if (['team_kpi', 'planning', 'delegation', 'processes', 'hr', 'motivation'].includes(x.category)) s.add(
          'KPI Dashboard');
        if (x.category === 'sales_ops') s.add('CRM funnel hisoboti')
      });
      s.add('Balans (oylik)');
      s.add('Plan-Fakt (oylik)');
      return [...s].slice(0, 7)
    }

    function rp(cx, cy, r, val) {
      const n = val.length;
      return val.map((v, i) => {
        const a = -Math.PI / 2 + i * 2 * Math.PI / n;
        const k = r * (v / 100);
        return [cx + Math.cos(a) * k, cy + Math.sin(a) * k]
      })
    }

    function renderRadar(id, keys, vals) {
      const s = el(id);
      s.innerHTML = '';
      const cx = 170,
        cy = 140,
        r = 90;
      for (let l = 1; l <= 5; l++) {
        const p = rp(cx, cy, r * (l / 5), new Array(keys.length).fill(100));
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        g.setAttribute('points', p.map(x => x.join(',')).join(' '));
        g.setAttribute('fill', 'none');
        g.setAttribute('stroke', '#d9e4df');
        s.appendChild(g)
      }
      keys.forEach((k, i) => {
        const a = -Math.PI / 2 + i * 2 * Math.PI / keys.length;
        const x = cx + Math.cos(a) * r,
          y = cy + Math.sin(a) * r;
        const ln = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        ln.setAttribute('x1', cx);
        ln.setAttribute('y1', cy);
        ln.setAttribute('x2', x);
        ln.setAttribute('y2', y);
        ln.setAttribute('stroke', '#e3ebe8');
        s.appendChild(ln);
        const t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        t.setAttribute('x', cx + Math.cos(a) * (r + 20));
        t.setAttribute('y', cy + Math.sin(a) * (r + 20));
        t.setAttribute('font-size', '10');
        t.setAttribute('text-anchor', 'middle');
        t.textContent = LABELS[k] || k;
        s.appendChild(t)
      });
      const d = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      d.setAttribute('points', rp(cx, cy, r, vals).map(x => x.join(',')).join(' '));
      d.setAttribute('fill', 'rgba(0,58,47,.22)');
      d.setAttribute('stroke', '#003a2f');
      d.setAttribute('stroke-width', '2');
      s.appendChild(d)
    }

    function renderBar(arr) {
      const s = el('weakBar');
      s.innerHTML = '';
      arr.forEach((x, i) => {
        const y = 26 + i * 42,
          w = Math.max(8, x.value * 2.2);
        const t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        t.setAttribute('x', 6);
        t.setAttribute('y', y + 15);
        t.setAttribute('font-size', '11');
        t.textContent = LABELS[x.category] || x.category;
        s.appendChild(t);
        const bg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        bg.setAttribute('x', 130);
        bg.setAttribute('y', y);
        bg.setAttribute('width', 230);
        bg.setAttribute('height', 16);
        bg.setAttribute('fill', '#edf2f0');
        s.appendChild(bg);
        const b = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        b.setAttribute('x', 130);
        b.setAttribute('y', y);
        b.setAttribute('width', w);
        b.setAttribute('height', 16);
        b.setAttribute('fill', '#003a2f');
        s.appendChild(b);
        const v = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        v.setAttribute('x', 368);
        v.setAttribute('y', y + 13);
        v.setAttribute('font-size', '11');
        v.textContent = Math.round(x.value) + '%';
        s.appendChild(v)
      })
    }

    function renderDonut(arr) {
      const map = {
        naqdlik: ['cashflow', 'forecasting'],
        marja: ['profitability', 'pricing'],
        qarz: ['working_capital'],
        ombor: ['inventory'],
        jarayon: ['processes', 'delegation', 'planning'],
        nazorat: ['team_kpi', 'hr', 'motivation', 'sales_ops', 'tax_legal']
      };
      const val = {
        naqdlik: 0,
        marja: 0,
        qarz: 0,
        ombor: 0,
        jarayon: 0,
        nazorat: 0
      };
      arr.forEach(x => Object.keys(map).forEach(k => {
        if (map[k].includes(x.category)) val[k] += 100 - x.value
      }));
      const sum = Object.values(val).reduce((a, b) => a + b, 0) || 1,
        clr = ['#003a2f', '#0b6a58', '#1d8b74', '#67b3a3', '#9acfc3', '#d4ece6'];
      const s = el('problemDonut');
      s.innerHTML = '';
      let st = -Math.PI / 2,
        ci = 0,
        li = 0;
      const pol = (cx, cy, r, a) => ({
        x: cx + r * Math.cos(a),
        y: cy + r * Math.sin(a)
      });
      Object.keys(val).forEach(k => {
        const vv = val[k];
        if (vv <= 0) return;
        const en = st + (vv / sum) * Math.PI * 2,
          p1 = pol(120, 120, 80, st),
          p2 = pol(120, 120, 80, en),
          p3 = pol(120, 120, 42, en),
          p4 = pol(120, 120, 42, st),
          lg = en - st > Math.PI ? 1 : 0;
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d',
          `M ${p1.x} ${p1.y} A 80 80 0 ${lg} 1 ${p2.x} ${p2.y} L ${p3.x} ${p3.y} A 42 42 0 ${lg} 0 ${p4.x} ${p4.y} Z`
          );
        path.setAttribute('fill', clr[ci % clr.length]);
        s.appendChild(path);
        const mark = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        mark.setAttribute('x', 200);
        mark.setAttribute('y', 16 + li * 20);
        mark.setAttribute('width', 12);
        mark.setAttribute('height', 12);
        mark.setAttribute('fill', clr[ci % clr.length]);
        s.appendChild(mark);
        const t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        t.setAttribute('x', 220);
        t.setAttribute('y', 25 + li * 20);
        t.setAttribute('font-size', '11');
        t.textContent = `${k}: ${Math.round(vv/sum*100)}%`;
        s.appendChild(t);
        st = en;
        ci++;
        li++
      })
    }

    function renderResult() {
      const fin = computeBlock('finance'),
        man = computeBlock('management');
      const overall = Math.round((fin.percent + man.percent) / 2);
      const weakQ = extremes(false),
        strongQ = extremes(true),
        weak = weakCategories(fin, man);
      const main = mainConclusion(fin.percent, man.percent, weak[0] ? weak[0].category : 'cashflow');
      el('overallScore').textContent = overall + '%';
      el('overallLevel').textContent = levelByPercent(overall);
      el('overallLine').textContent = main;
      el('financeScore').textContent = fin.percent + '%';
      el('financeLevel').textContent = levelByPercent(fin.percent);
      el('managementScore').textContent = man.percent + '%';
      el('managementLevel').textContent = levelByPercent(man.percent);
      el('financeLine').textContent = fin.percent < 50 ? "Pul oqimi va foyda nazorati zaif." : fin.percent < 70 ?
        "Asos bor, lekin intizomni kuchaytirish kerak." : "Moliyaviy tizim barqaror.";
      el('managementLine').textContent = man.percent < 50 ? "Jarayonlar va delegatsiya sust." : man.percent < 70 ?
        "Boshqaruvni standartlash kerak." : "Menejment tizimi yaxshi.";
      el('mainConclusion').textContent = main;
      const insights = [];
      if (fin.percent < 50) insights.push("Pul oqimi va foyda nazorati zaif. CashGap bosimi bor.");
      if (man.percent < 50) insights.push("Jarayonlar va delegatsiya sust: operatsion yuk rahbarda.");
      weak.slice(0, 4).forEach(x => insights.push(insightByCategory(x.category)));
      const uniq = [...new Set(insights)].slice(0, 7);
      while (uniq.length < 3) uniq.push('1-3 ustuvor yo`nalishni tanlab haftalik nazoratni ishga tushiring.');
      renderList('insights', uniq);
      renderQA('weakQuestions', weakQ, true);
      renderQA('strongQuestions', strongQ, false);
      renderList('quickPlan', planByWeak(weak));
      renderList('neededReports', reportsByWeak(weak));
      const fk = ['cashflow', 'profitability', 'forecasting', 'working_capital', 'inventory', 'pricing', 'tax_legal'],
        mk = ['processes', 'delegation', 'team_kpi', 'hr', 'motivation', 'planning', 'sales_ops'];
      renderRadar('financeRadar', fk, fk.map(k => fin.categoryPercent[k] || 0));
      renderRadar('managementRadar', mk, mk.map(k => man.categoryPercent[k] || 0));
      renderBar(weak);
      renderDonut(weak);
      app.result = {
        overall,
        fin,
        man,
        weak,
        weakQ,
        strongQ,
        main,
        insights: uniq,
        plan: planByWeak(weak),
        reports: reportsByWeak(weak)
      }
    }

    function validateIntro() {
      const name = el('fullName').value.trim(),
        phone = el('phone').value.trim(),
        business = el('businessName').value.trim(),
        sector = el('sector').value;
      const ok = name && phone && business && sector;
      el('introErr').style.display = ok ? 'none' : 'block';
      if (ok) {
        app.user = {
          name,
          phone,
          business,
          sector
        }
      }
      return ok
    }

    function saveDraft() {
      localStorage.setItem(DRAFT_KEY, JSON.stringify({
        mode: app.mode,
        current: app.current,
        answers: app.answers,
        user: app.user
      }))
    }

    function loadDraft() {
      try {
        return JSON.parse(localStorage.getItem(DRAFT_KEY) || 'null')
      } catch {
        return null
      }
    }
    async function loadLogoMeta() {
      return new Promise(resolve => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
          const c = document.createElement('canvas');
          c.width = img.width;
          c.height = img.height;
          const x = c.getContext('2d');
          x.drawImage(img, 0, 0);
          resolve({
            dataUrl: c.toDataURL('image/png'),
            width: img.width,
            height: img.height
          });
        };
        img.onerror = () => resolve(null);
        img.src = 'assets/img/logo.png';
      });
    }
    async function svgToPngDataUrl(id) {
      const svg = el(id);
      if (!svg) return null;
      const xml = new XMLSerializer().serializeToString(svg);
      const blob = new Blob([xml], {
        type: 'image/svg+xml;charset=utf-8'
      });
      const url = URL.createObjectURL(blob);
      const vb = svg.viewBox && svg.viewBox.baseVal;
      const width = (vb && vb.width) ? vb.width : (svg.clientWidth || 360);
      const height = (vb && vb.height) ? vb.height : (svg.clientHeight || 220);
      return await new Promise(resolve => {
        const img = new Image();
        img.onload = () => {
          const c = document.createElement('canvas');
          c.width = width;
          c.height = height;
          const ctx = c.getContext('2d');
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, width, height);
          ctx.drawImage(img, 0, 0, width, height);
          URL.revokeObjectURL(url);
          resolve(c.toDataURL('image/png'));
        };
        img.onerror = () => {
          URL.revokeObjectURL(url);
          resolve(null)
        };
        img.src = url;
      });
    }

    function addTextList(doc, title, items, startY, page) {
      const maxW = 515;
      let y = startY;
      const ensure = (h) => {
        if (y + h > page.h - 40) {
          doc.addPage();
          y = 40;
        }
      };
      ensure(20);
      doc.setFontSize(12);
      doc.setTextColor(0, 58, 47);
      doc.text(title, 40, y);
      y += 16;
      doc.setTextColor(20, 35, 30);
      doc.setFontSize(10.5);
      items.forEach(line => {
        const rows = doc.splitTextToSize('- ' + line, maxW);
        ensure(rows.length * 13 + 4);
        doc.text(rows, 40, y);
        y += rows.length * 13 + 4;
      });
      return y + 4;
    }
    async function buildPdfBlob() {
      if (!window.jspdf || !window.jspdf.jsPDF) throw new Error('PDF kutubxonasi yuklanmadi');
      const {
        jsPDF
      } = window.jspdf;
      const doc = new jsPDF({
        unit: 'pt',
        format: 'a4'
      });
      const page = {
        w: 595,
        h: 842
      };
      let y = 0;

      doc.setFillColor(0, 58, 47);
      doc.rect(0, 0, page.w, 96, 'F');

      const logo = await loadLogoMeta();
      if (logo) {
        const maxW = 130,
          maxH = 54;
        const ratio = Math.min(maxW / logo.width, maxH / logo.height);
        const w = logo.width * ratio,
          h = logo.height * ratio;
        doc.addImage(logo.dataUrl, 'PNG', 38, 21, w, h);
      } else {
        doc.setFontSize(18);
        doc.setTextColor(255, 255, 255);
        doc.text('GEKTO', 40, 54);
      }

      doc.setTextColor(255, 255, 255);
      doc.setFontSize(20);
      const title = 'Biznes Diagnostika Hisoboti';
      const tw = doc.getTextWidth(title);
      doc.text(title, (page.w - tw) / 2, 56);

      y = 120;
      doc.setFillColor(244, 250, 247);
      doc.roundedRect(36, y, 523, 96, 10, 10, 'F');
      doc.setDrawColor(212, 231, 223);
      doc.roundedRect(36, y, 523, 96, 10, 10, 'S');
      doc.setTextColor(0, 58, 47);
      doc.setFontSize(11);
      doc.text('Mijoz ma\'lumotlari', 52, y + 22);
      doc.setTextColor(20, 35, 30);
      doc.setFontSize(12);
      doc.text(`Biznes nomi: ${app.user.business}`, 52, y + 44);
      doc.text(`Sohasi: ${app.user.sector}`, 52, y + 64);
      doc.text(`Ism: ${app.user.name}`, 320, y + 44);
      doc.text(`Telefon: ${app.user.phone}`, 320, y + 64);

      y += 118;
      doc.setFontSize(16);
      doc.setTextColor(0, 58, 47);
      doc.text('Natijalar', 40, y);
      y += 12;

      const cards = [{
          label: 'Umumiy',
          v: `${app.result.overall}%`,
          lvl: levelByPercent(app.result.overall)
        },
        {
          label: 'Moliyaviy',
          v: `${app.result.fin.percent}%`,
          lvl: levelByPercent(app.result.fin.percent)
        },
        {
          label: 'Menejment',
          v: `${app.result.man.percent}%`,
          lvl: levelByPercent(app.result.man.percent)
        }
      ];
      let cx = 40;
      cards.forEach(c => {
        doc.setFillColor(250, 253, 252);
        doc.roundedRect(cx, y, 166, 70, 8, 8, 'F');
        doc.setDrawColor(220, 234, 228);
        doc.roundedRect(cx, y, 166, 70, 8, 8, 'S');
        doc.setFontSize(10);
        doc.setTextColor(80, 95, 89);
        doc.text(c.label, cx + 10, y + 16);
        doc.setFontSize(20);
        doc.setTextColor(0, 58, 47);
        doc.text(c.v, cx + 10, y + 40);
        doc.setFontSize(9.5);
        doc.setTextColor(60, 72, 67);
        doc.text(c.lvl, cx + 10, y + 56);
        cx += 178;
      });
      y += 84;

      const chartIds = ['financeRadar', 'managementRadar', 'weakBar', 'problemDonut'];
      const chartImages = await Promise.all(chartIds.map(svgToPngDataUrl));
      const chW = 250,
        chH = 165;
      for (let i = 0; i < chartImages.length; i += 2) {
        if (y + chH + 24 > page.h - 40) {
          doc.addPage();
          y = 40;
        }
        [0, 1].forEach((k) => {
          const idx = i + k,
            img = chartImages[idx];
          if (!img) return;
          const x = k === 0 ? 40 : 305;
          doc.setFillColor(255, 255, 255);
          doc.roundedRect(x, y, 250, 165, 8, 8, 'F');
          doc.setDrawColor(220, 234, 228);
          doc.roundedRect(x, y, 250, 165, 8, 8, 'S');
          doc.addImage(img, 'PNG', x + 8, y + 8, chW - 16, chH - 16);
        });
        y += 178;
      }

      y = addTextList(doc, 'Asosiy xulosa', [app.result.main], y, page);
      y = addTextList(doc, 'Tavsiyalar', app.result.insights, y, page);
      y = addTextList(doc, 'Top-5 zaif savollar', app.result.weakQ.map(x => `${x.score}/5 - ${x.text}`), y, page);
      y = addTextList(doc, 'Top-5 kuchli savollar', app.result.strongQ.map(x => `${x.score}/5 - ${x.text}`), y, page);
      y = addTextList(doc, '7 kunlik reja', app.result.plan, y, page);
      y = addTextList(doc, 'Kerak bo`ladigan hisobotlar', app.result.reports, y, page);

      if (y + 90 > page.h - 40) {
        doc.addPage();
        y = 40;
      }
      doc.setTextColor(30, 45, 39);
      doc.setFontSize(11);
      doc.text("Agar ushbu masalalarni hal qilishni xohlasangiz, quyidagi kontaktlar orqali biz bilan bog'laning.",
        40, y);
      y += 20;
      doc.setDrawColor(212, 231, 223);
      doc.line(40, y, page.w - 40, y);
      y += 18;
      doc.setFontSize(12);
      doc.setTextColor(0, 58, 47);
      doc.text('Kontaktlar', 40, y);
      y += 16;
      doc.setFontSize(11);
      doc.setTextColor(20, 35, 30);
      doc.text(`Tel: ${CONTACTS.tel1} / ${CONTACTS.tel2}`, 40, y);
      y += 14;
      doc.text(`Telegram: ${CONTACTS.telegram}`, 40, y);
      y += 14;
      doc.text(`Mail: ${CONTACTS.mail}`, 40, y);
      y += 14;
      doc.text(`Adres: ${CONTACTS.address}`, 40, y);

      return doc.output('blob');
    }
    async function sendViaEndpoint(pdfBase64) {
      const payload = {
        name: app.user.name,
        phone: app.user.phone,
        company: app.user.business,
        sector: app.user.sector,
        page: location.href,
        secret: SECRET,
        summary: `Umumiy: ${app.result.overall}% | Moliyaviy: ${app.result.fin.percent}% | Menejment: ${app.result.man.percent}%`,
        pdf: pdfBase64 || ''
      };
      try {
        await fetch(ENDPOINT, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
        return true;
      } catch {
        return false;
      }
    }
    async function sendPdfToTelegram(blob) {
      if (TELEGRAM_CONFIG.botToken && TELEGRAM_CONFIG.chatId) {
        const fd = new FormData();
        fd.append('chat_id', TELEGRAM_CONFIG.chatId);
        if (TELEGRAM_CONFIG.topicId) fd.append('message_thread_id', TELEGRAM_CONFIG.topicId);
        const caption =
          `Yangi diagnostika: ${app.user.business}\nSohasi: ${app.user.sector}\nIsm: ${app.user.name}\nTel: ${app.user.phone}\nUmumiy: ${app.result.overall}%`;
        fd.append('caption', caption);
        fd.append('document', new File([blob], `diagnostika_${Date.now()}.pdf`, {
          type: 'application/pdf'
        }));
        const r = await fetch(`https://api.telegram.org/bot${TELEGRAM_CONFIG.botToken}/sendDocument`, {
          method: 'POST',
          body: fd
        });
        if (r.ok) return true;
      }
      const pdf64 = await new Promise(res => {
        const fr = new FileReader();
        fr.onload = () => res(String(fr.result).split(',')[1] || '');
        fr.onerror = () => res('');
        fr.readAsDataURL(blob)
      });
      return await sendViaEndpoint(pdf64 || '');
    }
    async function onPdfAndSend() {
      try {
        const blob = await buildPdfBlob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'gekto-diagnostika.pdf';
        a.click();
        URL.revokeObjectURL(url);
        const sent = await sendPdfToTelegram(blob);
        if (sent) {
          alert('PDF yuklandi va so\'rov Telegramga yuborildi.')
        } else {
          alert('PDF yuklandi, lekin yuborishda xatolik bo\'ldi.')
        }
      } catch (e) {
        alert('PDF yaratishda xatolik: ' + e.message)
      }
    }

    function initEvents() {
      el('goMode').addEventListener('click', () => {
        if (!validateIntro()) return;
        show('screen-mode')
      });
      el('backIntro').addEventListener('click', () => show('screen-intro'));
      document.querySelectorAll('input[name="mode"]').forEach(r => r.addEventListener('change', renderModeCards));
      el('modeNormalCard').addEventListener('click', () => {
        document.querySelector('input[name="mode"][value="normal"]').checked = true;
        renderModeCards()
      });
      el('modeDeepCard').addEventListener('click', () => {
        document.querySelector('input[name="mode"][value="deep"]').checked = true;
        renderModeCards()
      });
      el('startTest').addEventListener('click', () => {
        app.mode = document.querySelector('input[name="mode"]:checked').value;
        app.questions = buildQuestions(app.mode);
        app.current = 0;
        app.answers = {};
        show('screen-quiz');
        renderQuestion()
      });
      el('quizBack').addEventListener('click', () => {
        saveCurrent();
        if (app.current > 0) app.current--;
        renderQuestion()
      });
      el('quizNext').addEventListener('click', () => {
        saveCurrent();
        if (app.current < app.questions.length - 1) {
          app.current++;
          renderQuestion();
          return;
        }
        localStorage.removeItem(DRAFT_KEY);
        renderResult();
        show('screen-result');
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      });
      el('saveExit').addEventListener('click', () => {
        saveCurrent();
        saveDraft();
        alert('Draft saqlandi. Keyin davom ettirasiz.');
        show('screen-intro')
      });
      el('printResult').addEventListener('click', () => window.print());
      el('pdfAndSend').addEventListener('click', onPdfAndSend);
    }

    function restoreDraftButton() {
      const d = loadDraft();
      if (!d) return;
      const btn = document.createElement('button');
      btn.className = 'btn';
      btn.innerHTML = '<span>Draftni davom ettirish</span>';
      btn.addEventListener('click', () => {
        app.mode = d.mode || 'normal';
        app.current = d.current || 0;
        app.answers = d.answers || {};
        app.user = d.user || app.user;
        el('fullName').value = app.user.name || '';
        el('phone').value = app.user.phone || '';
        el('businessName').value = app.user.business || '';
        el('sector').value = app.user.sector || '';
        show('screen-mode');
        document.querySelector(`input[name="mode"][value="${app.mode}"]`).checked = true;
        renderModeCards();
        app.questions = buildQuestions(app.mode);
        show('screen-quiz');
        renderQuestion()
      });
      el('screen-intro').querySelector('.actions').appendChild(btn)
    }
    (function init() {
      fillSectors();
      initEvents();
      restoreDraftButton();
      const header = document.querySelector('header.main-header');
      if (header) {
        const t = () => header.classList.toggle('scrolled', window.scrollY > 10);
        t();
        window.addEventListener('scroll', t, {
          passive: true
        })
      }
      if (window.jQuery) {
        jQuery(window).on('load', function () {
          new WOW().init();
        });
      } else {
        new WOW().init();
      }
    })();
  
