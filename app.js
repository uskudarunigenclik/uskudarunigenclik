// =========================================================================
// 1. KULÜP INSTAGRAM AYARI (Kullanıcı adını buradan kolayca değiştirebilirsiniz)
// =========================================================================
const CLUB_INSTAGRAM = {
  handle: '@uskudarunigenclik',
  url: 'https://www.instagram.com/uskudarunigenclik/'
};

// =========================================================================
// KULÜBE KATIL LİNKİ (Okulun üyelik sitesi linkiyle buradan değiştirebilirsiniz)
// =========================================================================
const JOIN_CLUB_URL = 'https://www.youtube.com/watch?v=rTLNyncgA7Y';

// =========================================================================
// 2. DUYURULAR (Yeni duyuru eklemek için bir bloğu kopyalayıp değiştirin!)
// =========================================================================
const ANNOUNCEMENTS = [
  {
    id: 'duyuru-1',
    pinned: true,
    category: 'Etkinlik',
    date: '26 Kasım 2026',
    title: '2026–2027 Yeni Dönem Üye Kayıtları ve Departman Başvuruları Açıldı',
    summary: 'Kültür & Sosyal, Akademik & Proje, Spor & Doğa, Atölye & Sanat, Sosyal Medya ve Sekreterya ekiplerimize katılmak isteyen tüm öğrencilerimizi bekliyoruz.',
    actionLabel: 'Başvuru Formunu Aç',
    actionType: 'join'
  },
  {
    id: 'duyuru-2',
    pinned: true,
    category: 'Proje',
    date: '20 Kasım 2026',
    title: 'GSB ÜNİDES 6. Dönem Proje Çağrısı ve Mentörlük Desteği',
    summary: 'Gençlik ve Spor Bakanlığı ÜNİDES ulusal (75.000 TL) ve uluslararası (150.000 TL) proje başvuruları için fikir sahibi öğrencilerimize kulüp mentörlük masamız açıktır.',
    actionLabel: 'Detaylı Bilgi',
    actionType: 'page',
    targetPage: 'haberler'
  },
  {
    id: 'duyuru-3',
    pinned: false,
    category: 'Etkinlik',
    date: '15 Kasım 2026',
    title: 'Çanakkale Kültür Gezisi Fotoğraf Arşivi Yayında',
    summary: '24 Kasım Çanakkale gezimize katılan öğrencilerimiz tüm yüksek çözünürlüklü fotoğraflara kulüp Drive arşivimizden ulaşabilir.',
    actionLabel: 'Etkinliklere Git',
    actionType: 'page',
    targetPage: 'etkinlikler'
  },
  {
    id: 'duyuru-4',
    pinned: false,
    category: 'Genel',
    date: '17 Ekim 2026',
    title: 'Üsküdar Üniversitesi Öğrenci Kulüpleri 1.’lik Ödülü Gururu',
    summary: '2026–2027 Oryantasyon Programında Kurucu Rektörümüz Prof. Dr. Nevzat Tarhan tarafından takdim edilen 1.’lik ödülümüzü tüm üyelerimizle paylaşıyoruz.',
    actionLabel: 'Haberi Oku',
    actionType: 'page',
    targetPage: 'haberler'
  }
  /* === YENİ DUYURU EKLEMEK İÇİN BU ŞABLONU KOPYALAYIP ÜSTE YAPIŞTIRIN ===
  ,{
    id: 'duyuru-5',
    pinned: false,
    category: 'Etkinlik', // Seçenekler: 'Etkinlik', 'Proje', 'Genel'
    date: '01 Aralık 2026',
    title: 'Duyuru Başlığını Buraya Yazın',
    summary: 'Duyurunun kısa açıklamasını buraya yazın.',
    actionLabel: 'Detayları Gör',
    actionType: 'page',
    targetPage: 'etkinlikler'
  }
  */
];

// =========================================================================
// 3. 44 KİŞİLİK YÖNETİM EKİBİ (Kişi 1 - Kişi 44 — İsimleri buradan değiştirin)
// =========================================================================
const TEAM_44 = Array.from({ length: 44 }, (_, i) => ({
  no: i + 1,
  name: 'Kişi ' + (i + 1),
  role: 'Yönetim Ekibi Üyesi'
}));

// Varsayılan kategori fotoğrafları (her etkinlik kartında altta mutlaka gerçek kulüp fotoğrafı görünmesi için)
const CAT_FALLBACK_IMG = {
  kultur: 'images/img_festival.jpg',
  spor: 'images/img_hero_fidan.jpg',
  akademik: 'images/img_uskudargo.jpg',
  atolye: 'images/img_seramik.jpg'
};

