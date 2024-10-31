
let kadinSayisi = 0;
let erkekSayisi = 0;

let students = [
  {
      id: 1,
      name: "Atakan",
      lastname: "Arıkan",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 2,
      name: "Busenur",
      lastname: "Savaş",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 3,
      name: "Ece",
      lastname: "Kubilay",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 4,
      name: "Elif Yağmur",
      lastname: "Şahin",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 5,
      name: "Gaye",
      lastname: "Dinç",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 6,
      name: "Gökdeniz",
      lastname: "Keleş",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 7,
      name: "Hilal",
      lastname: "Baran",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 8,
      name: "Mehmet Akif",
      lastname: "Küçükyılmaz",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 9,
      name: "Merve",
      lastname: "Özel",
      gender: "Kadın",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 10,
      name: "Muhammet Ali",
      lastname: "Şafak",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  },
  {
      id: 11,
      name: "Ömer",
      lastname: "Kuluç",
      gender: "Erkek",
      section: "Frontend",
      role: "Öğrenci",
  }
];

const kadinListesi = document.querySelector('#kadinListesi');
const erkekListesi = document.querySelector('#erkekListesi');
const kadinSayisiToplam = document.querySelector('#kadinSayisiToplam');
const erkekSayisiToplam = document.querySelector('#erkekSayisiToplam');
for (let i=0; i<students.length; i++) {

    if (students[i].gender === "Kadın" ) {

        kadinSayisi++;
        kadinSayisiToplam.innerText = `Toplam Kadın Sayısı: ${kadinSayisi}`;

        // console.log(kadinListesi [i]);
       
        
        kadinListesi.innerHTML += `  <li class="kadın">
        
        ${students[i].name} ${students[i].lastname}
        
        ${students[i].gender} ${students[i].section} ${students[i].role}
        
        </li>`;
 
    
    } else {
        

        erkekSayisi++;
        erkekSayisiToplam.innerText = `Toplam Erkek Sayısı: ${erkekSayisi}  `;

        // console.log(erkekListesi);
        // console.log(erkekSayisi[i]);
        
        erkekListesi.innerHTML += ` <li class="erkek"> 
        ${students[i].name} ${students[i].lastname}
       
        ${students[i].gender} ${students[i].section} ${students[i].role}
        
        </li>`;

        
        
    }
   
    
}
