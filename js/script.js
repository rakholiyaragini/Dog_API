let doglist = document.getElementById('DogList');
let dogImg = document.getElementById('dogImg');
const GetList = () => {
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => {
      return res.json()
    }).then(data => {

      console.log(data.message)
      const breedList = data.message;

      console.log(breedList);

      for (const breed in breedList) {
        if (breedList[breed].length == 0) {

          console.log(breed);

          doglist.innerHTML += `<li class="list-group-item text-white text-capitalize p-1" onclick="return DogImage('${breed}')">${breed}</li>`

        } else {
          console.log(" BreedList..", breedList[breed]);

          SubList = "<ol>";
          for (const subBreed in breedList[breed]) {
            doglist.innerHTML += `<li class="list-group-item text-primary text-capitalize p-1" onclick="return DogImage('${breed}')">${breedList[breed][subBreed]}</li>`
          }
          SubList += "</ol>";

          doglist.innerHTML += `<li class="list-group-item text-white text-capitalize p-1">${breed} ${SubList}</li>`
        }
      }
    }).catch(err => {
      console.log(err)
    });
}

GetList()

const DogImage = (breed) => {
  fetch(`https://dog.ceo/api/breed/${breed}/images`).then(res => {
      return res.json();
  }).then(data => {
      console.log(data);
      let DogImage = data.message;
      dogImg.innerHTML = "";
      DogImage.forEach((img) => {
          dogImg.innerHTML += `
          <div class="col-3 p-3">
              <div style="width: 350px; height: 350px;">
                <img id="" src="${img}" alt="img" class="w-100 h-100 object-fit-cover">
              </div>
            </div>`;            
      })

  }).catch(err => {
      console.log(err);
  });
}