import React from "react";
import { FaHome } from "react-icons/fa"; // أيقونة المنزل
import Link from "next/link";
export default function RamadanNutritionPage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('/img/ramadan.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
              {/* زر الأيقونة في وسط الشاشة من الأعلى */}
              <div className="absolute left-1/2 top-4 transform -translate-x-1/2 z-50">
        <Link href="/">
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-md focus:outline-none"
            aria-label="عودة للصفحة الرئيسية"
          >
            <FaHome size={20} />
          </button>
        </Link>
      </div>
      <div
        className="max-w-4xl mx-auto shadow-xl rounded-lg overflow-hidden"
        style={{
          backgroundColor: "transparent", // خلفية شفافة بلون أخضر فاتح
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)", // تحسين الظلال
        }}
      >
        {/* Header Section */}
        <div className="bg-indigo-600 text-white py-6 px-8">
          <h1 className="text-4xl font-extrabold mb-2">التغذية أثناء شهر رمضان</h1>
          <p className="text-lg">
            دليل شامل للتغذية السليمة خلال الصيام لتحسين الصحة والرفاهية.
          </p>
        </div>

        {/* Content Section */}
        <div className="p-8 text-gray-700 leading-relaxed">
          <p className="text-lg mb-4">
            الصيام في رمضان يتطلب تنظيمًا جيدًا للتغذية لضمان حصول الجسم على العناصر الغذائية اللازمة خلال فترات الإفطار والسحور. إليك النصائح الأساسية للتغذية خلال هذا الشهر:
          </p>

          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            وجبة السحور:
          </h2>
          <ul className="list-disc list-inside space-y-6">
            <li>
              <span className="font-semibold text-indigo-600">تناول الكربوهيدرات المعقدة:</span>{" "}
              مثل الشوفان، الأرز البني، والخبز المصنوع من الحبوب الكاملة. تساعد هذه الأطعمة في توفير طاقة تدوم طوال ساعات الصيام.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">البروتينات:</span>{" "}
              تناول البيض، الزبادي، أو الجبن قليل الدسم لدعم الشعور بالشبع لفترة أطول.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">الترطيب:</span>{" "}
              شرب كميات كافية من الماء لتجنب الجفاف خلال ساعات الصيام الطويلة.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">تجنب الأطعمة المالحة:</span>{" "}
              مثل المخللات والأطعمة المعلبة التي قد تزيد من الشعور بالعطش.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-indigo-600 mt-8 mb-4">
            وجبة الإفطار:
          </h2>
          <ul className="list-disc list-inside space-y-6">
            <li>
              <span className="font-semibold text-indigo-600">ابدأ بالتمر والماء:</span>{" "}
              التمر يوفر طاقة سريعة، والماء يعيد الترطيب للجسم بعد ساعات الصيام.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">الشوربة:</span>{" "}
              تناول شوربة خفيفة مثل شوربة العدس أو الخضروات لتحضير المعدة للطعام.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">الوجبة الرئيسية:</span>{" "}
              يجب أن تحتوي على توازن بين البروتينات (الدجاج، السمك)، الكربوهيدرات (الأرز، البطاطا)، والخضروات.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">تجنب الإفراط في الأكل:</span>{" "}
              تناول كميات معتدلة لتجنب الشعور بالثقل.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-indigo-600 mt-8 mb-4">
            النصائح العامة خلال شهر رمضان:
          </h2>
          <ul className="list-disc list-inside space-y-6">
            <li>
              <span className="font-semibold text-indigo-600">شرب الماء بانتظام:</span>{" "}
              حاول شرب 8 أكواب من الماء بين الإفطار والسحور.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">تقليل المشروبات السكرية:</span>{" "}
              استبدل العصائر المحلاة بالماء أو العصائر الطبيعية.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">تناول الحلويات بحذر:</span>{" "}
              اختر الحلويات التي تحتوي على سكر طبيعي مثل الفواكه المجففة وتجنب الإفراط في الحلويات التقليدية.
            </li>
            <li>
              <span className="font-semibold text-indigo-600">ممارسة النشاط البدني:</span>{" "}
              يُفضل ممارسة الرياضة الخفيفة مثل المشي بعد الإفطار لتحسين الهضم.
            </li>
          </ul>

          <p className="mt-6 text-lg">
            <span className="font-semibold text-indigo-600">ملاحظة:</span>{" "}
            اتباع نظام غذائي متوازن خلال شهر رمضان يمكن أن يعزز الصحة العامة ويجعل الصيام تجربة صحية ومريحة.
          </p>
        </div>

        {/* Footer Section */}
        <div className="bg-gray-100 py-4 px-8 text-center">
          <p className="text-gray-600 text-sm">
            صحتك خلال شهر رمضان تعتمد على اختيارك للأطعمة الصحية والحرص على الترطيب.
          </p>
        </div>
      </div>
    </div>
  );
}
