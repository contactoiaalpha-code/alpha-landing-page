# 📧 Guía de Configuración de Email para Alpha Landing

## ✅ Cambios Realizados

### 1. **Email Actualizado Globalmente**

- ✅ **Footer**: `contacto@alphamexico.com.mx`
- ✅ **ContactSection**: `contacto@alphamexico.com.mx`
- ✅ **Traducciones**: Español e inglés actualizados
- ✅ **StructuredData (SEO)**: Email actualizado
- ✅ **API de contacto**: Configurada para enviar a `contacto@alphamexico.com.mx`

### 2. **Sistema de Email Configurado**

- ✅ **Resend instalado** para envío de emails
- ✅ **API mejorada** con validación y formato profesional
- ✅ **Plantilla HTML** responsive para emails
- ✅ **Modo simulación** mientras configuras las credenciales

## 🚀 Configuración Final (Paso a Paso)

### **Opción 1: Resend (RECOMENDADA - Más Fácil)**

1. **Registrate en Resend**: https://resend.com/
2. **Obtén tu API Key** desde el dashboard
3. **Crea el archivo `.env.local`** en la raíz del proyecto:

```bash
# Copia el archivo de ejemplo
cp .env.local.example .env.local
```

4. **Edita `.env.local`** y agrega tu API key:

```env
RESEND_API_KEY=re_tu_api_key_real_aqui
CONTACT_EMAIL=contacto@alphamexico.com.mx
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

5. **Reinicia el servidor**:

```bash
npm run dev
```

### **Verificar Dominio en Resend**

Para usar `noreply@alphamexico.com.mx`, necesitas:

1. **Añadir el dominio** en Resend
2. **Configurar registros DNS** (lo hace Resend automáticamente)
3. **Verificar** el dominio

**Mientras tanto**, puedes usar temporalmente:

```typescript
from: 'Alpha Landing <onboarding@resend.dev>',
```

## 🧪 Probar el Funcionamiento

1. **Llena el formulario** de contacto en tu landing page
2. **Revisa la consola** del navegador (F12) para logs
3. **Verifica tu bandeja** de entrada en `contacto@alphamexico.com.mx`

## 📊 Estados del Sistema

### ✅ **Funcionando (Modo Simulación)**

- El formulario recibe datos
- Se validan correctamente
- Se registran en la consola
- Usuario recibe confirmación

### 🚀 **Funcionando (Modo Real)**

- Todo lo anterior +
- Emails reales enviados a `contacto@alphamexico.com.mx`
- Notificaciones HTML profesionales
- Tracking de entrega

## 🛠️ Archivos Modificados

1. **`src/lib/translations.ts`** - Email actualizado
2. **`src/components/seo/StructuredData.tsx`** - SEO actualizado
3. **`src/components/sections/ContactSection.tsx`** - Link mailto actualizado
4. **`src/app/api/contact/route.ts`** - API completamente reescrita
5. **`.env.local.example`** - Archivo de configuración creado
6. **`package.json`** - Resend añadido como dependencia

## 🔧 Solución de Problemas

### **Error: "RESEND_API_KEY no configurada"**

✅ **Solución**: Crea el archivo `.env.local` con tu API key

### **Error: "Domain not verified"**

✅ **Solución**: Verifica tu dominio en Resend o usa `onboarding@resend.dev` temporalmente

### **Emails no llegan**

✅ **Verificar**:

- API key correcta
- Dominio verificado
- Revisar spam/promociones
- Verificar logs en consola

## 📞 Estado Actual

🟢 **LISTO PARA USAR** - Solo necesitas configurar tu API key de Resend

Tu landing page ya está configurada para recibir contactos en **`contacto@alphamexico.com.mx`** ✅
