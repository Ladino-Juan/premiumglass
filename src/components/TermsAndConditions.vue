<template>
    <div class="max-w-4xl mx-auto p-6 md:p-8 text-gray-800 leading-relaxed bg-white rounded-lg shadow-sm">
      <header class="mb-8 border-b pb-6">
        <h1 class="text-3xl md:text-4xl font-bold text-[#343D33]">תנאי שימוש ומדיניות פרטיות</h1>
        <p class="mt-2 text-lg text-gray-600">עדכון אחרון: {{ currentDate }}</p>
      </header>
  
      <section class="mb-10">
        <p class="mb-6 text-lg">
          ברוכים הבאים לאתר פרימיום גלאס. תנאים אלו מגדירים את החובות והזכויות שלכם כלקוחות הפוטנציאליים או כלקוחות שלנו.
          השימוש באתר מהווה הסכמה מצדכם לכל התנאים המפורטים להלן. במידה ואינכם מסכימים לתנאים אלו,
          אנא הימנעו משימוש באתר.
        </p>
        
        <div class="bg-[#475F45]/10 p-4 rounded-lg border border-[#475F45]/20">
          <h2 class="text-xl font-semibold text-[#475F45] mb-2">הערה חשובה:</h2>
          <p class="text-[#343D33]">
            אנו ממליצים לקרוא בעיון את כל התנאים. במידה ויש לכם שאלות, ניתן לפנות אלינו דרך פרטי
            ההתקשרות המופיעים באתר.
          </p>
        </div>
      </section>
  
      <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-4 text-[#343D33] pb-2 border-b">1. הגדרות</h2>
        <ul class="list-disc pl-6 space-y-2">
          <li><strong>"אתר"</strong> - אתר האינטרנט של פרימיום גלאס וכל תת-דפים שלו.</li>
          <li><strong>"לקוח"</strong> - כל גולש המבקר או משתמש באתר או מזמין שירותי זכוכית.</li>
          <li><strong>"שירות"</strong> - שירותי התקנה ועיצוב מקלחוני זכוכית, מעקות זכוכית ומוצרי זכוכית מותאמים אישית.</li>
        </ul>
      </section>
  
      <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-4 text-[#343D33] pb-2 border-b">2. איסוף ושימוש במידע</h2>
        <div class="space-y-4">
          <h3 class="text-xl font-medium mt-4">2.1 מידע שנאסף</h3>
          <p>
            האתר אוסף מידע באופן הבא:
          </p>
          <ul class="list-disc pl-6 space-y-2">
            <li>פרטי יצירת קשר לצורך קבלת הצעות מחיר והזמנת שירותים</li>
            <li>פרטי מיקום לצורך מתן שירות והערכת עלויות</li>
            <li>מידע טכני אוטומטי (כולל כתובת IP, סוג דפדפן) לצורכי אבטחה</li>
          </ul>
  
          <h3 class="text-xl font-medium mt-4">2.2 שימוש במידע</h3>
          <p>
            אנו משתמשים במידע שנאסף למטרות הבאות:
          </p>
          <ul class="list-disc pl-6 space-y-2">
            <li>מתן שירותי התקנה ותמיכה ללקוחות</li>
            <li>הכנת הצעות מחיר והערכות מותאמות אישית</li>
            <li>שיפור איכות השירות והמוצרים שלנו</li>
            <li>עמידה בדרישות חוקיות ובטיחותיות</li>
          </ul>
        </div>
      </section>

    </div>
  </template>
  
  <script>
  export default {
    name: 'TermsAndConditions',
    computed: {
      currentDate() {
        return new Date().toLocaleDateString('he-IL')
      },
      currentYear() {
        return new Date().getFullYear()
      }
    }
  }
  </script>