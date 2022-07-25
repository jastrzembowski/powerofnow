import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function Rodo(props) {
  const [nav, setNav] = useState(false);

  const changeBg = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBg);
  return (
    <div>
      <nav className={nav ? "active" : " "}>
        <img src={logo} alt="logo" className="logo"></img>
        <ul>
          <li>
            <Link to="/">Return to main</Link>
          </li>
        </ul>
      </nav>
        <article className="rodo-container">
          <h1 style={{ textAlign: "center" }}>Obowiązek informacyjny RODO</h1>
          <p>
            Poniższa informacja stanowi zwięzły, zrozumiały i przejrzysty skrót
            informacji zamieszczonych w
            <a href="https://powerofnow.space/rodo">Polityce Prywatności</a>{" "}
            odnośnie Administratora danych, celu i sposobu przetwarzania danych
            osobowych oraz Twoich praw w związku z tym przetwarzaniem, w formie
            wymaganej do spełnienia obowiązku informacyjnego RODO. Szczegóły
            dotyczące sposobu przetwarzania i podmiotów uczestniczących w tym
            procesie dostępne są we wskazanej polityce.
          </p>
          <h2>Kto jest administratorem danych?</h2>
          <p>
            Administratorem Danych Osobowych (dalej Administrator) jest firma
            "Tricity Solution Sp z o.o.", prowadząca działalność pod adresem:
            ul. LĘBORSKA 3B/--- 80-386 GDAŃSK POMORSKIE, o nadanym numerze
            identyfikacji podatkowej (NIP): 5842813640, świadcząca usługi drogą
            elektroniczną za pośrednictwem Serwisu
          </p>
          <h2>Jak można skontaktować się z administratorem danych?</h2>
          <p>
            Z Administratorem można skontaktować się w jeden z poniższych
            sposobów
          </p>
          <ul>
            <li>
              <p>
                <strong>Adres pocztowy</strong>- Tricity Solution Sp z o.o., ul.
                LĘBORSKA 3B/--- 80-386 GDAŃSK POMORSKIE
              </p>
            </li>{" "}
            <li>
              <p>
                <strong>Formularz kontaktowy</strong> - dostępny pod adresem:
                https://powerofnow.space/#contact
              </p>
            </li>
          </ul>
          <h2>Czy Administrator powołał Inspektora Danych Osobowych?</h2>
          <p>
            Na podstawie Art. 37 RODO, Administrator nie powołał Inspektora
            Ochrony Danych.
          </p>
          <p>
            W sprawach dotyczących przetwarzania danych, w tym danych osobowych,
            należy kontaktować się bezpośrednio z Administratorem.
          </p>
          <h2>Skąd pozyskujemy dane osobowe i jakie są ich źródła?</h2>
          <p>Dane pozyskiwane są z następujących źródeł:</p>
          <ul>
            <li>od osób, których dane dotyczą</li>
            <li>
              w przypadku rejestracji przy użyciu portali społecznościowych, za
              wyrażoną świadomą zgodą tych osób, z tych portali
              społecznościowych
            </li>
          </ul>
          <h2>Jaki jest zakres przetwarzanych przez nas danych osobowych?</h2>
          <p>
            W serwisie przetwarzane są <strong>dane osobowe zwykłe</strong>,
            podane dobrowolnie przez osoby, których dotyczą
            <br />
            <small>
              (Np. imię i nazwisko, login, adres e-mail, telefon, adres IP,
              itp.)
            </small>
          </p>
          <p>
            Szczegółowy zakres przetwarzanych danych dostępny jest w
            <a href="https://powerofnow.space/rodo">Polityce Prywatności</a>.
          </p>
          <h2>Jakie są cele przetwarzania przez nas danych?</h2>
          <p>
            Dane osobowe dobrowolnie podane przez Użytkowników są przetwarzane w
            jednym z następujących celów:
          </p>
          <ul>
            <li>
              Realizacji usług elektronicznych:<ul></ul>
            </li>
            <li>
              Komunikacji Administratora z Użytkownikami w sprawach związanych z
              Serwisem oraz ochrony danych
            </li>
            <li>Zapewnienia prawnie uzasadnionego interesu Administratora</li>
          </ul>
          <h2>Jakie są podstawy prawne przetwarzania danych?</h2>
          <p>Serwis gromadzi i przetwarza dane Użytkowników na podstawie:</p>
          <ul>
            <li>
              Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z
              dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w
              związku z przetwarzaniem danych osobowych i w sprawie swobodnego
              przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne
              rozporządzenie o ochronie danych)
              <ul>
                <li>
                  art. 6 ust. 1 lit. a<br />
                  <small>
                    osoba, której dane dotyczą wyraziła zgodę na przetwarzanie
                    swoich danych osobowych w jednym lub większej liczbie
                    określonych celów
                  </small>
                </li>
                <li>
                  art. 6 ust. 1 lit. b<br />
                  <small>
                    przetwarzanie jest niezbędne do wykonania umowy, której
                    stroną jest osoba, której dane dotyczą, lub do podjęcia
                    działań na żądanie osoby, której dane dotyczą, przed
                    zawarciem umowy
                  </small>
                </li>
                <li>
                  art. 6 ust. 1 lit. f<br />
                  <small>
                    przetwarzanie jest niezbędne do celów wynikających z prawnie
                    uzasadnionych interesów realizowanych przez administratora
                    lub przez stronę trzecią
                  </small>
                </li>
              </ul>
            </li>
            <li>
              Ustawa z dnia 10 maja 2018 r. o ochronie danych osobowych (Dz.U.
              2018 poz. 1000)
            </li>
            <li>
              Ustawa z dnia 16 lipca 2004 r. Prawo telekomunikacyjne (Dz.U. 2004
              nr 171 poz. 1800)
            </li>
            <li>
              Ustawa z dnia 4 lutego 1994 r. o prawie autorskim i prawach
              pokrewnych (Dz. U. 1994 Nr 24 poz. 83)
            </li>
          </ul>
          <h2>
            Jaki jest prawnie uzasadniony interes realizowany przez
            Administratora?
          </h2>
          <ul>
            <li>
              W celu ewentualnego ustalenia, dochodzenia lub obrony przed
              roszczeniami – podstawą prawną przetwarzania jest nasz uzasadniony
              interes (art. 6 ust. 1 lit. f) RODO) polegający na ochronie
              naszych praw, w tym między innymi;
            </li>
            <li>W celu oceny ryzyka potencjalnych klientów</li>
            <li>W celu oceny planowanych kampanii marketingowych</li>
            <li>W celu realizacji marketingu bezpośredniego</li>
          </ul>
          <h2>Przez jaki okres przetwarzamy dane osobowe?</h2>
          <p>
            Co do zasady, wskazane dane osobowe są przechowywane wyłącznie przez
            okres świadczenia usługi w ramach prowadzonego serwisu przez
            Administratora. Są one usuwane lub anonimizowane w okresie do{" "}
            <strong>30 dni od chwili zakończenia świadczenia usług</strong> (np.
            usunięcie zarejestrowanego konta użytkownika, wypisanie z listy
            Newsletter, itp.)
          </p>
          <p>
            W wyjątkowych sytuacjach, w celu zabezpieczenie prawnie
            uzasadnionego interesu realizowanego przez Administratora, okres ten
            może ulec wydłużeniu. W takiej sytuacji Administrator będzie
            przechowywał wskazane dane, od czasu żądania ich usunięcia przez
            Użytkownika, nie dłużej niż przez okres 3 lat w przypadku naruszenia
            lub podejrzenia naruszenia zapisów regulaminu serwisu przez osobę,
            której dane dotyczą.
          </p>
          <h2>Kto jest odbiorcą danych w tym danych osobowych?</h2>
          <p>Co do zasady jedynym odbiorcą danych jest Administrator.</p>
          <p>
            Przetwarzanie danych może jednak być powierzone innym podmiotom,
            realizującym usługi na rzecz Administratora w celu utrzymania
            działalności Serwisu.
          </p>
          Do podmiotów takich można zaliczyć między innymi:
          <ul>
            <li>
              Firmy hostingowe, świadczące usługi hostingu lub usług pokrewnych
              dla Administratora
            </li>
          </ul>
          <h2>
            Czy Państwa dane osobowe będą przekazywane poza Unię Europejską?
          </h2>
          <p>
            Dane osobowe nie będą przekazywane poza Unię Europejską, chyba że
            zostały opublikowane na skutek indywidualnego działania Użytkownika
            (np. wprowadzenie komentarza lub wpisu), co sprawi, że dane będą
            dostępne dla każdej osoby odwiedzającej serwis.
          </p>
          <h2>
            Czy dane osobowe będą podstawą zautomatyzowanego podejmowania
            decyzji?
          </h2>
          <p>
            Dane osobowe <strong>nie będą wykorzystywane</strong> do
            zautomatyzowanego podejmowania decyzji (profilowania).
          </p>
          <h2>
            Jakie mają Państwo prawa związane z przetwarzaniem danych osobowych?
          </h2>
          <ul>
            <li>
              <p>
                <strong>Prawo dostępu do danych osobowych</strong>
                <br />
                Użytkownikom przysługuje prawo uzyskania dostępu do swoich
                danych osobowych, realizowane na żądanie złożone do
                Administratora
              </p>
            </li>
            <li>
              <p>
                <strong>Prawo do sprostowania danych osobowych</strong>
                <br />
                Użytkownikom przysługuje prawo żądania od Administratora
                niezwłocznego sprostowania danych osobowych, które są
                nieprawidłowe lub / oraz uzupełnienia niekompletnych danych
                osobowych, realizowane na żądanie złożone do Administratora
              </p>
            </li>
            <li>
              <p>
                <strong>Prawo do usunięcia danych osobowych</strong>
                <br />
                Użytkownikom przysługuje prawo żądania od Administratora
                niezwłocznego usunięcia danych osobowych, realizowane na żądanie
                złożone do Administratora. <br />
                <br />W przypadku kont użytkowników, usunięcie danych polega na
                anonimizacji danych umożliwiających identyfikację Użytkownika.
                <br />
                <br />W przypadku usługi Newsletter, Użytkownik ma możliwość
                samodzielnego usunięcia swoich danych osobowych korzystając z
                odnośnika umieszczonego w każdej przesyłanej wiadomości e-mail.
              </p>
            </li>
            <li>
              <p>
                <strong>
                  Prawo do ograniczenia przetwarzania danych osobowych
                </strong>
                <br />
                Użytkownikom przysługuje prawo ograniczenia przetwarzania danych
                osobowych w przypadkach wskazanych w art. 18 RODO, m.in.
                kwestionowania prawidłowość danych osobowych, realizowane na
                żądanie złożone do Administratora
              </p>
            </li>
            <li>
              <p>
                <strong>Prawo do przenoszenia danych osobowych</strong>
                <br />
                Użytkownikom przysługuje prawo uzyskania od Administratora,
                danych osobowych dotyczących Użytkownika w ustrukturyzowanym,
                powszechnie używanym formacie nadającym się do odczytu
                maszynowego, realizowane na żądanie złożone do Administratora
              </p>
            </li>
            <li>
              <p>
                <strong>
                  Prawo wniesienia sprzeciwu wobec przetwarzania danych
                  osobowych
                </strong>
                <br />
                Użytkownikom przysługuje prawo wniesienia sprzeciwu wobec
                przetwarzania jego danych osobowych w przypadkach określonych w
                art. 21 RODO, realizowane na żądanie złożone do Administratora
              </p>
            </li>
            <li>
              <p>
                <strong>Prawo wniesienia skargi</strong>
                <br />
                Użytkownikom przysługuje prawo wniesienia skargi do organu
                nadzorczego zajmującego się ochroną danych osobowych.
              </p>
            </li>
          </ul>
        </article>
    </div>
  );
}

export default Rodo;
