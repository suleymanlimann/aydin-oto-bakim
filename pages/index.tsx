import React, { useMemo, useState } from "react";
import { PhoneCall, MessageSquare, MapPin, ShieldCheck, Wrench, Gauge, Car, BatteryCharging, Filter, CalendarDays, Star } from "lucide-react";

const CTA = {
  telHref: "tel:05335772120",
  whatsappHref: "https://wa.me/905335772120",
  mapsHref: "https://www.google.com/maps/search/?api=1&query=Fikirtepe%2C+%C3%96zbey+Cd.+No%3A47%2C+34720+Kad%C4%B0k%C3%B6y%2F%C4%B0stanbul",
};

const openingHours = [
  { d: "Pazartesi", h: "09:00 – 19:00" },
  { d: "Salı", h: "09:00 – 19:00" },
  { d: "Çarşamba", h: "09:00 – 19:00" },
  { d: "Perşembe", h: "09:00 – 19:00" },
  { d: "Cuma", h: "09:00 – 19:00" },
  { d: "Cumartesi", h: "10:00 – 17:00" },
  { d: "Pazar", h: "Kapalı" },
];

const reviews = [
  { name: "Mehmet A.", text: "Hızlı arıza tespiti ve güler yüzlü ekip. Kesinlikle tavsiye ederim!", stars: 5 },
  { name: "Zeynep K.", text: "Orijinal parça ve garantili işçilik, içim rahat. Teşekkürler Aydın Oto Bakım.", stars: 5 },
  { name: "Emre D.", text: "Periyodik bakımda şeffaf fiyatlandırma, temiz iş.", stars: 4 },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${count} yıldız`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4" />
      ))}
    </div>
  );
}

const Feature = ({ icon: Icon, title, desc }: any) => (
  <div className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100">
    <div className="p-2 rounded-xl border bg-white">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <div className="font-semibold">{title}</div>
      <p className="text-sm text-gray-600 mt-1">{desc}</p>
    </div>
  </div>
);

const ServiceCard = ({ icon: Icon, title, items, href }: any) => (
  <a href={href ?? "#hizmetler"} className="group block rounded-2xl border border-gray-200 hover:border-blue-600 transition p-5 bg-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600">
    <div className="flex items-center gap-3">
      <div className="p-3 rounded-xl bg-blue-50 group-hover:bg-blue-100">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <ul className="mt-3 space-y-1 text-sm text-gray-600 list-disc list-inside">
      {items?.map((it: string) => (
        <li key={it}>{it}</li>
      ))}
    </ul>
  </a>
);

const FAQ = ({ q, a }: { q: string; a: string }) => (
  <details className="rounded-2xl border border-gray-200 p-4 bg-white">
    <summary className="font-medium cursor-pointer select-none">{q}</summary>
    <p className="text-sm text-gray-600 mt-2">{a}</p>
  </details>
);

function ReviewCard({ name, text, stars }: any) {
  return (
    <div className="min-w-[280px] max-w-[320px] mr-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="font-semibold">{name}</div>
        <div className="flex text-blue-600"><Stars count={stars} /></div>
      </div>
      <p className="text-sm text-gray-600 mt-2">“{text}”</p>
    </div>
  );
}

export default function AydinOtoBakimLanding() {
  const [note, setNote] = useState("");

  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "Aydın Oto Bakım",
    image: [
      "https://via.placeholder.com/1200x630.png?text=Aydin+Oto+Bakim",
    ],
    telephone: "+905335772120",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Fikirtepe, Özbey Cd. No:47",
      addressLocality: "Kadıköy",
      postalCode: "34720",
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    url: "https://aydinotobakim.example",
    openingHours: [
      "Mo-Fr 09:00-19:00",
      "Sa 10:00-17:00",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "128",
    },
    sameAs: [
      CTA.mapsHref,
    ],
  }), []);

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Aydın Oto Bakım - Online Randevu Talebi\\nNot: ${note}`);
    window.location.href = `${CTA.whatsappHref}?text=${msg}`;
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Topbar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex flex-col leading-tight select-none">
              <span className="text-xl font-extrabold tracking-wide text-blue-700">Aydın</span>
              <span className="text-xs font-medium text-gray-600 -mt-1">OTO BAKIM</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#anasayfa" className="hover:text-blue-700">Ana Sayfa</a>
            <a href="#hizmetler" className="hover:text-blue-700">Hizmetler</a>
            <a href="#hakkimizda" className="hover:text-blue-700">Hakkımızda</a>
            <a href="#iletisim" className="hover:text-blue-700">İletişim</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={CTA.telHref} className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:border-blue-600">
              <PhoneCall className="w-4 h-4" /> Hemen Ara
            </a>
            <a href={CTA.whatsappHref} className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white px-3 py-2 hover:bg-blue-700">
              <MessageSquare className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="anasayfa" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
           <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              <span className="text-blue-700">Aracınızın Sağlığı</span> İçin Profesyonel Dokunuş
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Kadıköy ve çevresinde hızlı arıza tespiti, orijinal parça ve garantili işçilik.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={CTA.telHref} className="rounded-xl bg-blue-600 text-white px-5 py-3 hover:bg-blue-700 inline-flex items-center gap-2">
                <PhoneCall className="w-5 h-5" /> Hemen Ara
              </a>
              <a href={CTA.mapsHref} className="rounded-xl border px-5 py-3 inline-flex items-center gap-2 hover:border-blue-600">
                <MapPin className="w-5 h-5" /> Yol Tarifi Al
              </a>
            </div>

            {/* Why Us */}
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              <Feature icon={ShieldCheck} title="Uzman Mekanik Ekip" desc="Deneyimli ustalar ile doğru teşhis, doğru çözüm." />
              <Feature icon={ShieldCheck} title="Orijinal Parça & Garantili İşçilik" desc="Parça ve işçilik garantisi ile güvenle yola devam." />
              <Feature icon={Gauge} title="Hızlı Arıza Tespiti" desc="Modern ekipmanlarla hızlı ve net sonuç." />
              <Feature icon={Car} title="Tüm Marka-Model" desc="Binek ve hafif ticari tüm araçlar." />
              <Feature icon={Wrench} title="Uygun Fiyat Politikası" desc="Şeffaf ve rekabetçi fiyatlar." />
            </div>
          </div>
          {/* Hero Visual */}
          <div className="relative h-72 md:h-full rounded-3xl overflow-hidden border bg-black shadow-xl">
            <img
              src="/car-hero.jpg"
              alt="Porshe Sport"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white/80 text-sm font-medium">Porshe</div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section id="hizmetler" className="bg-gray-50 border-y">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">Popüler Hizmetler</h2>
            <a href="#randevu" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white px-4 py-2 hover:bg-blue-700">
              <CalendarDays className="w-4 h-4" /> Online Randevu
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mt-6">
            <ServiceCard icon={Wrench} title="Motor Tamiri" items={["Arıza tespiti", "Rektefiye", "Performans"]} href="/hizmetler/motor-tamiri" />
            <ServiceCard icon={Car} title="Mekanik Tamir" items={["Fren", "Süspansiyon", "Şanzıman", "Direksiyon"]} href="/hizmetler/mekanik-tamir" />
            <ServiceCard icon={Filter} title="Yağ & Periyodik Bakım" items={["Üreticiye uygun", "Filtre & yağ"]} href="/hizmetler/yag-bakim" />
            <ServiceCard icon={Filter} title="DPF / EGR Temizliği" items={["Makinalı profesyonel", "Detaylı temizlik"]} href="/hizmetler/dpf-egr-temizligi" />
            <ServiceCard icon={BatteryCharging} title="Akü Değişimi" items={["Yerinde akü", "Elektrik sistemleri"]} href="/hizmetler/aku-degisimi" />
          </div>

          {/* Google Reviews Slider (static demo) */}
          <div className="mt-12">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-baseline gap-3">
                <h3 className="text-xl font-semibold">Google Yorumları</h3>
                <div className="text-sm text-gray-600">Puan: <span className="font-semibold">4.9 / 5</span></div>
              </div>

              <a
                href="https://share.google/KBekh6CIsWSHyFoQk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-700 hover:underline whitespace-nowrap"
              >
                Tüm Yorumları Gör →
              </a>
            </div>

            <div className="mt-4 overflow-x-auto no-scrollbar flex">
              {reviews.map((r, i) => (
                <ReviewCard key={i} {...r} />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* About */}
      <section id="hakkimizda" className="">
        <div className="mx-auto max-w-7xl px-4 py-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Hakkımızda</h2>
            <p className="mt-4 text-gray-600">Aydın Oto Bakım, Kadıköy/Fikirtepe’de güven veren hizmet anlayışıyla; motor ve mekanik tamir, periyodik bakım ve DPF/EGR temizliği alanlarında uzmanlaşmış bir servistir. "Müşteri Memnuniyeti Önceliğimizdir" ilkemizle şeffaf fiyatlandırma ve garantili işçilik sunuyoruz.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              <Feature icon={ShieldCheck} title="Garantili İşçilik" desc="Her işlem kayıt altına alınır." />
              <Feature icon={Gauge} title="Hızlı Teslim" desc="Aracınızı en kısa sürede yola hazırlarız." />
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden border bg-gray-100 h-72 relative">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="/images/slider/workshop1.jpg"
                className="w-full h-full object-cover absolute inset-0 opacity-100 animate-fadeSlide1"
                alt="Servis Görsel 1"
              />
              <img
                src="/images/slider/workshop2.jpg"
                className="w-full h-full object-cover absolute inset-0 opacity-0 animate-fadeSlide2"
                alt="Servis Görsel 2"
              />
              <img
                src="/images/slider/workshop3.jpg"
                className="w-full h-full object-cover absolute inset-0 opacity-0 animate-fadeSlide3"
                alt="Servis Görsel 3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Appointment */}
      <section id="iletisim" className="bg-gray-50 border-t">
        <div className="mx-auto max-w-7xl px-4 py-14 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">İletişim</h2>
            <div className="mt-3 text-gray-700">
              <p><strong>Adres:</strong> Fikirtepe, Özbey Cd. No:47, 34720 Kadıköy/İstanbul</p>
              <p className="mt-1"><strong>Telefon:</strong> <a className="text-blue-700 underline" href={CTA.telHref}>0533 577 21 20</a></p>
              <p className="mt-1"><strong>WhatsApp:</strong> <a className="text-blue-700 underline" href={CTA.whatsappHref}>Mesaj Gönder</a></p>
            </div>

            <div className="mt-5 rounded-2xl overflow-hidden border bg-white">
              <iframe
                title="Aydın Oto Bakım - Harita"
                className="w-full h-64"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.248606937857!2d29.0444327!3d40.9912109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac8e5f0a69bd5%3A0x4a1c9355866a0b95!2s%C3%96zbey%20Cd.%2047%2C%20Fikirtepe%2C%20Kad%C4%B1k%C3%B6y%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1730847700000!5m2!1str!2str"
              />

              <div className="p-3 border-t bg-white flex items-center justify-between">
                <a
                  href={CTA.mapsHref}
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white px-4 py-2 hover:bg-blue-700"
                >
                  <MapPin className="w-4 h-4" /> Yol Tarifi Al
                </a>
                <a
                  href={CTA.whatsappHref}
                  className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 hover:border-blue-600"
                >
                  <MessageSquare className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>



            <div className="mt-6">
              <h3 className="font-semibold">Çalışma Saatleri</h3>
              <ul className="mt-2 grid grid-cols-2 gap-1 text-sm text-gray-700">
                {openingHours.map((o) => (
                  <li key={o.d} className="flex justify-between border-b py-1">
                    <span>{o.d}</span>
                    <span>{o.h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Appointment */}
          <div id="randevu" className="">
            <h2 className="text-2xl md:text-3xl font-bold">Online Randevu</h2>
            <p className="mt-2 text-gray-600">Bilgilerinizi bırakın, sizi arayalım. Veya direkt WhatsApp üzerinden randevu isteği oluşturun.</p>
            <form onSubmit={handleWhatsApp} className="mt-5 space-y-4">
              <div>
                <label className="block text-sm font-medium">Notunuz</label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Örn: 2016 BMW 3.20d, bakım ve fren kontrolü"
                  rows={4}
                />
              </div>
              <div className="flex flex-wrap gap-3">
                <button type="submit" className="rounded-xl bg-blue-600 text-white px-5 py-3 hover:bg-blue-700 inline-flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" /> WhatsApp ile Gönder
                </button>
                <a href={CTA.telHref} className="rounded-xl border px-5 py-3 hover:border-blue-600 inline-flex items-center gap-2">
                  <PhoneCall className="w-5 h-5" /> Hemen Ara
                </a>
              </div>
            </form>

            {/* FAQs */}
            <div className="mt-10 space-y-3">
              <h3 className="text-lg font-semibold">Sık Sorulan Sorular</h3>
              <FAQ q="Fiyatlar nasıl belirleniyor?" a="Arıza tespiti sonrası onayınız alınarak şeffaf teklif sunulur." />
              <FAQ q="Garantiniz var mı?" a="Parça ve işçilik için servis formu ile garanti veriyoruz." />
              <FAQ q="Ne kadar sürede teslim alırım?" a="İşleme göre aynı gün veya ertesi gün teslim hedeflenir." />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-gray-600 flex flex-wrap items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Aydın Oto Bakım • Kadıköy</div>
          <div className="flex items-center gap-4">
            <a href="#anasayfa" className="hover:text-blue-700">Ana Sayfa</a>
            <a href="#hizmetler" className="hover:text-blue-700">Hizmetler</a>
            <a href="#hakkimizda" className="hover:text-blue-700">Hakkımızda</a>
            <a href="#iletisim" className="hover:text-blue-700">İletişim</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
