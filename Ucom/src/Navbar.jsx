import './Header.jsx'
function Navbar() {
  return (
    <div className="div2">
      <img
        id="img1"
        src="https://www.ucom.am/images/main_logo.svg"
        alt="Ucom logo"
      />

      <p id="p1">Տան համար</p>
      <p id="pteg">Շարժական կապ</p>
      <p id="p2">Ռոումինգ</p>
      <p id="p3">5G ցանց</p>
      <p id="p4">Uplay</p>

      <i className="fa fa-search"></i>
      <i className="fa fa-shopping-cart"></i>
      <p id="pt">Առցանց խանութ</p>
      <i className="fa fa-credit-card"></i>
      <p id="pv">Վճարել</p>
    </div>
  );
}

export default Navbar;