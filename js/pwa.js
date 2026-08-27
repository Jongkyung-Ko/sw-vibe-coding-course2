(() => {
  const btn = document.getElementById("pwaInstallBtn");
  if (!btn) return;

  const isEn = document.documentElement.lang === "en" || document.body.classList.contains("en-page");
  const labels = isEn
    ? {
        install: "Install app",
        installed: "Installed",
        unavailable: "Install tip",
        tipTitle: "Add to Home Screen",
        tipBody:
          "This browser did not show an install prompt. On iPhone/iPad: Share → Add to Home Screen. On desktop Chrome/Edge: use the install icon in the address bar.",
      }
    : {
        install: "앱 설치",
        installed: "설치됨",
        unavailable: "설치 안내",
        tipTitle: "홈 화면에 추가",
        tipBody:
          "이 브라우저는 자동 설치 안내를 띄우지 않았습니다. iPhone/iPad: 공유 → 홈 화면에 추가. Chrome/Edge 데스크톱: 주소창의 설치 아이콘을 사용하세요.",
      };

  btn.hidden = false;
  btn.textContent = labels.install;

  let deferredPrompt = null;

  function isStandalone() {
    return (
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true
    );
  }

  function setInstalled() {
    btn.textContent = labels.installed;
    btn.disabled = true;
    btn.classList.add("is-installed");
  }

  if (isStandalone()) {
    setInstalled();
  }

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    btn.hidden = false;
    btn.disabled = false;
    btn.textContent = labels.install;
    btn.classList.remove("is-installed");
  });

  window.addEventListener("appinstalled", () => {
    deferredPrompt = null;
    setInstalled();
  });

  btn.addEventListener("click", async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice.catch(() => null);
      deferredPrompt = null;
      if (choice && choice.outcome === "accepted") setInstalled();
      return;
    }

    if (isStandalone()) {
      setInstalled();
      return;
    }

    // Fallback guidance when beforeinstallprompt is unavailable (Safari etc.)
    const existing = document.getElementById("pwaTip");
    if (existing) {
      existing.remove();
      return;
    }
    const tip = document.createElement("div");
    tip.id = "pwaTip";
    tip.className = "pwa-tip";
    tip.innerHTML = `<strong>${labels.tipTitle}</strong><p>${labels.tipBody}</p><button type="button" class="pwa-tip-close" aria-label="Close">×</button>`;
    document.body.appendChild(tip);
    tip.querySelector(".pwa-tip-close")?.addEventListener("click", () => tip.remove());
    setTimeout(() => tip.remove(), 12000);
  });

  // Register service worker (path differs for /en/)
  if ("serviceWorker" in navigator) {
    const swUrl = isEn ? "../sw.js" : "./sw.js";
    window.addEventListener("load", () => {
      navigator.serviceWorker.register(swUrl).catch(() => {});
    });
  }
})();
