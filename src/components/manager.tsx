"use client";
import { useRef, useState, useEffect } from "react";
import useTypewriter from "./useTypewriter"; // عدّل المسار حسب موقع ملفك

export default function Manager() {
  // النص الذي سيظهر بتأثير الكتابة
  const managerText =
    "“نؤمن في تجمع عسير الصحي بأن التغذية السليمة هي حجر الزاوية لتحقيق حياة صحية، ولذلك نحن نعمل على توفير خدمات غذائية علاجية قائمة على أسس علمية وطبّية حديثة، بالتعاون مع فريق من الأخصائيين المؤهلين لضمان تقديم أفضل رعاية صحية للمرضى. نحن ملتزمون بتقديم المشورة الغذائية المناسبة لكل حالة مرضية، وذلك من خلال تقديم برامج غذائية متخصصة تساهم في تحسين جودة الحياة وتعزيز الشفاء.”";

  // نستخدم useRef لتحديد العنصر الذي نريد مراقبته
  const blockquoteRef = useRef(null);

  // الحالة التي تحدد متى يبدأ التأثير
  const [startTyping, setStartTyping] = useState(false);

  // نراقب ظهور العنصر في الشاشة
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // إذا كان العنصر في مجال الرؤية
        if (entry.isIntersecting) {
          setStartTyping(true);
        }
      },
      { threshold: 0.2 } // يمكنك ضبط threshold كما تحب
    );

    if (blockquoteRef.current) {
      observer.observe(blockquoteRef.current);
    }

    return () => {
      if (blockquoteRef.current) {
        observer.unobserve(blockquoteRef.current);
      }
    };
  }, []);

  // في البداية نمرّر نصًا فارغًا كي لا يبدأ التأثير
  // ثم عندما يصبح startTyping = true نمرر النص الفعلي
  const typedText = useTypewriter(startTyping ? managerText : "", 25);

  return (
    <section className="relative isolate overflow-hidden bg-gray-50 mt-12 px-4 py-12 sm:py-16 lg:px-8">
      {/* خلفية زخرفية */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

      <div className="mx-auto max-w-6xl">
        {/* قسم الفيديو والشعار */}
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="w-full flex justify-center">
            <div className="w-full max-w-3xl overflow-hidden rounded-xl shadow-lg">
              <div className="relative w-full h-[500px] bg-white">
                <video
                  className="absolute top-0 left-0 w-full h-full object-contain rounded-full"
                  src="/img/vid.mov"
                  poster="/img/imgvid.webp"
                  controls
                ></video>
              </div>
            </div>
          </div>

          <img
            alt="Logo"
            src="/img/logo.webp"
            className="h-12 sm:h-16 my-4"
          />
          <p className="text-base sm:text-lg font-medium text-gray-700">
            كلمة الرئيس التنفيذي
          </p>
        </div>

        {/* اقتباس المدير التنفيذي */}
        <figure className="mt-8 sm:mt-10">
          <blockquote
            ref={blockquoteRef} // نضع الـref هنا
            className="text-center text-base sm:text-xl font-semibold text-gray-900 italic leading-relaxed"
          >
            <p>{typedText}</p>
          </blockquote>
          <figcaption className="mt-6 sm:mt-10">
            {/* صورة المدير */}
          
            {/* اسم المدير وتوصيفه */}
            <div className="mt-2 sm:mt-4 flex flex-col items-center text-sm sm:text-base text-gray-600">
              <div className="font-semibold text-gray-900 text-base sm:text-lg">
                الدكتور ابراهيم بن عبدالكريم العريفي
              </div>
              <div className="flex items-center mt-1">
                <span>الرئيس التنفيذي لتجمع عسير الصحي</span>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}





