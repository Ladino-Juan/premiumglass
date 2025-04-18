<template>
    <div class="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex items-start gap-4">
      <!-- Botón principal -->
      <button
        @click="isOpen = !isOpen"
        class="bg-[#475F45] text-white p-3 rounded-full shadow-lg hover:bg-[#343D33] transition-colors"
        aria-label="תפריט נגישות"
      >
        <RiWheelchairFill v-if="!isOpen" class="w-6 h-6" />
        <RiCloseLine v-else class="w-6 h-6" />
      </button>
  
      <!-- Panel de opciones -->
      <div v-if="isOpen" class="bg-white rounded-lg shadow-lg p-4 flex flex-col gap-4" role="menu">
        <!-- Control de tamaño de texto -->
        <div class="flex flex-col gap-2">
          <span class="text-sm font-medium text-gray-700">גודל טקסט</span>
          <div class="flex gap-2">
            <button
              @click="decreaseFontSize"
              class="p-2 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
              aria-label="הקטן טקסט"
            >
              <RiSubtractLine />
            </button>
            <button
              @click="increaseFontSize"
              class="p-2 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
              aria-label="הגדל טקסט"
            >
              <RiAddLine />
            </button>
          </div>
        </div>
  
        <!-- Control de contraste -->
        <div class="flex flex-col gap-2">
          <span class="text-sm font-medium text-gray-700">ניגודיות</span>
          <button
            @click="toggleHighContrast"
            :class="[
              'p-2 rounded transition-colors',
              highContrast ? 'bg-[#475F45] text-white' : 'bg-gray-100 hover:bg-gray-200'
            ]"
            aria-label="שנה ניגודיות"
          >
            <RiContrastFill />
          </button>
        </div>
  
        <!-- Control de cursor -->
        <div class="flex flex-col gap-2">
          <span class="text-sm font-medium text-gray-700">סמן גדול</span>
          <button
            @click="toggleBigCursor"
            :class="[
              'p-2 rounded transition-colors',
              bigCursor ? 'bg-[#475F45] text-white' : 'bg-gray-100 hover:bg-gray-200'
            ]"
            aria-label="שנה גודל סמן"
          >
            <RiCursorFill />
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import {
    RiWheelchairFill,
    RiCloseLine,
    RiAddLine,
    RiSubtractLine,
    RiContrastFill,
    RiCursorFill
  } from '@remixicon/vue'
  
  export default {
    components: {
      RiWheelchairFill,
      RiCloseLine,
      RiAddLine,
      RiSubtractLine,
      RiContrastFill,
      RiCursorFill
    },
    setup() {
      const isOpen = ref(false)
      const fontSize = ref(100)
      const highContrast = ref(false)
      const bigCursor = ref(false)
  
      const increaseFontSize = () => {
        if (fontSize.value < 150) {
          fontSize.value += 10
          document.documentElement.style.fontSize = `${fontSize.value}%`
        }
      }
  
      const decreaseFontSize = () => {
        if (fontSize.value > 90) {
          fontSize.value -= 10
          document.documentElement.style.fontSize = `${fontSize.value}%`
        }
      }
  
      const toggleHighContrast = () => {
        highContrast.value = !highContrast.value
        document.documentElement.classList.toggle('high-contrast')
      }
  
      const toggleBigCursor = () => {
        bigCursor.value = !bigCursor.value
        document.documentElement.classList.toggle('big-cursor')
      }
  
      return {
        isOpen,
        fontSize,
        highContrast,
        bigCursor,
        increaseFontSize,
        decreaseFontSize,
        toggleHighContrast,
        toggleBigCursor
      }
    }
  }
  </script>
  
  <style>
  /* Estilos para el modo de alto contraste */
  .high-contrast {
    filter: contrast(150%);
  }
  
  /* Estilos para el cursor grande */
  .big-cursor {
    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="%23000000"><path d="M13.64,21.97C13.14,22.21 12.54,22 12.31,21.5L10.13,16.76L7.62,18.78C7.45,18.92 7.24,19 7,19A1,1 0 0,1 6,18V3A1,1 0 0,1 7,2C7.24,2 7.47,2.09 7.64,2.23L7.65,2.22L19.14,11.86C19.57,12.22 19.62,12.85 19.27,13.27C19.12,13.45 18.91,13.57 18.7,13.61L15.54,14.23L17.74,18.96C18,19.46 17.76,20.05 17.26,20.28L13.64,21.97Z"/></svg>') 16 16, auto;
  }
  
  /* Transiciones suaves para los cambios */
  html {
    transition: font-size 0.3s ease;
  }
  
  body {
    transition: filter 0.3s ease;
  }
  </style>