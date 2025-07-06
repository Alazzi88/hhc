'use client';

import React, { useState } from 'react';

type FoodItem = {
  name: string;
  calories: number; // السعرات لكل 100 جم مثلاً
};

const FOOD_DATA: FoodItem[] = [
  { name: "كبسة دجاج", calories: 215 },         // لكل 100 جم
  { name: "كبسة لحم", calories: 250 },
  { name: "كبسة سمك", calories: 170 },
  { name: "مندي دجاج", calories: 210 },
  { name: "مندي لحم", calories: 235 },
  { name: "مضغوط دجاج", calories: 220 },
  { name: "مضغوط لحم", calories: 230 },
  { name: "جريش", calories: 150 },
  { name: "قرصان", calories: 175 },
  { name: "مرقوق", calories: 170 },
  { name: "مراصيع", calories: 130 },
  { name: "سمبوسة جبن", calories: 290 },       // للحبة
  { name: "سمبوسة لحم", calories: 300 },       // للحبة
  { name: "سمبوسة خضار", calories: 180 },      // للحبة
  { name: "شوربة عدس", calories: 85 },         // للكوب
  { name: "شوربة شعيرية", calories: 95 },      // للكوب
  { name: "شوربة دجاج", calories: 105 },       // للكوب
  { name: "مكرونة بالبشاميل", calories: 220 }, // لكل 100 جم
  { name: "مكرونة عادية", calories: 130 },     // لكل 100 جم
  { name: "فول", calories: 120 },              // للكوب
  { name: "فتوش", calories: 90 },              // للكوب
  { name: "تبولة", calories: 120 },            // للكوب
  { name: "سلطة خضراء", calories: 25 },        // للكوب
  { name: "سلطة سيزر", calories: 180 },        // للكوب
  { name: "شاورما دجاج", calories: 300 },      // للصحن أو الساندويتش
  { name: "شاورما لحم", calories: 350 },       // للصحن أو الساندويتش
  { name: "برجر لحم", calories: 280 },         // للحبة
  { name: "برجر دجاج", calories: 220 },        // للحبة
  { name: "بطاطس مقلية", calories: 310 },      // للكوب
  { name: "بيتزا خضار", calories: 210 },       // للقطعة
  { name: "بيتزا دجاج", calories: 230 },       // للقطعة
  { name: "بيتزا لحم", calories: 240 },        // للقطعة
  { name: "رز أبيض", calories: 130 },          // لكل 100 جم
  { name: "رز بني", calories: 120 },           // لكل 100 جم
  { name: "خبز بر", calories: 200 },           // للرغيف المتوسط
  { name: "خبز أبيض", calories: 220 },         // للرغيف المتوسط
  { name: "تمر", calories: 277 },              // لكل 100 جم
  { name: "لبن", calories: 60 },               // للكوب
  { name: "لبنة", calories: 170 },             // للكوب
  { name: "روب", calories: 80 },               // للكوب
  { name: "حليب كامل الدسم", calories: 65 },   // للكوب
  { name: "حليب قليل الدسم", calories: 50 },   // للكوب
  { name: "جبن شرائح", calories: 70 },         // للشريحة
  { name: "بيض مسلوق", calories: 75 },         // للحبة
  { name: "بيض مقلي", calories: 90 },          // للحبة
  { name: "عسل", calories: 300 },              // لكل 100 جم
  { name: "مربى", calories: 250 },             // لكل 100 جم
  { name: "فلافل", calories: 50 },             // للحبة
  { name: "حمص", calories: 150 },              // للكوب
  { name: "مشاوي لحم", calories: 275 },        // لكل 100 جم
  { name: "مشاوي دجاج", calories: 180 },       // لكل 100 جم
  { name: "كباب لحم", calories: 290 },         // لكل 100 جم
  { name: "كباب دجاج", calories: 195 },        // لكل 100 جم
  { name: "كنافة", calories: 360 },            // للقطعة
  { name: "بسبوسة", calories: 280 },           // للقطعة
  { name: "لقيمات", calories: 40 },            // للحبة
  { name: "مهلبية", calories: 110 },           // للكوب
  { name: "أرز بالحليب", calories: 130 },      // للكوب
  { name: "كيك عادي", calories: 260 },         // للقطعة
  { name: "معمول تمر", calories: 80 },         // للحبة
  { name: "شاي سادة", calories: 2 },           // للكوب
  { name: "قهوة عربية", calories: 4 },         // للكوب
  { name: "قهوة تركية", calories: 10 },        // للكوب
  { name: "نسكافيه", calories: 15 },           // للكوب
  { name: "عصير برتقال طبيعي", calories: 60 }, // للكوب
  { name: "عصير تفاح طبيعي", calories: 50 },   // للكوب
  { name: "بيبسي/مشروبات غازية", calories: 110 }, // للكوب
  // أضف مزيد من الأصناف حسب الدليل
];


