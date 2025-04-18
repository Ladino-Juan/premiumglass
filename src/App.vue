
<template>
  <div>
    <!-- Header -->
    <header class="relative">
      <div class="container px-6 py-6 mx-auto lg:flex lg:items-center lg:justify-between">
        <div class="flex items-center justify-between">
          <RouterLink to="/" class="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="Premium Glass Logo" 
            class="w-12 h-12 object-contain"
          />
          <div class="text-gray-700">
            <h3 class="uppercase tracking-[0.15em] font-medium">PREMIUM GLASS</h3>
            <p class="text-xs italic">מקלחוני זכוכית בהתאמה אישית</p>
          </div>
        </RouterLink>

          <button class="text-gray-600 lg:hidden" @click="isOpen = !isOpen">
            <span class="text-2xl">☰</span>
          </button>
        </div>

        <div :class="[isOpen ? 'opacity-100' : 'opacity-0 -translate-x-full']"
          class="absolute lg:static transition-all duration-300 w-full py-12 lg:py-0 left-1/2 lg:opacity-100 lg:translate-x-0 lg:bg-transparent lg:w-auto -translate-x-1/2 top-20 sm:top-24 bg-[#475F45]">
          <nav class="flex flex-col items-center space-y-8 lg:flex-row lg:space-y-0 lg:-mx-4">


            <a href="/#gallery" class="font-medium text-white lg:text-[#475F45] lg:hover:text-gray-400 lg:mx-4">
              גלריה
            </a>

            <a href="/#about" class="font-medium text-white lg:text-[#475F45] lg:hover:text-gray-400 lg:mx-4">
              אודותינו
            </a>
            <a class="px-8 py-2.5 text-white rounded-lg lg:text-[#475F45] lg:hover:bg-[#475F45] lg:hover:text-white duration-300 transition-colors font-medium lg:mx-4 border-2 lg:border-[#475F45] border-white"
              href="http://wa.link/38hk2w" target="_blank" rel="noopener noreferrer">צור קשר</a>
          </nav>
        </div>
      </div>
    </header>
    <!-- Botón de Accesibilidad -->
    <AccessibilityButton />
    <RouterView />
    <footer class="bg-[#414840] text-white">
      <div class="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        <!-- Brand and Description -->
        <div>
          <RouterLink to="/" class="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="Premium Glass Logo" 
            class="w-12 h-12 object-contain brightness-0 invert"
          />
          <div class="text-white">
            <h3 class="font-medium tracking-widest uppercase">PREMIUM GLASS</h3>
            <p class="mt-1 text-xs italic leading-3 tracking-wide">מקלחוני זכוכית בהתאמה אישית</p>
          </div>
        </RouterLink>
          <p class="mt-6 text-sm leading-relaxed">
            בפרימיום גלאס אנו לא רק מבצעים – אנחנו גם מייצרים. מתמחים בעבודות זכוכית בהתאמה אישית ברמה הגבוהה ביותר.
            מהתכנון ועד ההתקנה – כל שלב מבוצע באיכות ללא פשרות, מתוך אהבה לאמנות שבזכוכית.
          </p>
        </div>

        <!-- Links -->
        <div class="flex flex-col space-y-4 text-sm">
          <h4 class="text-lg font-semibold mb-2">תפריט</h4>
          <a href="/#gallery" class="hover:text-gray-300 transition-colors duration-300">גלריה</a>
          <a href="/#about" class="hover:text-gray-300 transition-colors duration-300">אודותינו</a>
          <a href="http://wa.link/38hk2w" target="_blank" rel="noopener noreferrer"
            class="hover:text-gray-300 transition-colors duration-300">לקבלת הצעת מחיר</a>
          <div class="flex flex-col space-y-4">

            <RouterLink to="/terms-and-conditions" class="text-white hover:text-gray-300">תנאי שימוש</RouterLink>
          </div>
        </div>

        <!-- Contact or Extra -->
        <div class="text-sm">
          <h4 class="text-lg font-semibold mb-2">יצירת קשר</h4>
          <p>+972 50-583-8385 :טלפון</p>
          <p class="mt-4">שעות פעילות: א'-ה' 08:00–18:00</p>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="w-full bg-[#343D33] mt-10">
        <div class="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; 2025 PREMIUM GLASS. כל הזכויות שמורות.</p>
          <a href="https://bhwebs.com" target="_blank" rel="noopener noreferrer"
            class="mt-2 md:mt-0 hover:text-gray-300 transition-colors duration-300">
            נבנה על ידי BHWEBS
          </a>
        </div>
      </div>

    </footer>
  </div>
</template>

<script>
import { RouterView, RouterLink } from 'vue-router'
import AccessibilityButton from './components/AccessibilityButton.vue'  // Añade esta línea

export default {
  name: 'App',
  components: {
    RouterView,
    RouterLink,
    AccessibilityButton
  },
  data() {
    return {
      isOpen: false
    }
  }
}
</script>