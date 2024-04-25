State: Uygulamadaki bileşenlerin sahip olduğu bilgi özellikler
State Yönetme
Prop Drilling: Bileşenlerde yukarıdan aşşağıya veri'yi aktarması

Context: Uygulamadaki state'i bütün bileşenler tarafından erişlebilen ve oluşturduğumuz merkezler tarafından yönettiğimiz state yönetim aracı

Redux: Bileşelerin sahip olduğu ve merkezi olarak yönetilmesi gerken state'leri yönettiğimiz merkezi state yönetim aracı

Neden Context yerine Redux
Kod tekrarı contexte göre daha az
Performansı daha iyi
Bileşen içerisndeki karışılığı daha azaltır
Hata ayıklama daha kolaydır (redux devtools)
Orta veya büyük ölçekli projelerde satet yönetimini daha kolay hale getirir.
Redux ile ilgili bilinmesi gerekenler
Store: Uygulumanın bütün bileşenleri tarafından erişilebilen ve yönetilebilen state deposu

Reducer: Bir state tutar ve aksiyondan aldığı talimata göre tutulan state'in nasıl değişeceğine karar verir.

Action: Reducerlardaki state'i güncellemek için gönderdiğimiz talimat / emir / eylem / haber.

Action iki değere sahip bir nesnedir
type (zorunlu): Eylemi tanımlayan bir string
payload (opsiyonel): Eylemin verisi
Dispatch (Sevketmek): Eylemin gerçekleştiğini reducer'a ileten method

Subscribe (Abone Olmak): Bileşenlerin store'da tutulan veriye erişim sağlaması.

Provider (Sağlayıcı): Store'da tutulan veriyi uygulamaya sağlıyor

Gerçek Hayttan Benzetme
Store: Okul Binası

Reducer: Okulun Yönetim EKibi (Müdür, Müdür Yard.)

Action: "Öğrencinin Sınavı Geçmesi" | "Yeni Öğrencinin Kayıt Yapması" | "Öğrencinin Okuldan Atılması"

Dispatch: Öğrenci İşleri | Öğretmen

Subscribe: Rehberlik Servisi | E-Okul

Provider: MEB

Redux Kurulum Aşamaları
redux ve react-redux paketlerini indir
reducer / reducer'ların kurulumunu yap
store'u oluştur
store'u projeye tanıt
CRUD
Create Read Update Delete

Oluştur Oku Güncelle Sil

<img src="screen.gif" /># Redux-Crud
