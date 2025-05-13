      function filterProducts() {
      const processorCheckboxes = document.querySelectorAll('.dropdown:nth-child(1) input[type="checkbox"]');
      const gpuCheckboxes = document.querySelectorAll('.dropdown:nth-child(2) input[type="checkbox"]');
      const ramCheckboxes = document.querySelectorAll('.dropdown:nth-child(3) input[type="checkbox"]');
      const screenSizeCheckboxes = document.querySelectorAll('.dropdown:nth-child(4) input[type="checkbox"]');
      const osCheckboxes = document.querySelectorAll('.dropdown:nth-child(5) input[type="checkbox"]');
      const storageCheckboxes = document.querySelectorAll('.dropdown:nth-child(6) input[type="checkbox"]');
  
      const selectedProcessors = [];
      const selectedGpus = [];
      const selectedRams = [];
      const selectedScreenSizes = [];
      const selectedOs = [];
      const selectedStorages = [];
  
      processorCheckboxes.forEach(cb => {
          if (cb.checked) selectedProcessors.push(cb.value);
      });
  
      gpuCheckboxes.forEach(cb => {
          if (cb.checked) selectedGpus.push(cb.value);
      });
  
      ramCheckboxes.forEach(cb => {
          if (cb.checked) selectedRams.push(cb.value);
      });
  
      screenSizeCheckboxes.forEach(cb => {
          if (cb.checked) selectedScreenSizes.push(cb.value);
      });
  
      osCheckboxes.forEach(cb => {
          if (cb.checked) selectedOs.push(cb.value);
      });
  
      storageCheckboxes.forEach(cb => {
          if (cb.checked) selectedStorages.push(cb.value);
      });
  
      const cards = document.querySelectorAll('.monitor-card');
      cards.forEach(card => {
          const processor = card.getAttribute('data-processor');
          const gpu = card.getAttribute('data-gpu');
          const ram = card.getAttribute('data-ram');
          const screenSize = card.getAttribute('data-screen-size');
          const os = card.getAttribute('data-os');
          const storage = card.getAttribute('data-storage');
  
          const processorMatch = selectedProcessors.length === 0 || selectedProcessors.includes(processor);
          const gpuMatch = selectedGpus.length === 0 || selectedGpus.includes(gpu);
          const ramMatch = selectedRams.length === 0 || selectedRams.includes(ram);
          const screenSizeMatch = selectedScreenSizes.length === 0 || selectedScreenSizes.includes(screenSize);
          const osMatch = selectedOs.length === 0 || selectedOs.includes(os);
          const storageMatch = selectedStorages.length === 0 || selectedStorages.includes(storage);
  
          if (processorMatch && gpuMatch && ramMatch && screenSizeMatch && osMatch && storageMatch) {
              card.style.display = 'block';
          } else {
              card.style.display = 'none';
          }
      });
  }
      const processorCheckboxes = document.querySelectorAll('.dropdown:nth-child(1) input[type="checkbox"]');
      const gpuCheckboxes = document.querySelectorAll('.dropdown:nth-child(2) input[type="checkbox"]');
      const ramCheckboxes = document.querySelectorAll('.dropdown:nth-child(3) input[type="checkbox"]');
      const screenSizeCheckboxes = document.querySelectorAll('.dropdown:nth-child(4) input[type="checkbox"]');
      const osCheckboxes = document.querySelectorAll('.dropdown:nth-child(5) input[type="checkbox"]');
  
      const selectedProcessors = [];
      const selectedGpus = [];
      const selectedRams = [];
      const selectedScreenSizes = [];
      const selectedOs = [];
  
      processorCheckboxes.forEach(cb => {
          if (cb.checked) selectedProcessors.push(cb.value);
      });
  
      gpuCheckboxes.forEach(cb => {
          if (cb.checked) selectedGpus.push(cb.value);
      });
  
      ramCheckboxes.forEach(cb => {
          if (cb.checked) selectedRams.push(cb.value);
      });
  
      screenSizeCheckboxes.forEach(cb => {
          if (cb.checked) selectedScreenSizes.push(cb.value);
      });
  
      osCheckboxes.forEach(cb => {
          if (cb.checked) selectedOs.push(cb.value);
      });
  
      const cards = document.querySelectorAll('.monitor-card');
      cards.forEach(card => {
          const processor = card.getAttribute('data-processor');
          const gpu = card.getAttribute('data-gpu');
          const ram = card.getAttribute('data-ram');
          const screenSize = card.getAttribute('data-screen-size');
          const os = card.getAttribute('data-os');
  
          const processorMatch = selectedProcessors.length === 0 || selectedProcessors.includes(processor);
          const gpuMatch = selectedGpus.length === 0 || selectedGpus.includes(gpu);
          const ramMatch = selectedRams.length === 0 || selectedRams.includes(ram);
          const screenSizeMatch = selectedScreenSizes.length === 0 || selectedScreenSizes.includes(screenSize);
          const osMatch = selectedOs.length === 0 || selectedOs.includes(os);
  
          if (processorMatch && gpuMatch && ramMatch && screenSizeMatch && osMatch) {
              card.style.display = 'block';
          } else {
              card.style.display = 'none';
          }
      });




      const sepetAnahtari = 'sepetim';
      let sepet = [];
      
      const urunFiyatlari = {
        'Pusat Gaming Headset Lite': 999.00,
        'Pusat 7.1 Surround Lite RGB': 1699.00
      };
      
      function sepetiYukle() {
        const kayitliSepet = localStorage.getItem(sepetAnahtari);
        if (kayitliSepet) {
          sepet = JSON.parse(kayitliSepet);
          guncelleSepet();
        }
      }
      
      function sepetiKaydet() {
        localStorage.setItem(sepetAnahtari, JSON.stringify(sepet));
      }
      
      function sepeteEkle(urunAdi, urunFiyat) {
        urunFiyat = parseFloat(urunFiyat.toString().replace(',', '.')); 
        const urunIndex = sepet.findIndex(u => u.ad === urunAdi);
        if (urunIndex > -1) {
          sepet[urunIndex].adet++;
        } else {
          sepet.push({ ad: urunAdi, fiyat: urunFiyat, adet: 1 });
          alert("Ürün Sepete Eklendi 😊")
        }
        sepetiKaydet();
        guncelleSepet();
      }
      
      function urunuAzalt(urunAdi) {
        const urunIndex = sepet.findIndex(u => u.ad === urunAdi);
        if (urunIndex > -1) {
          if (sepet[urunIndex].adet > 1) {
            sepet[urunIndex].adet--;
          } else {
            sepet.splice(urunIndex, 1);
          }
          sepetiKaydet();
          guncelleSepet();
        }
      }
      
      function sepetiBosalt() {
        sepet = [];
        localStorage.removeItem(sepetAnahtari);
        guncelleSepet();
        alert("Sepetiniz boşaltıldı.");
      }
      
      function guncelleSepet() {
        const sepetListe = document.getElementById('sepetListe');
        const toplamFiyatSpan = document.getElementById('toplamFiyat');
        const sepetAdetSpan = document.getElementById('sepetAdet');
        let toplamFiyat = 0;
        let toplamAdet = 0;
      
        if (sepet.length === 0) {
          sepetListe.innerHTML = '<p class="text-muted">Sepetiniz şu an boş.</p>';
        } else {
          const urunlerHTML = sepet.map(urun => {
            toplamAdet += urun.adet;
            toplamFiyat += urun.fiyat * urun.adet;
      
            return `
              <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${urun.ad}</span>
                <div>
                  <button class="btn btn-sm btn-outline-secondary me-1" onclick="urunuAzalt('${urun.ad}')">−</button>
                  <span>${urun.adet}</span>
                  <button class="btn btn-sm btn-outline-secondary ms-1" onclick="sepeteEkle('${urun.ad}', ${urun.fiyat})">+</button>
                  <span class="badge bg-primary rounded-pill ms-2">${(urun.fiyat * urun.adet).toFixed(2)} TL</span>
                </div>
              </li>
            `;
          }).join('');
          sepetListe.innerHTML = `<ul class="list-group">${urunlerHTML}</ul>`;
        }
      
        toplamFiyatSpan.textContent = toplamFiyat.toFixed(2);
        sepetAdetSpan.textContent = toplamAdet;
      }
      
      document.addEventListener('DOMContentLoaded', () => {
        sepetiYukle();
      
        document.querySelectorAll('.sepete-ekle').forEach(btn => {
          btn.addEventListener('click', () => {
            const urunAdi = btn.getAttribute('data-urun');
            const urunFiyat = btn.getAttribute('data-fiyat');
            sepeteEkle(urunAdi, urunFiyat);
          });
        });
      });
      
      window.addEventListener('beforeunload', sepetiKaydet);
      

  let kayitModu = false;

  function toggleGirisPanel() {
    const panel = document.getElementById("girisPanel");
    panel.style.right = panel.style.right === "0px" ? "-400px" : "0px";
  }

  function toggleKayitModu() {
    kayitModu = !kayitModu;
    const kayitAlanlari = document.querySelectorAll(".kayit-alani");
    const panelBaslik = document.getElementById("panelBaslik");
    const girisBtn = document.getElementById("girisBtn");
    const kayitBtn = document.getElementById("kayitBtn");

    if (kayitModu) {
      kayitAlanlari.forEach(el => el.style.display = "block");
      panelBaslik.textContent = "📝 Kayıt Ol";
      girisBtn.textContent = "Kayıt Ol";
      kayitBtn.textContent = "Giriş Yap";
    } else {
      kayitAlanlari.forEach(el => el.style.display = "none");
      panelBaslik.textContent = "🧑 Kullanıcı Girişi";
      girisBtn.textContent = "Giriş Yap";
      kayitBtn.textContent = "Kayıt Ol";
    }
  }

  function girisYap() {
    const kullanici = document.getElementById("kullaniciAdi").value;
    const sifre = document.getElementById("sifre").value;
    const eposta = document.getElementById("eposta").value;
    const telefon = document.getElementById("telefon").value;

    if (kayitModu) {
      if (kullanici && sifre && eposta && telefon) {
        localStorage.setItem("kullaniciAdi", kullanici);
        alert("Kayıt başarılı!");
        toggleGirisPanel();
        location.reload();
      } else {
        alert("Lütfen tüm alanları doldur!");
      }
    } else {
      if (kullanici && sifre) {
        localStorage.setItem("kullaniciAdi", kullanici);
        alert("Giriş başarılı!");
        toggleGirisPanel();
        document.getElementById("girisButon").innerHTML = `${kullanici} 👤 (Çıkış Yap)`;
        document.getElementById("girisButon").onclick = cikisYap;
      } else {
        alert("Kullanıcı adı ve şifre giriniz!");
      }
    }
  }

  function cikisYap() {
    localStorage.removeItem("kullaniciAdi");
    alert("Çıkış yapıldı!");
    document.getElementById("girisButon").innerHTML = "Giriş Yap";
    document.getElementById("girisButon").onclick = toggleGirisPanel;
  }

  window.onload = function () {
    const kullanici = localStorage.getItem("kullaniciAdi");
    if (kullanici) {
      document.getElementById("girisButon").innerHTML = `${kullanici} 👤 (Çıkış Yap)`;
      document.getElementById("girisButon").onclick = cikisYap;
    }
  };

