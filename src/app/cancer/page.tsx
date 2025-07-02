import React from "react";
import { FaHome } from "react-icons/fa"; // أيقونة المنزل
import Link from "next/link";

export default function CancerNutritionPage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('/img/cancer.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >


                      {/* زر الأيقونة في وسط الشاشة من الأعلى */}
                      <div className="absolute left-1/2 top-4 transform -translate-x-1/2 z-50">
        <Link href="/">
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-md focus:outline-none"
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
        <div className="bg-purple-600 text-white py-6 px-8">
          <h1 className="text-4xl font-extrabold mb-2">تغذية مرضى الأورام السرطانية</h1>
          <p className="text-lg">
            دليل شامل لتغذية مرضى الأورام السرطانية وأهمية التغذية السليمة في تحسين جودة الحياة.
          </p>
        </div>

        {/* Content Section */}
        <div className="p-8 text-gray-700 leading-relaxed">
          <p className="text-lg mb-4">
            تعد التغذية السليمة جزءًا أساسيًا من الرعاية الشاملة لمرضى الأورام السرطانية. تلعب دورًا حيويًا في تعزيز قدرة الجسم على مقاومة المرض، تحسين جودة الحياة، وتقليل الآثار الجانبية للعلاج.
          </p>
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">
            أهمية التغذية في علاج السرطان:
          </h2>
          <ul className="list-disc list-inside space-y-6">
            <li>
              <span className="font-semibold text-purple-600">دعم جهاز المناعة:</span>{" "}
              التغذية السليمة تساعد في تقوية جهاز المناعة لمقاومة العدوى.
            </li>
            <li>
              <span className="font-semibold text-purple-600">الحد من فقدان الوزن:</span>{" "}
              الحفاظ على الوزن المثالي وصحة العضلات يساعد في مواجهة الآثار الجانبية للعلاج.
            </li>
            <li>
              <span className="font-semibold text-purple-600">تقليل الآثار الجانبية للعلاج:</span>{" "}
              مثل الغثيان، التعب، وفقدان الشهية.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
            المبادئ الأساسية لتغذية مرضى السرطان:
          </h2>
          <ul className="list-disc list-inside space-y-6">
            <li>
              <span className="font-semibold text-purple-600">تناول البروتينات عالية الجودة:</span>{" "}
              تساعد البروتينات في بناء وإصلاح الأنسجة وتعزيز الجهاز المناعي.
              <ul className="list-disc list-inside ml-6 space-y-2 mt-2">
                <li>اللحوم الخالية من الدهون</li>
                <li>الأسماك مثل السلمون والتونة</li>
                <li>البيض والمكسرات والبذور</li>
                <li>منتجات الألبان والبقوليات</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-purple-600">الحفاظ على الترطيب:</span>{" "}
              تناول السوائل مثل الماء، العصائر الطازجة، والشوربات للحفاظ على مستوى الترطيب.
            </li>
            <li>
              <span className="font-semibold text-purple-600">الأطعمة الغنية بالفيتامينات والمعادن:</span>{" "}
              مثل الفواكه، الخضروات الطازجة، والحبوب الكاملة لدعم وظائف الجسم.
            </li>
            <li>
              <span className="font-semibold text-purple-600">إدارة الآثار الجانبية للعلاج:</span>{" "}
              تناول وجبات صغيرة ومتكررة لتقليل الغثيان وتحفيز الشهية.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
            توصيات غذائية لأنواع السرطان المختلفة:
          </h2>
          <ul className="list-disc list-inside space-y-6">
            <li>
              <span className="font-semibold text-purple-600">سرطان الثدي:</span>{" "}
              التركيز على الأطعمة الغنية بالألياف، ومضادات الأكسدة، وتقليل اللحوم المصنعة.
            </li>
            <li>
              <span className="font-semibold text-purple-600">سرطان القولون:</span>{" "}
              تناول الألياف والبروبيوتيك، وتجنب الأطعمة الدهنية.
            </li>
            <li>
              <span className="font-semibold text-purple-600">سرطان الرئة:</span>{" "}
              تناول البروتينات وفيتامينات C وE لدعم المناعة.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
            نصائح إضافية:
          </h2>
          <ul className="list-disc list-inside space-y-6">
            <li>
              <span className="font-semibold text-purple-600">تناول وجبات صغيرة ومتكررة:</span>{" "}
              يساعد في تحسين الشهية والهضم.
            </li>
            <li>
              <span className="font-semibold text-purple-600">التحقق من الحساسية الغذائية:</span>{" "}
              مراقبة أي حساسية أو تغير في تقبل الأطعمة أثناء العلاج.
            </li>
            <li>
              <span className="font-semibold text-purple-600">استشارة أخصائي تغذية:</span>{" "}
              للحصول على خطة غذائية مخصصة.
            </li>
          </ul>

          <p className="mt-6 text-lg">
            <span className="font-semibold text-purple-600">ملاحظة:</span>{" "}
            التغذية السليمة عنصر رئيسي في تعزيز صحة مرضى السرطان وتحسين قدرتهم على تحمل العلاجات.
          </p>
        </div>

        {/* Footer Section */}
        <div className="bg-gray-100 py-4 px-8 text-center">
          <p className="text-gray-600 text-sm">
            الرعاية الصحية المتكاملة تبدأ بالتغذية السليمة والدعم النفسي.
          </p>
        </div>
      </div>
    </div>
  );
}
