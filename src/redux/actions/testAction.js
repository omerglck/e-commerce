// senkron aksiyon fonksiyonu
export function sayiArti() {
  return {
    type: "addCount",
    paylaod: 1,
  };
}

// asenkton thunk aksiyonu

function getData() {
  return function (dispatch) {
    // asenkron işlemler
    const data = [];
    // reducer'a aktarma
    dispatch({});
  };
}

// kısa yol

const getData2 = () => (dispatch) => {
  // asenkron işlemler
};

/*
   ! Redux Thunk:
   * Redux'ın middleware(arayazılım) kütüphanesidir.
   * Redux ile birlikte kullanıldığında asenkron işlemlerin daha iyi yönetilmesine olanak sağlar.
   * Gerçek dünya uygulamalarında, sunucu isteklerinde, veritabanı sorgularında kullanılır.
   TODO ÖZET
   * dispatch işleminde reducer'a verileri aktarmadan önce API istekleri yapmamıza olanak sağlar
  
  */
