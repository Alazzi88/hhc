import React from "react";
import { FaHome } from "react-icons/fa"; // أيقونة المنزل
import Link from "next/link";
export default function AthletesNutritionPage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-12"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('/img/sport.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

                      {/* زر الأيقونة في وسط الشاشة من الأعلى */}
                      <div className="absolute left-1/2 top-4 transform -translate-x-1/2 z-50">
        <Link href="/">
          <button
            className="bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full shadow-md focus:outline-none"
            aria-label="عودة للصفحة الرئيسية"
          >
            <FaHome size={20} />
          </button>
        </Link>
      </div>
      <div
        className="max-w-4xl mx-auto shadow-xl rounded-lg overflow-hidden"
        style={{
          backgroundColor: "transparent", // خلفية شفافة بلون برتقالي فاتح
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)", // تحسين الظلال
        }}
      >
        {/* Header Section */}
        <div className="bg-orange-600 text-white py-6 px-8">
          <h1 className="text-4xl font-extrabold mb-2">تغذية الرياضيين</h1>
          <p className="text-lg">
            دليلك الشامل لتحقيق الأداء الأمثل في التمارين والأنشطة الرياضية.
          </p>
        </div>

        {/* Content Section */}
        <div className="p-8 text-gray-700 leading-relaxed">
          <p className="text-lg mb-4">
            تغذية الرياضيين هي عامل أساسي لتحقيق الأداء الأمثل في التمارين والأنشطة الرياضية، وكذلك في تعزيز عملية التعافي والوقاية من الإصابات. إليك دليلك الشامل لتغذية الرياضيين مع مصادر علمية تدعم المعلومات.
          </p>
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">
            أهمية التغذية للرياضيين:
          </h2>
          <ul className="list-disc list-inside space-y-6">
            <li>
              <span className="font-semibold text-orange-600">
                الطاقة والتحمل:
              </span>{" "}
              الرياضيون يحتاجون إلى طاقة أكثر من الأشخاص العاديين، خاصة في الرياضات التي تتطلب مجهودًا بدنيًا عاليًا. الكربوهيدرات تعتبر المصدر الرئيسي للطاقة.
            </li>
            <li>
              <span className="font-semibold text-orange-600">
                البروتين للنمو والتعافي:
              </span>{" "}
              البروتينات أساسية لبناء وإصلاح الأنسجة العضلية. تناول البروتين بعد التمرين يساعد في تسريع التعافي.
            </li>
            <li>
              <span className="font-semibold text-orange-600">
                الدهون الصحية:
              </span>{" "}
              ضرورية للطاقة طويلة الأمد وامتصاص الفيتامينات الذائبة في الدهون.
            </li>
            <li>
              <span className="font-semibold text-orange-600">
                الترطيب:
              </span>{" "}
              الحفاظ على الترطيب أمر بالغ الأهمية، حيث يؤثر الجفاف على الأداء البدني.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-orange-600 mt-8 mb-4">
            العناصر الغذائية الأساسية للرياضيين:
          </h2>
          <ul className="list-disc list-inside space-y-6">
            <li>
              <span className="font-semibold text-orange-600">
                الكربوهيدرات:
              </span>{" "}
              المصدر الرئيسي للطاقة. يُفضل تناول الحبوب الكاملة والفواكه والخضروات.
            </li>
            <li>
              <span className="font-semibold text-orange-600">
                البروتين:
              </span>{" "}
              ضروري لبناء العضلات وتجديد الأنسجة. مصادره تشمل اللحوم الخالية من الدهون، البيض، والمكسرات.
            </li>
            <li>
              <span className="font-semibold text-orange-600">
                الدهون الصحية:
              </span>{" "}
              مثل زيت الزيتون والأفوكادو والأسماك الدهنية، تلعب دورًا في تحسين الأداء على المدى الطويل.
            </li>
            <li>
              <span className="font-semibold text-orange-600">
                الفيتامينات والمعادن:
              </span>{" "}
              مثل الحديد والكالسيوم والمغنيسيوم لدعم الأداء البدني والمحافظة على صحة العظام.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-orange-600 mt-8 mb-4">
            التوقيت الغذائي للرياضيين:
          </h2>
          <ul className="list-disc list-inside space-y-6">
            <li>
              <span className="font-semibold text-orange-600">
                قبل التمرين:
              </span>{" "}
              تناول وجبة خفيفة غنية بالكربوهيدرات المعقدة والبروتين لتوفير الطاقة.
            </li>
            <li>
              <span className="font-semibold text-orange-600">
                أثناء التمرين:
              </span>{" "}
              تناول مشروبات رياضية للحفاظ على الطاقة والحد من الجفاف.
            </li>
            <li>
              <span className="font-semibold text-orange-600">
                بعد التمرين:
              </span>{" "}
              تناول وجبة تحتوي على بروتين وكربوهيدرات لتعزيز تعافي العضلات.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-orange-600 mt-8 mb-4">
            نصائح إضافية:
          </h2>
          <ul className="list-disc list-inside space-y-6">
            <li>
              <span className="font-semibold text-orange-600">
                الترطيب المستمر:
              </span>{" "}
              شرب كميات كافية من الماء طوال اليوم.
            </li>
            <li>
              <span className="font-semibold text-orange-600">
                تنظيم الوجبات:
              </span>{" "}
              تناول وجبات متوازنة ومنتظمة لدعم مستويات الطاقة المستمرة.
            </li>
            <li>
              <span className="font-semibold text-orange-600">
                النوم الجيد:
              </span>{" "}
              الراحة والنوم الجيد يدعمان التعافي وتحسين الأداء.
            </li>
          </ul>
          <p className="mt-6 text-lg">
            <span className="font-semibold text-orange-600">ملاحظة:</span>{" "}
            التغذية السليمة جزء أساسي من برنامج التدريب والتمارين لتحقيق أقصى استفادة من التمرين والتعافي.
          </p>
        </div>

        {/* Footer Section */}
        <div className="bg-gray-100 py-4 px-8 text-center">
          <p className="text-gray-600 text-sm">
            التغذية المثالية تبدأ بالتوازن الصحيح وتوقيت الوجبات.
          </p>
        </div>
      </div>
    </div>
  );
}
