//////////////////////////////// About ////////////////////////////////

$(document).ready(function () {

     $(`#klik1`).click(function () {
          $(`#target1`).fadeToggle('slow');
     });

     $(`#klik2`).click(function () {
          $(`#target2`).fadeToggle('slow');
     });

});


//////////////////////////////// Schedule ////////////////////////////////


// ambil object dari JSON
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
     if (xhr.readyState == 4 && xhr.status == 200) {
          let match = JSON.parse(this.responseText);

          // looping
          let select = document.querySelector(`#select`);
          select.addEventListener(`change`, function () {
               let demo = ` `;

               for (let i = 0; i < match.length; i++) {
                    let seri = match[i][`seri`],
                         id = match[i][`id`],
                         pertandingan = match[i][`pertandingan`],
                         waktu = match[i][`waktu`],
                         kickof = match[i][`kickof`],
                         stadion = match[i][`stadion`];


                    if (select.value == seri) {
                         console.log(seri);
                         demo += `<p class = "text-slate-100  bg-slate-900 sm:bg-red-500 md:bg-yellow-500 lg:bg-gradient-to-br lg:from-slate-500 lg:to-slate-800 xl:bg-cyan-400 text-left py-3 px-3 rounded-lg hover:shadow-2xl hover:shadow-slate-900 hover:scale-105 transition-all"> 
                         <span class = "italic font-bold flex justify-center text-xl"> ${pertandingan}</span> <br>
                         <span class = "italic font-bold">Liga Seri</span> : ${seri} <br>
                         <span class = "italic font-bold">Pekan</span> : ${id} <br>
                         <span class = "italic font-bold">Waktu</span> : ${waktu} <br>
                         <span class = "italic font-bold">Kick Off</span> : ${kickof} <br>
                         <span class = "italic font-bold">Stadion</span> : ${stadion}
                         </p>`
                    }

               }
               const satu = document.querySelector(`#satu`);
               satu.innerHTML = `<div id="aksi2" class = "font-serif grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2  gap-x-5 gap-y-7  max-w-screen-sm sm:max-w-screen-md  md:max-w-screen-lg lg:max-w-full px-5 py-7 transition-all">` + demo + `</div>`;
          })

     }
}
xhr.open(`GET`, `match.json`, true);
xhr.send();


//////////////////////////////// Buy Ticket ////////////////////////////////
