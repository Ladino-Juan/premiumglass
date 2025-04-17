<template>
  <header class="relative">
    <div class="container px-6 py-6 mx-auto lg:flex lg:items-center lg:justify-between">
      <div class="flex items-center justify-between">
        <a class="flex items-center -mx-1" href="#">
          <div class="mx-1 text-gray-700">
            <h3 class="uppercase tracking-[0.15em] font-medium">PREMIUM GLASS</h3>
            <p class="text-xs italic">מקלחוני זכוכית בהתאמה אישית</p>
          </div>
        </a>
  
        <button class="text-gray-600 lg:hidden" @click="isOpen = !isOpen">
          <span class="text-2xl">☰</span>
        </button>
      </div>

      <div :class="[isOpen ? 'opacity-100' : 'opacity-0 -translate-x-full']" class="absolute lg:static transition-all duration-300 w-full py-12 lg:py-0 left-1/2 lg:opacity-100 lg:translate-x-0 lg:bg-transparent lg:w-auto -translate-x-1/2 top-20 sm:top-24 bg-[#475F45]">
        <nav class="flex flex-col items-center space-y-8 lg:flex-row lg:space-y-0 lg:-mx-4">
 
  
            <a href="#" class="font-medium text-white lg:text-[#475F45] lg:hover:text-gray-400 lg:mx-4">
                גלריה
            </a>
  
            <a href="#" class="font-medium text-white lg:text-[#475F45] lg:hover:text-gray-400 lg:mx-4">
                אודותינו
            </a>
  
            <a href="#" class="font-medium text-white lg:text-[#475F45] lg:hover:text-gray-400 lg:mx-4">
                צור קשר
            </a>
  
            <a class="px-8 py-2.5 text-white lg:text-[#475F45] lg:hover:bg-[#475F45] lg:hover:text-white duration-300 transition-colors font-medium lg:mx-4 border-2 lg:border-[#475F45] border-white" href="#">לקבלת הצעת מחיר</a>
        </nav>
      </div>
    </div>
  </header>

  <section class="container flex flex-col items-center px-6 py-12 mx-auto lg:flex-row">
      <div class="lg:w-1/2">
        <h1 class="max-w-xl font-serif text-4xl font-medium tracking-wide text-[#343D33] md:text-6xl">מקלחוני זכוכית בהתאמה אישית</h1>

        <p class="max-w-lg mt-4 text-gray-500">פרימיום גלאס - מומחים בעבודות זכוכית בהתאמה אישית. הזכוכית שלנו היא לא רק חומר - היא אמנות.</p>
        
        <div class="mt-6 sm:flex sm:items-center">
          <a href="#" class="bg-[#475F45] hover:bg-[#475F45]/80 duration-300 transition-colors border-2 border-[#475F45] px-6 block text-center py-3 uppercase text-sm font-bold leading-4 tracking-widest text-white">
            צור קשר
          </a>

          <a href="#" class="border-2 text-sm duration-300 transition-colors hover:bg-[#475F45] hover:text-white font-bold leading-4 mt-4 sm:mt-0 tracking-widest text-[#475F45] sm:mx-4 border-[#475F45] px-6 block text-center py-3 uppercase">
            גלריה
          </a>
        </div>
      </div>

      <div class="h-[38rem] mt-12 lg:mt-0 w-full mx-auto max-w-md overflow-hidden rounded-t-full outline outline-4 outline-offset-4 outline-[#475F45]/40">
        <img class="object-cover w-full h-full rounded-t-full" src="https://www.bathroommountain.co.uk/img/1900/1900/resize/catalog/product/4/1/41038-1100-Vienna-Easy-Clean-8mm-Hinged-Shower-Door-1200mm_2.jpg" alt="מקלחון זכוכית מותאם אישית" />
      </div>
  </section>

  <section class="bg-[#343D33] mt-12">
    <div class="container flex flex-col px-6 py-16 mx-auto mt-12">
      <div class="order-2 mt-8 lg:order-1 lg:mt-0 lg:flex lg:items-center lg:-mx-6">
        <img class="object-cover w-full lg:w-1/2 lg:mx-6 h-72 lg:h-96 rounded-lg" src="https://aldoraglass.com/wp-content/uploads/2022/04/Heavy-Glass-Shower-Enclosure.jpg" alt="מקלחון זכוכית יוקרתי">
        
        <div class="mt-8 lg:w-1/2 lg:mx-6 lg:mt-0">
          <h3 class="font-serif text-2xl text-white md:text-4xl lg:text-5xl">
            פתרונות זכוכית בהתאמה אישית
          </h3>

          <p class="mt-4 text-gray-200">
            אנו מתמחים בביצוע עבודות זכוכית ברמה הגבוהה ביותר, עם דגש על איכות, דיוק ועיצוב מרשים. ההתמחות שלנו כוללת מקלחונים בהתאמה אישית עם עיצוב אלגנטי ועמיד שמשדר יוקרה ונוחות.
          </p>
          
          <a class="inline-flex px-6 py-3 mt-6 text-white border-2 border-white hover:bg-[#475F45] duration-300 transition-colors" href="#">
            קרא עוד
          </a>
        </div>
      </div>

        <img class="order-1 object-cover lg:order-2 w-ful h-72 lg:h-96 lg:mt-12 rounded-lg" src="https://hillcrest-glass.com/wp-content/uploads/2021/04/get-started-shower-project.jpg" alt="עבודות זכוכית">
    </div>
  </section>

  <section class="container px-6 py-16 mx-auto">
    <div class="text-center mb-16">
        <h3 class="text-4xl font-light text-[#343D33] mb-4">עבודות נבחרות</h3>
        <div class="w-24 h-1 bg-[#475F45] mx-auto"></div>
    </div>
    
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Featured Project -->
        <div class="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <img class="object-cover w-full h-96 transform group-hover:scale-105 transition-transform duration-500" 
                 src="https://goglass.co.uk/wp-content/uploads/2022/12/CRL-Glass-shower.jpg" 
                 alt="מקלחון זכוכית">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 class="text-2xl font-medium mb-2">מקלחוני זכוכית יוקרתיים</h2>
                <p class="text-gray-200 mb-4">עיצוב אלגנטי ועמיד שמשדר יוקרה ונוחות</p>
            </div>
        </div>

        <!-- Project 1 -->
        <div class="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <img class="object-cover w-full h-96 transform group-hover:scale-105 transition-transform duration-500" 
                 src="https://www.easiahome.com/wp-content/uploads/2023/01/glass-shower.jpg" 
                 alt="מעקות זכוכית">
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
    </div>

    <div class="text-center mt-16">
        <button class="px-8 py-3 border-2 border-[#475F45] text-[#475F45] hover:bg-[#475F45] hover:text-white transition-colors duration-300 font-medium">
            צפו בכל הפרויקטים
        </button>
    </div>
