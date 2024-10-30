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

for (let i=0; i<students.length; i++) {

    if (students[i].gender === "Kadın") {

        // console.log(kadinListesi [i]);
        
        kadinListesi.innerHTML += `  <li class="kadın">
        
        ${students[i].name} ${students[i].lastname}
        
        ${students[i].gender} ${students[i].section} ${students[i].role}
        
        </li>`;
    } else {
        
        console.log(erkekListesi);
        
        erkekListesi.innerHTML += `<li class="erkek"> 
        ${students[i].name} ${students[i].lastname}
       
        ${students[i].gender} ${students[i].section} ${students[i].role}
        
        </li>`
        
    }
}