type Entry = {
  name: string;
  amount: number; // كمية (جم أو قطعة)
  calories: number; // السعرات الإجمالية لهذا الإدخال
};

export default function CaloriesCalculator() {
  const [inputName, setInputName] = useState('');
  const [inputAmount, setInputAmount] = useState<number>(100);
  const [entries, setEntries] = useState<Entry[]>([]);
  const [manualCalories, setManualCalories] = useState<number | ''>('');
  const [searchResults, setSearchResults] = useState<FoodItem[]>([]);

  // بحث سريع عن الأكلة
  const handleSearch = (text: string) => {
    setInputName(text);
    if (text.trim().length === 0) {
      setSearchResults([]);
      return;
    }
    setSearchResults(
      FOOD_DATA.filter(f =>
        f.name.includes(text.trim())
      )
    );
  };

  // إضافة للأكلات المختارة
  const handleAdd = () => {
    let found = FOOD_DATA.find(f => f.name === inputName);
    let cal = 0;
    if (found) {
      // نضرب السعرات بالكمية (مثال السعرات لكل 100جم)
      cal = Math.round((inputAmount / 100) * found.calories);
    } else if (manualCalories) {
      cal = Math.round(Number(manualCalories));
    } else {
      return;
    }
    setEntries([
      ...entries,
      { name: inputName, amount: inputAmount, calories: cal }
    ]);
    setInputName('');
    setInputAmount(100);
    setManualCalories('');
    setSearchResults([]);
  };

  const totalCalories = entries.reduce((acc, item) => acc + item.calories, 0);

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg rounded-2xl p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-4 text-center">حاسبة السعرات الحرارية للأطباق</h2>

      <div className="grid gap-4">
        <input
          type="text"
          placeholder="اسم الأكلة"
          value={inputName}
          onChange={e => handleSearch(e.target.value)}
          className="border p-2 rounded w-full"
          list="foods"
        />
        {searchResults.length > 0 && (
          <div className="bg-gray-100 rounded p-2">
            <div className="font-semibold mb-1 text-gray-700 text-sm">نتائج البحث:</div>
            <ul>
              {searchResults.map(item => (
                <li
                  key={item.name}
                  className="cursor-pointer hover:bg-gray-200 p-1 rounded"
                  onClick={() => {
                    setInputName(item.name);
                    setManualCalories('');
                    setSearchResults([]);
                  }}
                >
                  {item.name} ({item.calories} سعرة لكل 100 جم)
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="الكمية (جم أو قطعة)"
            value={inputAmount}
            min={1}
            className="border p-2 rounded flex-1"
            onChange={e => setInputAmount(Number(e.target.value))}
          />
          {!FOOD_DATA.some(f => f.name === inputName) && (
            <input
              type="number"
              placeholder="السعرات (يدويًا)"
              value={manualCalories}
              min={1}
              className="border p-2 rounded flex-1"
              onChange={e => setManualCalories(e.target.value === '' ? '' : Number(e.target.value))}
            />
          )}
          <button
            className="bg-green-600 text-white rounded px-4 py-2"
            onClick={handleAdd}
          >
            إضافة
          </button>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2 text-lg">الأكلات المُضافة:</h3>
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">الأكلة</th>
              <th className="p-2">الكمية</th>
              <th className="p-2">السعرات</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((item, i) => (
              <tr key={i}>
                <td className="p-2">{item.name}</td>
                <td className="p-2">{item.amount}</td>
                <td className="p-2">{item.calories}</td>
              </tr>
            ))}
            <tr className="bg-green-100 font-bold">
              <td className="p-2" colSpan={2}>المجموع</td>
              <td className="p-2">{totalCalories}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
