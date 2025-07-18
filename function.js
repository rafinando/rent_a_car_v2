function bayar(carId, startDate, endDate, paymentId, resultId) {
  const car = document.getElementById(carId).value;
  const payment = document.getElementById(paymentId).value;
  const result = document.getElementById(resultId);

  if (!car || !payment) {
      result.style.color = "red";
      result.textContent = "Silakan pilih mobil dan metode pembayaran terlebih dahulu.";
      return;
  }

  result.style.color = "green";
  result.textContent = `Pembayaran berhasil! Anda memilih mobil ${car} dan membayar dengan ${payment}. silahkan ambil mobil anda di dealer terdekat`;
}