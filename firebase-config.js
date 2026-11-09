// 1) Firebase Console → Project settings → Web app → firebaseConfig (yalnız mətn məlumatı üçün istifadə olunur)
export const firebaseConfig = {
  apiKey: "AIzaSyBTb1vZQx8pGd_pLk77STN7IHIiFe8a5vA",
  authDomain: "lumetra-60cbf.firebaseapp.com",
  projectId: "lumetra-60cbf",
  appId: "1:932214107906:web:2ecb83841b1ef5689f5c1b"
};

// 2) Admin e-poçtu (Firebase Authentication-da yaratdığınız istifadəçi)
export const ADMIN_EMAIL = "lumetra@gmail.com";

// 3) Şəkillər Cloudinary-də saxlanılır (pulsuz, kart tələb etmir)
//    cloudinary.com → Dashboard-da "Cloud name" + Settings → Upload → "unsigned" preset
export const CLOUD_NAME = "tt5hnfcp";
export const UPLOAD_PRESET = "loeyrbhx";

// 4) Instagram istifadəçi adı (@ olmadan)
export const INSTAGRAM = "1lumetra";

// 5) İstəyə bağlı məhsul sayı limiti. 0 = limit yoxdur
export const MAX_PRODUCTS = 50;

export const CURRENCY = "₼";
