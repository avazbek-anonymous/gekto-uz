(function () {
  const ENDPOINT = "https://script.google.com/macros/s/AKfycbzN6zZrY27H4tqLSBPBPxj6A7fBqf0z7Zn0HsWwR8vsGKZe7WJ2t0qs9E14K5PYV9o5/exec";
  const SECRET = "mySecret123";
  const SECTORS = [
    "Agrobiznes", "Arxitektura va dizayn", "Avtoservis", "Bank va moliya", "Boshqa", "Chakana savdo",
    "Dorixona", "E-commerce", "Eksport-import", "Franshiza", "Gozallik va salomatlik", "HoReCa (kafe/restoran)",
    "IT va raqamli xizmatlar", "Ishlab chiqarish", "Konsalting", "Logistika", "Marketing agentligi", "Qurilish",
    "Sanoat xizmatlari", "Ta'lim", "Tekstil", "Telekommunikatsiya", "Turizm", "Ulgurji savdo", "Xizmat ko'rsatish", "Yuridik xizmatlar"
  ];

  function normalizePhone(v) {
    let d = String(v || "").replace(/\D/g, "");
    if (d.startsWith("998")) d = d.slice(3);
    d = d.slice(0, 9);
    if (d.length < 9) return "";
    return "+998" + d;
  }

  function setupForm(form) {
    const sectorEl = form.querySelector('select[name="sector"]');
    const nameEl = form.querySelector('input[name="name"]');
    const phoneEl = form.querySelector('input[name="phone"]');
    const msgEl = form.querySelector('.js-lead-msg');
    const btn = form.querySelector('button[type="submit"]');
    const btnTextEl = btn ? btn.querySelector('span') : null;

    if (!sectorEl || !nameEl || !phoneEl || !msgEl || !btn) return;

    const sorted = [...SECTORS].sort((a, b) => a.localeCompare(b));
    sectorEl.innerHTML = '<option value="">Sohani tanlang</option>' + sorted.map(function (x) {
      return '<option value="' + x + '">' + x + '</option>';
    }).join('');

    phoneEl.addEventListener("focus", function () {
      if (!phoneEl.value) phoneEl.value = "+998";
    });

    phoneEl.addEventListener("input", function () {
      let d = phoneEl.value.replace(/\D/g, "");
      if (d.startsWith("998")) d = d.slice(3);
      phoneEl.value = "+998" + d.slice(0, 9);
    });

    phoneEl.addEventListener("blur", function () {
      if (phoneEl.value === "+998") phoneEl.value = "";
    });

    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const sector = (sectorEl.value || "").trim();
      const name = (nameEl.value || "").trim();
      const phone = normalizePhone(phoneEl.value);

      if (!sector) {
        msgEl.style.color = "#b91c1c";
        msgEl.textContent = "Sohani tanlang.";
        return;
      }
      if (!phone) {
        msgEl.style.color = "#b91c1c";
        msgEl.textContent = "Telefon raqamini to'liq kiriting.";
        return;
      }

      const payload = {
        name: (name + (sector ? ' | Soha: ' + sector : "")).trim(),
        phone: phone,
        page: location.href,
        secret: SECRET
      };

      btn.disabled = true;
      if (btnTextEl) btnTextEl.textContent = "Yuborilmoqda...";
      msgEl.style.color = "#334155";
      msgEl.textContent = "Yuborilmoqda...";

      try {
        await fetch(ENDPOINT, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        form.reset();
        msgEl.style.color = "#166534";
        msgEl.textContent = "Ma'lumot yuborildi. Tez orada bog'lanamiz.";
      } catch (err) {
        msgEl.style.color = "#b91c1c";
        msgEl.textContent = "Xatolik. Qayta urinib ko'ring.";
      } finally {
        btn.disabled = false;
        if (btnTextEl) btnTextEl.textContent = "Jo'natish";
      }
    });
  }

  document.querySelectorAll("form.js-lead-form").forEach(setupForm);
})();