// =========================================================================
// 4. TÜM 48 ETKİNLİK (2026-2027, 2025-2026, 2024-2025)
// =========================================================================
const EVENTS = [
  // === 2026-2027 DÖNEMİ (8 Etkinlik) ===
  { id: 'canakkale-2026', season: '2026-2027', title: 'Çanakkale Gezisi', category: 'kultur', categoryLabel: 'Kültür & Sosyal', date: '24 Kasım 2026', location: 'Çanakkale Şehitliği & Tarihi Yarımada', summary: 'Gençlik dayanışması ve tarih bilinci amacıyla düzenlenen kapsamlı Çanakkale kültür gezisi.', img: 'images/img_anitkabir.jpg', url: 'https://drive.google.com/drive/folders/12Nfg4xTyUGEuMmOrMpH5znWB6-AVqvZU' },
  { id: 'kosu-2-2026', season: '2026-2027', title: 'Gençlik Koşusu 2', category: 'spor', categoryLabel: 'Spor & Doğa', date: '10 Kasım 2026', location: 'İstanbul · Açık Hava Parkuru', summary: 'Sağlıklı yaşam ve spor kültürünü yaygınlaştırmak amacıyla düzenlenen Gençlik Kulübü koşu serisinin ikinci buluşması.', img: 'images/img_kano.jpg', url: 'https://drive.google.com/drive/folders/1gnPRVZ2B_tHu0DNm825Ha82aQ_9Rs9oZ' },
  { id: 'kosu-1-2026', season: '2026-2027', title: 'Gençlik Koşusu 1', category: 'spor', categoryLabel: 'Spor & Doğa', date: '23 Ekim 2026', location: 'İstanbul · Açık Hava Parkuru', summary: '2026–2027 güz döneminde öğrencileri sporda bir araya getiren ilk toplu koşu etkinliği.', img: 'images/img_hero_fidan.jpg', url: 'https://drive.google.com/drive/folders/1K-MhQyuDSwriP-PqKJ_aVtzOpCPtxjSo' },
  { id: 'stant-2026', season: '2026-2027', title: 'Stant 2026 — Kulüp Tanıtım Günleri', category: 'kultur', categoryLabel: 'Kültür & Sosyal', date: '22 Ekim 2026', location: 'Üsküdar Üniversitesi Yerleşkeleri', summary: 'Yeni akademik yıl başlangıcında öğrencilere kulüp projelerinin tanıtıldığı ve üye kayıtlarının alındığı stant etkinliği.', img: 'images/img_festival_2.jpg', url: 'https://drive.google.com/drive/folders/1JhGdWa9e9NaCmlbB1x_kSJndmxxYNxFX' },
  { id: 'birincilik-odulu-2026', season: '2026-2027', title: 'Öğrenci Kulüpleri 1.lik Ödül Töreni', category: 'akademik', categoryLabel: 'Akademik & Proje', date: '14–17 Ekim 2026', location: 'Merkez Yerleşke Nermin Tarhan Konferans Salonu', summary: 'SKS Oryantasyon Programında Kurucu Rektör Prof. Dr. Nevzat Tarhan tarafından 1.lik ödülünün takdim edildiği tören.', img: 'images/img_odul_1.jpg', url: 'https://uskudar.edu.tr/haber/uskudarda-universite-yasaminda-ogrenci-kuluplerinin-onemi-vurgulandi/93388' },
  { id: 'ilk-yk-2026', season: '2026-2027', title: '2026–2027 İlk Yönetim Kurulu Toplantısı', category: 'akademik', categoryLabel: 'Akademik & Proje', date: '13 Ekim 2026', location: 'Üsküdar Üniversitesi', summary: '44 kişilik güncel yönetim ekibinin yeni dönem hedeflerini ve yıllık takvimi planladığı ilk toplantı.', img: 'images/img_odul_2.jpg', url: 'https://drive.google.com/drive/folders/1Mez97KZhT7fdK3QTzOk_7Bnw5wPFx5FN' },
  { id: 'bogaz-turu-2026', season: '2026-2027', title: '2026 Boğaz Turu', category: 'kultur', categoryLabel: 'Kültür & Sosyal', date: 'Ekim 2026', location: 'İstanbul Boğazı · Valide Sultan Gemisi', summary: 'Yeni döneme coşkulu bir başlangıç yapmak amacıyla düzenlenen geleneksel ücretsiz Boğaz turu.', img: 'images/img_bogaz_2.jpg', url: 'https://drive.google.com/drive/folders/1GLIEoJc9gVAaIoWMT522AJ1yUkZ13fR5' },
  { id: 'edirne-gezisi-2026', season: '2026-2027', title: 'Edirne Kültür Gezisi', category: 'kultur', categoryLabel: 'Kültür & Sosyal', date: 'Ekim 2026', location: 'Edirne', summary: 'Tarihi ve kültürel mirası yerinde keşfetmek için öğrencilerle gerçekleştirilen Edirne gezisi.', img: 'images/img_kastamonu_2.jpg', url: 'https://drive.google.com/drive/folders/1fJu4hGz7cs-qDAe9SGmkrC3fIOccMQxt' },

  // === 2025-2026 DÖNEMİ (17 Etkinlik) ===
  { id: 'gencfest-26', season: '2025-2026', title: "GençFest'26", category: 'kultur', categoryLabel: 'Kültür & Sosyal', date: 'Temmuz 2026', location: 'Üsküdar Üniversitesi', summary: 'Müzik, sahne performansları ve gençlik buluşmalarını bir araya getiren GençFest 2026 edisyonu.', img: 'images/img_festival_3.jpg', url: 'https://drive.google.com/file/d/1AQDlF_Tp0jjHWJTM5L8X1o47BppRivCl/view?usp=drivesdk' },
  { id: 'genclik-kupasi-2026', season: '2025-2026', title: 'Gençlik Kupası Turnuvası (2026)', category: 'spor', categoryLabel: 'Spor & Doğa', date: '12–14 Mayıs 2026', location: 'Sağlık Yerleşkesi Tıp Fakültesi Bahçesi', summary: 'Gençlik Kulübü ve Spor Kulübü iş birliğiyle voleybol ve basketbol branşlarında düzenlenen fakülteler arası turnuva.', img: 'images/img_fidan_2.jpg', url: 'https://sks.uskudar.edu.tr/genclik-kupasi-turnuvasi' },
  { id: 'fatih-kano-2026', season: '2025-2026', title: 'Fatih Kano Etkinliği', category: 'spor', categoryLabel: 'Spor & Doğa', date: '3 Nisan 2026', location: 'Fatih / Haliç Su Sporları Merkezi', summary: 'Bahar döneminde öğrencilere su sporları deneyimi sunan kano etkinliği.', img: 'images/img_kano.jpg', url: 'https://drive.google.com/drive/folders/1az9-9pnBB61kamDpMSps8T1NWMiKGc9n' },
  { id: 'milli-mac-2026', season: '2025-2026', title: 'Milli Maç İzleme Etkinliği', category: 'spor', categoryLabel: 'Spor & Doğa', date: '26 Mart 2026', location: 'Üsküdar Üniversitesi Kampüsü', summary: 'Öğrencilerin ay-yıldızlı heyecanı hep birlikte yaşadığı toplu milli maç izleme buluşması.', img: 'images/img_sinema.jpg', url: 'https://drive.google.com/drive/folders/1fD1bdRnvsi9T5sbe8cTjnXvi7edHwNyZ' },
  { id: 'bogazda-iftar-2026', season: '2025-2026', title: "Boğaz'da Gençlik İftarı", category: 'kultur', categoryLabel: 'Kültür & Sosyal', date: '10 / 19 Mart 2026', location: 'Valide Sultan Gemisi · İstanbul Boğazı', summary: 'Üsküdar Belediyesi paydaşlığında 255 öğrenci, SKS Daire Başkanı Sadık Paksoy ve protokolün katılımıyla düzenlenen Boğaz iftarı.', img: 'images/img_bogaz_3.jpg', url: 'https://sks.uskudar.edu.tr/gonul-birligi-bogazda-tazelendi-genclik-kulubunden-anlamli-iftar-bulusmasi' },
  { id: '100-yazar-2026', season: '2025-2026', title: '100 Yazar 100 Yeni Eser Ödül Gecesi', category: 'akademik', categoryLabel: 'Akademik & Proje', date: '6 Şubat 2026', location: 'Bağlarbaşı Kongre ve Kültür Merkezi', summary: 'Gençlik Kulübü koordinasyonunda yürütülen projede 105 genç yazar ve 105 eserin ödül ve kapanış töreni.', img: 'images/img_golgeden_2.jpg', url: 'https://uskudar.edu.tr/haber/edebiyatin-yeni-yuzyilinda-genc-kalemler-sahnedeydi/66314' },
  { id: 'sira-gecesi-2026', season: '2025-2026', title: 'Sıra Gecesi (2026)', category: 'kultur', categoryLabel: 'Kültür & Sosyal', date: '5 Ocak 2026', location: 'Üsküdar Üniversitesi', summary: 'Final dönemi öncesinde öğrencilere moral veren geleneksel sıra gecesi, müzik ve çiğ köfte ikramı.', img: 'images/img_sira.jpg', url: 'https://drive.google.com/drive/folders/1GJ03VuJv_pUgT7IDZFV_n9e7WtZy2eor' },
  { id: 'kampus-sinemasi-2026', season: '2025-2026', title: 'Kampüs Sineması (2025–2026)', category: 'kultur', categoryLabel: 'Kültür & Sosyal', date: '31 Aralık 2025', location: 'Üsküdar Üniversitesi Kampüsü', summary: 'Yıl sonu buluşması kapsamında öğrencilerin bir araya geldiği kampüs sinema gösterimi.', img: 'images/img_sinema.jpg', url: 'https://drive.google.com/drive/folders/1IBv5djmPRQY_dyqy-4Q7oQysxFbQAmiS' },
  { id: 'seramik-workshop-2025', season: '2025-2026', title: 'Seramik Workshop (2025–2026)', category: 'atolye', categoryLabel: 'Atölye & Sanat', date: '18 Aralık 2025', location: 'Atölye Alanı', summary: 'Öğrencilerin kendi seramik eserlerini ürettiği, temel malzeme gideriyle erişilebilir kılınan sanat atölyesi.', img: 'images/img_seramik_2.jpg', url: 'https://drive.google.com/drive/folders/1cLMnf_7V3J78kzo0CO6_6YLY2I-Iwljr' },
  { id: 'golgeden-isiga-kapanis', season: '2025-2026', title: 'Gölgeden Işığa Projesi Kapanış Programı', category: 'akademik', categoryLabel: 'Akademik & Proje', date: '13–17 Aralık 2025', location: 'Üsküdar Üniversitesi Konferans Salonu', summary: 'İçişleri Bakanlığı destekli Gölgeden Işığa projesinin kapanış ve sertifika programı.', img: 'images/img_golgeden.jpg', url: 'https://drive.google.com/drive/folders/1C1Xt_0z-QvQpfP8HZuxryqj-l39P2bNY' },
  { id: 'uskudargo-2025', season: '2025-2026', title: 'ÜsküdarGo — ÜNİDES Girişimcilik Zirvesi', category: 'akademik', categoryLabel: 'Akademik & Proje', date: '13 Aralık 2025', location: 'Üsküdar Üniversitesi Konferans Salonu', summary: 'Sürdürülebilir Kalkınma Kulübü ortaklığı ve Gençlik Kulübü mentörlüğüyle hayata geçirilen ÜNİDES girişimcilik zirvesi.', img: 'images/img_uskudargo.jpg', url: 'https://drive.google.com/drive/folders/1sV6eIDt6HrMRLI-oU_8rBEuH3pD6JmKC' },
  { id: 'golgeden-isiga-egitim', season: '2025-2026', title: 'Gölgeden Işığa Eğitim Programı', category: 'akademik', categoryLabel: 'Akademik & Proje', date: '29 Kasım 2025', location: 'Merkez Yerleşke Ayhan Songar Konferans Salonu', summary: '75 gencin katılımıyla proje döngüsü yönetimi, liderlik, iletişim ve gönüllülük eğitimleri.', img: 'images/img_golgeden_3.jpg', url: 'https://sks.uskudar.edu.tr/genclik-kulubunden-genclere-yonelik-golgeden-isiga-egitim-programi' },
  { id: 'corba-2025-kasim', season: '2025-2026', title: 'Çorba Dağıtımı (Kasım 2025)', category: 'kultur', categoryLabel: 'Kültür & Sosyal', date: '19–25 Kasım 2025', location: 'Üsküdar Üniversitesi Kampüsü', summary: 'Soğuk kasım günlerinde vize temposundaki öğrencilere sıcak çorba ikramı.', img: 'images/img_corba.jpg', url: 'https://drive.google.com/drive/folders/1S5Pk-FWxQaVPwP4BuVFP8YEsRfCe2muf' },
  { id: 'gelecege-nefes-2025', season: '2025-2026', title: 'Geleceğe Nefes — Fidan Dikimi', category: 'spor', categoryLabel: 'Spor & Doğa', date: '11 Kasım 2025', location: 'Silivri Balaban Mevkii', summary: '11 Kasım Milli Ağaçlandırma Gününde "Bir Fidan, Bin Umut" pankartlarıyla yüzlerce fidan dikimi.', img: 'images/img_hero_fidan.jpg', url: 'https://uskudar.edu.tr/haber/genclik-kulubunden-gelecege-nefes/65118' },
  { id: 'anitkabir-2025', season: '2025-2026', title: 'Ankara Anıtkabir Gezisi (2025)', category: 'kultur', categoryLabel: 'Kültür & Sosyal', date: '8 Kasım 2025', location: 'Ankara · Anıtkabir', summary: '10 Kasım haftası kapsamında öğrencilerin katılımıyla gerçekleştirilen Ankara ve Anıtkabir ziyareti.', img: 'images/img_anitkabir.jpg', url: 'https://drive.google.com/drive/folders/1FffYE3B5d47BWKrPBQmZuRWI_xhF2qW9' },
  { id: 'gencfest-2025', season: '2025-2026', title: 'Cumhuriyet ve Gençlik Festivali (Gençfest 2025)', category: 'kultur', categoryLabel: 'Kültür & Sosyal', date: '27–30 Ekim 2025', location: 'Çarşı Yerleşke Bahçesi', summary: 'Sahne gösterileri, canlı müzik performansları, kulüp stantları ve ikramlarla ücretsiz kampüs festivali.', img: 'images/img_festival.jpg', url: 'https://uskudar.edu.tr/etkinlik/yeni-yuzyilda-cumhuriyet-genclik-festivali/7006' },
  { id: 'bogaz-ilk-adim-2025', season: '2025-2026', title: "Üniversiteye İlk Adım Boğaz'da Başlar!", category: 'kultur', categoryLabel: 'Kültür & Sosyal', date: '9 Ekim 2025', location: 'Üsküdar İskelesi · Valide Sultan Gemisi', summary: 'Yeni akademik döneme özel, tüm Üsküdar Üniversitesi öğrencilerine ücretsiz Boğaz turu ve tanışma buluşması.', img: 'images/img_bogaz.jpg', url: 'https://sks.uskudar.edu.tr/universiteye-ilk-adim-bogazda-baslar' },

  // === 2024-2025 DÖNEMİ (23 Etkinlik) ===
  { id: 'stant-2024-2025', season: '2024-2025', title: 'Kulüp Tanıtım Standı (2024–2025)', category: 'kultur', categoryLabel: 'Kültür & Sosyal', date: '2024–2025 Dönemi', location: 'Üsküdar Üniversitesi Yerleşkeleri', summary: 'Kulübün ilk yılında binlerce öğrenciyle yüz yüze tanışılan ve 3.000+ üye tabanının oluşturulduğu tanıtım stantları.', img: 'images/img_festival_2.jpg', url: 'https://drive.google.com/drive/folders/1323pQdySm8QSka4102VZ9FKeXq5tJS1Y' },
  { id: 'kastamonu-2025', season: '2024-2025', title: 'Kastamonu Gezisi ve Gençlik Buluşması', category: 'kultur', categoryLabel: 'Kültür & Sosyal', date: '1–2 Ağustos 2025', location: 'Kastamonu', summary: 'Şehir dışı gençlik ağı ve kültürel paylaşım amacıyla düzenlenen Kastamonu gezisi ve gençlik buluşması.', img: 'images/img_kastamonu.jpg', url: 'https://drive.google.com/drive/folders/1qEherDpLWrcmXsxTFmLWZTslpSe363wI' },
  { id: 'golgeden-isiga-lansman', season: '2024-2025', title: 'Gölgeden Işığa Projesi Lansmanı', category: 'akademik', categoryLabel: 'Akademik & Proje', date: '20 Haziran 2025', location: 'Üsküdar Üniversitesi', summary: 'Gölgeden Işığa gençlik projesinin açılış ve tanıtım lansman programı.', img: 'images/img_golgeden_2.jpg', url: 'https://drive.google.com/drive/folders/1HGtxsbjZfRYUb4uq0wdPbd1yuCyF3X96' },
  { id: 'genclik-kupasi-2025', season: '2024-2025', title: 'Gençlik Kupası — Voleybol Turnuvası (ÜNİDES)', category: 'spor', categoryLabel: 'Spor & Doğa', date: 'Mayıs 2025', location: 'Üsküdar Üniversitesi Spor Alanları', summary: 'GSB ÜNİDES 50.000 TL hibe desteğiyle düzenlenen kız ve erkek fakülteler arası voleybol turnuvası.', img: 'images/img_fidan_3.jpg', url: 'https://sks.uskudar.edu.tr/uskudar-universitesinden-4-ogrenci-kulubune-unidesten-tam-destek' },
  { id: 'bayramlasma-2025', season: '2024-2025', title: 'Bayramlaşma Buluşması', category: 'kultur', categoryLabel: 'Kültür & Sosyal', date: '28 Mart 2025', location: 'Üsküdar Üniversitesi', summary: 'Kulüp üyeleri ve öğrencilerin bir araya geldiği geleneksel bayramlaşma etkinliği.', img: 'images/img_sira_2.jpg', url: 'https://drive.google.com/drive/folders/1TFhxzCTod3o7OiNq_KAnxRfWDe0wKMV7' },
  { id: 'kitap-tahlili-2', season: '2024-2025', title: 'Kitap Tahlili 2', category: 'akademik', categoryLabel: 'Akademik & Proje', date: '26 Mart 2025', location: 'Üsküdar Üniversitesi', summary: 'Gençlerin okuma kültürünü ve eleştirel düşünceyi geliştirdiği kitap tahlili serisinin ikinci oturumu.', img: 'images/img_kitap.jpg', url: 'https://drive.google.com/drive/folders/1Mc1fOTSMTk01cPD0yXOMBWqiF7VzJVZa' },
  { id: 'ebru-2', season: '2024-2025', title: 'Ebru Atölyesi 2', category: 'atolye', categoryLabel: 'Atölye & Sanat', date: '22 Mart 2025', location: 'Sanat Atölyesi', summary: 'Geleneksel Türk süsleme sanatı ebrunun uygulamalı olarak deneyimlendiği ikinci atölye buluşması.', img: 'images/img_ebru.jpg', url: 'https://drive.google.com/drive/folders/13xvMc_yMJu381ETSJzVHLRb9MIRnMab-' },
  { id: 'seramik-2', season: '2024-2025', title: 'Seramik Atölyesi 2', category: 'atolye', categoryLabel: 'Atölye & Sanat', date: '22 Mart 2025', location: 'Sanat Atölyesi', summary: 'Yoğun ilgi üzerine ikincisi düzenlenen, öğrencilerin kendi tasarımlarını oluşturduğu seramik workshopu.', img: 'images/img_seramik_2.jpg', url: 'https://drive.google.com/drive/folders/13qvJ9UDtwS1JWAiAzzHr19JsfB-bs8X9' },
  { id: 'kitap-tahlili-1', season: '2024-2025', title: 'Kitap Tahlili 1', category: 'akademik', categoryLabel: 'Akademik & Proje', date: '13 Mart 2025', location: 'Üsküdar Üniversitesi', summary: 'Öğrencilerin seçilen eser üzerine fikir alışverişinde bulunduğu ilk kitap tahlili oturumu.', img: 'images/img_kitap.jpg', url: 'https://drive.google.com/drive/folders/1EeGP_pup6v6Ko2HfRWkvNciYw4Ts8qVx' },
  { id: 'daikin-2025', season: '2024-2025', title: 'Daikin Teknik & Kariyer Etkinliği', category: 'akademik', categoryLabel: 'Akademik & Proje', date: '13 Mart 2025', location: 'Daikin / Kurumsal Ziyaret', summary: 'Sektör deneyimi ve kariyer vizyonu kazandırmak amacıyla gerçekleştirilen Daikin kurumsal buluşması.', img: 'images/img_uskudargo_2.jpg', url: 'https://drive.google.com/drive/folders/1-nV7Ou84AlfEPY9IccZrMh1_p7bzvT3r' },
  { id: 'ebru-1', season: '2024-2025', title: 'Ebru Atölyesi 1', category: 'atolye', categoryLabel: 'Atölye & Sanat', date: '13 Mart 2025', location: 'Sanat Atölyesi', summary: 'Su üzerinde renklerle buluşulan geleneksel ebru sanatı atölyesi.', img: 'images/img_ebru.jpg', url: 'https://drive.google.com/drive/folders/1-h5KUuCEFBi4fJtGegiNorkIfmAeS265' },
  { id: 'seramik-1', season: '2024-2025', title: 'Seramik Atölyesi 1', category: 'atolye', categoryLabel: 'Atölye & Sanat', date: '13 Mart 2025', location: 'Sanat Atölyesi', summary: 'Öğrencilerin el becerilerini ortaya koyduğu ve eserlerini yanlarında götürdüğü ilk seramik workshopu.', img: 'images/img_seramik.jpg', url: 'https://drive.google.com/drive/folders/1-T4GdFKNBBf3Ii-Go96BvWm827mtMnQv' },
  { id: 'kutuphane-ocak-2025', season: '2024-2025', title: 'Kütüphane Buluşması', category: 'akademik', categoryLabel: 'Akademik & Proje', date: '25 Ocak 2025', location: 'Kütüphane', summary: 'Sınav ve çalışma döneminde öğrencilerle dayanışma amacıyla düzenlenen kütüphane etkinliği.', img: 'images/img_kitap.jpg', url: 'https://drive.google.com/drive/folders/1D9uWqAvjxwoWWO2YJ_vPJQVbM8ZrHXxH' },
  { id: 'corba-ocak-2025', season: '2024-2025', title: 'Çorba Dağıtımı (Ocak 2025)', category: 'kultur', categoryLabel: 'Kültür & Sosyal', date: '25 Ocak 2025', location: 'Üsküdar Üniversitesi Kampüsü', summary: 'Ocak ayı final haftasında öğrencilere moral ve destek için gerçekleştirilen sıcak çorba ikramı.', img: 'images/img_corba.jpg', url: 'https://drive.google.com/drive/folders/1AzX61uSfXHER5oIiyOaZMnHOU9fpMdRo' },
  { id: 'anitkabir-2024-2025', season: '2024-2025', title: 'Anıtkabir Ziyareti (2024–2025)', category: 'kultur', categoryLabel: 'Kültür & Sosyal', date: '13 Ocak 2025', location: 'Ankara · Anıtkabir', summary: 'Üsküdar Üniversitesi öğrencileri ve akademik kadronun katılımıyla gerçekleştirilen Anıtkabir ziyareti.', img: 'images/img_anitkabir_2.jpg', url: 'https://drive.google.com/file/d/18mr-a8ElOADkY51CuDfVt6hVYQJaWbBv/view?usp=drivesdk' },
  { id: 'kano-2025', season: '2024-2025', title: 'Kano Etkinliği', category: 'spor', categoryLabel: 'Spor & Doğa', date: '11 Ocak 2025', location: 'İstanbul Su Sporları Parkuru', summary: 'Doğayla iç içe kürek çekme ve takım ruhu deneyimi sunan kano etkinliği.', img: 'images/img_kano.jpg', url: 'https://drive.google.com/drive/folders/14ijdFFTEAEwpSPB3im2mdhpwvjYsM1bX' },
  { id: 'sira-gecesi-2025', season: '2024-2025', title: 'Sıra Gecesi Etkinliği (420 Öğrenci)', category: 'kultur', categoryLabel: 'Kültür & Sosyal', date: '7 Ocak 2025', location: 'NP Sağlık Yerleşkesi Sosyal Alan', summary: 'Final sınavları öncesinde 420 öğrencinin katılımıyla Şanlıurfa usulü çiğ köfte ikramı ve geleneksel müzik gecesi.', img: 'images/img_sira_2.jpg', url: 'https://sks.uskudar.edu.tr/genclik-kulubunden-sira-gecesi-etkinligi' },
  { id: 'kurabiye-workshop-2025', season: '2024-2025', title: 'Kurabiye Workshop', category: 'atolye', categoryLabel: 'Atölye & Sanat', date: '3 Ocak 2025', location: 'Atölye Alanı', summary: 'Yeni yıl başlangıcında öğrencilerin birlikte kurabiye hazırlayıp süslediği keyifli gastronomi atölyesi.', img: 'images/img_kurabiye.jpg', url: 'https://drive.google.com/drive/folders/1-7_iDiceo6JPu4rPkpltpQN7JqaAofjE' },
  { id: 'hado-2025', season: '2024-2025', title: 'HADO (Artırılmış Gerçeklik Sporu)', category: 'spor', categoryLabel: 'Spor & Doğa', date: '3 Ocak 2025', location: 'HADO Arena', summary: 'Teknoloji ve sporu birleştiren artırılmış gerçeklik (AR) tabanlı HADO takım müsabakaları.', img: 'images/img_kano.jpg', url: 'https://drive.google.com/drive/folders/1--XTf-IrthHt00MUch3S0f9k_RBo6Z1l' },
  { id: 'kampus-sinemasi-2024', season: '2024-2025', title: 'Kampüs Sineması (30 Aralık 2024)', category: 'kultur', categoryLabel: 'Kültür & Sosyal', date: '30 Aralık 2024', location: 'Üsküdar Üniversitesi Kampüsü', summary: '2024 yılına veda ederken kampüste düzenlenen toplu sinema gecesi.', img: 'images/img_sinema.jpg', url: 'https://drive.google.com/drive/folders/1sJM69wQNf4_WesnwBkBWDJU59YacZAKl' },
  { id: 'vizyon-calistayi-2024', season: '2024-2025', title: 'Gençlik Politikaları Vizyon Çalıştayı', category: 'akademik', categoryLabel: 'Akademik & Proje', date: '25 Aralık 2024', location: 'Ataköy Uluslararası Gençlik Merkezi', summary: 'Gençlik ve Spor Bakanlığı yetkilileriyle eğitim, istihdam ve girişimcilik başlıklarında Gençlik Politika Belgesi çalışması.', img: 'images/img_uskudargo_3.jpg', url: 'https://sks.uskudar.edu.tr/genclik-kulubu-genclik-politikalari-vizyon-calistayi-duzenledi' },
  { id: 'genel-kurul-2024', season: '2024-2025', title: 'Gençlik Kulübü Genel Kurulu', category: 'akademik', categoryLabel: 'Akademik & Proje', date: '13 Aralık 2024', location: 'Üsküdar Üniversitesi', summary: 'Kulübün ilk döneminde tüzük, koordinatörlükler ve dönem stratejisinin paylaşıldığı genel kurul toplantısı.', img: 'images/img_odul_3.jpg', url: 'https://drive.google.com/drive/folders/1-16dA_zzxF0BaHgEhBebzGtHV5DV6uuf' },
  { id: '6-aralik-2024', season: '2024-2025', title: '6 Aralık Gençlik Buluşması', category: 'kultur', categoryLabel: 'Kültür & Sosyal', date: '6 Aralık 2024', location: 'Üsküdar Üniversitesi', summary: 'Kulübün kuruluş dönemindeki ilk kapsamlı öğrenci buluşması ve sosyal etkinliği.', img: 'images/img_festival.jpg', url: 'https://drive.google.com/drive/folders/18qLaxuwNt1J9DKXpAiW_N7mce8zh5NuE' }
];

