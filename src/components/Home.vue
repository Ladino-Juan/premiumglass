<template>
  <section class="container flex flex-col items-center px-6 py-12 mx-auto lg:flex-row">
    <div class="lg:w-1/2">
      <h1 class="max-w-xl font-serif text-4xl font-medium tracking-wide text-[#343D33] md:text-6xl">מקלחוני זכוכית
        בהתאמה אישית</h1>

      <p class="max-w-lg mt-4 text-gray-500">פרימיום גלאס - מומחים בעבודות זכוכית בהתאמה אישית. הזכוכית שלנו היא לא רק
        חומר - היא אמנות.</p>

      <div class="mt-6 sm:flex sm:items-center">
        <a href="http://wa.link/38hk2w" target="_blank" rel="noopener noreferrer"
          class="bg-[#475F45] rounded-lg hover:bg-[#475F45]/80 duration-300 transition-colors border-2 border-[#475F45] px-6 block text-center py-3 uppercase text-sm font-bold leading-4 tracking-widest text-white">
          צור קשר
        </a>

        <a href="/#gallery"
          class="border-2 text-sm rounded-lg duration-300 transition-colors hover:bg-[#475F45] hover:text-white font-bold leading-4 mt-4 sm:mt-0 tracking-widest text-[#475F45] sm:mx-4 border-[#475F45] px-6 block text-center py-3 uppercase">
          גלריה
        </a>
      </div>
    </div>

    <div
      class="h-[38rem] mt-12 lg:mt-0 w-full mx-auto max-w-md overflow-hidden rounded-t-full outline outline-4 outline-offset-4 outline-[#475F45]/40">
      <img class="object-cover w-full h-full rounded-t-full"
        src="https://www.bathroommountain.co.uk/img/1900/1900/resize/catalog/product/4/1/41038-1100-Vienna-Easy-Clean-8mm-Hinged-Shower-Door-1200mm_2.jpg"
        alt="מקלחון זכוכית מותאם אישית" />
    </div>
  </section>

  <section id="about" class="bg-[#343D33] mt-12">
    <div class="container flex flex-col px-6 py-16 mx-auto mt-12">
      <div class="order-2 mt-8 lg:order-1 lg:mt-0 lg:flex lg:items-center lg:-mx-6">
        <img class="object-cover w-full lg:w-1/2 lg:mx-6 h-72 lg:h-96 rounded-lg"
          src="https://aldoraglass.com/wp-content/uploads/2022/04/Heavy-Glass-Shower-Enclosure.jpg"
          alt="מקלחון זכוכית יוקרתי">

        <div class="mt-8 lg:w-1/2 lg:mx-6 lg:mt-0">
          <h3 class="font-serif text-2xl text-white md:text-4xl lg:text-5xl">
            פתרונות זכוכית בהתאמה אישית
          </h3>

          <p class="mt-4 text-gray-200">
            אנו יצרנים המתמחים בביצוע עבודות זכוכית ברמה הגבוהה ביותר, עם דגש על איכות, דיוק ועיצוב מרשים. ההתמחות שלנו
            כוללת מקלחונים בהתאמה אישית עם עיצוב אלגנטי ועמיד שמשדר יוקרה ונוחות.
          </p>

          <!-- Additional content that will be shown when "Read More" is clicked -->
          <div v-if="showMoreAbout" class="mt-4 text-gray-200">
            <p class="mb-4">
              עם למעלה מ-15 שנות ניסיון בתחום, אנו מביאים איתנו מומחיות טכנית ויצירתיות עיצובית ליצירת פתרונות זכוכית
              ייחודיים
              המותאמים בדיוק לצרכים שלכם. הצוות שלנו מורכב מאמני זכוכית מוסמכים המשלבים בין מסורת לעדכניות.
            </p>
            <p class="mb-4">
              אנו משתמשים בחומרי הגלם האיכותיים ביותר בשוק, כולל זכוכית מחוסמת בעוביים שונים (6-12 מ"מ) עם אפשרויות
              טיפול משטח מתקדמות כמו Easy-Clean, Anti-Slip ועוד.
            </p>
            <ul class="list-disc pl-5 space-y-2">
              <li>התקנה מקצועית על ידי צוות מוסמך</li>
              <li>אחריות מלאה על כל המוצרים</li>
              <li>שירותי תכנון ותכנון חינם</li>
              <li>מערכות סגירה שקטות ועמידות</li>
            </ul>
          </div>

          <button @click="toggleAbout"
            class="mt-6 px-6 py-2 rounded-lg border-2 border-white text-white hover:bg-white hover:text-[#343D33] transition-colors duration-300 font-medium">
            {{ showMoreAbout ? 'הצג פחות' : 'קרא עוד' }}
          </button>
        </div>
      </div>

      <img class="order-1 object-cover lg:order-2 w-ful h-72 lg:h-96 lg:mt-12 rounded-lg"
        src="https://hillcrest-glass.com/wp-content/uploads/2021/04/get-started-shower-project.jpg" alt="עבודות זכוכית">
    </div>
  </section>

  <section id="gallery" class="container px-6 py-16 mx-auto">
    <div class="text-center mb-16">
      <h3 class="text-4xl font-light text-[#343D33] mb-4">עבודות נבחרות</h3>
      <div class="w-24 h-1 bg-[#475F45] mx-auto"></div>
    </div>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <!-- Featured Project -->
      <div class="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
        <img class="object-cover w-full h-96 transform group-hover:scale-105 transition-transform duration-500"
          src="https://goglass.co.uk/wp-content/uploads/2022/12/CRL-Glass-shower.jpg" alt="מקלחון זכוכית">
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h2 class="text-2xl font-medium mb-2">מקלחוני זכוכית יוקרתיים</h2>
          <p class="text-gray-200 mb-4">עיצוב אלגנטי ועמיד שמשדר יוקרה ונוחות</p>
        </div>
      </div>

      <!-- Project 1 -->
      <div class="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
        <img class="object-cover w-full h-96 transform group-hover:scale-105 transition-transform duration-500"
          src="https://www.easiahome.com/wp-content/uploads/2023/01/glass-shower.jpg" alt="מעקות זכוכית">
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h2 class="text-2xl font-medium mb-2">מעקות זכוכית</h2>
          <p class="text-gray-200 mb-4">שילוב מושלם בין בטיחות לעיצוב מודרני</p>
        </div>
      </div>

      <!-- Project 2 -->
      <div class="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
        <img class="object-cover w-full h-96 transform group-hover:scale-105 transition-transform duration-500"
          src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="חיפויי קיר זכוכית">
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h2 class="text-2xl font-medium mb-2">חיפויי קיר זכוכית</h2>
          <p class="text-gray-200 mb-4">פתרון עיצובי מודרני למראה נקי ומרווח</p>
        </div>
      </div>

      <!-- Hidden Projects (will be shown when button is clicked) -->
      <div v-if="showAllProjects"
        class="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
        <img class="object-cover w-full h-96 transform group-hover:scale-105 transition-transform duration-500"
          src="https://balnearian.com/modules/ph_simpleblog/covers/32.jpg" alt="מחיצות זכוכית">
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h2 class="text-2xl font-medium mb-2">מחיצות זכוכית</h2>
          <p class="text-gray-200 mb-4">הפרדה אלגנטית עם שמירה על תחושת מרחב</p>
        </div>
      </div>

      <div v-if="showAllProjects"
        class="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
        <img class="object-cover w-full h-96 transform group-hover:scale-105 transition-transform duration-500"
          src="https://www.decorabano.com/inspiracion/wp-content/uploads/2020/12/cares_1648809023-5087864.jpg"
          alt="מראות מותאמות">
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h2 class="text-2xl font-medium mb-2">מראות מותאמות</h2>
          <p class="text-gray-200 mb-4">מראות בהתאמה אישית לכל חלל</p>
        </div>
      </div>

      <div v-if="showAllProjects"
        class="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
        <img class="object-cover w-full h-96 transform group-hover:scale-105 transition-transform duration-500"
          src="https://eliteglasscurtains.com/wp-content/uploads/2015/08/balustrade-gal-prt-01.jpg" alt="מדרגות זכוכית">
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h2 class="text-2xl font-medium mb-2">מדרגות זכוכית</h2>
          <p class="text-gray-200 mb-4">מראה אוורירי ומודרני לחללים יוקרתיים</p>
        </div>
      </div>
    </div>

    <div class="text-center mt-16">
      <button @click="toggleProjects"
        class="px-8 py-3 rounded-lg border-2 border-[#475F45] text-[#475F45] hover:bg-[#475F45] hover:text-white transition-colors duration-300 font-medium">
        {{ showAllProjects ? 'הצג פחות' : 'צפו בכל הפרויקטים' }}
      </button>
    </div>
  </section>



  <!-- WhatsApp Button -->
  <a href="http://wa.link/38hk2w" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Contacto"
    class="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6 bg-green-500 text-white rounded-full shadow-lg p-4 hover:bg-green-600 transition-all duration-300">
    <!-- Efecto Ping -->
    <span class="absolute inset-0 flex items-center justify-center">
      <span class="absolute w-16 h-16 rounded-full bg-green-500 opacity-25 animate-ping"></span>
    </span>

    <!-- Icono de WhatsApp -->
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 32 32">
      <path fill="#FFFFFF" fillRule="evenodd"
        d="M 24.503906 7.503906 C 22.246094 5.246094 19.246094 4 16.050781 4 C 9.464844 4 4.101563 9.359375 4.101563 15.945313 C 4.097656 18.050781 4.648438 20.105469 5.695313 21.917969 L 4 28.109375 L 10.335938 26.445313 C 12.078125 27.398438 14.046875 27.898438 16.046875 27.902344 L 16.050781 27.902344 C 22.636719 27.902344 27.996094 22.542969 28 15.953125 C 28 12.761719 26.757813 9.761719 24.503906 7.503906 Z M 16.050781 25.882813 L 16.046875 25.882813 C 14.265625 25.882813 12.515625 25.402344 10.992188 24.5 L 10.628906 24.285156 L 6.867188 25.269531 L 7.871094 21.605469 L 7.636719 21.230469 C 6.640625 19.648438 6.117188 17.820313 6.117188 15.945313 C 6.117188 10.472656 10.574219 6.019531 16.054688 6.019531 C 18.707031 6.019531 21.199219 7.054688 23.074219 8.929688 C 24.949219 10.808594 25.980469 13.300781 25.980469 15.953125 C 25.980469 21.429688 21.523438 25.882813 16.050781 25.882813 Z M 21.496094 18.445313 C 21.199219 18.296875 19.730469 17.574219 19.457031 17.476563 C 19.183594 17.375 18.984375 17.328125 18.785156 17.625 C 18.585938 17.925781 18.015625 18.597656 17.839844 18.796875 C 17.667969 18.992188 17.492188 19.019531 17.195313 18.871094 C 16.894531 18.722656 15.933594 18.40625 14.792969 17.386719 C 13.90625 16.597656 13.304688 15.617188 13.132813 15.320313 C 12.957031 15.019531 13.113281 14.859375 13.261719 14.710938 C 13.398438 14.578125 13.5625 14.363281 13.710938 14.1875 C 13.859375 14.015625 13.910156 13.890625 14.011719 13.691406 C 14.109375 13.492188 14.058594 13.316406 13.984375 13.167969 C 13.910156 13.019531 13.3125 11.546875 13.0625 10.949219 C 12.820313 10.367188 12.574219 10.449219 12.390625 10.4375 C 12.21875 10.429688 12.019531 10.429688 11.820313 10.429688 C 11.621094 10.429688 11.296875 10.503906 11.023438 10.804688 C 10.75 11.101563 9.980469 11.824219 9.980469 13.292969 C 9.980469 14.761719 11.050781 16.183594 11.199219 16.382813 C 11.347656 16.578125 13.304688 19.59375 16.300781 20.886719 C 17.011719 21.195313 17.566406 21.378906 18 21.515625 C 18.714844 21.742188 19.367188 21.710938 19.882813 21.636719 C 20.457031 21.550781 21.648438 20.914063 21.898438 20.214844 C 22.144531 19.519531 22.144531 18.921875 22.070313 18.796875 C 21.996094 18.671875 21.796875 18.597656 21.496094 18.445313 Z">
      </path>
    </svg></a>
</template>

<script>
export default {
  data() {
    return {
      showAllProjects: false,
      showMoreAbout: false, 
    }
  },
  methods: {
    toggleProjects() {
      this.showAllProjects = !this.showAllProjects;
    },
    toggleAbout() {
      this.showMoreAbout = !this.showMoreAbout; // <-- ADD THIS
    },
  }
}
</script>