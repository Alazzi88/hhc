import React from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa"; // أيقونة المنزل

export default function Page() {
  return (
    <div
      className="relative min-h-screen bg-gradient-to-b from-green-50 to-white py-12"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('/img/man.webp')`,
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
          backgroundColor: "transparent",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* Header Section */}
        <div className="bg-green-600 text-white py-6 px-8">
          <h1 className="text-4xl font-extrabold mb-2">تغذية الرجل</h1>
          <p className="text-lg">
            التغذية السليمة هي أساس الصحة والطاقة، وتساعد على تحسين الأداء البدني والعقلي.
          </p>
        </div>

        {/* Content Section */}
        <div className="p-8 text-gray-700 leading-relaxed">
          <p className="text-lg mb-4">
            تغذية الرجل تعد أساسية للحفاظ على صحته العامة وزيادة مستويات الطاقة وتحسين الأداء
            البدني والعقلي. إليك بعض النصائح الغذائية المهمة التي يجب أن يتبعها الرجل:
          </p>
          <ul className="list-decimal list-inside space-y-6">
            <li>
              <span className="font-semibold text-green-600">البروتينات:</span>{" "}
              ضرورية لبناء العضلات وتحسين الأداء الرياضي. حاول تضمين مصادر بروتينية
              مثل اللحوم الخالية من الدهون، الأسماك، البيض، والبقوليات.
            </li>
            <li>
              <span className="font-semibold text-green-600">الدهون الصحية:</span>{" "}
              مثل زيت الزيتون، المكسرات، والأفوكادو. هذه الدهون تدعم صحة القلب وتساهم
              في تحسين مستويات الكوليسترول.
            </li>
            <li>
              <span className="font-semibold text-green-600">الكربوهيدرات المعقدة:</span>{" "}
              مثل الحبوب الكاملة (الشوفان، الأرز البني، الكينوا) توفر طاقة مستدامة
              وتساعد على تنظيم مستوى السكر في الدم.
            </li>
            <li>
              <span className="font-semibold text-green-600">الخضروات والفواكه:</span>{" "}
              غنية بالفيتامينات والمعادن والألياف، وتدعم جهاز المناعة والصحة العامة.
            </li>
            <li>
              <span className="font-semibold text-green-600">الترطيب:</span>{" "}
              شرب كميات كافية من الماء طوال اليوم يحسّن الهضم ويزيد من الطاقة والتركيز.
            </li>
            <li>
              <span className="font-semibold text-green-600">الفيتامينات والمعادن:</span>{" "}
              مثل فيتامين D، المغنيسيوم، والزنك، تلعب دورًا هامًا في الصحة العامة وتعزيز
              الوظائف المناعية والهرمونية.
            </li>
            <li>
              <span className="font-semibold text-green-600">ممارسة النشاط البدني:</span>{" "}
              التغذية السليمة لا تكتمل بدون ممارسة التمارين الرياضية بانتظام. احرص على
              تضمين تمارين القوة والتمارين الهوائية.
            </li>
          </ul>
          <p className="mt-6 text-lg">
            التغذية السليمة تؤثر بشكل مباشر على قدرة الرجل في الحفاظ على وزنه المثالي،
            تعزيز قوته، وتحسين صحته على المدى الطويل.
          </p>
        </div>

        {/* Footer Section */}
        <div className="bg-gray-100 py-4 px-8 text-center">
          <p className="text-gray-600 text-sm">
            التغذية ليست فقط مسألة طعام، بل هي أسلوب حياة يعزز صحتك وسعادتك.
          </p>
        </div>
      </div>
    </div>
  );
}
