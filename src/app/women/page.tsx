import React from "react";
import { FaHome } from "react-icons/fa"; // أيقونة المنزل
import Link from "next/link";

export default function Page() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-12"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('/img/women.webp')`,
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
          backgroundColor: "transparent",// خلفية شفافة
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)", // تحسين الظلال
        }}
      >
        {/* Header Section */}
        <div className="bg-pink-600 text-white py-6 px-8">
          <h1 className="text-4xl font-extrabold mb-2">صحة المرأة وتغذيتها</h1>
          <p className="text-lg">
            دليل شامل للحفاظ على صحتك وتغذيتك من أجل حياة أفضل.
          </p>
        </div>

        {/* Content Section */}
        <div className="p-8 text-gray-700 leading-relaxed">
          <p className="text-lg mb-4">
            صحتك تبدأ من نمط حياتك. إليك أهم النصائح للحفاظ على صحتك وتغذيتك:
          </p>
          <ul className="list-disc list-inside space-y-6">
            <li>
              <span className="font-semibold text-pink-600">
                التغذية المتوازنة:
              </span>{" "}
              الحفاظ على توازن غذائي من خلال تناول أطعمة غنية بالعناصر الغذائية الأساسية مثل
              البروتينات، الألياف، الفيتامينات والمعادن. تأكدي من تناول الفواكه والخضروات، الحبوب
              الكاملة، والبروتينات الصحية مثل الأسماك والدواجن.
            </li>
            <li>
              <span className="font-semibold text-pink-600">
                الوقاية من الأمراض:
              </span>{" "}
              الوقاية من الأمراض يبدأ بنمط حياة صحي. من المهم ممارسة الرياضة بانتظام، الحفاظ على وزن
              صحي، والابتعاد عن التدخين والكحول. كما يجب إجراء الفحوصات الدورية للكشف المبكر عن
              الأمراض مثل السرطان، السكري، وأمراض القلب.
            </li>
            <li>
              <span className="font-semibold text-pink-600">صحة العظام:</span>{" "}
              نظراً لأن النساء أكثر عرضة للإصابة بهشاشة العظام، تأكدي من حصولك على كمية كافية من
              الكالسيوم وفيتامين D من الأطعمة أو المكملات الغذائية.
            </li>
            <li>
              <span className="font-semibold text-pink-600">
                الحفاظ على صحة الجهاز الهضمي:
              </span>{" "}
              التغذية السليمة غنية بالألياف تساعد في الحفاظ على صحة الجهاز الهضمي. يُنصح بشرب كميات
              كافية من الماء وتجنب الأطعمة الدهنية والمصنعة.
            </li>
            <li>
              <span className="font-semibold text-pink-600">الصحة النفسية:</span>{" "}
              لا تقتصر صحة المرأة على الجسد فقط، بل تشمل أيضاً الصحة النفسية. حافظي على التوازن
              النفسي من خلال ممارسة تقنيات الاسترخاء مثل التأمل واليوغا، وحافظي على التواصل الاجتماعي
              الجيد.
            </li>
            <li>
              <span className="font-semibold text-pink-600">الحمل والولادة:</span>{" "}
              العناية بالتغذية أثناء الحمل ضرورية لضمان صحة الأم والطفل. تأكدي من تناول حمض الفوليك
              والحديد والكالسيوم خلال فترة الحمل.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-pink-600 mt-8 mb-4">
            نصائح إضافية:
          </h2>
          <ul className="list-disc list-inside space-y-6">
            <li>
              <span className="font-semibold text-pink-600">النوم الجيد:</span>{" "}
              النوم الكافي أمر بالغ الأهمية لصحة المرأة. احرصي على الحصول على 7-8 ساعات من النوم
              يوميًا.
            </li>
            <li>
              <span className="font-semibold text-pink-600">
                التمارين الرياضية:
              </span>{" "}
              النشاط البدني يعزز صحة القلب والعظام، ويحسن المزاج. يُنصح بممارسة الرياضة المعتدلة مثل
              المشي أو السباحة 3-5 مرات في الأسبوع.
            </li>
          </ul>
          <p className="mt-6 text-lg">
            <span className="font-semibold text-pink-600">ملاحظة:</span>{" "}
            العناية بصحتك ليست مجرد أطعمة ومكملات، بل هي نمط حياة متكامل يعزز من جودة حياتك بشكل عام.
          </p>
        </div>

        {/* Footer Section */}
        <div className="bg-gray-100 py-4 px-8 text-center">
          <p className="text-gray-600 text-sm">
            صحتك هي أغلى ما تملكين، اجعليها أولوية في حياتك.
          </p>
        </div>
      </div>
    </div>
  );
}
