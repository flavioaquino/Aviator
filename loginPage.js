  function IsEmpty() {
  if (document.forms['frm'].lname.value === "" || document.forms['frm'].fname.value === "") {
    alert("Preencha com as suas informações!");
    return false;
  }
  return true;
}
