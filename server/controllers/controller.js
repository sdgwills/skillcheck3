let house = [];

module.exports = {
  read: (req, res) => {
    const db = req.app.get('db');
    console.log(req.params);

    // getAllHouses comes from db folder. REMEMBER THAT! NINCOMPOOP. COMMENT YOUR CODE MORE OFTEN Ya sack
    db.getAllHouses().then(response => {
        res.status(200).send(response);
    })
  },

  create: (req, res) => {
    const { name, address, city, state, zip, img, mortgage, rent } = req.body;
    const db = req.app.get('db');
    db.createNewHouse({
      new_name: name,
      new_address: address,
      new_city: city,
      new_state: state,
      new_zip: zip,
      new_img: img,
      new_mortgage: mortgage,
      new_rent: rent
    }).then(response => {
      res.status(200).send(response);
    })
  },

  delete: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;

  }
}