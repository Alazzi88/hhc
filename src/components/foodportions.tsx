const FoodPortions = () => {


  return (
    <div className="min-h-screen bg-white shadow-xl p-6">
      <div className="max-w-5xl mx-auto space-y-12">
  
        {/* الطبق الصحي */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
            🍽️ الطبق الصحي
          </h1>
          <p className="text-gray-700 mb-6 leading-relaxed">
            الطبق الصحي هو أداة تعليمية توضح كيفية تقسيم الأطعمة بشكل متوازن
            للحصول على العناصر الغذائية الضرورية.
          </p>
          <div className="relative w-full max-w-lg mx-auto">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-64 h-64 mx-auto"
            >
              <circle cx="100" cy="100" r="100" fill="#F3F4F6" />
              <path
                d="M100,100 L100,0 A100,100 0 0,1 200,100 Z"
                fill="#68D391"
              />
              <text
                x="150"
                y="50"
                fill="#fff"
                fontSize="10"
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-bold"
              >
                خضروات
              </text>
              <path
                d="M100,100 L200,100 A100,100 0 0,1 100,200 Z"
                fill="#F56565"
              />
              <text
                x="150"
                y="150"
                fill="#fff"
                fontSize="10"
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-bold"
              >
                بروتين
              </text>
              <path
                d="M100,100 L100,200 A100,100 0 0,1 0,100 Z"
                fill="#ECC94B"
              />
              <text
                x="50"
                y="150"
                fill="#fff"
                fontSize="10"
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-bold"
              >
                حبوب كاملة
              </text>
              <path
                d="M100,100 L0,100 A100,100 0 0,1 100,0 Z"
                fill="#9F7AEA"
              />
              <text
                x="50"
                y="50"
                fill="#fff"
                fontSize="10"
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-bold"
              >
                فواكه
              </text>
            </svg>
          </div>
          <p className="text-gray-700 mt-6">
            تناول طبقًا صحيًا يحتوي على هذه المجموعات الغذائية يوميًا للحفاظ على
            صحة مثالية وتوازن غذائي.
          </p>
          <div className="text-center mt-6 sm:mt-8">
            <a
              href="/files/SaudiHealthyDishGuide.pdf"
              download
              className="inline-block bg-blue-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-200"
            >
              📄 حمل الملف PDF للحصول على المزيد من التفاصيل
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodPortions;
