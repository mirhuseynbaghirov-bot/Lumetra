// 1) Firebase Console → Project settings → Web app → firebaseConfig (yalnız mətn məlumatı üçün istifadə olunur)
export const firebaseConfig = {
  apiKey: "BURA_YAZIN",
  authDomain: "PROJECT_ID.firebaseapp.com",
  projectId: "PROJECT_ID",
  appId: "BURA_YAZIN"
};

// 2) Admin e-poçtu (Firebase Authentication-da yaratdığınız istifadəçi)
export const ADMIN_EMAIL = "sizin@email.com";

// 3) Şəkillər Cloudinary-də saxlanılır (pulsuz, kart tələb etmir)
//    cloudinary.com → Dashboard-da "Cloud name" + Settings → Upload → "unsigned" preset
export const CLOUD_NAME = "BURA_YAZIN";
export const UPLOAD_PRESET = "BURA_YAZIN";

// 4) Instagram istifadəçi adı (@ olmadan)
export const INSTAGRAM = "lumetra.az";

// 5) İstəyə bağlı məhsul sayı limiti. 0 = limit yoxdur
export const MAX_PRODUCTS = 0;

export const CURRENCY = "₼";
