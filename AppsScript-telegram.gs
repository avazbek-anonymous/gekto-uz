/**
 * GEKTO leads + PDF relay
 * Deploy as Web App (Execute as: Me, Access: Anyone)
 * Required script properties / constants:
 * - SHEET_ID
 * - BOT_TOKEN
 */

const SHEET_SITE_NAME = "SiteLeads";
const TELEGRAM_SITE_CHAT_ID = -1003395283075;
const SECRET = "mySecret123";

function doPost(e) {
  try {
    const raw = e.postData && e.postData.contents ? e.postData.contents : "{}";
    const data = JSON.parse(raw);

    if (SECRET && data.secret !== SECRET) {
      return json_({ ok: false, error: "unauthorized" });
    }

    const ts = new Date();
    const name = String(data.name || "").trim();
    const phone = normalizePhone_(data.phone || "");
    const company = String(data.company || "").trim();
    const sector = String(data.sector || "").trim();
    const page = String(data.page || "").trim();
    const summary = String(data.summary || "").trim();
    const pdfBase64 = String(data.pdf || "");

    if (!phone) {
      return json_({ ok: false, error: "phone_empty" });
    }

    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sh = ss.getSheetByName(SHEET_SITE_NAME) || ss.insertSheet(SHEET_SITE_NAME);
    sh.appendRow([
      ts,
      name,
      phone,
      company,
      sector,
      page,
      summary,
      pdfBase64 ? "pdf_attached" : "no_pdf"
    ]);

    const text =
      "📩 Yangi diagnostika so'rovi\n" +
      "👤 Ism: " + (name || "-") + "\n" +
      "📞 Telefon: " + phone + "\n" +
      "🏢 Kompaniya: " + (company || "-") + "\n" +
      "🧭 Sohasi: " + (sector || "-") + "\n" +
      "📊 Natija: " + (summary || "-") + "\n" +
      "🌐 Sahifa: " + (page || "-");

    sendTelegramMessage_(text);

    if (pdfBase64) {
      sendTelegramPdf_(pdfBase64, company || "diagnostika");
    }

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function doGet(e) {
  try {
    const p = (e && e.parameter) ? e.parameter : {};
    const secret = p.secret || "";
    if (SECRET && secret !== SECRET) {
      return jsonp_(p.callback, { ok: false, error: "unauthorized" });
    }

    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sh = ss.getSheetByName(SHEET_SITE_NAME);
    if (!sh) return jsonp_(p.callback, { ok: true, rows: [] });

    const values = sh.getDataRange().getValues();
    if (!values || values.length === 0) return jsonp_(p.callback, { ok: true, rows: [] });

    const tz = "Asia/Tashkent";
    const limit = Math.min(Number(p.limit || 500), 2000);
    const from = Math.max(values.length - limit, 0);
    const rows = [];

    for (let i = from; i < values.length; i++) {
      const r = values[i];
      rows.push({
        ts: r[0] instanceof Date ? Utilities.formatDate(r[0], tz, "yyyy-MM-dd HH:mm:ss") : String(r[0] || ""),
        name: String(r[1] || ""),
        phone: String(r[2] || ""),
        company: String(r[3] || ""),
        sector: String(r[4] || ""),
        page: String(r[5] || ""),
        summary: String(r[6] || ""),
        pdf: String(r[7] || "")
      });
    }

    return jsonp_(p.callback, { ok: true, rows });
  } catch (err) {
    const cb = (e && e.parameter) ? e.parameter.callback : null;
    return jsonp_(cb, { ok: false, error: String(err) });
  }
}

function sendTelegramMessage_(text) {
  const url = "https://api.telegram.org/bot" + BOT_TOKEN + "/sendMessage";
  const payload = {
    chat_id: Number(TELEGRAM_SITE_CHAT_ID),
    text: text
  };
  const res = UrlFetchApp.fetch(url, {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  });
  const code = res.getResponseCode();
  const body = res.getContentText();
  if (code !== 200) throw new Error("Telegram sendMessage error " + code + ": " + body);
}

function sendTelegramPdf_(pdfBase64, companyName) {
  const bytes = Utilities.base64Decode(pdfBase64);
  const blob = Utilities.newBlob(bytes, "application/pdf", "diagnostika_" + sanitizeFile_(companyName) + ".pdf");
  const url = "https://api.telegram.org/bot" + BOT_TOKEN + "/sendDocument";
  const payload = {
    chat_id: String(TELEGRAM_SITE_CHAT_ID),
    caption: "📎 PDF diagnostika hisoboti",
    document: blob
  };
  const res = UrlFetchApp.fetch(url, {
    method: "post",
    payload: payload,
    muteHttpExceptions: true
  });
  const code = res.getResponseCode();
  const body = res.getContentText();
  if (code !== 200) throw new Error("Telegram sendDocument error " + code + ": " + body);
}

function sanitizeFile_(name) {
  return String(name || "report").replace(/[^\w\-]+/g, "_").slice(0, 40);
}

function normalizePhone_(v) {
  const digits = String(v).replace(/\D/g, "");
  let num = digits;
  if (num.startsWith("998")) num = num.slice(3);
  num = num.slice(0, 9);
  if (num.length < 9) return "";
  return "+998" + num;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function jsonp_(callbackName, obj) {
  const cb = callbackName && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(callbackName) ? callbackName : null;
  if (cb) {
    return ContentService.createTextOutput(cb + "(" + JSON.stringify(obj) + ");")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
