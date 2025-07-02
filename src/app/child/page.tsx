import React from "react";
import { FaHome } from "react-icons/fa"; // أيقونة المنزل
import Link from "next/link";
export default function Page() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('/img/child.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
                  {/* زر الأيقونة في وسط الشاشة من الأعلى */}
                  <div className="absolute left-1/2 top-4 transform -translate-x-1/2 z-50">
        <Link href="/">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-md focus:outline-none"
            aria-label="عودة للصفحة الرئيسية"
          >
            <FaHome size={20} />
          </button>
        </Link>
      </div>
      <div
        className="max-w-4xl mx-auto shadow-xl rounded-lg overflow-hidden"
        style={{
          backgroundColor: "transparent", // إزالة الخلفية
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)", // الظلال فقط
        }}
      >
        {/* Header Section */}
        <div className="bg-blue-600 text-white py-6 px-8">
          <h1 className="text-4xl font-extrabold mb-2">صحة الطفل وتغذيته</h1>
          <p className="text-lg">
            دليلك الشامل لرعاية صحة طفلك وتغذيته بشكل سليم.
          </p>
        </div>

        {/* Content Section */}
        <div className="p-8 text-gray-700 leading-relaxed">
          <p className="text-lg mb-4">
            صحتك تبدأ من نمط حياتك. إليك أهم النصائح للحفاظ على صحة طفلك وتغذيته:
          </p>
          <ul className="list-disc list-inside space-y-6">
            <li>
              <span className="font-semibold text-blue-600">
                التغذية السليمة للأطفال:
              </span>{" "}
              التغذية المتوازنة من أهم الأسس لصحة الطفل. يجب الحرص على تقديم وجبات تحتوي على البروتينات، الفيتامينات، المعادن، والألياف.
            </li>
            <li>
              <span className="font-semibold text-blue-600">
                في المرحلة الرضاعة:
              </span>{" "}
              حليب الأم هو المصدر المثالي للتغذية، ويمكن إدخال الأغذية التكميلية بعد 6 أشهر مثل الخضروات المهروسة والفواكه.
            </li>
            <li>
              <span className="font-semibold text-blue-600">
                في مرحلة ما قبل المدرسة:
              </span>{" "}
              يجب التركيز على الأطعمة المتنوعة مثل اللحوم الخالية من الدهون، الحبوب الكاملة، والخضروات والفواكه الطازجة.
            </li>
            <li>
              <span className="font-semibold text-blue-600">الوقاية من الأمراض:</span>
              <ul className="list-disc list-inside ml-6 space-y-4 mt-2">
                <li>
                  <span className="font-semibold text-blue-600">التطعيمات:</span>{" "}
                  تأكد من تطعيم الطفل وفقاً للجدول الزمني المعتمد لحمايته من الأمراض المعدية مثل الحصبة، الدفتيريا، والسل.
                </li>
                <li>
                  <span className="font-semibold text-blue-600">
                    النظافة الشخصية:
                  </span>{" "}
                  تعليم الطفل غسل اليدين بشكل منتظم خاصة قبل تناول الطعام وبعد استخدام الحمام.
                </li>
                <li>
                  <span className="font-semibold text-blue-600">
                    التغذية الوقائية:
                  </span>{" "}
                  أطعمة غنية بالفيتامينات A وC والزنك تساعد في تقوية جهاز المناعة وتقليل خطر الإصابة بالأمراض.
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-blue-600">
                النمو البدني والعقلي:
              </span>
              <ul className="list-disc list-inside ml-6 space-y-4 mt-2">
                <li>
                  <span className="font-semibold text-blue-600">النوم الكافي:</span>{" "}
                  النوم هو أحد العوامل الرئيسية لنمو الطفل العقلي والجسدي. يُنصح بنوم من 10 إلى 12 ساعة للأطفال في المراحل المبكرة.
                </li>
                <li>
                  <span className="font-semibold text-blue-600">
                    النشاط البدني:
                  </span>{" "}
                  يشمل اللعب والتمارين الرياضية المناسبة التي تساعد على تطوير المهارات الحركية والقدرات العقلية.
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-blue-600">صحة الأسنان:</span>{" "}
              من المهم العناية بأسنان الطفل منذ ظهور أول سن. يجب تنظيف الأسنان بانتظام باستخدام فرشاة صغيرة ومعجون خاص بالأطفال.
            </li>
            <li>
              <span className="font-semibold text-blue-600">
                الوقاية من السمنة:
              </span>
              <ul className="list-disc list-inside ml-6 space-y-4 mt-2">
                <li>
                  تجنب تقديم الأطعمة عالية السكر أو الدهون بشكل مفرط.
                </li>
                <li>
                  تشجيع الطفل على تناول وجبات منتظمة وصحية والحد من الوجبات الخفيفة غير الصحية مثل الوجبات السريعة أو المشروبات الغازية.
                </li>
              </ul>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">
            نصائح إضافية:
          </h2>
          <ul className="list-disc list-inside space-y-6">
            <li>
              <span className="font-semibold text-blue-600">
                الرعاية العاطفية:
              </span>{" "}
              يجب تلبية احتياجات الطفل العاطفية من خلال التفاعل معه بشكل إيجابي، والاستماع لمشاعره، وتعزيز ثقته بنفسه.
            </li>
            <li>
              <span className="font-semibold text-blue-600">
                إشراف طبي دوري:
              </span>{" "}
              يجب على الآباء متابعة تطور الطفل من خلال الزيارات الدورية للطبيب، حيث يمكن الكشف المبكر عن أي مشاكل صحية أو نمو.
            </li>
            <li>
              <span className="font-semibold text-blue-600">
                مشاركة الطفل في الأنشطة:
              </span>{" "}
              شجع الطفل على الانخراط في الأنشطة الجماعية مثل الألعاب الرياضية أو الفنون التي تعزز من التنسيق الحركي والاجتماعي.
            </li>
          </ul>
          <p className="mt-6 text-lg">
            <span className="font-semibold text-blue-600">ملاحظة:</span>{" "}
            العناية بصحة الطفل تبدأ من المنزل، والتغذية السليمة، الرعاية الصحية، والنشاط البدني هي الأسس التي تضمن له نمواً سليماً وحياة صحية.
          </p>
        </div>

        {/* Footer Section */}
        <div className="bg-gray-100 py-4 px-8 text-center">
          <p className="text-gray-600 text-sm">
            طفلك هو مستقبلنا، فلنمنحه أفضل بداية في الحياة.
          </p>
        </div>
      </div>
    </div>
  );
}
