# mehr alemi — v71

Bu sürüm CTA renk durumu çakışmasını markup seviyesinde çözer.

- `index.astro` içinde CTA'lara `read-link-poem` ve `read-link-prose` sınıfları eklendi
- normal şiir CTA kırmızımsı
- normal düz yazı CTA yeşilimsi
- hover/focus iki türde de kahverengi
- `:not(:hover)` ile eski kahverengi normal-state kurallarının yeniden baskınlaşması engellendi

Değişen dosyalar:
1) src/pages/index.astro
2) src/styles/global.css
