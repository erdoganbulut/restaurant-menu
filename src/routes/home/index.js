import { h } from "preact";
import style from "./style";

const Home = () => (
  <div class={style.home}>
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">COVID-19 BİLGİLENDİRME</h5>
          <p className="card-text">
            Koronavirüs tedbirleri gereğince müşterilerimize temassız ateş ölçümü ücretsiz ve
            zorunlu olarak yapılmaktadır. Kafemizde ücretsiz olarak sunulan dezenfektanları girişte
            ve ihtiyaç hissettiğinizde kullanabilirsiniz.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">NARGİLE HAKKINDA BİLGİLENDİRME</h5>
          <p className="card-text">
            TÜRKİYE CUMHURİYETİ İÇİŞLERİ BAKANLIĞI Koronavirüs Tedbirleri Genelgesi Kapsamında
            nargile içilmesi yasaklanmıştır. Bu sebeple nargile satışımız yasak kalkıncaya kadar
            yapılamamaktadır.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">MASA OYUNLARI HAKKINDA BİLGİLENDİRME</h5>
          <p className="card-text">
            TÜRKİYE CUMHURİYETİ İÇİŞLERİ BAKANLIĞI Koronavirüs Tedbirleri Genelgesi Kapsamında masa
            oyunları yasaklandığından; okey, kağıt oyunları dahil olmak üzere tüm masa oyunları
            yasaklanmıştır.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">ÜCRETSİZ WI-FI</h5>
          <p className="card-text">
            Ağ: YAPBOZ_MISAFIR
            <br />
            Şifre: yapboz2019
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
