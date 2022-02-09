//function att hämnta data från api
function fetchData() {
  fetch(
    "https://cgi-osd-kodtest-default-rtdb.europe-west1.firebasedatabase.app/businessCards.json"
  )
    .then((Response) => {
      //kolla efter error från hämtning av api,om hämtningen misslyckas returna fel medelande nedan.
      if (!Response.ok) {
        throw Error("Error kolla api adress stämmer");
      }
      //retunera i json format
      return Response.json();
    })
    .then((data) => {
      const html = data
        //använder mig av functionen map för att samla sata drån api och displaya dom i html.
        .map((user) => {
          console.log(user);
          //Använder mig av temerol litteral istället för att använda det gamla sättet t.ex "name"+user.name.
          return ` 
        <div class="user">
        <p class="name">${user.name}</p>
        <p class="surName">${user.surName}</p>
        <p class="telephone">☎ ${user.telephone}</p>
        <p class="email">📧 ${user.email}</p>
        <p class="image"> <img src="${user.image}" alt="${user.name}"/>  </p>
       
        </div> 
     `;
        })
        //denna kodstycke är till för att visa datan som kommer från api till html bodyn.
        .join("");
      console.log(html);
      document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
    });
}
//anropa api
fetchData();
