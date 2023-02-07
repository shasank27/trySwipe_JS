(function () {
  const customerName = document.querySelector("#customer__name");
  const customerImage = document.querySelector("#customer__image");
  const customerText = document.querySelector("#customer__text");
  const buttons = document.querySelectorAll(".btn");

  let index = 0;
  const customers = [];

  function Customer(img, name, text) {
    this.img = img;
    this.name = name;
    this.text = text;
  }

  function createCustomer(img, name, text) {
    let _img = `./images/${img}.jpg`;
    const customer = new Customer(_img, name, text);

    customers.push(customer);
  }

  createCustomer(
    1,
    "Periwal Shasank",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto illo sint mollitia impedit! Nihil itaque cupiditate accusamus illo libero ",
  );
  createCustomer(
    2,
    "Shasank Periwal",
    "incidunt, voluptatibus reiciendis corrupti quod debitis error laborum doloribus at voluptas eos harum animi molestias nam repellendus ex? ",
  );
  createCustomer(
    3,
    "Sanskar Shasank",
    "Consequuntur quam nesciunt, soluta praesentium sit ex rem aspernatur doloribus molestiae repudiandae itaque omnis ullam deserunt doloremque, ",
  );
  createCustomer(
    4,
    "Periwal Sanskar",
    "recusandae qui nam? Harum aspernatur tempore, natus quibusdam hic distinctio nihil illo sit! Expedita aliquid, soluta dolor amet provident odit ",
  );
  createCustomer(
    5,
    "Periwal Rochakk",
    "fugiat architecto magnam numquam aspernatur ea tenetur quod aperiam blanditiis incidunt, iusto quidem labore! Quos ut ipsum nam. Nemo ",
  );

  buttons.forEach(button => {
    button.addEventListener("click", function (e) {
      if (e.target.parentElement.classList.contains("prevBtn")) {
        if (index === 0) {
          index = customers.length;
        }
        index--;
        customerImage.src = customers[index].img;
        customerText.textContent = customers[index].text;
        customerName.textContent = customers[index].name;
      }

      if (e.target.parentElement.classList.contains("nextBtn")) {
        index++;
        if (index === customers.length) {
          index = 0;
        }
        customerImage.src = customers[index].img;
        customerText.textContent = customers[index].text;
        customerName.textContent = customers[index].name;
      }
    });
  });
})();
