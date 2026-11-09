// 1) Firebase Console → Project settings → "Your apps" → Web app → firebaseConfig-i bura yapışdırın
export const firebaseConfig = {
  apiKey: "BURA_YAZIN",
  authDomain: "PROJECT_ID.firebaseapp.com",
  projectId: "PROJECT_ID",
  appId: "BURA_YAZIN"
};

// 2) Admin hesabının e-poçtu (Firebase Authentication-da yaratdığınız istifadəçi)
export const ADMIN_EMAIL = "sizin@email.com";

// 3) Instagram istifadəçi adı (@ olmadan) — "Sifariş et" düyməsi DM açır
export const INSTAGRAM = "lumetra.az";

// 4) Yaddaş limiti (MB). Firestore pulsuz planda 1 GiB (1024 MB) verir.
//    900 təhlükəsiz həddir (indekslər də yer tutur). Bu həddə çatanda admin paneldə xəbərdarlıq çıxır.
export const STORAGE_LIMIT_MB = 900;

// İstəsəniz məhsul sayına da limit qoya bilərsiniz. 0 = sayla məhdudlaşdırma yoxdur.
export const MAX_PRODUCTS = 0;

export const CURRENCY = "₼";
