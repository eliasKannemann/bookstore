import React from "react";

const handleChange = (e) => {};

function Footer() {
  return (
    <div className=" bg-blue-400 py-15 rounded-lg h-auto">
      <div className="flex p-8 m-auto justify-between align-center">
        <div className="">
          <h1 className="">LOGO HERE!</h1>
        </div>
        <ul className="">
          <li>To the buyer</li>
          <li>Payment and delivery</li>
          <li>Exchange and return</li>
          <li>privacy policy</li>
          <li>shops</li>
        </ul>
        <ul className="">
          <li>About </li>
          <li>about us </li>
          <li> SOVA club</li>
          <li> Contract offers</li>
          <li> contracts</li>
        </ul>
        <ul className="">
          <li> catalog</li>
          <li>jewerly </li>
          <li>collection </li>
          <li> outlet</li>
        </ul>
        <ul className="">
          <li>work time </li>
          <li>9.00 am close 20:00 </li>
          <li> 2023</li>
        </ul>
        <figure>
          <h3>Subcribete a own newslatter</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              id="email"
              type="text"
              placeholder="email"
              onChange={handleChange}
            />
            <button>Enviar</button>
          </form>
        </figure>
      </div>
      <h6 className="px-6 m-2 border-t border-blue-300 text-center">
        todos los derechos reservados 2023{" "}
      </h6>
    </div>
  );
}

export default Footer;
