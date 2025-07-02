import React from "react";
import { FaHome } from "react-icons/fa"; // أيقونة المنزل
import Link from "next/link";
export default function CeliacDiseasePage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('/img/celiac.webp')`,
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
          <h1 className="text-4xl font-extrabold mb-2">
            إدارة مرض السيلياك وتغذيتهم
          </h1>
          <p className="text-lg">
            دليلك الشامل لإدارة مرض السيلياك وتغذيتهم بشكل سليم.
          </p>
        </div>

        {/* Content Section */}
        <div className="p-8 text-gray-700 leading-relaxed">
          <p className="text-lg mb-4">
            مرض السيلياك هو اضطراب مناعي يتسبب في تفاعل الجسم مع مادة الجلوتين، مما يؤدي إلى تلف الأمعاء الدقيقة وسوء امتصاص العناصر الغذائية. التغذية السليمة هي الأساس لإدارة هذا المرض والوقاية من مضاعفاته.
          </p>
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">
            التغذية السليمة لمرضى السيلياك:
          </h2>
          <ul className="list-disc list-inside space-y-6">
            <li>
              <span className="font-semibold text-purple-600">
                التزام نظام غذائي خالي من الجلوتين:
              </span>{" "}
              يجب تجنب القمح، الشعير، والجاودار. يمكن استبدالها بحبوب خالية من الجلوتين مثل الأرز، الكينوا، والذرة.
            </li>
            <li>
              <span className="font-semibold text-purple-600">الأطعمة المسموحة:</span>{" "}
              الحبوب الخالية من الجلوتين، الفواكه والخضروات، البروتينات الطازجة، ومنتجات الألبان الطبيعية.
            </li>
            <li>
              <span className="font-semibold text-purple-600">
                الاهتمام بالفواكه والخضروات:
              </span>{" "}
              مصدر ممتاز للألياف، الفيتامينات، والمعادن التي يحتاجها الجسم.
            </li>
            <li>
              <span className="font-semibold text-purple-600">
                التركيز على الأطعمة المدعمة:
              </span>{" "}
              لتعويض نقص الفيتامينات والمعادن مثل فيتامين ب12، الكالسيوم، وفيتامين D.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
            الوقاية من المضاعفات:
          </h2>
          <ul className="list-disc list-inside space-y-6">
            <li>
              <span className="font-semibold text-purple-600">
                تجنب التلوث المتبادل:
              </span>{" "}
              استخدام أدوات طهي منفصلة والتأكد من خلو الطعام من الجلوتين.
            </li>
            <li>
              <span className="font-semibold text-purple-600">المتابعة الصحية:</span>{" "}
              إجراء فحوصات دورية لمستويات الفيتامينات والمعادن.
            </li>
            <li>
              <span className="font-semibold text-purple-600">
                الابتعاد عن الأطعمة المصنعة:
              </span>{" "}
              قراءة المكونات بعناية لتجنب الجلوتين الخفي.
            </li>
            <li>
              <span className="font-semibold text-purple-600">التثقيف والتوعية:</span>{" "}
              فهم المنتجات المسموحة وتجنب التلوث بالجلوتين.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
            الأطعمة الموصى بها:
          </h2>
          <ul className="list-disc list-inside space-y-6">
            <li>الحبوب الخالية من الجلوتين: الأرز البني، الكينوا، الذرة.</li>
            <li>الفواكه والخضروات الطازجة.</li>
            <li>البروتينات الطازجة: اللحوم، الأسماك، والبيض.</li>
            <li>منتجات الألبان الطازجة.</li>
            <li>المكسرات والبذور مثل اللوز والشيا.</li>
          </ul>
          <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
            الأطعمة الممنوعة:
          </h2>
          <ul className="list-disc list-inside space-y-6">
            <li>القمح، الشعير، والجاودار.</li>
            <li>المخبوزات المصنوعة من الدقيق العادي.</li>
            <li>المعكرونة والمنتجات المجهزة التي تحتوي على جلوتين.</li>
            <li>الأطعمة المعلبة التي قد تحتوي على جلوتين مخفي.</li>
          </ul>
          <p className="mt-6 text-lg">
            <span className="font-semibold text-purple-600">ملاحظة:</span>{" "}
            الالتزام بنظام غذائي خالٍ من الجلوتين هو المفتاح الأساسي لعيش حياة صحية وخالية من المضاعفات المرتبطة بمرض السيلياك.
          </p>
        </div>

        {/* Footer Section */}
        <div className="bg-gray-100 py-4 px-8 text-center">
          <p className="text-gray-600 text-sm">
            نظامك الغذائي هو مفتاح صحتك. اختر بحكمة وعيش بصحة.
          </p>
        </div>
      </div>
    </div>
  );
}
