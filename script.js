let age = prompt("Enter Your Age");
let movieType = prompt("Enter Movie Type");
let time = prompt("Enter time of day");
let btn = document.getElementById("btn");
let discount = prompt('Do You Have Discount?')

function discountCalc (sale) {
    if (sale == 'yes') {
        return 5
    }
    else {
        return 0
    }
}

function price() {
    let disc = discountCalc(discount)
    console.log(disc)
    if (age < 10 && movieType === '3D' || movieType === '3d' && time === 'evening' ||  time === 'Evening') {
    alert(`შენთვის ${15 - disc} ლარი ძმაო`);
  } else if (age >= 10 && age <= 65 && movieType === '3d' || movieType === '3D' && time === 'evening' ||  time === 'Evening') {
    alert(`შენთვის ${25 - disc} ლარი ძმაო`)
  }
  else if (age > 65 && movieType === '3D' || movieType === '3d' && time === 'evening' ||  time === 'Evening') {
    alert(`შენთვის ${20 - disc} ლარი ძმაო`)
  }
 
  else if (age < 10 && movieType === '3D' || movieType === '3d') {
    alert(`შენთვის ${10 - disc} ლარი ძმაო`);
  } else if (age >= 10 && age <= 65 && movieType === '3D' || movieType === '3d' ) {
    alert(`შენთვის ${15 - disc} ლარი ძმაო`)
  }
  else if (age > 65 && movieType === '3D' || movieType === '3d') {
    alert(`შენთვის ${10 - disc} ლარი ძმაო`)
  }
 else if (age < 10) {
    alert(`შენთვის ${5 - disc} ლარი ძმაო, ანუ უფასოა`);
  } else if (age >= 10 && age <= 65) {
    alert(`შენთვის ${15 - disc} ლარი ძმაო`)
  }
  else if (age > 65) {
    alert(`შენთვის ${10 - disc} ლარი ძმაო`)
  }
  else (
    alert('არ ვიც არ ვარ აქაური')
  )

}
addEventListener("click", price);
