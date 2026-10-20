(() => {
  "use strict";
  const config = window.CHATBOT_CONFIG || {};
  const frame = document.getElementById("chatbot-frame");
  // Keep editable configuration as plain text, never HTML.
  const title = String(config.title || document.title).trim();
  document.getElementById("page-title").textContent = title;
  document.title = title;
  frame.title = `Trò chuyện với ${title}`;
  const organization = String(config.contact?.organization || "Công an xã Lệ Thủy");
  document.querySelector('meta[name="description"]').content = `${title} — ${organization}.`;
  ["primary", "background", "text"].forEach(key => {
    const value = config.colors?.[key];
    if (typeof value === "string" && /^#[0-9a-f]{6}$/i.test(value)) {
      document.documentElement.style.setProperty(`--${key}`, value);
      if (key === "primary") document.querySelector('meta[name="theme-color"]').content = value;
    }
  });
  document.getElementById("contact-organization").textContent = organization;
  if (config.contact?.phone) {
    const phone = String(config.contact.phone).trim();
    const link = document.getElementById("contact-phone");
    link.textContent = phone;
    if (/^\+?[\d\s().-]+$/.test(phone)) link.href = `tel:${phone.replace(/[^+\d]/g, "")}`;
    else link.removeAttribute("href");
  }
  const rawUrl = config.chatbotUrl ?? frame.getAttribute("src");
  try {
    const url = new URL(String(rawUrl).trim());
    if (url.protocol !== "https:" || url.username || url.password ||
        !/^\/chatbot\/[^/]+\/?$/.test(url.pathname)) throw new Error("Invalid chatbot URL");
    // Preserve an active conversation when the default already matches.
    if (frame.getAttribute("src") !== url.href) frame.src = url.href;
  } catch {
    frame.hidden = true;
    frame.removeAttribute("src");
    const message = document.getElementById("configuration-message");
    message.textContent = "Chưa thể mở chatbot. Vui lòng kiểm tra URL nhúng Dify trong cấu hình trang.";
    message.hidden = false;
  }
})();
