import React from "react";
import { FaHome } from "react-icons/fa"; // أيقونة المنزل
import Link from "next/link";

export default function PregnantAndNursingNutritionPage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-12"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('/img/pregnant.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
        {/* زر الأيقونة في وسط الشاشة من الأعلى */}
        <div className="absolute left-1/2 top-4 transform -translate-x-1/2 z-50">
        <Link href="/">
          <button
            className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-md focus:outline-none"
            aria-label="عودة للصفحة الرئيسية"
          >
            <FaHome size={20} />
          </button>
        </Link>
      </div>
      <div
        className="max-w-4xl mx-auto shadow-xl rounded-lg overflow-hidden"
        style={{
          backgroundColor: "transparent", // خلفية شفافة بلون بنفسجي فاتح
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)", // تحسين الظلال
        }}
      >
        {/* Header Section */}
        <div className="bg-pink-600 text-white py-6 px-8">
          <h1 className="text-4xl font-extrabold mb-2">تغذية الحامل والمرضع</h1>
          <p className="text-lg">
            دليل شامل لضمان التغذية السليمة للحامل والمرضع من أجل صحة الأم والطفل.
          </p>
        </div>

        {/* Content Section */}
        <div className="p-8 text-gray-700 leading-relaxed">
          <p className="text-lg mb-4">
            التغذية السليمة تلعب دورًا مهمًا في صحة الحامل والمرضع، حيث تساعد في ضمان نمو صحي للجنين ودعم صحة الأم. إليك أهم النصائح الغذائية للحامل والمرضع:
          </p>
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            التغذية السليمة أثناء الحمل:
          </h2>
          <ul className="list-disc list-inside space-y-6">
            <li>
              <span className="font-semibold text-pink-600">حمض الفوليك:</span>{" "}
              يساعد في الوقاية من تشوهات الأنبوب العصبي لدى الجنين. يمكن الحصول عليه من السبانخ، العدس، والحبوب المدعمة.
            </li>
            <li>
              <span className="font-semibold text-pink-600">الكالسيوم:</span>{" "}
              يدعم صحة عظام وأسنان الأم والجنين. يمكن العثور عليه في الحليب، الزبادي، واللوز.
            </li>
            <li>
              <span className="font-semibold text-pink-600">الحديد:</span>{" "}
              ضروري للوقاية من الأنيميا أثناء الحمل. تناول اللحوم الحمراء، السبانخ، والبقوليات يساعد في تعزيز مستويات الحديد.
            </li>
            <li>
              <span className="font-semibold text-pink-600">الأوميغا 3:</span>{" "}
              يدعم نمو دماغ الجنين ويمكن الحصول عليه من الأسماك الدهنية مثل السلمون والجوز.
            </li>
            <li>
              <span className="font-semibold text-pink-600">شرب الماء:</span>{" "}
              يساعد في تجنب الجفاف وتحسين الدورة الدموية. يُنصح بشرب 8-10 أكواب يوميًا.
            </li>
            <li>
              <span className="font-semibold text-pink-600">تجنب الأطعمة الضارة:</span>{" "}
              مثل الأطعمة النيئة (السوشي) والكافيين الزائد لتجنب المضاعفات.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-pink-600 mt-8 mb-4">
            التغذية السليمة أثناء الرضاعة:
          </h2>
          <ul className="list-disc list-inside space-y-6">
            <li>
              <span className="font-semibold text-pink-600">زيادة السعرات الحرارية:</span>{" "}
              تحتاج المرضع إلى حوالي 500 سعرة حرارية إضافية يوميًا لتلبية احتياجات الرضاعة.
            </li>
            <li>
              <span className="font-semibold text-pink-600">شرب السوائل:</span>{" "}
              تناول كميات كافية من الماء والعصائر الطبيعية لتحفيز إنتاج الحليب.
            </li>
            <li>
              <span className="font-semibold text-pink-600">الأطعمة الغنية بالبروتين:</span>{" "}
              مثل البيض، الدجاج، والفاصوليا لدعم صحة الأم وإنتاج الحليب.
            </li>
            <li>
              <span className="font-semibold text-pink-600">الأطعمة الغنية بالكالسيوم:</span>{" "}
              منتجات الألبان، البروكلي، والخضروات الورقية.
            </li>
            <li>
              <span className="font-semibold text-pink-600">تجنب الأطعمة المهيجة:</span>{" "}
              مثل الأطعمة الحارة أو التي قد تسبب الغازات للطفل.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-pink-600 mt-8 mb-4">
            نصائح إضافية:
          </h2>
          <ul className="list-disc list-inside space-y-6">
            <li>
              <span className="font-semibold text-pink-600">تناول وجبات صغيرة ومتكررة:</span>{" "}
              للحفاظ على مستويات الطاقة وتقليل الغثيان أثناء الحمل.
            </li>
            <li>
              <span className="font-semibold text-pink-600">الراحة والنوم الجيد:</span>{" "}
              يساعد النوم الكافي في تعزيز صحة الأم والطفل.
            </li>
            <li>
              <span className="font-semibold text-pink-600">استشارة أخصائي تغذية:</span>{" "}
              لضمان خطة غذائية متوازنة تلبي احتياجاتك واحتياجات طفلك.
            </li>
          </ul>

          <p className="mt-6 text-lg">
            <span className="font-semibold text-pink-600">ملاحظة:</span>{" "}
            التغذية السليمة أثناء الحمل والرضاعة ليست فقط لصحتك، بل تؤثر أيضًا على نمو طفلك وصحته المستقبلية.
          </p>
        </div>

        {/* Footer Section */}
        <div className="bg-gray-100 py-4 px-8 text-center">
          <p className="text-gray-600 text-sm">
            صحة الأم والطفل تبدأ باهتمامك بتغذيتك اليومية واختيار الأطعمة الصحية.
          </p>
        </div>
      </div>
    </div>
  );
}
