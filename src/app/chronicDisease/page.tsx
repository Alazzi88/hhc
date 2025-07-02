import React from "react";
import { FaHome } from "react-icons/fa"; // أيقونة المنزل
import Link from "next/link";
export default function ChronicDiseasesPage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-gray-100 to-white py-12"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('/img/chronic.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

                      {/* زر الأيقونة في وسط الشاشة من الأعلى */}
                      <div className="absolute left-1/2 top-4 transform -translate-x-1/2 z-50">
        <Link href="/">
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-full shadow-md focus:outline-none"
            aria-label="عودة للصفحة الرئيسية"
          >
            <FaHome size={20} />
          </button>
        </Link>
      </div>
      <div
        className="max-w-4xl mx-auto shadow-xl rounded-lg overflow-hidden"
        style={{
          backgroundColor: "transparent",// خلفية شفافة بلون رمادي فاتح
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)", // تحسين الظلال
        }}
      >
        {/* Header Section */}
        <div className="bg-gray-700 text-white py-6 px-8">
          <h1 className="text-4xl font-extrabold mb-2">
            رعاية مرضى الأمراض المزمنة
          </h1>
          <p className="text-lg">
            دليلك الشامل لرعاية مرضى الأمراض المزمنة وتغذيتهم بشكل سليم.
          </p>
        </div>

        {/* Content Section */}
        <div className="p-8 text-gray-800 leading-relaxed">
          <p className="text-lg mb-4">
            الأمراض المزمنة، مثل أمراض القلب، السكري، ارتفاع ضغط الدم، السمنة، وأمراض الكلى، تتطلب اهتمامًا خاصًا بالنظام الغذائي ونمط الحياة بشكل عام. التغذية السليمة تعد من الأساسيات لإدارة هذه الأمراض وتقليل المخاطر المرتبطة بها.
          </p>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            التغذية السليمة لمرضى الأمراض المزمنة:
          </h2>
          <ul className="list-disc list-inside space-y-6">
            <li>
              <span className="font-semibold text-gray-700">
                التوازن الغذائي:
              </span>{" "}
              تناول نظام غذائي متوازن يتضمن البروتينات، الكربوهيدرات المعقدة، الدهون الصحية، الفيتامينات والمعادن الضرورية.
            </li>
            <li>
              <span className="font-semibold text-gray-700">
                التحكم في الوزن:
              </span>{" "}
              الحفاظ على وزن صحي يساعد في تقليل مخاطر الأمراض المزمنة.
            </li>
            <li>
              <span className="font-semibold text-gray-700">
                الكربوهيدرات المعقدة:
              </span>{" "}
              يُنصح بتناول الكربوهيدرات المعقدة مثل الحبوب الكاملة والخضروات لتثبيت مستويات السكر في الدم.
            </li>
            <li>
              <span className="font-semibold text-gray-700">الدهون الصحية:</span>{" "}
              تناول الدهون غير المشبعة مثل زيت الزيتون، الأفوكادو، والمكسرات لتحسين صحة القلب.
            </li>
            <li>
              <span className="font-semibold text-gray-700">
                تقليل الملح والصوديوم:
              </span>{" "}
              لتقليل مخاطر ارتفاع ضغط الدم.
            </li>
            <li>
              <span className="font-semibold text-gray-700">
                الأطعمة الغنية بالألياف:
              </span>{" "}
              تساعد الألياف على تحسين عملية الهضم وتنظيم مستويات السكر في الدم.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">
            الوقاية من المضاعفات المرتبطة بالأمراض المزمنة:
          </h2>
          <ul className="list-disc list-inside space-y-6">
            <li>
              <span className="font-semibold text-gray-700">
                التحكم في مستويات السكر:
              </span>{" "}
              توزيع الوجبات على مدار اليوم للحفاظ على استقرار مستويات السكر.
            </li>
            <li>
              <span className="font-semibold text-gray-700">مراقبة ضغط الدم:</span>{" "}
              تقليل تناول الأطعمة المالحة والابتعاد عن التوتر.
            </li>
            <li>
              <span className="font-semibold text-gray-700">
                الأنشطة البدنية:
              </span>{" "}
              ممارسة التمارين الرياضية المعتدلة مثل المشي، السباحة، أو ركوب الدراجة لمدة 30 دقيقة يوميًا.
            </li>
            <li>
              <span className="font-semibold text-gray-700">
                الرعاية الطبية المنتظمة:
              </span>{" "}
              متابعة طبية دورية لفحص مستويات السكر، ضغط الدم، ووظائف الكلى.
            </li>
            <li>
              <span className="font-semibold text-gray-700">
                تقليل التوتر:
              </span>{" "}
              باستخدام تقنيات الاسترخاء مثل التأمل واليوغا.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">
            الأطعمة التي يجب تجنبها:
          </h2>
          <ul className="list-disc list-inside space-y-6">
            <li>
              <span className="font-semibold text-gray-700">
                السكريات المضافة:
              </span>{" "}
              الحلويات والمشروبات الغازية.
            </li>
            <li>
              <span className="font-semibold text-gray-700">
                الدهون المشبعة والمتحولة:
              </span>{" "}
              تقليل اللحوم الدهنية، السمن الصناعي، والأطعمة المقلية.
            </li>
            <li>
              <span className="font-semibold text-gray-700">
                الأطعمة المعلبة والمصنعة:
              </span>{" "}
              تجنب الأطعمة التي تحتوي على كميات كبيرة من السكر، الملح، والدهون غير الصحية.
            </li>
          </ul>
          <p className="mt-6 text-lg">
            <span className="font-semibold text-gray-700">ملاحظة:</span>{" "}
            تعتبر التغذية السليمة ونمط الحياة النشط من الأساسيات للوقاية من المضاعفات المرتبطة بالأمراض المزمنة وتحسين نوعية الحياة.
          </p>
        </div>

        {/* Footer Section */}
        <div className="bg-gray-200 py-4 px-8 text-center">
          <p className="text-gray-600 text-sm">
            صحتك تبدأ بتغذية متوازنة ونمط حياة صحي.
          </p>
        </div>
      </div>
    </div>
  );
}
