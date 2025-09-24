# 🚀 CAMBIAR A URL DE PRODUCCIÓN

## 📋 CONFIGURACIÓN ACTUAL (TEST)

**URL Actual:** `webhook-test/consultoria-webhook`

- ✅ Funciona para testing
- ⚠️ Requiere hacer click en "Listen for test event"

## 🎯 PARA CAMBIAR A PRODUCCIÓN

### **1. Activar Workflow en n8n:**

- Ve a tu workflow
- Busca el **toggle en esquina superior derecha**
- **Actívalo** (debe ponerse verde)

### **2. Cambiar URL en el código:**

```bash
# Navegar al proyecto
cd "/Users/carloscesargilperalta/Desktop/Desarollos en Cursor/Backup landing copia /Alpha landing page/alpha-landing"

# Cambiar a URL de producción
sed -i '' 's|webhook-test/consultoria-webhook|webhook/consultoria-webhook|' .env.local

# Verificar el cambio
grep "N8N_WEBHOOK_URL" .env.local
```

### **3. Resultado esperado:**

```
N8N_WEBHOOK_URL=https://proyectos-internos-alpha-n8n.cowyzi.easypanel.host/webhook/consultoria-webhook
```

## 🧪 PROBAR DESPUÉS DEL CAMBIO

```bash
curl -X POST http://localhost:3000/api/contact \
-H "Content-Type: application/json" \
-d '{
  "name": "Prueba Producción",
  "email": "contacto.ia.alpha@gmail.com",
  "phone": "+999-250-0548",
  "company": "Alpha México",
  "message": "Probando webhook en producción"
}'
```

## ✅ VENTAJAS DE PRODUCCIÓN

- 🚀 **Funciona 24/7** automáticamente
- 🤖 **No requiere intervención manual**
- 📊 **Ideal para sitio web en vivo**
- 🔄 **Automatizaciones continuas**

## 🔄 ALTERNATIVA: MANTENER TEST

Si prefieres mantener la URL de test:

- ✅ **Ya está configurada** y funcionando
- ⚠️ **Debes hacer click** en "Listen for test event" antes de cada prueba
- 🧪 **Perfecto para desarrollo**

**¿Quieres activar el workflow y cambiar a producción, o prefieres mantener la URL de test por ahora?**
