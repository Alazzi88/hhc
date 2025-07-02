'use client';

import React, { useState } from "react";

// مكتبات BMI Calculator
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faAppleAlt,
  faUser,
  faWeight,
  faRulerVertical,
  faIdCard,
  faCalendarDay,
  faVenusMars,
  faPhone,
  faStethoscope
} from "@fortawesome/free-solid-svg-icons";

// مكتبات DatePicker واستخدامها
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";

// مكتبة Formspree
import { useForm, ValidationError } from "@formspree/react";

// ----------------------- مكوّن حاسبة مؤشر كتلة الجسم -----------------------
const BMICalculator: React.FC = () => {
  const [weight, setWeight] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");
  const [age, setAge] = useState<number | "">("");
  const [gender, setGender] = useState<string>("male");
  const [activityLevel, setActivityLevel] = useState<string>("1.2");
  const [bmi, setBmi] = useState<number | null>(null);
  const [calories, setCalories] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState<string>("");

  const calculateBMI = () => {
    if (weight && height) {
      const bmiValue = weight / (height / 100) ** 2;
      const roundedBmi = parseFloat(bmiValue.toFixed(2));
      setBmi(roundedBmi);
      setBmiCategory(getBMICategory(roundedBmi));
    }
  };

  const calculateCalories = () => {
    if (weight && height && age) {
      let bmr: number;
      if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }
      const calorieValue = bmr * parseFloat(activityLevel);
      setCalories(parseFloat(calorieValue.toFixed(0)));
    }
  };

  const handleCalculate = () => {
    calculateBMI();
    calculateCalories();
  };

  const getBMICategory = (bmi: number): string => {
    if (bmi < 18.5) {
      return "نقصان في الوزن";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "وزن طبيعي";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "وزن زائد";
    } else if (bmi >= 30 && bmi < 34.9) {
      return "السمنة من الدرجة الأولى";
    } else if (bmi >= 35 && bmi < 39.9) {
      return "السمنة من الدرجة الثانية";
    } else {
      return "السمنة المفرطة";
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg rtl text-right my-5">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        <FontAwesomeIcon icon={faAppleAlt} className="text-green-500 px-1" />
        حاسبة مؤشر كتلة الجسم والسعرات الحرارية
      </h2>
      {/* حقول الإدخال */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 items-center">
          <FontAwesomeIcon icon={faWeight} className="text-sky-500 px-1" />
          الوزن (كجم):
        </label>
        <input
          type="number"
          value={weight}
          onChange={(e) =>
            setWeight(e.target.value ? parseFloat(e.target.value) : "")
          }
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-600 focus:border-sky-600"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 items-center">
          <FontAwesomeIcon icon={faRulerVertical} className="text-sky-600 px-1" />
          الطول (سم):
        </label>
        <input
          type="number"
          value={height}
          onChange={(e) =>
            setHeight(e.target.value ? parseFloat(e.target.value) : "")
          }
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-600 focus:border-sky-600"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 items-center">
          <FontAwesomeIcon icon={faUser} className="text-sky-500 px-1" />
          العمر:
        </label>
        <input
          type="number"
          value={age}
          onChange={(e) =>
            setAge(e.target.value ? parseFloat(e.target.value) : "")
          }
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 items-center">
          <FontAwesomeIcon icon={faDumbbell} className="text-sky-500 px-1" />
          الجنس:
        </label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
        >
          <option value="male">ذكر</option>
          <option value="female">أنثى</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 items-center">
          <FontAwesomeIcon icon={faAppleAlt} className="text-green-500 px-1" />
          مستوى النشاط:
        </label>
        <select
          value={activityLevel}
          onChange={(e) => setActivityLevel(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-blue-500"
        >
          <option value="1.2">قليل الحركة (لا يوجد تمارين)</option>
          <option value="1.375">نشاط خفيف (تمارين خفيفة 1-3 أيام في الأسبوع)</option>
          <option value="1.55">نشاط متوسط (تمارين متوسطة 3-5 أيام في الأسبوع)</option>
          <option value="1.725">نشاط عالي (تمارين شاقة 6-7 أيام في الأسبوع)</option>
          <option value="1.9">نشاط عالي جداً (تمارين شاقة جداً أو عمل بدني)</option>
        </select>
      </div>
      <button
        onClick={handleCalculate}
        className="w-full py-2 px-4 bg-sky-600 text-white font-bold rounded-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
      >
        <FontAwesomeIcon icon={faDumbbell} className="px-1" />
        احسب
      </button>
      <div className="mt-6">
        {bmi !== null && (
          <div className="mb-2">
            <p className="text-gray-800">
              <FontAwesomeIcon icon={faDumbbell} className="text-sky-500 px-1" />
              مؤشر كتلة الجسم الخاص بك: <span className="font-bold">{bmi}</span>
            </p>
            <p className="text-gray-700">
              الفئة: <span className="font-bold">{bmiCategory}</span>
            </p>
          </div>
        )}
        {calories !== null && (
          <p className="text-gray-800">
            <FontAwesomeIcon icon={faAppleAlt} className="text-green-500 px-1" />
            السعرات الحرارية اليومية:{" "}
            <span className="font-bold">{calories} سعر حراري</span>
          </p>
        )}
      </div>
    </div>
  );
};

// ----------------------- مكوّن نموذج الاتصال (للاستشارة) -----------------------
const ContactForm: React.FC = () => {
  const [birthDate, setBirthDate] = useState<Dayjs | null>(null);

  // استخدم هوك useForm من Formspree
  const [state, handleSubmit] = useForm("mleyqqlg");

  if (state.succeeded) {
    // إذا تم الإرسال بنجاح، عرض رسالة تأكيد
    return (
      <div className="p-6 mt-20 max-w-md mx-auto bg-white shadow-md rounded-lg text-center my-5">
        <h2 className="text-2xl font-bold mb-4 text-green-600">تم الإرسال بنجاح!</h2>
        <p className="text-lg text-gray-600 mb-8">
          شكراً لمشاركتك بياناتك، سنقوم بالتواصل معك قريباً.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="w-full py-2 px-4 bg-sky-600 text-white font-bold rounded-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
        >
          عودة للصفحة الرئيسية
        </button>
      </div>
    );
  }

  return (
    <div className="p-6  max-w-md mx-auto bg-white shadow-md rounded-lg rtl text-right my-5">
      <h1 className="text-2xl text-center font-bold mb-4 text-sky-600">
        لحجز موعد افتراضي
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        لاستشارة أخصائي تغذية علاجية شاركنا بياناتك
      </p>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 items-center">
            <FontAwesomeIcon icon={faIdCard} className="text-sky-600 px-1" />
            الهوية الوطنية:
          </label>
          <input
            type="text"
            name="national_id"
            required
            placeholder="أدخل رقم الهوية الوطنية"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:outline-none focus:ring-sky-600 focus:border-sky-600"
          />
          <ValidationError
            field="national_id"
            prefix="الهوية الوطنية"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 items-center">
            <FontAwesomeIcon icon={faUser} className="text-sky-600 px-1" />
            الاسم:
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="أدخل اسمك الكامل"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:outline-none focus:ring-sky-600 focus:border-sky-600"
          />
          <ValidationError
            field="name"
            prefix="الاسم"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 items-center">
            العمر:
          </label>
          <input
            type="number"
            name="age"
            required
            placeholder="أدخل عمرك"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:outline-none focus:ring-sky-600 focus:border-sky-600"
          />
          <ValidationError
            field="age"
            prefix="العمر"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 items-center">
            <FontAwesomeIcon icon={faVenusMars} className="text-sky-600 px-1" />
            الجنس:
          </label>
          <select
            name="gender"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:outline-none focus:ring-sky-600 focus:border-sky-600"
          >
            <option value="">اختر الجنس</option>
            <option value="ذكر">ذكر</option>
            <option value="أنثى">أنثى</option>
          </select>
          <ValidationError
            field="gender"
            prefix="الجنس"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-sky-600 mb-1 items-center">
            <FontAwesomeIcon icon={faCalendarDay} className="px-1" />
            تاريخ الميلاد:
          </label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={birthDate}
              onChange={(newValue: Dayjs | null) => setBirthDate(newValue)}
              views={["year", "month", "day"]}
              slotProps={{
                textField: {
                  required: true,
                  placeholder: "اختر تاريخ ميلادك",
                  className: "w-full bg-gray-50 mt-1",
                  inputProps: {
                    className:
                      "px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-600 focus:border-sky-600",
                  },
                },
              }}
            />
          </LocalizationProvider>
          {/* هذا الحقل المخفي لإرسال تاريخ الميلاد بصيغة YYYY-MM-DD */}
          <input
            type="hidden"
            name="birth_date"
            value={birthDate ? birthDate.format("YYYY-MM-DD") : ""}
          />
          <ValidationError
            field="birth_date"
            prefix="تاريخ الميلاد"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 items-center">
            <FontAwesomeIcon icon={faPhone} className="text-sky-600 px-1" />
            رقم الهاتف:
          </label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="أدخل رقم هاتفك"
            dir="rtl"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:outline-none focus:ring-sky-600 focus:border-sky-600 text-right"
          />
          <ValidationError
            field="phone"
            prefix="رقم الهاتف"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1 items-center">
            <FontAwesomeIcon icon={faStethoscope} className="text-sky-600 px-1" />
            سبب الاستشارة:
          </label>
          <input
            type="text"
            name="consultation_reason"
            required
            placeholder="أدخل سبب الاستشارة"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:outline-none focus:ring-sky-600 focus:border-sky-600"
          />
          <ValidationError
            field="consultation_reason"
            prefix="سبب الاستشارة"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="col-span-2 mt-4 w-full py-2 px-4 bg-sky-600 text-white font-bold rounded-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
        >
          {state.submitting ? "جار الإرسال..." : "إرسال"}
        </button>
      </form>
    </div>
  );
};

// ----------------------- المكوّن الرئيسي لعرض الاثنين معاً -----------------------
const CombinedPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* يمكنك ترتيب المكوّنين كما تريد */}
      <BMICalculator />
      <ContactForm />
    </div>
  );
};

export default CombinedPage;