// =========================================================================
// 5. HABERLER (Detaylı Araştırılmış Haberler + 2-3 Gerçek Fotoğraf)
// =========================================================================
const NEWS_ITEMS = [
  {
    id: 'haber-birincilik',
    date: '17 Ekim 2026',
    tag: 'Ödül & Başarı',
    title: 'Gençlik Kulübümüz 2026–2027 Öğrenci Kulüpleri Sıralamasında 1. Oldu!',
    body: [
      'Üsküdar Üniversitesi Sağlık, Kültür ve Spor (SKS) Daire Başkanlığı tarafından Merkez Yerleşke Nermin Tarhan Konferans Salonu’nda düzenlenen “2026–2027 Akademik Yılı Öğrenci Kulüpleri Oryantasyon Programı”nda yıl boyunca yürüttükleri çalışmalarla öne çıkan kulüpler ödüllendirildi.',
      'Kurucu Rektör Prof. Dr. Nevzat Tarhan, Rektör Yardımcısı Prof. Dr. Hikmet Koçak ve SKS Daire Başkanı Sadık Paksoy’un katılımıyla gerçekleştirilen törende Üsküdar Üniversitesi Gençlik Kulübü 1.’lik ödülüne layık görüldü. Sıralamada Perfüzyon Kulübü ikinci, Genç Yeryüzü Doktorları Kulübü üçüncü, Çeviri Kulübü dördüncü ve Genç Tıbbiyeliler Kulübü beşinci oldu.',
      'Kuruluşundan bu yana 3.000’i aşkın üyeye ve 15.000’den fazla öğrenciye ulaşan Gençlik Kulübü, 44 kişilik yönetim ekibiyle yeni dönemde de sosyal, kültürel, sportif ve akademik projelerini artırarak sürdürmeyi hedefliyor.'
    ],
    photos: [
      { src: 'images/img_odul_1.jpg', caption: 'Gençlik Kulübü ekibi 1.lik Başarı Belgesi ile' },
      { src: 'images/img_odul_2.jpg', caption: 'Ödül töreni ve SKS Oryantasyon Programı' },
      { src: 'images/img_odul_3.jpg', caption: 'Başarı belgesi takdimi sonrası hatıra fotoğrafı' }
    ],
    sourceUrl: 'https://uskudar.edu.tr/haber/uskudarda-universite-yasaminda-ogrenci-kuluplerinin-onemi-vurgulandi/93388'
  },
  {
    id: 'haber-fidan',
    date: '11 Kasım 2025',
    tag: 'Çevre & Sürdürülebilirlik',
    title: 'Geleceğe Nefes, Dünyaya Umut: Silivri’de Yüzlerce Fidan Toprakla Buluştu',
    body: [
      'Üsküdar Üniversitesi SKS bünyesinde faaliyet gösteren Gençlik Kulübü, 11 Kasım Milli Ağaçlandırma Günü kapsamında İstanbul Valiliği ve Orman Genel Müdürlüğü ev sahipliğinde Silivri Balaban Mevkii’nde gerçekleştirilen toplu fidan dikim programına katıldı.',
      'Etkinlikte yüzlerce fidanı toprakla buluşturan öğrenciler, gün sonunda “Bir Fidan, Bin Umut” pankartlarıyla hatıra fotoğrafı çektirdi. Gençlik Kulübü Başkanı Faruk Dündar yaptığı açıklamada, “Bugün burada sadece birer fidan dikmedik; geleceğe umut, doğaya nefes ve yarınlara miras olacak bir değer bıraktık” ifadelerini kullandı.',
      'Kulüp yıl boyunca çevre ve sürdürülebilirlik temalı projelerle üniversite gençliğini yeşil geleceğin gönüllü temsilcileri olarak konumlandırmaya devam ediyor.'
    ],
    photos: [
      { src: 'images/img_hero_fidan.jpg', caption: 'Gençlik Kulübü ve SKS pankartıyla toplu kare' },
      { src: 'images/img_fidan_2.jpg', caption: 'Silivri Balaban Mevkii fidan dikim alanı' },
      { src: 'images/img_fidan_3.jpg', caption: '11 Kasım Milli Ağaçlandırma Günü çalışması' }
    ],
    sourceUrl: 'https://uskudar.edu.tr/haber/genclik-kulubunden-gelecege-nefes/65118'
  },
  {
    id: 'haber-gencfest',
    date: '27–30 Ekim 2025',
    tag: 'Kültür & Festival',
    title: 'Yeni Yüzyılda Cumhuriyet ve Gençlik Festivali (Gençfest) Çarşı Yerleşkeyi Coşturdu',
    body: [
      'Cumhuriyet Bayramı kapsamında Gençlik Kulübü tarafından Çarşı Yerleşke Bahçesi’nde düzenlenen “Yeni Yüzyılda Cumhuriyet Gençlik Festivali (Gençfest)”, sahne gösterileri, canlı müzik performansları, kulüp stantları ve ikramlarla öğrencilere unutulmaz bir gün yaşattı.',
      'Devlet kurumları ve paydaşların desteğiyle ana sahne ve ses sistemleri dahil tamamı öğrencilere ücretsiz olarak sunulan festivalde farklı kulüpler de stant açarak kampüs içi dayanışmayı güçlendirdi.'
    ],
    photos: [
      { src: 'images/img_festival.jpg', caption: 'Çarşı Yerleşke bahçesinde kulüp stantları ve etkinlik alanı' },
      { src: 'images/img_festival_2.jpg', caption: 'Gençfest sahne ve katılımcı buluşmaları' },
      { src: 'images/img_festival_3.jpg', caption: 'Festival boyunca süren interaktif aktiviteler' }
    ],
    sourceUrl: 'https://uskudar.edu.tr/etkinlik/yeni-yuzyilda-cumhuriyet-genclik-festivali/7006'
  },
  {
    id: 'haber-bogaz',
    date: '9 Ekim 2025 & Mart 2026',
    tag: 'Boğaz Buluşmaları',
    title: 'Valide Sultan Gemisi’nde Boğaz Turu ve 255 Öğrencili Gençlik İftarı',
    body: [
      'Yeni akademik yıla özel olarak düzenlenen “Üniversiteye İlk Adım Boğaz’da Başlar!” etkinliğinde Üsküdar İskelesi’nden kalkan Valide Sultan Gemisi ile tüm öğrencilere ücretsiz Boğaz turu düzenlendi.',
      'Ramazan ayında ise Üsküdar Belediyesi paydaşlığında gerçekleştirilen “Boğaz’da Gençlik İftarı” programında Üsküdar Belediye Başkan Yardımcısı Mithat Özdemir, SKS Daire Başkanı Sadık Paksoy, akademisyenler ve 255 öğrenci aynı sofrada buluştu. Faruk Dündar açılış konuşmasında Ramazan’ın sadece bir sofrada değil aynı gönülde birleşmek anlamına geldiğini vurguladı.'
    ],
    photos: [
      { src: 'images/img_bogaz.jpg', caption: 'Valide Sultan Gemisi güvertesinde Boğaz manzarası' },
      { src: 'images/img_bogaz_2.jpg', caption: 'Üniversiteye İlk Adım Boğaz Turu katılımcıları' },
      { src: 'images/img_bogaz_3.jpg', caption: 'İstanbul Boğazı’nda unutulmaz tanışma buluşması' }
    ],
    sourceUrl: 'https://sks.uskudar.edu.tr/gonul-birligi-bogazda-tazelendi-genclik-kulubunden-anlamli-iftar-bulusmasi'
  },
  {
    id: 'haber-uskudargo',
    date: '13 Aralık 2025',
    tag: 'ÜNİDES & Girişimcilik',
    title: 'ÜsküdarGo Girişimcilik Zirvesi ve Gölgeden Işığa Projesi Gençleri İş Dünyasıyla Buluşturdu',
    body: [
      'Gençlik ve Spor Bakanlığı ÜNİDES desteğiyle Sürdürülebilir Kalkınma Kulübü ortaklığında ve Gençlik Kulübü proje mentörlüğünde düzenlenen “ÜsküdarGo” girişimcilik zirvesinde öğrenciler fikirlerini uzman mentorlerle geliştirme imkânı buldu.',
      'Aynı dönemde T.C. İçişleri Bakanlığı Sivil Toplumla İlişkiler Genel Müdürlüğü, İstanbul Valiliği ve Kastamonu Dernekler Federasyonu iş birliğiyle yürütülen “Gölgeden Işığa” projesinin 75 gençle yapılan eğitim programı (29 Kasım 2025) ve kapanış töreni (13 Aralık 2025) başarıyla tamamlandı.'
    ],
    photos: [
      { src: 'images/img_uskudargo.jpg', caption: 'ÜsküdarGo ÜNİDES Girişimcilik Zirvesi sahnesi' },
      { src: 'images/img_uskudargo_2.jpg', caption: 'Girişimcilik zirvesi katılımcıları ve konuşmacılar' },
      { src: 'images/img_golgeden.jpg', caption: 'Gölgeden Işığa Gençlik Projesi Kapanış Programı' }
    ],
    sourceUrl: 'https://sks.uskudar.edu.tr/genclik-kulubunden-genclere-yonelik-golgeden-isiga-egitim-programi'
  },
  {
    id: 'haber-sira-gecesi',
    date: '7 Ocak 2025 & 5 Ocak 2026',
    tag: 'Kültür & Gelenek',
    title: 'Final Öncesi 420 Öğrenciyle Geleneksel Sıra Gecesi Coşkusu',
    body: [
      'NP Sağlık Yerleşkesi Sosyal Alan’da final sınavları öncesinde öğrencilere moral ve motivasyon sağlamak amacıyla düzenlenen Sıra Gecesi etkinliğine 420 öğrenci katıldı.',
      'Yer sofrası düzeni, Şanlıurfa usulü çiğ köfte ikramı ve geleneksel sıra gecesi müzikleriyle renklenen organizasyonun yoğun ilgi görmesi üzerine etkinlik 2026 yılında da tekrarlandı.'
    ],
    photos: [
      { src: 'images/img_sira.jpg', caption: 'Sıra Gecesi etkinliğinden keyifli anlar' },
      { src: 'images/img_sira_2.jpg', caption: 'Müzik ve geleneksel ikramlarla öğrenci buluşması' }
    ],
    sourceUrl: 'https://sks.uskudar.edu.tr/genclik-kulubunden-sira-gecesi-etkinligi'
  },
  {
    id: 'haber-geziler',
    date: 'Ağustos & Kasım 2025',
    tag: 'Kültür Gezileri',
    title: 'Ankara Anıtkabir ve Kastamonu Kültür Gezileriyle Tarih ve Dayanışma',
    body: [
      'Gençlik Kulübü, kampüs içi etkinliklerin yanı sıra şehir dışı kültür gezileriyle de öğrencileri Türkiye’nin tarihi ve kültürel değerleriyle buluşturuyor.',
      'Ağustos 2025’te gerçekleştirilen Kastamonu Gezisi ve Gençlik Buluşması ile Kasım 2025’teki Ankara Anıtkabir Ziyareti yüksek katılımla tamamlandı; 2026 güz döneminde ise Edirne ve 24 Kasım Çanakkale gezileriyle seri sürdürüldü.'
    ],
    photos: [
      { src: 'images/img_anitkabir.jpg', caption: 'Ankara Anıtkabir Ziyareti' },
      { src: 'images/img_kastamonu.jpg', caption: 'Kastamonu Gezisi ve Gençlik Buluşması' },
      { src: 'images/img_kastamonu_2.jpg', caption: 'Şehir dışı kültür gezisi hatırası' }
    ],
    sourceUrl: 'https://drive.google.com/drive/folders/1-JsMUzzioj7aTi-SNG_pYCiidu8DY8Yc'
  },
  {
    id: 'haber-atolyeler',
    date: '2025 Dönemi',
    tag: 'Atölye & Sanat',
    title: 'Seramik, Ebru ve Kurabiye Workshoplarıyla Öğrenciler Kendi Eserlerini Üretti',
    body: [
      'Öğrencilerin el becerilerini ve sanatsal yeteneklerini geliştirmek amacıyla düzenlenen Seramik 1–2, Ebru 1–2 ve Kurabiye workshopları büyük ilgi gördü.',
      'Dışarıda yüksek ücretlerle sunulan atölye deneyimleri, Gençlik Kulübü’nün öğrenci dostu yaklaşımıyla yalnızca temel malzeme maliyeti karşılığında sunularak herkesin kendi eserini üretip evine götürmesi sağlandı.'
    ],
    photos: [
      { src: 'images/img_seramik.jpg', caption: 'Seramik atölyesi üretim süreci' },
      { src: 'images/img_ebru.jpg', caption: 'Geleneksel Ebru sanatı atölyesi' },
      { src: 'images/img_kurabiye.jpg', caption: 'Yeni yıl Kurabiye Workshopu' }
    ],
    sourceUrl: 'https://www.youtube.com/watch?v=rTLNyncgA7Y'
  }
];

