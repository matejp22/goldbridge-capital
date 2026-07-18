import ContactForm from "@/components/ContactForm";
export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav">
          <a href="#" className="logo">
            Gold Bridge Capital
          </a>

          <nav className="nav-links">
            <a href="#storitev">Storitev</a>
            <a href="#postopek">Postopek</a>
            <a href="#primer">Primer</a>
            <a href="#kontakt">Kontakt</a>
          </nav>

          <a href="#kontakt" className="nav-button">
            Zaupno povpraševanje
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">
              Mednarodno financiranje z zastavo zlata
            </p>

            <h1>Pridobite likvidnost brez prodaje svojega zlata.</h1>

            <p className="hero-description">
              Kratkoročno financiranje za lastnike fizičnega investicijskega
              zlata. Zlato se uporabi kot zavarovanje in ostane v vaši lasti do
              poplačila vseh pogodbenih obveznosti.
            </p>

            <div className="hero-actions">
              <a href="#kontakt" className="primary-button">
                Oddajte zaupno povpraševanje
              </a>

              <a href="#storitev" className="secondary-button">
                Kako deluje
              </a>
            </div>

            <div className="hero-facts">
              <div>
                <strong>Do 12 mesecev</strong>
                <span>Najdaljša ročnost</span>
              </div>

              <div>
                <strong>Individualno</strong>
                <span>Strukturiranje financiranja</span>
              </div>

              <div>
                <strong>Švica</strong>
                <span>Predvidena varna hramba zlata</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <p className="hero-card-label">Osnovni model</p>

            <div className="model-step">
              <span>01</span>
              <div>
                <strong>Fizično zlato</strong>
                <p>Preverjeno lastništvo, čistina in zakonit izvor.</p>
              </div>
            </div>

            <div className="model-line" />

            <div className="model-step">
              <span>02</span>
              <div>
                <strong>Zavarovanje</strong>
                <p>Zlato se deponira pri dogovorjenem skrbniku.</p>
              </div>
            </div>

            <div className="model-line" />

            <div className="model-step">
              <span>03</span>
              <div>
                <strong>Kapital</strong>
                <p>Po izpolnitvi pogojev se odobrena sredstva nakažejo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="storitev" className="service-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Kako deluje</p>

            <h2>Kapital brez prodaje vašega zlata.</h2>

            <p>
              Fizično investicijsko zlato se uporabi kot zavarovanje za
              kratkoročno financiranje. Zlata ne prodate, ampak ga za obdobje
              financiranja deponirate pri dogovorjenem skrbniku.
            </p>
          </div>

          <div className="service-grid">
            <article className="service-card">
              <span className="service-number">01</span>

              <h3>Ohranite lastništvo</h3>

              <p>
                Zlato ostane v vaši lasti. V času financiranja je pogodbeno
                zastavljeno kot zavarovanje.
              </p>
            </article>

            <article className="service-card">
              <span className="service-number">02</span>

              <h3>Pridobite likvidnost</h3>

              <p>
                Vrednost zlata uporabite za pridobitev kapitala za poslovne,
                investicijske ali druge upravičene namene.
              </p>
            </article>

            <article className="service-card">
              <span className="service-number">03</span>

              <h3>Varna hramba</h3>

              <p>
                Zlato se med trajanjem financiranja hrani pri dogovorjenem
                skrbniku ali finančni instituciji v Švici.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="primer" className="example-section">
        <div className="container example-grid">
          <div className="example-content">
            <p className="eyebrow">Primer financiranja</p>

            <h2>Jasna struktura. Individualni pogoji.</h2>

            <p>
              Končni pogoji se določijo glede na vrednost in vrsto zlata,
              dokumentacijo, ročnost, namen financiranja ter presojo financerja.
            </p>

            <div className="example-note">
              <strong>Pomembno:</strong>
              <span>
                Prikaz je zgolj informativen in ne predstavlja
                zavezujoče ponudbe.
              </span>
            </div>
          </div>

          <div className="example-card">
            <div className="example-row">
              <span>Vrednost zlata</span>
              <strong>3.000.000 €</strong>
            </div>

            <div className="example-row">
              <span>Želeni kapital</span>
              <strong>2.000.000 €</strong>
            </div>

            <div className="example-row">
              <span>Okvirno vračilo</span>
              <strong>2.200.000–2.300.000 €</strong>
            </div>

            <div className="example-row">
              <span>Najdaljša ročnost</span>
              <strong>12 mesecev</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="postopek" className="process-section">
        <div className="container">
          <div className="section-heading process-heading">
            <p className="eyebrow">Postopek</p>

            <h2>Od začetnega pregleda do izplačila.</h2>

            <p>
              Vsak primer se obravnava individualno. Postopek je zasnovan tako,
              da se pred financiranjem preverijo zlato, dokumentacija, lastništvo
              in namen uporabe sredstev.
            </p>
          </div>

          <div className="process-list">
            <article className="process-item">
              <span className="process-number">01</span>

              <div>
                <h3>Začetno povpraševanje</h3>
                <p>
                  Posredujete osnovne informacije o zlatu, želenem znesku in
                  namenu financiranja.
                </p>
              </div>
            </article>

            <article className="process-item">
              <span className="process-number">02</span>

              <div>
                <h3>Pregled dokumentacije</h3>
                <p>
                  Preverijo se lastništvo, izvor zlata, čistina, certifikati in
                  trenutna lokacija.
                </p>
              </div>
            </article>

            <article className="process-item">
              <span className="process-number">03</span>

              <div>
                <h3>Vrednotenje zlata</h3>
                <p>
                  Zlato pregleda in ovrednoti odobrena institucija, skrbnik ali
                  drug strokovni partner.
                </p>
              </div>
            </article>

            <article className="process-item">
              <span className="process-number">04</span>

              <div>
                <h3>Ponudba in pogodbe</h3>
                <p>
                  Po uspešnem pregledu prejmete pogoje financiranja in potrebno
                  pogodbeno dokumentacijo.
                </p>
              </div>
            </article>

            <article className="process-item">
              <span className="process-number">05</span>

              <div>
                <h3>Hramba in izplačilo</h3>
                <p>
                  Po deponiranju zlata in izpolnitvi pogojev se odobrena sredstva
                  nakažejo na potrjeni bančni račun.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="requirements-section">
        <div className="container">
          <div className="requirements-heading">
            <div>
              <p className="eyebrow">Osnovni pogoji</p>
              <h2>Kaj potrebujemo za začetni pregled?</h2>
            </div>

            <p>
              Financiranje je možno šele po uspešnem preverjanju zlata,
              lastništva, dokumentacije, stranke in namena uporabe sredstev.
            </p>
          </div>

          <div className="requirements-grid">
            <article className="requirements-card">
              <p className="requirements-label">Zahteve glede zlata</p>

              <ul>
                <li>Fizično investicijsko zlato</li>
                <li>Dokazljivo lastništvo</li>
                <li>Dokazljiv zakonit izvor</li>
                <li>Ustrezna čistina zlata</li>
                <li>Certifikati ali serijske številke</li>
                <li>Brez obstoječih zastav ali pravic tretjih oseb</li>
              </ul>
            </article>

            <article className="requirements-card">
              <p className="requirements-label">Zahteve glede stranke</p>

              <ul>
                <li>Uspešno preverjanje identitete</li>
                <li>Preverjanje podjetja in dejanskih lastnikov</li>
                <li>Jasno opredeljen namen financiranja</li>
                <li>AML in sankcijsko preverjanje</li>
                <li>Potrjen bančni račun</li>
                <li>Popolna in verodostojna dokumentacija</li>
              </ul>
            </article>
          </div>

          <div className="requirements-notice">
            <strong>Individualna presoja</strong>
            <p>
              Lastništvo zlata samo po sebi še ne pomeni avtomatične odobritve
              financiranja. Vsak primer je predmet pregleda in končne odobritve
              financerja.
            </p>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container faq-grid">
          <div className="faq-heading">
            <p className="eyebrow">Pogosta vprašanja</p>
            <h2>Ključne informacije pred začetnim povpraševanjem.</h2>

            <p>
              Vsak primer se obravnava individualno, vendar spodnji odgovori
              pojasnjujejo osnovno strukturo financiranja.
            </p>
          </div>

          <div className="faq-list">
            <details className="faq-item">
              <summary>Ali moram zlato prodati?</summary>
              <p>
                Ne. Zlato se uporabi kot zavarovanje za financiranje in ostane
                v vaši lasti, dokler izpolnjujete pogodbeno dogovorjene
                obveznosti.
              </p>
            </details>

            <details className="faq-item">
              <summary>Kje se zlato hrani?</summary>
              <p>
                Zlato se predvidoma hrani pri dogovorjenem skrbniku ali finančni
                instituciji v Švici. Natančna lokacija se določi v pogodbeni
                dokumentaciji.
              </p>
            </details>

            <details className="faq-item">
              <summary>Kolikšen delež vrednosti zlata lahko pridobim?</summary>
              <p>
                Razmerje med vrednostjo zlata in višino financiranja se določi
                individualno glede na čistino, obliko, dokumentacijo, lokacijo
                zlata in politiko financerja.
              </p>
            </details>

            <details className="faq-item">
              <summary>Kako dolgo traja postopek?</summary>
              <p>
                Trajanje je odvisno od popolnosti dokumentacije, preverjanja
                lastništva, vrednotenja zlata, pravnega pregleda in odobritve
                financerja.
              </p>
            </details>

            <details className="faq-item">
              <summary>Kakšni so stroški financiranja?</summary>
              <p>
                Stroški se določijo individualno glede na znesek financiranja,
                ročnost, vrednost zlata, stroške hrambe, strukturo posla in
                druge pogoje.
              </p>
            </details>

            <details className="faq-item">
              <summary>
                Kaj se zgodi, če financiranje ni pravočasno poplačano?
              </summary>
              <p>
                V primeru neizpolnitve obveznosti lahko financer uveljavi
                pravice iz zastave v skladu s pogodbo. Vsi pogoji morajo biti
                jasno navedeni pred podpisom dokumentacije.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section id="kontakt" className="contact-section">
        <div className="container contact-grid">
          <div className="contact-content">
            <p className="eyebrow">Zaupno povpraševanje</p>

            <h2>Začnite z osnovnim pregledom vašega primera.</h2>

            <p>
              Posredujte osnovne informacije o zlatu in želenem financiranju.
              Podatki bodo uporabljeni izključno za začetno presojo možnosti
              sodelovanja.
            </p>

            <div className="contact-note">
              <strong>Diskretna obravnava</strong>
              <span>
                Oddaja obrazca ne predstavlja odobritve financiranja ali
                zavezujoče ponudbe.
              </span>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <a href="#" className="footer-logo">
              Gold Bridge Capital
            </a>

            <p className="footer-description">
              Mednarodno kratkoročno financiranje z zastavo fizičnega
              investicijskega zlata.
            </p>
          </div>

          <div className="footer-links">
            <a href="#storitev">Storitev</a>
            <a href="#postopek">Postopek</a>
            <a href="#primer">Primer</a>
            <a href="#kontakt">Kontakt</a>
          </div>
        </div>

        <div className="container footer-legal">
          <p>
            Informacije na tej spletni strani so splošne in informativne narave
            ter ne predstavljajo zavezujoče ponudbe financiranja. Vsak primer je
            predmet individualnega pregleda in končne odobritve financerja.
          </p>

          <span>© 2026 Gold Bridge Capital. Vse pravice pridržane.</span>
        </div>
      </footer>
    </main>
  );
}