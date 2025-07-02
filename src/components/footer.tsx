'use client';


'use client';

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface LinkItem {
  name: string;
  href: string;
  logo?: string; // جعل اللوجو اختياريًا لإضافة روابط بدون لوجو مثل سياسة الخصوصية
}

const relatedLinks: LinkItem[] = [
  {
    name: "وزارة الصحة",
    href: "https://www.moh.gov.sa/",
    logo: "/img/min.webp", // تأكد من وضع اللوجو في المسار الصحيح داخل مجلد public
  },
  // يمكنك إضافة روابط أخرى هنا
];

const Footer: React.FC = () => {
  const [isPrivacyOpen, setPrivacyOpen] = useState(false);

  const openPrivacy = () => setPrivacyOpen(true);
  const closePrivacy = () => setPrivacyOpen(false);

  return (
    <footer dir="rtl" className="bg-gray-800 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16 lg:px-8">
        {/* قسم الروابط ذات الصلة */}
        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-lg mb-6">روابط تهمك ذات صلة</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {relatedLinks.map((link) =>
              link.href.startsWith("http") ? (
                // روابط خارجية تستخدم <a>
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center"
                >
                  {link.logo && (
                    <Image
                      src={link.logo}
                      alt={link.name}
                      width={64}
                      height={64}
                      className="mb-2 rounded-full"
                    />
                  )}
                  <span className="text-sm">{link.name}</span>
                </a>
              ) : (
                // روابط داخلية تستخدم <Link> بدون <a>
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex flex-col items-center text-center"
                >
                  {link.logo && (
                    <Image
                      src={link.logo}
                      alt={link.name}
                      width={64}
                      height={64}
                      className="mb-2 rounded-full"
                    />
                  )}
                  <span className="text-sm">{link.name}</span>
                </Link>
              )
            )}
          </div>
          <p className="text-xs text-gray-200 mt-5">
            نحن نحترم خصوصيتك. البيانات التي نقوم بجمعها لا تُستخدم لأغراض التسويق أو أي أغراض أخرى. لمزيد من التفاصيل، يرجى مراجعة{" "}
            <button
              onClick={openPrivacy}
              className="underline hover:text-gray-300 transition focus:outline-none"
            >
              سياسة الخصوصية
            </button>
            .
          </p>
        </div>
        {/* القسم السفلي للفوتر */}
        <div className="mt-12 border-t border-white/20 pt-12 text-center space-y-4 ">
          <p className="text-sm">
            This website Developed by Yahya Alizzi
          
          </p>
        </div>
      </div>

      {/* نافذة سياسة الخصوصية المنبثقة */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-11/12 md:w-3/4 lg:w-1/2 p-6 relative">
            <button
              onClick={closePrivacy}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-xl font-semibold mb-4">سياسة الخصوصية</h2>
            <div className="overflow-y-auto max-h-80">
              {/* محتوى سياسة الخصوصية */}
              <section className="mb-4">
                <h3 className="font-semibold text-lg mb-2">مقدمة</h3>
                <p className="text-sm text-gray-700">
                  نحن في [اسم شركتك] نلتزم بحماية خصوصيتك واحترام بياناتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتك عند زيارتك لموقعنا الإلكتروني.
                </p>
              </section>

              <section className="mb-4">
                <h3 className="font-semibold text-lg mb-2">جمع المعلومات</h3>
                <p className="text-sm text-gray-700">
                  نقوم بجمع المعلومات التالية منك طواعية عند استخدامك لموقعنا:
                </p>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  <li>رقم الهوية</li>
                  <li>الاسم الكامل</li>
                  <li>رقم الجوال</li>
                  <li>تاريخ الميلاد</li>
                </ul>
                <p className="text-sm text-gray-700 mt-2">
                  بالإضافة إلى ذلك، نقوم بجمع معلومات غير شخصية مثل عنوان الـ IP، نوع المتصفح، والصفحات التي تزورها على موقعنا.
                </p>
              </section>

              <section className="mb-4">
                <h3 className="font-semibold text-lg mb-2">استخدام المعلومات</h3>
                <p className="text-sm text-gray-700">
                  نستخدم المعلومات التي نجمعها لتحسين تجربتك على موقعنا، لتزويدك بالمحتوى والخدمات التي تلبي احتياجاتك، وللرد على استفساراتك وملاحظاتك. البيانات التي نقوم بجمعها مثل رقم الهوية، الاسم، رقم الجوال، وتاريخ الميلاد تُستخدم للأغراض التالية:
                </p>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  <li>التحقق من الهوية لتقديم خدمات مخصصة.</li>
                  <li>التواصل معك بخصوص استفساراتك وطلباتك.</li>
                  <li>تحليل الاستخدام لتحسين الموقع والخدمات المقدمة.</li>
                </ul>
                <p className="text-sm text-gray-700 mt-2">
                  لا نشارك معلوماتك الشخصية مع أطراف ثالثة لأغراض التسويق دون موافقتك المسبقة. يمكننا مشاركة بيانات غير شخصية مع شركائنا لأغراض تحليلية فقط.
                </p>
              </section>

              <section className="mb-4">
                <h3 className="font-semibold text-lg mb-2">حماية المعلومات</h3>
                <p className="text-sm text-gray-700">
                  نتخذ إجراءات أمنية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به، التعديل، أو الكشف. ومع ذلك، لا يمكننا ضمان الأمان المطلق للبيانات المرسلة عبر الإنترنت.
                </p>
              </section>

              <section className="mb-4">
                <h3 className="font-semibold text-lg mb-2">ملفات تعريف الارتباط (Cookies)</h3>
                <p className="text-sm text-gray-700">
                  يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربة المستخدم وتحليل استخدام الموقع. يمكنك التحكم في إعدادات ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك.
                </p>
              </section>

              <section className="mb-4">
                <h3 className="font-semibold text-lg mb-2">روابط لمواقع أخرى</h3>
                <p className="text-sm text-gray-700">
                  قد يحتوي موقعنا على روابط لمواقع إلكترونية أخرى. نحن غير مسؤولين عن محتوى أو ممارسات الخصوصية لتلك المواقع. نوصي بقراءة سياسات الخصوصية الخاصة بكل موقع تزوره.
                </p>
              </section>

              <section className="mb-4">
                <h3 className="font-semibold text-lg mb-2">تغييرات على سياسة الخصوصية</h3>
                <p className="text-sm text-gray-700">
                  قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر لتعكس التغييرات في ممارساتنا أو متطلبات قانونية جديدة. سيتم نشر أي تغييرات على هذه الصفحة، وسنقوم بإعلامك بأي تغييرات مادية عبر البريد الإلكتروني أو من خلال إشعار على موقعنا.
                </p>
              </section>

              <section className="mb-4">
                <h3 className="font-semibold text-lg mb-2">اتصل بنا</h3>
                <p className="text-sm text-gray-700">
                  إذا كانت لديك أي أسئلة أو استفسارات حول سياسة الخصوصية هذه، يرجى الاتصال بنا على البريد الإلكتروني{" "}
                  <a href="mailto:3zzoezzo@gmail.com" className="underline text-blue-600 hover:text-blue-800">
                    3zzoezzo@gmail.com
                  </a>{" "}
                </p>
              </section>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
