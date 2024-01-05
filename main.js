let form = document.querySelector(".formADD");
let show = document.querySelector(".diyADD");
let showDots = document.querySelector(".showDots");
let showinfo = document.querySelector(".showinfo");
let showinfoDialog = document.querySelector(".showinfoDialog");
let showinfoDialogClose = document.querySelector(".showinfoDialogClose");
let getinfo = document.querySelector(".getinfo");




let diyEdit = document.querySelector(".diyEdit");
let addBtn = document.querySelector(".addBtn");
let addNEW = document.querySelector(".addNEW");
let EditBtn = document.querySelector(".EditBtn");
let Edit2 = document.querySelector(".Edit2");
let addCinsel = document.querySelector(".addCinsel");
let EdieClose = document.querySelector(".EdieClose");
let InfoClose = document.querySelector(".InfoClose");
let inpADD = document.querySelector(".inpADD");
 let editInputCity = document.querySelector(".editInputCity");
let editInputTitle = document.querySelector(".editInputPhone");
let editInputPhone = document.querySelector(".editInputimg");
  let editInputimg = document.querySelector(".editInputTitle");
  
let editInputimal = document.querySelector(".editInputimal");


let statusFilter = null;
let cityFilter = null;
let savedResponse = null;
let del = document.querySelector(".delete");

let api = "http://localhost:3000/data";




//  showinfoDialog openig 

showinfoDialogClose.onclick = () => {
  showinfoDialog.close();
};


addBtn.onclick = () => {
  show.showModal();
};

const selectActive = (event) => {
  statusFilter = event.target.value === "true";
  writeData();
};
const selectCity = (event) => {
  cityFilter = event.target.value;
  writeData();
};
//----------------------------------------------------as

async function postUer(user) {
  try {
    const responset = await fetch(api, {
      method: "POST",
      headers: {
        Accept: "application/json ",
        "Content-Type": "application/json ",
      },

      body: JSON.stringify(user),
    });
    getData();
  } catch (error) {
    console.log(error);
  }
}

// ----------------add function

form.onsubmit = (event) => {
  event.preventDefault();

  let user = {
    title: form["title"].value,
    city: form["city"].value,
    status: event.target.status.value === "false" ? false : true,
    phone: form["phone"].value,
    email: form["email"].value,
  };
  postUer(user);
  form.reset();
  show.close();
};

//------------------------------DELET--------------------------------------

async function deleteuser(id) {
  try {
    const responset = await fetch(`${api}/${id}`, {
      method: "DELETE",
    });
    getData();
  } catch (error) {
    console.log(error);
  }
}

// =================Edit========================================

addCinsel.onclick = () => {
  show.close();
};

EdieClose.onclick = () => {
  diyEdit.close();
};
const writeData = (response = null) => {
  if (response == null) {
    response = savedResponse;
  } else {
    savedResponse = response;
  }
  const box = document.querySelector(".box");
  box.innerHTML = "";
  response.forEach((obj) => {
    if (obj.status !== statusFilter && statusFilter !== null) return;
    if (obj.city !== cityFilter && cityFilter !== null) return;

    let img = document.createElement("img");

    img.className = "img1";
    img.src = obj.avatar;




    showinfo.onclick = () => {


  showinfoDialog.showModal()

  let P1 = document.createElement("img")
  P1.innerHTML= obj.avatar

  P1.classList.add("pinfo")
      let P2 = document.createElement("p")
       P2.innerHTML = obj.city;
  let P3 = document.createElement("p")
   P3.innerHTML = obj.email;
   let P4 = document.createElement("p")
    P4.innerHTML = obj.title;
  let P5 = document.createElement("p")
      P5.innerHTML = obj.phone;
      
getinfo.append(P1,P4,P2,P3,P5)

}
    
    let H1 = document.createElement("h1");
    let H2 = document.createElement("h2");
    let city = document.createElement("h3");
    let status = document.createElement("h3");
    status.className = 'inactive"';
    let Phone = document.createElement("h3");
    let AH6 = document.createElement("h6");

    AH6.onclick = () => {
      showDots.showModal();


      console.log(obj.id);
      del.onclick = () => {
        deleteuser(obj.id);
        console.log(obj.id);
      };

      EditBtn.onclick = () => {
        console.log(obj.id);
        let newUser = {
          id: obj.id,
          title: obj.title,
          city: obj.city,
          status: false,
        };
        editUserByD(newUser);
      };
    };
    //
    InfoClose.onclick = () => {
      showDots.close();


    };

    status.innerHTML = obj.status === false ? "InActive" : "Active";
    status.className = obj.status === false ? "InActive" : "Active";
    H1.innerHTML = obj.title;
    H2.innerHTML = obj.email;

    city.innerHTML = obj.city;
    Phone.innerHTML = obj.phone;
    AH6.innerHTML = "...";

    city.className = "city";
    H2.className = "H2";

    Phone.className = "Phone";
    AH6.className = "AH6";

    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    div3.className = "div3";
    div2.className = "div2";

    
    
    div3.append(H1, H2);
    div2.append(img, div3, city, status, Phone, AH6);
    box.append(div2);
  });
};
const getData = async () => {
  const req = await fetch("http://localhost:3000/data");

  const response = await req.json();
  if (req.ok) {
    writeData(response);
  }
};

getData();

///////////////////////////
let userId = 0;
function editUserByD(user) {
  diyEdit.showModal();
  userId = user.id;
  editInputTitle.value = user.title;
  editInputCity.value = user.city;
  editInputimg.value = user.avatar;
  editInputPhone.value = user.phone;
  // console.log(editInputCity.value);
}

Edit2.onclick = () => {
  EditByUserC(user);
};

async function EditByUserC(user) {
  try {
    const response = await fetch(`${api}/${user.id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    getData();
  } catch (error) {
    console.log(error);
  }
}
