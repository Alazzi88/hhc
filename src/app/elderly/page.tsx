import React from "react";
import { FaHome } from "react-icons/fa"; // أيقونة المنزل
import Link from "next/link";
export default function Page() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('/img/elderly.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

                      {/* زر الأيقونة في وسط الشاشة من الأعلى */}
                      <div className="absolute left-1/2 top-4 transform -translate-x-1/2 z-50">
        <Link href="/">
          <button
            className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-md focus:outline-none"
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
        <div className="bg-green-600 text-white py-6 px-8">
          <h1 className="text-4xl font-extrabold mb-2">رعاية صحة كبار السن</h1>
          <p className="text-lg">
            دليلك الشامل لرعاية صحة كبار السن وتغذيتهم بشكل سليم.
          </p>
        </div>

        {/* Content Section */}
        <div className="p-8 text-gray-700 leading-relaxed">
          <p className="text-lg mb-4">
            مع تقدم العمر، تصبح العناية بالصحة والتغذية أمرًا بالغ الأهمية للحفاظ على جودة الحياة والوقاية من الأمراض المزمنة. إليك بعض الإرشادات المهمة:
          </p>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            التغذية السليمة لكبار السن:
          </h2>
          <ul className="list-disc list-inside space-y-6">
            <li>
              <span className="font-semibold text-green-600">
                التركيز على البروتينات:
              </span>{" "}
              زيادة تناول البروتينات للحفاظ على الكتلة العضلية، مثل اللحوم الخالية من الدهون، الأسماك، الدواجن، البيض، والمكسرات.
            </li>
            <li>
              <span className="font-semibold text-green-600">
                الألياف الغذائية:
              </span>{" "}
              تناول الأطعمة الغنية بالألياف مثل الخضروات، الفواكه، والحبوب الكاملة لتحسين الهضم والوقاية من الإمساك.
            </li>
            <li>
              <span className="font-semibold text-green-600">الدهون الصحية:</span>{" "}
              استخدام زيت الزيتون، الأفوكادو، والمكسرات لتحسين صحة القلب وتقليل الالتهابات.
            </li>
            <li>
              <span className="font-semibold text-green-600">
                الكالسيوم وفيتامين D:
              </span>{" "}
              للحفاظ على صحة العظام، يمكن الحصول عليها من منتجات الألبان، الخضروات الورقية، والمكملات الغذائية.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-green-600 mt-8 mb-4">
            الوقاية من الأمراض:
          </h2>
          <ul className="list-disc list-inside space-y-6">
            <li>
              <span className="font-semibold text-green-600">
                أمراض القلب:
              </span>{" "}
              تناول الأطعمة الغنية بالأوميغا-3 مثل الأسماك الدهنية لتقوية القلب وخفض مستويات الكوليسترول الضار.
            </li>
            <li>
              <span className="font-semibold text-green-600">السكري:</span>{" "}
              مراقبة مستويات السكر في الدم وتجنب الأطعمة المعالجة والدهنية.
            </li>
            <li>
              <span className="font-semibold text-green-600">
                الزهايمر والخرف:
              </span>{" "}
              تناول أطعمة غنية بمضادات الأكسدة مثل التوت، المكسرات، والخضروات الورقية لدعم صحة الدماغ.
            </li>
            <li>
              <span className="font-semibold text-green-600">السمنة:</span>{" "}
              تقليل السعرات الحرارية مع التركيز على وجبات متوازنة وغنية بالعناصر الغذائية.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-green-600 mt-8 mb-4">
            النشاط البدني:
          </h2>
          <ul className="list-disc list-inside space-y-6">
            <li>
              <span className="font-semibold text-green-600">
                تمارين القوة:
              </span>{" "}
              مثل حمل الأوزان الخفيفة للحفاظ على الكتلة العضلية وتقليل هشاشة العظام.
            </li>
            <li>
              <span className="font-semibold text-green-600">
                تمارين القلب:
              </span>{" "}
              المشي، السباحة، أو ركوب الدراجة لتحسين صحة القلب والتحكم في الوزن.
            </li>
            <li>
              <span className="font-semibold text-green-600">
                المرونة والتوازن:
              </span>{" "}
              ممارسة التمدد واليوغا لتحسين التوازن وتقليل خطر السقوط.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-green-600 mt-8 mb-4">
            أهمية الماء والراحة:
          </h2>
          <ul className="list-disc list-inside space-y-6">
            <li>
              <span className="font-semibold text-green-600">شرب الماء:</span>{" "}
              الحفاظ على الترطيب لتجنب الجفاف.
            </li>
            <li>
              <span className="font-semibold text-green-600">النوم الجيد:</span>{" "}
              النوم الكافي يعزز وظائف المناعة ويحسن الصحة العقلية.
            </li>
          </ul>
          <p className="mt-6 text-lg">
            <span className="font-semibold text-green-600">ملاحظة:</span>{" "}
            الحفاظ على صحة كبار السن يتطلب نهجًا متكاملاً يجمع بين التغذية السليمة، النشاط البدني المنتظم، والراحة الكافية.
          </p>
        </div>

        {/* Footer Section */}
        <div className="bg-gray-100 py-4 px-8 text-center">
          <p className="text-gray-600 text-sm">
            صحتك تبدأ بتغذية متوازنة ونمط حياة نشط. اجعلها أولوية.
          </p>
        </div>
      </div>
    </div>
  );
}
