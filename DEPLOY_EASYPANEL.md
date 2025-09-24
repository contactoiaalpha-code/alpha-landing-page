# 🚀 DEPLOY EN EASYPANEL - PASO A PASO

## ✅ CÓDIGO SUBIDO A GITHUB

- ✅ **Repositorio:** `https://github.com/contactoiaalpha-code/alpha-landing-page`
- ✅ **Branch:** main
- ✅ **Commit:** "Configuración completa: Email funcionando + Webhook n8n"
- ✅ **59 archivos** actualizados

## 🎯 PASOS PARA DEPLOY EN EASYPANEL

### **PASO 1: Crear Nueva Aplicación**

1. **Ve a tu panel de Easypanel**
2. **Crear nueva aplicación:**
   - Click en **"+ Create"** o **"New App"**
   - Selecciona **"From GitHub"**

### **PASO 2: Configurar Aplicación**

**Configuración básica:**

```
Name: alpha-landing-oficial
Repository: contactoiaalpha-code/alpha-landing-page
Branch: main
Type: Next.js Application
```

**Build Settings:**

```
Build Command: npm run build
Start Command: npm start
Install Command: npm install
Node Version: 18.x o superior
```

### **PASO 3: Variables de Entorno**

**Agregar estas variables en Easypanel:**

```env
# Sistema de Email
RESEND_API_KEY=re_TfB3GehA_9wGPghrwMjWWh3guJYgBnqSd
CONTACT_EMAIL=contacto@alphamexico.com.mx

# Webhook n8n
N8N_WEBHOOK_URL=https://proyectos-internos-alpha-n8n.cowyzi.easypanel.host/webhook/consultoria-webhook

# Configuración del sitio
NEXT_PUBLIC_SITE_URL=https://alphamexico.com.mx
NODE_ENV=production

# Para optimización
NEXT_TELEMETRY_DISABLED=1
```

### **PASO 4: Configurar Dominio**

**En Easypanel:**

1. **Domains section**
2. **Add custom domain:** `alphamexico.com.mx`
3. **Enable SSL:** Auto (Let's Encrypt)

**En tu proveedor de dominio:**

```
Tipo: A Record
Nombre: @
Valor: [IP que te dé Easypanel]

Tipo: CNAME
Nombre: www
Valor: alphamexico.com.mx
```

### **PASO 5: Deploy y Verificar**

1. **Deploy automático** se iniciará
2. **Esperar build** (5-10 minutos)
3. **Verificar funcionamiento**

## 🧪 VERIFICAR FUNCIONAMIENTO

### **1. Sitio Web:**

- **URL temporal:** `https://tu-app.easypanel.host`
- **URL oficial:** `https://alphamexico.com.mx`

### **2. Funcionalidades:**

- ✅ **Formulario de contacto**
- ✅ **Emails automáticos**
- ✅ **Webhook a n8n**
- ✅ **Efectos Matrix**
- ✅ **Responsive design**

### **3. Logs del Sistema:**

```bash
# En Easypanel, revisar logs para:
# - "Email enviado exitosamente"
# - "Webhook enviado exitosamente a n8n"
# - Sin errores de compilación
```

## 🔧 CONFIGURACIÓN PARA PRODUCCIÓN

### **Cambios Automáticos:**

- ✅ **HTTPS** habilitado automáticamente
- ✅ **CDN** para archivos estáticos
- ✅ **Compresión** automática
- ✅ **Modo producción** optimizado

### **Webhook en Producción:**

- ✅ **URL de producción** funcionará automáticamente
- ✅ **n8n workflow** debe estar activado
- ✅ **Automatizaciones** funcionando 24/7

## 📊 COMPARACIÓN

### **Localhost (Actual):**

- 🏠 `http://localhost:3000`
- 🧪 Desarrollo y testing

### **Producción (Objetivo):**

- 🌐 `https://alphamexico.com.mx`
- 🚀 Sitio oficial funcionando
- 📧 Emails reales a clientes
- 🤖 Automatizaciones activas

## 🎯 TIEMPO ESTIMADO

- **Configurar app:** 5 minutos
- **Primer build:** 5-10 minutos
- **Configurar dominio:** 5 minutos
- **Propagación DNS:** 5-30 minutos

**Total: 15-50 minutos** para tener tu sitio oficial online

## 🏆 RESULTADO FINAL

Tu **Alpha Landing Page oficial** en:

- 🌐 **https://alphamexico.com.mx**
- 📧 **Emails funcionando** automáticamente
- 🤖 **Automatizaciones** con n8n activas
- 🔒 **SSL certificado**
- ⚡ **Optimizado** para producción

**¿Empezamos configurando la aplicación en Easypanel?**