</section>

  <footer class="bg-[#414840]">
    <div class="container px-6 py-8 mx-auto space-y-8 lg:space-y-0 lg:flex lg:justify-between">
      <div>
        <a class="flex items-center -mx-2" href="#">
          <div class="mx-2 text-white">
            <h3 class="font-medium tracking-widest uppercase">PREMIUM GLASS</h3>
            <p class="mt-1 text-xs italic leading-3 tracking-wide">מקלחוני זכוכית בהתאמה אישית</p>
          </div>
        </a>

        <p class="max-w-lg mt-6 leading-relaxed text-white">
          פרימיום גלאס - מומחים בעבודות זכוכית בהתאמה אישית. הזכוכית היא לא רק חומר - היא אמנות. אנו מלווים את הלקוח משלב התכנון ועד להתקנה מקצועית.
        </p>
      </div>

      <div class="flex flex-col space-y-4">
        <a href="#" class="text-white hover:text-gray-300">בית</a>
        <a href="#" class="text-white hover:text-gray-300">מוצרים</a>
        <a href="#" class="text-white hover:text-gray-300">גלריה</a>
        <a href="#" class="text-white hover:text-gray-300">אודותינו</a>
        <a href="#" class="text-white hover:text-gray-300">צור קשר</a>
        <a href="#" class="text-white hover:text-gray-300">לקבלת הצעת מחיר</a>
      </div>
      
      <div>
        <p class="font-medium text-white">יצירת קשר</p>

        <div class="flex mt-6 -mx-4">
          <a class="mx-4 text-white hover:text-gray-300" href="tel:+972501234567">
            <span class="text-xl">📞 050-1234567</span>
          </a>

          <a class="mx-4 text-white hover:text-gray-300" href="mailto:info@premiumglass.co.il">
            <span class="text-xl">✉️ info@premiumglass.co.il</span>
          </a>
        </div>
      </div>
    </div>
    
    <p class="w-full py-6 mx-auto text-white text-center bg-[#343D33]">
      &copy; 2025 PREMIUM GLASS. כל הזכויות שמורות.
    </p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  }
}
</script>