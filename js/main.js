const topFunction = () => {
  window.scrollTo({top: 0, behavior: "smooth"});
};

let started = true;
window.onscroll = () => {
  if (started) {
    document.querySelectorAll(`.increace`).forEach((el) => {
      let goal = el.dataset.increace;
      console.log(goal);
      let startCount = setInterval(() => {
        el.textContent++;
        if (el.textContent === goal) clearInterval(startCount);
      }, 2000 / goal);
    });
    started = false;
  }
  if (window.scrollY > 200) {
    document.querySelector(`.to-top`).style.right = "50px";
    document.querySelector("nav").classList.add("shadow");
  } else {
    document.querySelector(`.to-top`).style.right = "-50px";
    document.querySelector("nav").classList.remove("shadow");
  }
};

let cardExplore = () => {
  let data = [
    {
      id: 1,
      title: "Rainbow Vegetable Sandwich",
      time: "Time: 15 - 20 Minutes | Serves: 1",
      priceDiscount: "$10.50",
      price: "$11.70",
    },
    {
      id: 2,
      title: "Vegetarian Burger",
      time: "Time: 30 - 45 Minutes | Serves: 1",
      priceDiscount: "$9.20",
      price: "$10.50",
    },
    {
      id: 3,
      title: "Raspberry Stuffed French Toast",
      time: "Time: 10 - 15 Minutes | Serves: 1",
      priceDiscount: "$12.50",
      price: "$13.20",
    },
  ];
  data.map((card) => {
    document.querySelector(`.explore .boxes`).innerHTML += `
    <div class="col-12 col-sm-6 col-md-4 mb-3">
      <div class="card mx-auto">
        <img src="images/explore-${card.id}.jpg" class="card-img-top" alt="..." />
        <div class="card-body text-start">
          <h6 class="card-title">${card.title}</h6>
          <h6 class="time paragraf-color" style="font-size: 14px">${card.time}</h6>
          <p class="card-text fw-medium fs-5 border-bottom">
            <span class="text-danger me-2">${card.priceDiscount}</span
            ><span class="text-decoration-line-through paragraf-color">${card.price}</span>
          </p>
          <button class="btn btn-outline-danger">Order Now</button>
        </div>
      </div>
    </div>`;
  });
};
cardExplore();
