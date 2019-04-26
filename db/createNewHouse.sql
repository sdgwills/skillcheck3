insert into houses (
  name,
  address,
  city,
  state,
  zip,
  img,
  mortgage,
  rent 
) values(
  ${new_name},
  ${new_address},
  ${new_city},
  ${new_state},
  ${new_zip},
  ${new_img},
  ${new_mortgage},
  ${new_rent}
)