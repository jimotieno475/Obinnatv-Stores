import React, { useState } from "react";
import { FiArrowLeft, FiCreditCard, FiSmartphone, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const shippingOptions = {
  "Nairobi Area": 300,
  Gatundu: 350,
  Gilgil: 350,
  Githunguri: 350,
  Kangari: 350,
  Kiambu: 350,
  Kijabe: 350,
  Kikuyu: 350,
  Limuru: 350,
  Nairobi: 350,
  Naivasha: 350,
  Ngong: 350,
  "Ongata Rongai": 350,
  "Athi River": 360,
  Kitengela: 360,
  Makuyu: 360,
  Nakuru: 360,
  Ruiru: 360,
  Sabasaba: 360,
  Thika: 360,
  Juja: 380,
  Engineer: 400,
  Kagio: 400,
  Kangundo: 400,
  Karatina: 400,
  Kerugoya: 400,
  Kiganjo: 410,
  Kutus: 410,
  Mukurweini: 410,
  Mwea: 410,
  Chuka: 420,
  Embu: 420,
  Isinya: 420,
  Kajiado: 420,
  Kangema: 420,
  Machakos: 420,
  Matuu: 420,
  Muranga: 420,
  Murarandia: 420,
  Narok: 420,
  Nyeri: 420,
  Othaya: 420,
  Runyenjes: 420,
  Tala: 420,
  Eldoret: 450,
  Iten: 450,
  Kitui: 450,
  Turbo: 450,
  Makutano: 460,
  Nkubu: 460,
  "Eldama Ravine": 470,
  Chogoria: 480,
  Kakamega: 480,
  Kericho: 480,
  Mbale: 480,
  Meru: 480,
  Molo: 480,
  Njoro: 480,
  Nyahururu: 480,
  Olkalau: 480,
  Sabatia: 480,
  Sagana: 480,
  Bomet: 500,
  Kisii: 500,
  Kisumu: 500,
  Litein: 500,
  Londiani: 500,
  Maseno: 500,
  Masii: 500,
  Nyamira: 500,
  Sotik: 500,
  "Burnt Forest": 520,
  Kitale: 520,
  Nanyuki: 520,
  Naromoru: 520,
  Timau: 520,
  "Moi's Bridge": 530,
  Mwingi: 550,
  Emali: 580,
  Kabarnet: 580,
  Kibwezi: 580,
  Makindu: 580,
  "Sultan Hamud": 580,
  Awendo: 600,
  Bungoma: 600,
  Chwele: 600,
  Keroka: 600,
  Kilgoris: 600,
  Kimilili: 600,
  Lugari: 600,
  Malaba: 600,
  Migori: 600,
  "Mtito Andei": 600,
  Mumias: 600,
  Mwala: 600,
  Ogembo: 600,
  Oyugis: 600,
  Rongo: 600,
  Voi: 600,
  Webuye: 600,
  Wote: 600,
  Kapsabet: 620,
  "Nandi Hills": 620,
  Ahero: 640,
  Bondo: 640,
  Mariakani: 640,
  Mombasa: 640,
  Mtwapa: 640,
  Isiolo: 650,
  Maua: 650,
  Siaya: 650,
  Ugunja: 650,
  Busia: 660,
  Luanda: 660,
  Muhoroni: 660,
  Nambale: 670,
  Oloitoktok: 670,
  Baraton: 700,
  Homabay: 700,
  Nzoia: 710,
  Mbita: 720,
  Isebania: 740,
  Kehancha: 740,
  Garissa: 750,
  Kendubay: 750,
  Rachuonyo: 750,
  Diani: 770,
  Kapenguria: 780,
  Kilifi: 800,
  Wundanyi: 800,
  Malindi: 840,
  Mwatate: 840,
  Taveta: 850,
  Watamu: 850,
  Marsabit: 950,
  Maralal: 1100,
  Lamu: 2050,
  Lodwar: 2050,
  Lokichogio: 2850,
};

const Checkout = () => {
  const [activeTab, setActiveTab] = useState("mpesa");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);
  const [selectedShipping, setSelectedShipping] = useState("Nairobi Area");

  const { cart, totalPrice } = useCart();

  const shippingFee = shippingOptions[selectedShipping] || 0;

  const calculateTotal = () => {
    return (totalPrice + shippingFee).toFixed(2);
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
    }, 3000);
  };

  if (paymentSuccess) {
    return (
      <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-md text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been received.
        </p>
        <Link
          to="/products"
          className="inline-block bg-[#B88E2F] text-white px-6 py-2 rounded-lg hover:bg-[#A07D28] transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Link to="/cart" className="flex items-center text-[#FE7F02] mb-6">
        <FiArrowLeft className="mr-2" />
        Back to Cart
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-6">
            Order <span className="text-[#FE7F02]">Summary</span>
          </h2>
          <div className="space-y-4 mb-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-4"
              >
                <div className="flex items-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded mr-4"
                  />
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-600">Qty: {item.qty}</p>
                  </div>
                </div>
                <span className="font-medium">
                  ${(item.price * item.qty).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-3 border-t pt-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Ksh {shippingFee}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>Ksh {calculateTotal()}</span>
            </div>
          </div>
        </div>

        {/* Payment & Address Form */}
        <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
          <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name (optional)"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="p-2 border rounded md:col-span-2"
            />
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Postal Code (optional)"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="p-2 border rounded"
            />
            <div className="md:col-span-2 flex items-center">
              <input
                type="checkbox"
                checked={saveInfo}
                onChange={(e) => setSaveInfo(e.target.checked)}
                className="mr-2"
              />
              <span>Save this information for next time</span>
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium">Shipping Method</label>
            <select
              className="w-full border p-2 rounded"
              value={selectedShipping}
              onChange={(e) => setSelectedShipping(e.target.value)}
            >
              {Object.keys(shippingOptions).map((loc) => (
                <option key={loc} value={loc}>
                  {loc} - Ksh {shippingOptions[loc]}
                </option>
              ))}
            </select>
          </div>

          <h2 className="text-xl font-bold mb-4">Payment Method</h2>

          <div className="flex border-b mb-6">
            <button
              onClick={() => setActiveTab("mpesa")}
              className={`flex-1 py-2 font-medium flex items-center justify-center gap-2 ${
                activeTab === "mpesa"
                  ? "text-[#FE7F02] border-b-2 border-[#FE7F02]"
                  : "text-green-500"
              }`}
            >
              <FiSmartphone />
              M-Pesa
            </button>
            <button
              onClick={() => setActiveTab("paypal")}
              className={`flex-1 py-2 font-medium flex items-center justify-center gap-2 ${
                activeTab === "paypal"
                  ? "text-[#FE7F02] border-b-2 border-[#FE7F02]"
                  : "text-blue-500"
              }`}
            >
              <FiCreditCard />
              PayPal
            </button>
          </div>

          {activeTab === "mpesa" && (
            <form onSubmit={handlePayment} className="space-y-4">
              <div>
                <label className="block mb-2">M-Pesa Phone Number</label>
                <div className="flex border rounded overflow-hidden">
                  <span className="px-3 bg-gray-100">+254</span>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="7XX XXX XXX"
                    className="flex-1 p-2 outline-none"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-[#FE7F02] text-white py-3 rounded-lg hover:bg-black hover:text-[#FE7F02] transition font-medium"
              >
                {isProcessing ? "Processing Payment..." : "Pay with M-Pesa"}
              </button>
            </form>
          )}

          {activeTab === "paypal" && (
            <form onSubmit={handlePayment} className="space-y-4">
              <div>
                <label className="block mb-2">PayPal Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-[#003087] text-white py-3 rounded-lg hover:bg-[#00256E] transition font-medium"
              >
                {isProcessing ? "Redirecting to PayPal..." : "Pay with PayPal"}
              </button>
            </form>
          )}

          <div className="mt-6 flex items-center text-sm text-gray-500">
            <FiLock className="mr-2" />
            <span>Your payment is secure and encrypted</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
