V53 — V52 görünmeme sorunu düzeltildi

Sorun:
- Eski CSS'te body::before ve body::after için display:none !important vardı.
- V52 kağıt dokusunu bu pseudo katmanlara verdiği için doku hiç görünmüyordu.

Düzeltme:
- Buruşuk kağıt dokusu mevcut .paper-noise overlay katmanına taşındı.
- CTA tonları daha görünür biçimde açıldı.
- Sadece src/styles/global.css değişir.
