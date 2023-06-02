    const firstName = [
    "Ahmet", "Mehmet", "Ali", "Ayşe", "Fatma",
    "Mustafa", "Emine", "Hatice", "İbrahim", "Zeynep",
    "Hüseyin", "Murat", "Sultan", "Yusuf", "Ömer",
    "Fahriye", "Serkan", "Berkay", "Gizem", "Elif",
    "Cem", "Eren", "Melike", "Gamze", "Gül",
    "Şahin", "Nur", "Deniz", "Selim", "Selin",
    "Aylin", "Barış", "Gözde", "Seda", "Berke",
    "Cansu", "Büşra", "Umut", "Yasin", "Ezgi",
    "Esra", "Kerem", "Zeki", "Gökhan", "Aytaç",
    "Emir", "Sevgi", "Kadir", "Yağmur", "Cihan",
    "Pelin", "Damla", "Kaan", "Şeyma", "İrem",
    "Özge", "Gülşah", "Sude", "Orhan", "Cemre",
    "Caner", "Ayşegül", "Bilge", "Cemal", "Hande",
    "İsmail", "Zübeyde", "Cemile", "Ebru", "Aslı",
    "Merve", "Ece", "Feride", "Serap", "Sibel",
    "Beyza", "Meltem", "Sema", "İpek", "Nil",
    "Nazlı", "Hakan", "Tolga", "Gürkan", "Zekiye",
    "Ege", "Zehra", "Fikret", "Kemal", "Pınar",
    "Deniz", "Canan", "Yavuz"
  ]; 
    const lastName = [
    "Yılmaz", "Demir", "Kara", "Aydın", "Öztürk",
    "Kaya", "Çelik", "Şahin", "Özdemir", "Arslan",
    "Erdoğan", "Tekin", "Aksoy", "Güler", "Ateş",
    "Şen", "Ay", "Güneş", "Aydın", "Akgül",
    "Kılıç", "Özbek", "Tuncer", "Yavuz", "Yıldız",
    "Özkan", "Bayraktar", "Özen", "Özgür", "Aslan",
    "Can", "Öz", "Aytaç", "Tekinsoy", "Akbulut",
    "Gültekin", "Çetin", "Arıkan", "Özçelik", "Kocaman",
    "Gündoğdu", "Güven", "Akyüz", "Çoban", "Dağlı",
    "Karahan", "Aslanbey", "Özcan", "Gürsoy", "Şimşek",
    "Yıldırım", "Saraçoğlu", "Yıldızhan", "Türk", "Gültepe",
    "Durak", "Kurtuluş", "Başar", "Kayaalp", "Şeker",
    "Seçkin", "Yavuzer", "Alkan", "Çağlar", "Şanlı",
    "Köse", "Akkaya", "Köksal", "Çınar", "Aksu",
    "Duman", "Ayhan", "İşcan", "Karaca", "Şensoy",
    "Yılmazer", "Polat", "Gültekin", "Güçlü", "Şentürk",
    "Topçu", "Arısoy", "Çavuşoğlu", "Yıldırımer", "Özgül",
    "Mutlu", "Sarı", "Öztürkoğlu", "Altın", "Güneştekin",
    "Alp", "Arıcı", "Uluğ", "Şenol", "Koçak",
    "Tanrıkulu", "Şahingöz", "Doğan", "Kayaaslan", "Tanrıverdi"
  ];

  function getName() {
    let randomName = firstName[Math.floor(Math.random() * firstName.length)] + ' ' + lastName[Math.floor(Math.random() * lastName.length)];
    return randomName;
  }

  function nameSurnameList () {
    let userList = document.querySelector(".nameVal").value;
    document.querySelector(".nameList").innerHTML = ""
    if (userList > 28) {
        document.querySelector(".nameList").innerHTML = "YOU CAN GENERATE MAXIMUM 28"
    }
    else {
        for (let i = 0; i < userList; i++) {
            document.querySelector(".nameList").innerHTML += getName() + '<br>';
        }
    }

  }

