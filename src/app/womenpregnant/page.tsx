import React from "react";
import { FaHome } from "react-icons/fa"; // أيقونة المنزل
import Link from "next/link";

export default function Page() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-beige-50 to-white py-12"
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
        backgroundColor: "transparent",// خلفية شفافة بلون بيج فاتح
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)", // تحسين الظلال
        }}
      >
        {/* Header Section */}
        <div className="bg-beige-600 text-pink-500 py-6 px-8">
          <h1 className="text-4xl font-extrabold mb-2">سكري الحمل وتغذيته</h1>
          <p className="text-lg">
            دليل شامل لرعاية مرضى سكري الحمل وتغذيتهم بشكل سليم.
          </p>
        </div>

        {/* Content Section */}
        <div className="p-8 text-gray-700 leading-relaxed">
          <p className="text-lg mb-4">
            سكري الحمل هو نوع من السكري الذي يحدث أثناء الحمل، ويحتاج إلى مراقبة وعناية دقيقة للحفاظ على صحة الأم والطفل. التغذية السليمة والنشاط البدني، بالإضافة إلى مراقبة مستويات السكر في الدم، تشكل أساسًا هامًا لإدارة سكري الحمل بشكل فعال.
          </p>
          <h2 className="text-2xl font-semibold text-beige-600 mb-4">
            التغذية السليمة لمرضى سكري الحمل:
          </h2>
          <ul className="list-disc list-inside space-y-6">
            <li>
              <span className="font-semibold text-beige-600">التوازن الغذائي:</span>{" "}
              يجب أن تحتوي الوجبات على توازن صحي بين الكربوهيدرات والبروتينات والدهون الصحية.
            </li>
            <li>
              <span className="font-semibold text-beige-600">مراقبة الكربوهيدرات:</span>{" "}
              يُفضل تناول الكربوهيدرات المعقدة مثل الحبوب الكاملة، البطاطا الحلوة، والخضروات.
            </li>
            <li>
              <span className="font-semibold text-beige-600">تقسيم الوجبات:</span>{" "}
              يُنصح بتوزيع الوجبات على مدار اليوم لتقليل تقلبات مستويات السكر في الدم.
            </li>
            <li>
              <span className="font-semibold text-beige-600">الدهون الصحية:</span>{" "}
              ركزي على الدهون الصحية مثل زيت الزيتون، الأفوكادو، والمكسرات.
            </li>
            <li>
              <span className="font-semibold text-beige-600">الأطعمة الغنية بالألياف:</span>{" "}
              الأطعمة الغنية بالألياف تساعد على استقرار مستويات السكر في الدم.
            </li>
            <li>
              <span className="font-semibold text-beige-600">تقليل السكريات المضافة:</span>{" "}
              تجنبي الحلويات والمشروبات الغازية والعصائر المعلبة.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-beige-600 mt-8 mb-4">
            الوقاية من المضاعفات المرتبطة بسكري الحمل:
          </h2>
          <ul className="list-disc list-inside space-y-6">
            <li>
              <span className="font-semibold text-beige-600">مراقبة مستويات السكر:</span>{" "}
              استخدام جهاز قياس السكر بشكل منتظم لضمان بقاء مستويات السكر ضمن النطاق الآمن.
            </li>
            <li>
              <span className="font-semibold text-beige-600">النشاط البدني المعتدل:</span>{" "}
              ممارسة التمارين الرياضية المناسبة مثل المشي أو السباحة لمدة 30 دقيقة يومياً.
            </li>
            <li>
              <span className="font-semibold text-beige-600">المتابعة الطبية الدورية:</span>{" "}
              مراجعة الطبيب بانتظام لمراقبة ضغط الدم، السكر، والبروتين في البول.
            </li>
            <li>
              <span className="font-semibold text-beige-600">مراقبة الوزن:</span>{" "}
              يُنصح بمتابعة زيادة الوزن وفقاً لما يوصي به الطبيب.
            </li>
            <li>
              <span className="font-semibold text-beige-600">التخطيط لما بعد الولادة:</span>{" "}
              مراقبة مستويات السكر بعد الولادة للتأكد من العودة إلى النطاق الطبيعي.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-beige-600 mt-8 mb-4">
            نصائح إضافية:
          </h2>
          <ul className="list-disc list-inside space-y-6">
            <li>
              <span className="font-semibold text-beige-600">شرب كميات كافية من الماء:</span>{" "}
              للحفاظ على ترطيب الجسم وتجنب الجفاف.
            </li>
            <li>
              <span className="font-semibold text-beige-600">التعامل مع التوتر:</span>{" "}
              يُنصح بممارسة تقنيات الاسترخاء مثل التأمل والتنفس العميق.
            </li>
            <li>
              <span className="font-semibold text-beige-600">مراقبة ضغط الدم:</span>{" "}
              للوقاية من مضاعفات ارتفاع ضغط الدم.
            </li>
          </ul>
          <p className="mt-6 text-lg">
            <span className="font-semibold text-beige-600">ملاحظة:</span>{" "}
            سكري الحمل يمكن أن يكون تحت السيطرة من خلال التغذية السليمة، النشاط البدني، والرعاية الطبية المستمرة. من المهم أن تكون المرأة الحامل على دراية بكيفية إدارة مستويات السكر في الدم بشكل فعال لتقليل المخاطر على صحتها وصحة طفلها.
          </p>
        </div>

        {/* Footer Section */}
        <div className="bg-gray-100 py-4 px-8 text-center">
          <p className="text-gray-600 text-sm">
            صحتك وصحة طفلك تبدأ باهتمامك بتغذيتك اليومية وإدارة مستويات السكر في الدم.
          </p>
        </div>
      </div>
    </div>
  );
}
