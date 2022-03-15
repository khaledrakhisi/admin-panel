import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          zahraMirzaei: "Zahra Mirzaei",
          admin: "admin",
          dashboard: "Dashboard",
          orders: "Orders",
          products: "Products",
          customers: "Customers",
          analytics: "Analytics",
          discount: "Discount",
          inventory: "Inventory",
          logout: "Logout",
          login: "Login",
          summary: "Summary",
          thisMonthSales: "This month Sales",
          thisMonthOrders: "This month Orders",
          thisMonthRevenue: "This month Revenue",
          quickAnalysis: "Quick Analysis",
          topCustomers: "Top Customers",
          latestTransaction: "Latest Transactions",
          customer: "Customer",
          totalSpending: "Total Spending",
          totalOrders: "Total Orders",
          orderID: "Order ID",
          totalPrice: "Total Price",
          date: "Date",
          status: "Status",
          approved: "Approved",
          pending: "Pending",
          rejected: "Rejected",
          viewAll: "View All",
          search: "Search",
          AccountDetails: "Account Details",
          contacts: "Contacts",
          edit: "Edit",
          userName: "User Name",
          pass: "Password",
          phoneNumber: "Phone Number",
          email: "Email",
          address: "Address",
          upload: "Upload",
          modalMessage: "Are you sure about delete user?",
          delete: "Delete",
          cancel: "Cancel",
          category: "Category",
          product: "Product",
          price: "Price",
          proName: "Product Name",
          inventoryCount: "Inventory Count",
          loginPage: "Login Into Your Account",
          forgetPass: "Forget your password?",
          rememberMe: "Remember me",
        },
      },
      fa: {
        translation: {
          zahraMirzaei: "زهرا میرزایی",
          admin: "مدیر",
          dashboard: "داشبورد",
          orders: "سفارشات",
          products: "محصولات",
          customers: "مشتریان",
          analytics: "آنالیزها",
          discount: "تخفیفات",
          inventory: "موجودی انبار",
          logout: "خروج",
          login: "ورود",
          summary: "خلاصه",
          thisMonthSales: "فروش این ماه",
          thisMonthOrders: "سفارشات این ماه",
          thisMonthRevenue: "درآمد این ماه",
          quickAnalysis: "بررسی سریع",
          topCustomers: "مشتریان برتر",
          latestTransaction: "آخرین تراکنشات",
          customer: "مشتری",
          totalSpending: "کل خرج‌کرد",
          totalOrders: "کل سفارشات",
          orderID: "ID سفارش",
          totalPrice: "هزینه کل",
          date: "تاریخ",
          status: "وضعیت",
          approved: "تأیید شده",
          pending: "در انتظار",
          rejected: "رد شده",
          viewAll: "دیدن همه",
          search: "جستجو",
          AccountDetails: "جزئیات حساب‌کاربری",
          contacts: "اطلاعات تماس",
          edit: "ویرایش",
          userName: "نام کاربری",
          pass: "رمز ورود",
          phoneNumber: "شماره تماس",
          email: "ایمیل",
          address: "آدرس",
          upload: "بارگزاری",
          modalMessage: "آیا درباره حذف این کاربر مطمئن هستید؟",
          delete: "حذف",
          cancel: "صرف‌نظر",
          category: "دسته بندی",
          product: "محصول",
          price: "قیمت",
          proName: "نام محصول",
          inventoryCount: "شمارش موجودی",
          loginPage: "به حساب کاربری خود وارد شوید",
          forgetPass: "رمز عبورتان را فراموش کرده‌اید",
          rememberMe: "مرا به خاطر بسپار",
        },
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;