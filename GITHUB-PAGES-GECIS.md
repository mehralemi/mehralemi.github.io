# mehr alemi — GitHub Pages sürümü

Bu paket `https://mehralemi.github.io/` kök adresi için hazırlanmıştır.

## Gerekli GitHub yapısı

1. GitHub'da `mehralemi` adlı bir Organization oluştur.
2. Mevcut `mehr-alemi` reposunu bu Organization'a transfer et.
3. Transferden sonra repository adını tam olarak:
   `mehralemi.github.io`
   yap.
4. Bu paketteki dosyaları repo üzerine kopyala.
5. GitHub Desktop:
   - Commit to main
   - Push origin

## GitHub Pages ayarı

Repo:
Settings → Pages → Build and deployment → Source

`GitHub Actions` seç.

Workflow:
`.github/workflows/deploy.yml`

Her `main` push'unda site otomatik build edilip yayınlanır.

## Beklenen adres

https://mehralemi.github.io/

`bilisimprof` ziyaretçi URL'sinde görünmez.

## Pages CMS

Repo Organization'a taşındıktan sonra Pages CMS'nin yeni repo erişimini
yeniden yetkilendirmen gerekebilir.

Pages CMS'de yeni hedef:
`mehralemi/mehralemi.github.io`

İçerikler, görseller ve `.pages.yml` aynen korunur.

## Önemli

Bu bir Organization/User GitHub Pages sitesi olduğu için `base` kullanılmıyor.
Bu nedenle site kökten açılır ve bağlantılar `/yazilar/...` biçiminde çalışır.
