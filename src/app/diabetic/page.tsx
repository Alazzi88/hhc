import React from "react";
import { FaHome } from "react-icons/fa"; // أيقونة المنزل
import Link from "next/link";
export default function DiabetesPage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-sky-50 to-white py-12"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('/img/dm.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
                      {/* زر الأيقونة في وسط الشاشة من الأعلى */}
                      <div className="absolute left-1/2 top-4 transform -translate-x-1/2 z-50">
        <Link href="/">
          <button
            className="bg-sky-600 hover:bg-sky-700 text-white p-3 rounded-full shadow-md focus:outline-none"
            aria-label="عودة للصفحة الرئيسية"
          >
            <FaHome size={20} />
          </button>
        </Link>
      </div>
      <div
        className="max-w-4xl mx-auto shadow-xl rounded-lg overflow-hidden"
        style={{
          backgroundColor: "transparent",// خلفية شفافة بلون Sky
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)", // تحسين الظلال
        }}
      >
        {/* Header Section */}
        <div className="bg-sky-600 text-white py-6 px-8">
          <h1 className="text-4xl font-extrabold mb-2">رعاية مرضى السكري</h1>
          <p className="text-lg">
            دليلك الشامل لرعاية مرضى السكري وتغذيتهم بشكل سليم.
          </p>
        </div>

        {/* Content Section */}
        <div className="p-8 text-gray-700 leading-relaxed">
          <p className="text-lg mb-4">
            إدارة مرض السكري تتطلب تغييرات مستدامة في نمط الحياة، بما في ذلك العناية بالتغذية والوقاية من المضاعفات المحتملة. إليك بعض الإرشادات الأساسية التي تساعد في التحكم بمستوى السكر في الدم وتحسين الصحة العامة:
          </p>
          <h2 className="text-2xl font-semibold text-sky-600 mb-4">
            التغذية السليمة لمرضى السكري:
          </h2>
          <ul className="list-disc list-inside space-y-6">
            <li>
              <span className="font-semibold text-sky-600">التوازن بين المغذيات:</span>{" "}
              تناول وجبات غذائية متوازنة تحتوي على البروتينات، الكربوهيدرات الصحية، الدهون الصحية، الفيتامينات والمعادن.
            </li>
            <li>
              <span className="font-semibold text-sky-600">التحكم في الكربوهيدرات:</span>{" "}
              يُفضل تناول الكربوهيدرات المعقدة (مثل الحبوب الكاملة والخضروات) بدلاً من الكربوهيدرات البسيطة (مثل السكر والحلويات). يُنصح بمراقبة حجم الحصص لتجنب الإفراط.
            </li>
            <li>
              <span className="font-semibold text-sky-600">الدهون الصحية:</span>{" "}
              الدهون غير المشبعة مثل زيت الزيتون والأفوكادو والمكسرات تقلل الالتهابات وتحسن صحة القلب.
            </li>
            <li>
              <span className="font-semibold text-sky-600">الألياف:</span>{" "}
              تناول الأطعمة الغنية بالألياف مثل الخضروات الورقية، الحبوب الكاملة، والبقوليات لتحسين الهضم واستقرار مستويات السكر في الدم.
            </li>
            <li>
              <span className="font-semibold text-sky-600">تناول الوجبات الصغيرة:</span>{" "}
              يفضل تقسيم الوجبات إلى 4-5 وجبات صغيرة طوال اليوم لتجنب التقلبات الكبيرة في مستويات السكر.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-sky-600 mt-8 mb-4">
            الوقاية من المضاعفات:
          </h2>
          <ul className="list-disc list-inside space-y-6">
            <li>
              <span className="font-semibold text-sky-600">التحكم في مستوى السكر:</span>{" "}
              الحفاظ على مستويات السكر ضمن النطاق الطبيعي لتجنب مضاعفات السكري مثل أمراض القلب وأمراض الكلى.
            </li>
            <li>
              <span className="font-semibold text-sky-600">الحفاظ على وزن صحي:</span>{" "}
              فقدان الوزن بشكل تدريجي يحسن استجابة الجسم للأنسولين.
            </li>
            <li>
              <span className="font-semibold text-sky-600">النشاط البدني:</span>{" "}
              ممارسة التمارين الرياضية المعتدلة مثل المشي أو السباحة لمدة 30 دقيقة يومياً تساعد في التحكم بمستويات السكر.
            </li>
            <li>
              <span className="font-semibold text-sky-600">الرعاية الطبية الدورية:</span>{" "}
              إجراء فحوصات دورية للسكر، ضغط الدم، ومستويات الدهون في الدم.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-sky-600 mt-8 mb-4">
            تجنب الأطعمة الممنوعة:
          </h2>
          <ul className="list-disc list-inside space-y-6">
            <li>
              <span className="font-semibold text-sky-600">السكريات المضافة:</span>{" "}
              تجنب الحلويات والمشروبات الغازية والعصائر السكرية.
            </li>
            <li>
              <span className="font-semibold text-sky-600">الدهون المشبعة:</span>{" "}
              تقليل تناول اللحوم الدهنية والأطعمة المقلية.
            </li>
            <li>
              <span className="font-semibold text-sky-600">الأطعمة المجهزة:</span>{" "}
              تجنب المعلبات والمصنعة التي تحتوي على سكريات ودهون غير صحية.
            </li>
          </ul>
          <p className="mt-6 text-lg">
            <span className="font-semibold text-sky-600">ملاحظة:</span>{" "}
            التغذية السليمة والنمط الحياتي الصحي هما أساس التحكم في مرض السكري، وقد يساعد ذلك في تقليل المخاطر المرتبطة به وتحسين نوعية الحياة.
          </p>
        </div>

        {/* Footer Section */}
        <div className="bg-gray-100 py-4 px-8 text-center">
          <p className="text-gray-600 text-sm">
            صحتك تبدأ بتغذية متوازنة ونمط حياة صحي.
          </p>
        </div>
      </div>
    </div>
  );
}