// =========================================================================
// STATE & RENDERING
// =========================================================================
let currentPage = 'anasayfa';
let activeFilter = 'all';
let activeSeason = 'all';
let searchQuery = '';
let newsQuery = '';
let annFilter = 'all';
let teamQuery = '';
const savedEvents = new Set();
let mapInstance = null;

function showToast(message) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'pointer-events-auto flex items-center gap-2.5 px-4 py-3 rounded-xl bg-slate-900 dark:bg-turq-700 text-white text-xs font-semibold shadow-lg border border-turq-500/40';
  toast.innerHTML = '<span class="w-2 h-2 rounded-full bg-turq-300"></span><span>' + message + '</span>';
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

function switchPage(pageId) {
  currentPage = pageId;
  document.querySelectorAll('.page-view').forEach(el => el.classList.add('hidden'));
  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.remove('hidden', 'page-animate');
    void target.offsetWidth;
    target.classList.add('page-animate');
  }

  document.querySelectorAll('header nav .nav-page-btn').forEach(btn => {
    if (btn.dataset.pageTarget === pageId) {
      btn.className = 'nav-page-btn px-3 py-2 rounded-lg font-semibold bg-turq-50 dark:bg-turq-900/50 text-turq-700 dark:text-turq-300 transition';
    } else {
      btn.className = 'nav-page-btn px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-turq-50 dark:hover:bg-slate-800 hover:text-turq-700 dark:hover:text-turq-300 transition';
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (window.lucide) window.lucide.createIcons();
}

function applyTheme(isDark) {
  const html = document.documentElement;
  const sun = document.getElementById('theme-icon-sun');
  const moon = document.getElementById('theme-icon-moon');
  const label = document.getElementById('theme-label');

  if (isDark) {
    html.classList.add('dark');
    sun.classList.remove('hidden');
    moon.classList.add('hidden');
    label.textContent = 'Açık Tema';
  } else {
    html.classList.remove('dark');
    sun.classList.add('hidden');
    moon.classList.remove('hidden');
    label.textContent = 'Koyu Tema';
  }
  try {
    localStorage.setItem('uugk_theme', isDark ? 'dark' : 'light');
  } catch (e) {}
}

// ETKİNLİKLER: Üstte Başlık -> Ortada Kısa Bilgi -> Altta Örnek Fotoğraf
function renderEvents() {
  const grid = document.getElementById('events-grid');
  const empty = document.getElementById('events-empty');
  const countEl = document.getElementById('event-count');

  const filtered = EVENTS.filter(ev => {
    const matchCat = activeFilter === 'all' || ev.category === activeFilter;
    const matchSeason = activeSeason === 'all' || ev.season === activeSeason;
    const q = searchQuery.trim().toLowerCase();
    const matchText = !q || ev.title.toLowerCase().includes(q) || ev.summary.toLowerCase().includes(q) || ev.location.toLowerCase().includes(q) || ev.date.toLowerCase().includes(q);
    return matchCat && matchSeason && matchText;
  });

  countEl.textContent = filtered.length + ' etkinlik';

  if (filtered.length === 0) {
    grid.innerHTML = '';
    empty.classList.remove('hidden');
    return;
  }

  empty.classList.add('hidden');
  grid.innerHTML = filtered.map(ev => {
    const isSaved = savedEvents.has(ev.id);
    const photoSrc = ev.img || CAT_FALLBACK_IMG[ev.category] || CAT_FALLBACK_IMG.kultur;
    return `
      <article class="group bg-white dark:bg-slate-900 rounded-2xl border border-turq-100 dark:border-slate-800 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md hover:border-turq-300 dark:hover:border-turq-700 transition">
        <!-- 1. ÜSTTE: Başlık & Rozetler -->
        <div class="p-5 pb-3">
          <div class="flex items-center justify-between gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-md bg-turq-50 dark:bg-turq-900/50 text-turq-700 dark:text-turq-300 text-[10px] font-bold">${ev.categoryLabel}</span>
            <span class="text-[10px] font-semibold text-slate-400">${ev.season}</span>
          </div>
          <h3 class="font-extrabold text-slate-900 dark:text-white text-base leading-snug">${ev.title}</h3>
        </div>

        <!-- 2. ORTADA: Kısa Bilgi -->
        <div class="px-5 pb-4 flex-1">
          <p class="text-[11px] text-turq-700 dark:text-turq-400 font-semibold mb-1.5 flex items-center gap-1">
            <i data-lucide="calendar" class="w-3.5 h-3.5 shrink-0"></i>
            <span>${ev.date} · ${ev.location}</span>
          </p>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${ev.summary}</p>
        </div>

        <!-- 3. ALTTA: Örnek Fotoğraf + Aksiyon Çubuğu -->
        <div>
          <div class="px-5 pb-3">
            <div class="h-40 rounded-xl overflow-hidden border border-turq-100 dark:border-slate-800 bg-turq-50 dark:bg-slate-800">
              <img src="${photoSrc}" alt="${ev.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
            </div>
          </div>
          <div class="px-5 py-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2 bg-slate-50/50 dark:bg-slate-900/60">
            <button type="button" data-event-id="${ev.id}" class="open-event-btn text-xs font-semibold text-turq-700 dark:text-turq-400 hover:underline inline-flex items-center gap-1">
              <span>Detaylar</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </button>
            <button type="button" data-save-id="${ev.id}" class="save-event-btn px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition ${isSaved ? 'turq-gradient text-white border-transparent' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-turq-300'}">
              ${isSaved ? 'Kaydedildi' : 'İlgi Bildir'}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

// HABERLER: Detaylı Haber + 2-3 Gerçek Fotoğraf
function renderNews() {
  const list = document.getElementById('news-list');
  const q = newsQuery.trim().toLowerCase();
  const filtered = NEWS_ITEMS.filter(item =>
    !q || item.title.toLowerCase().includes(q) || item.tag.toLowerCase().includes(q) || item.body.join(' ').toLowerCase().includes(q)
  );

  if (filtered.length === 0) {
    list.innerHTML = '<div class="text-center py-12 rounded-2xl border border-dashed border-turq-200 dark:border-slate-700 text-sm text-slate-500">Aramanızla eşleşen haber bulunamadı.</div>';
    return;
  }

  list.innerHTML = filtered.map(item => `
    <article class="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-turq-100 dark:border-slate-800 shadow-xs space-y-5">
      <div class="flex flex-wrap items-center justify-between gap-2">
        <span class="px-3 py-1 rounded-full bg-turq-50 dark:bg-turq-900/50 text-turq-700 dark:text-turq-300 text-xs font-bold">${item.tag}</span>
        <span class="text-xs font-semibold text-slate-400">${item.date}</span>
      </div>

      <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-snug">${item.title}</h3>

      <div class="space-y-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        ${item.body.map(p => `<p>${p}</p>`).join('')}
      </div>

      <div class="grid sm:grid-cols-2 ${item.photos.length >= 3 ? 'lg:grid-cols-3' : ''} gap-4 pt-2">
        ${item.photos.map(ph => `
          <button type="button" data-lb-src="${ph.src}" data-lb-caption="${ph.caption}" class="lightbox-trigger group text-left rounded-2xl overflow-hidden border border-turq-100 dark:border-slate-800 bg-turq-50/40 dark:bg-slate-800">
            <div class="h-44 overflow-hidden">
              <img src="${ph.src}" alt="${ph.caption}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
            </div>
            <p class="p-2.5 text-[11px] font-medium text-slate-600 dark:text-slate-300">${ph.caption}</p>
          </button>
        `).join('')}
      </div>

      <div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-end">
        <a href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs font-semibold text-turq-700 dark:text-turq-400 hover:underline">
          <span>Kaynak / Arşiv Bağlantısı</span>
          <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
        </a>
      </div>
    </article>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

// DUYURULAR
function renderAnnouncements() {
  const grid = document.getElementById('announcements-grid');
  const filtered = ANNOUNCEMENTS.filter(a => annFilter === 'all' || a.category === annFilter);

  grid.innerHTML = filtered.map(a => `
    <article class="bg-white dark:bg-slate-900 rounded-2xl p-6 border ${a.pinned ? 'border-turq-400 dark:border-turq-600' : 'border-turq-100 dark:border-slate-800'} shadow-xs flex flex-col justify-between space-y-4">
      <div class="space-y-2.5">
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center gap-1.5">
            ${a.pinned ? '<span class="px-2 py-0.5 rounded-md turq-gradient text-white text-[10px] font-bold">Önemli</span>' : ''}
            <span class="px-2 py-0.5 rounded-md bg-turq-50 dark:bg-turq-900/50 text-turq-700 dark:text-turq-300 text-[10px] font-bold">${a.category}</span>
          </div>
          <span class="text-[11px] font-medium text-slate-400">${a.date}</span>
        </div>
        <h3 class="text-base font-extrabold text-slate-900 dark:text-white leading-snug">${a.title}</h3>
        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${a.summary}</p>
      </div>

      <div class="pt-3 border-t border-slate-100 dark:border-slate-800">
        <button type="button" data-ann-action="${a.actionType}" data-ann-target="${a.targetPage || ''}" class="ann-action-btn inline-flex items-center gap-1.5 text-xs font-semibold text-turq-700 dark:text-turq-400 hover:underline">
          <span>${a.actionLabel}</span>
          <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    </article>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

// 44 KİŞİLİK YÖNETİM EKİBİ (Kişi 1 - Kişi 44)
function renderTeam44() {
  const grid = document.getElementById('team-44-grid');
  const q = teamQuery.trim().toLowerCase();
  const filtered = TEAM_44.filter(m => !q || m.name.toLowerCase().includes(q) || m.role.toLowerCase().includes(q));

  grid.innerHTML = filtered.map(m => `
    <div class="p-3 rounded-xl bg-turq-50/60 dark:bg-slate-800/80 border border-turq-100 dark:border-slate-700 flex items-center gap-2.5 hover:border-turq-400 transition">
      <div class="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 border border-turq-200 dark:border-slate-700 text-turq-700 dark:text-turq-300 font-bold text-xs flex items-center justify-center shrink-0">
        ${m.no}
      </div>
      <div class="min-w-0">
        <p class="text-xs font-bold text-slate-900 dark:text-white truncate">${m.name}</p>
        <p class="text-[10px] text-slate-500 dark:text-slate-400 truncate">${m.role}</p>
      </div>
    </div>
  `).join('');
}

function openEventModal(id) {
  const ev = EVENTS.find(item => item.id === id);
  if (!ev) return;
  const modal = document.getElementById('event-modal');
  const body = document.getElementById('event-modal-body');
  const isSaved = savedEvents.has(ev.id);
  const photoSrc = ev.img || CAT_FALLBACK_IMG[ev.category] || CAT_FALLBACK_IMG.kultur;

  body.innerHTML = `
    <div class="flex items-center gap-2">
      <span class="inline-block px-3 py-1 rounded-full bg-turq-50 dark:bg-turq-900/50 text-turq-700 dark:text-turq-300 text-xs font-bold">${ev.categoryLabel}</span>
      <span class="inline-block px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold">${ev.season}</span>
    </div>
    <h3 class="text-xl font-extrabold text-slate-900 dark:text-white">${ev.title}</h3>
    <div class="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 bg-turq-50/60 dark:bg-slate-800 p-3.5 rounded-xl border border-turq-100 dark:border-slate-700">
      <p><strong>Tarih:</strong> ${ev.date}</p>
      <p><strong>Konum:</strong> ${ev.location}</p>
    </div>
    <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">${ev.summary}</p>
    <div class="rounded-2xl overflow-hidden border border-turq-100 dark:border-slate-800 max-h-56">
      <img src="${photoSrc}" alt="${ev.title}" class="w-full h-full object-cover" />
    </div>
    <div class="flex flex-wrap items-center justify-between gap-3 pt-2">
      <a href="${ev.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs font-semibold text-turq-700 dark:text-turq-400 hover:underline">
        <span>Arşiv / Kaynak Sayfasına Git</span>
        <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
      </a>
      <button type="button" id="modal-save-btn" data-id="${ev.id}" class="px-4 py-2 rounded-xl text-xs font-semibold ${isSaved ? 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200' : 'turq-gradient text-white'}">
        ${isSaved ? 'İlgi Kaydını Kaldır' : 'Etkinliğe İlgi Bildir'}
      </button>
    </div>
  `;
  modal.classList.remove('hidden');
  if (window.lucide) window.lucide.createIcons();
}

function initFooterMap() {
  if (typeof L === 'undefined' || mapInstance) return;
  try {
    mapInstance = L.map('altunizade-map', {
      center: [41.0247, 29.0389],
      zoom: 16,
      scrollWheelZoom: false
    });
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 19,
      attribution: '© Esri'
    }).addTo(mapInstance);
    L.marker([41.0247, 29.0389])
      .addTo(mapInstance)
      .bindPopup('<strong>Üsküdar Üniversitesi Merkez Yerleşke</strong><br/>Altunizade Mh. Üniversite Sok. No: 14')
      .openPopup();
  } catch (e) {}
}

document.addEventListener('DOMContentLoaded', () => {
  // Instagram config
  document.getElementById('club-instagram-link').href = CLUB_INSTAGRAM.url;
  document.getElementById('club-instagram-handle').textContent = CLUB_INSTAGRAM.handle;

  // Saved theme
  let initialDark = false;
  try {
    initialDark = localStorage.getItem('uugk_theme') === 'dark';
  } catch (e) {}
  applyTheme(initialDark);

  // Initial renders
  renderEvents();
  renderNews();
  renderAnnouncements();
  renderTeam44();
  switchPage('anasayfa');
  initFooterMap();

  // Theme toggle
  document.getElementById('theme-toggle-btn').addEventListener('click', () => {
    const isCurrentlyDark = document.documentElement.classList.contains('dark');
    applyTheme(!isCurrentlyDark);
  });

  // Page navigation
  document.querySelectorAll('.nav-page-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchPage(btn.dataset.pageTarget);
      document.getElementById('mobile-menu').classList.add('hidden');
    });
  });

  // Mobile menu
  document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
  });

  // Event category filters
  document.getElementById('event-filters').addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    activeFilter = btn.dataset.filter;
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.className = 'filter-btn px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-turq-200 dark:border-slate-700 hover:bg-turq-50 dark:hover:bg-slate-700 transition';
    });
    btn.className = 'filter-btn px-3.5 py-2 rounded-xl text-xs font-semibold turq-gradient text-white shadow-xs transition';
    renderEvents();
  });

  // Season filters
  document.getElementById('season-filters').addEventListener('click', (e) => {
    const btn = e.target.closest('.season-btn');
    if (!btn) return;
    activeSeason = btn.dataset.season;
    document.querySelectorAll('.season-btn').forEach(b => {
      b.className = 'season-btn px-3 py-1 rounded-lg text-[11px] font-semibold bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-turq-200 dark:border-slate-700 hover:bg-turq-50 transition';
    });
    btn.className = 'season-btn px-3 py-1 rounded-lg text-[11px] font-semibold bg-turq-700 text-white transition';
    renderEvents();
  });

  // Event search & reset
  document.getElementById('event-search').addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderEvents();
  });
  document.getElementById('reset-filters-btn').addEventListener('click', () => {
    activeFilter = 'all';
    activeSeason = 'all';
    searchQuery = '';
    document.getElementById('event-search').value = '';
    renderEvents();
  });

  // Events grid delegation
  document.getElementById('events-grid').addEventListener('click', (e) => {
    const detailBtn = e.target.closest('.open-event-btn');
    if (detailBtn) {
      openEventModal(detailBtn.dataset.eventId);
      return;
    }
    const saveBtn = e.target.closest('.save-event-btn');
    if (saveBtn) {
      const id = saveBtn.dataset.saveId;
      if (savedEvents.has(id)) {
        savedEvents.delete(id);
        showToast('Etkinlik ilgi listenizden çıkarıldı.');
      } else {
        savedEvents.add(id);
        showToast('Etkinlik ilgi listenize eklendi.');
      }
      renderEvents();
    }
  });

  // Event modal
  document.getElementById('close-event-modal').addEventListener('click', () => {
    document.getElementById('event-modal').classList.add('hidden');
  });
  document.getElementById('event-modal').addEventListener('click', (e) => {
    if (e.target.id === 'event-modal') e.target.classList.add('hidden');
    const modalSave = e.target.closest('#modal-save-btn');
    if (modalSave) {
      const id = modalSave.dataset.id;
      if (savedEvents.has(id)) {
        savedEvents.delete(id);
        showToast('Etkinlik ilgi listenizden çıkarıldı.');
      } else {
        savedEvents.add(id);
        showToast('Etkinlik ilgi listenize eklendi.');
      }
      renderEvents();
      openEventModal(id);
    }
  });

  // News search & Lightbox
  document.getElementById('news-search').addEventListener('input', (e) => {
    newsQuery = e.target.value;
    renderNews();
  });
  document.getElementById('news-list').addEventListener('click', (e) => {
    const trigger = e.target.closest('.lightbox-trigger');
    if (!trigger) return;
    document.getElementById('lightbox-img').src = trigger.dataset.lbSrc;
    document.getElementById('lightbox-caption').textContent = trigger.dataset.lbCaption;
    document.getElementById('lightbox-modal').classList.remove('hidden');
  });
  document.getElementById('close-lightbox').addEventListener('click', () => {
    document.getElementById('lightbox-modal').classList.add('hidden');
  });
  document.getElementById('lightbox-modal').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox-modal') e.target.classList.add('hidden');
  });

  // Announcements filter & actions
  document.getElementById('announcement-filters').addEventListener('click', (e) => {
    const btn = e.target.closest('.ann-filter-btn');
    if (!btn) return;
    annFilter = btn.dataset.annFilter;
    document.querySelectorAll('.ann-filter-btn').forEach(b => {
      b.className = 'ann-filter-btn px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-turq-200 dark:border-slate-700 transition';
    });
    btn.className = 'ann-filter-btn px-3 py-1.5 rounded-xl text-xs font-semibold turq-gradient text-white transition';
    renderAnnouncements();
  });
  document.getElementById('announcements-grid').addEventListener('click', (e) => {
    const btn = e.target.closest('.ann-action-btn');
    if (!btn) return;
    if (btn.dataset.annAction === 'join') {
      window.open(JOIN_CLUB_URL, '_blank', 'noopener,noreferrer');
    } else if (btn.dataset.annTarget) {
      switchPage(btn.dataset.annTarget);
    }
  });

  // Team 44 search
  document.getElementById('team-search').addEventListener('input', (e) => {
    teamQuery = e.target.value;
    renderTeam44();
  });

  // Kulübe Katıl linkini uygula
  document.getElementById('open-join-btn').href = JOIN_CLUB_URL;
  document.getElementById('open-join-mobile-btn').href = JOIN_CLUB_URL;

  // Splash screen yumuşak kapanış
  setTimeout(() => {
    const splash = document.getElementById('splash-screen');
    if (splash) splash.classList.add('splash-hide');
  }, 1350);

  // Join modal (yedek)
  const joinModal = document.getElementById('join-modal');
  document.getElementById('close-join-modal').addEventListener('click', () => joinModal.classList.add('hidden'));
  joinModal.addEventListener('click', (e) => {
    if (e.target.id === 'join-modal') joinModal.classList.add('hidden');
  });
  document.getElementById('join-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('join-name').value.trim();
    const interest = document.getElementById('join-interest').value;
    joinModal.classList.add('hidden');
    e.target.reset();
    showToast(name + ' için "' + interest + '" ön kaydı oluşturuldu.');
  });
});
