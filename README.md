# Üsküdar Üniversitesi Gençlik Kulübü Web Sitesi

Bu klasör, GitHub Pages üzerinden doğrudan yayınlanmaya hazır 3 parçalı (`index.html`, `style.css`, `app.js`) + `images/` yapısını içerir.

## Klasör Yapısı
- `index.html`: Sayfa iskeleti, navigasyon, açılış ekranı ve bölümler
- `style.css`: Turkuaz-beyaz / koyu tema stilleri ve açılış animasyonları
- `app.js`: Kolay düzenlenebilir veri listeleri (`JOIN_CLUB_URL`, `CLUB_INSTAGRAM`, `ANNOUNCEMENTS`, `TEAM_44`, `EVENTS`, `NEWS_ITEMS`) ve etkileşim kodları
- `images/`: 33 adet optimize edilmiş kulüp fotoğrafı ve resmi logo

## 1. GitHub Pages ile Yayınlama
1. GitHub'da `uskudargenclik.github.io` adında **Public** bir repo oluşturun.
2. Bu klasörün içindeki tüm dosya ve `images` klasörünü repoya yükleyin (kök dizinde `index.html` olmalı).
3. Repo ayarlarından **Settings → Pages → Source: Deploy from a branch → Branch: main / (root)** seçip kaydedin.
4. 1–2 dakika içinde siteniz `https://uskudargenclik.github.io` adresinde yayına girer.

## 2. Daha Sonra `.com` Alan Adı Bağlama
1. Alan adı sağlayıcınızın DNS paneline şu **4 A kaydını** (`@` için) ekleyin:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
2. `www` için `uskudargenclik.github.io` adresine yönlenen bir **CNAME** kaydı ekleyin.
3. GitHub'da **Settings → Pages → Custom domain** alanına `.com` alan adınızı yazıp kaydedin ve **Enforce HTTPS** seçeneğini açın.

## 3. Hızlı İçerik Güncelleme (`app.js`)
- **Kulübe Katıl Linki:** `JOIN_CLUB_URL`
- **Instagram Hesabı:** `CLUB_INSTAGRAM`
- **Duyurular:** `ANNOUNCEMENTS` (bir bloğu kopyalayıp düzenleyin)
- **44 Kişilik Yönetim Ekibi:** `TEAM_44` (`Kişi 1`–`Kişi 44` isimlerini değiştirin)
