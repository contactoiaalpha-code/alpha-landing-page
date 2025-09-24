# 🚀 GUÍA PARA SUBIR TU ALPHA LANDING ONLINE

## ✅ PREPARACIÓN COMPLETADA

- ✅ **Proyecto guardado** en Git
- ✅ **59 archivos** commiteados
- ✅ **Configuraciones** preparadas
- ✅ **Sistema funcionando** en localhost

## 🎯 OPCIONES PARA DEPLOY ONLINE

### **🏆 OPCIÓN 1: VERCEL (RECOMENDADA - GRATIS)**

#### **Pasos para Vercel:**

1. **Crear Repositorio en GitHub:**

   ```bash
   # Ya está configurado para:
   https://github.com/contactoiaalpha-code/alpha-landing-mexico.git
   ```

2. **Subir a GitHub:**

   ```bash
   git push -u origin main
   ```

3. **Deploy en Vercel:**

   - Ve a: **https://vercel.com/**
   - **Conecta con GitHub**
   - **Importa** el repositorio: `alpha-landing-mexico`
   - **Deploy automático** ✅

4. **Configurar Variables de Entorno en Vercel:**
   ```
   RESEND_API_KEY=re_TfB3GehA_9wGPghrwMjWWh3guJYgBnqSd
   CONTACT_EMAIL=contacto@alphamexico.com.mx
   N8N_WEBHOOK_URL=https://proyectos-internos-alpha-n8n.cowyzi.easypanel.host/webhook/consultoria-webhook
   NEXT_PUBLIC_SITE_URL=https://tu-dominio.vercel.app
   ```

#### **Resultado:**

- 🌐 **URL:** `https://alpha-landing-mexico.vercel.app`
- ✅ **SSL automático** (HTTPS)
- ✅ **Deploy automático** en cada cambio
- ✅ **CDN global** para velocidad

---

### **🚀 OPCIÓN 2: NETLIFY (ALTERNATIVA)**

1. **Subir a GitHub** (mismo proceso)
2. **Conectar con Netlify**
3. **Configurar variables de entorno**
4. **Deploy automático**

---

### **⚡ OPCIÓN 3: EASYPANEL (Tu Hosting Actual)**

Como ya tienes easypanel configurado:

1. **Crear nueva app** en Easypanel
2. **Conectar con GitHub**
3. **Configurar como aplicación Next.js**
4. **Agregar variables de entorno**

---

## 🔧 CONFIGURACIÓN PARA PRODUCCIÓN

### **Variables de Entorno Necesarias:**

```env
# Email System
RESEND_API_KEY=re_TfB3GehA_9wGPghrwMjWWh3guJYgBnqSd
CONTACT_EMAIL=contacto@alphamexico.com.mx

# Webhook
N8N_WEBHOOK_URL=https://proyectos-internos-alpha-n8n.cowyzi.easypanel.host/webhook/consultoria-webhook

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://tu-dominio-en-produccion.com

# Optional: Para analytics
NODE_ENV=production
```

### **Archivos que NO se suben (ya configurado):**

- ✅ `.env.local` (información sensible)
- ✅ `node_modules/` (se instalan automáticamente)
- ✅ `.next/` (se construye automáticamente)

## 🌐 DOMINIO PERSONALIZADO

### **Para usar `alphamexico.com.mx`:**

1. **En tu proveedor de dominio:**

   ```
   Tipo: CNAME
   Nombre: @ (o www)
   Valor: cname.vercel-dns.com
   ```

2. **En Vercel Dashboard:**
   - Settings → Domains
   - Add: `alphamexico.com.mx`
   - Verificar configuración DNS

## 📊 DIFERENCIAS LOCALHOST vs PRODUCCIÓN

### **Localhost (Actual):**

- 🏠 `http://localhost:3000`
- 📧 Emails a `contacto.ia.alpha@gmail.com`
- 🧪 Webhook en modo test

### **Producción (Objetivo):**

- 🌐 `https://alphamexico.com.mx`
- 📧 Emails a `contacto@alphamexico.com.mx`
- 🚀 Webhook en modo producción
- ✅ SSL certificado
- ⚡ CDN global para velocidad

## 🚀 PROCESO RECOMENDADO

### **PASO 1: GitHub (Ya listo para hacer push)**

```bash
git push -u origin main
```

### **PASO 2: Vercel Deploy**

1. Conectar con GitHub
2. Importar repositorio
3. Configurar variables de entorno
4. Deploy automático

### **PASO 3: Configurar Dominio**

1. Añadir `alphamexico.com.mx` en Vercel
2. Configurar DNS
3. ✅ **¡Landing online!**

## 🎯 TIEMPO ESTIMADO

- **GitHub Push:** 2 minutos
- **Vercel Setup:** 5 minutos
- **Configuración Variables:** 3 minutos
- **Dominio (opcional):** 10 minutos

**Total: ~10-20 minutos para tener tu landing online**

## 🏆 RESULTADO FINAL

Tu Alpha Landing estará disponible en:

- 🌐 **URL temporal:** `https://alpha-landing-mexico.vercel.app`
- 🌐 **URL personalizada:** `https://alphamexico.com.mx`

¿Empezamos con el proceso? **¿Prefieres Vercel (gratis y fácil) o Easypanel (tu hosting actual)?**
