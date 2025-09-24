# 🚀 CONFIGURACIÓN DE WEBHOOK Y AUTOMATIZACIONES

## ✅ CAMBIOS REALIZADOS

### 1. **Problema de Dominio Solucionado**

- ✅ **Antes:** `noreply@alphamexico.com.mx` (dominio no verificado)
- ✅ **Ahora:** `onboarding@resend.dev` (dominio verificado de Resend)
- ✅ **Resultado:** Emails funcionando inmediatamente

### 2. **Webhook Configurado**

- ✅ **API actualizada** para enviar datos a n8n
- ✅ **Datos estructurados** para automatizaciones
- ✅ **URL configurada:** `https://proyectos-internos-alpha-n8n.cowyzi.easypanel.host/webhook-test/consultoria`

## 📊 DATOS QUE SE ENVÍAN AL WEBHOOK

### **Información del Cliente**

```json
{
  "nombre": "Carlos Gil",
  "email": "carloscgp92@hotmail.com",
  "telefono": "+34123456789",
  "empresa": "Test Company SL",
  "mensaje": "Generar más leads calificados",

  "timestamp": "2024-01-15T10:30:00Z",
  "fuente": "Alpha Landing Page",
  "ip": "192.168.1.100",
  "userAgent": "Mozilla/5.0...",

  "lead_source": "website_form",
  "lead_quality": "high",
  "follow_up_required": true,
  "priority": "high",

  "email_data": {
    "to": "carloscgp92@hotmail.com",
    "name": "Carlos Gil",
    "company": "Test Company SL",
    "custom_message": "Generar más leads calificados"
  }
}
```

## 🔧 CONFIGURACIÓN EN N8N

### **1. Webhook Node (Trigger)**

- **URL:** `https://proyectos-internos-alpha-n8n.cowyzi.easypanel.host/webhook-test/consultoria`
- **Método:** POST
- **Content Type:** application/json

### **2. Posibles Automatizaciones**

#### **A) Email Automático al Cliente**

```
Webhook → Send Email Node
- Para: {{$json.email}}
- Asunto: "¡Gracias por tu interés, {{$json.nombre}}!"
- Plantilla personalizada de bienvenida
```

#### **B) Notificación a WhatsApp/Slack**

```
Webhook → WhatsApp/Slack Node
- Mensaje: "Nuevo lead: {{$json.nombre}} de {{$json.empresa}}"
- Incluir datos de contacto
```

#### **C) Agregar a CRM**

```
Webhook → CRM Node (HubSpot/Salesforce/etc)
- Crear contacto con datos completos
- Asignar prioridad según empresa
```

#### **D) Seguimiento Programado**

```
Webhook → Wait Node → Send Follow-up Email
- Esperar 1 hora
- Enviar email de seguimiento personalizado
```

## 🧪 PROBAR LA CONFIGURACIÓN

### **1. Verificar que Resend funciona**

```bash
# En tu terminal, ejecuta:
curl -X POST http://localhost:3000/api/contact \
-H "Content-Type: application/json" \
-d '{
  "name": "Prueba Email",
  "email": "tu@email.com",
  "phone": "+34123456789",
  "company": "Test Company",
  "message": "Probando emails automáticos"
}'
```

### **2. Verificar webhook en n8n**

- El webhook debe recibir los datos automáticamente
- Verificar en n8n que lleguen los datos estructurados

## 🔧 CONFIGURACIÓN DE DOMINIO (Opcional)

### **Para usar tu dominio personalizado:**

1. **En Resend Dashboard:**

   - Ve a "Domains"
   - Añade `alphamexico.com.mx`
   - Configura registros DNS

2. **Cambiar en código:**

```typescript
from: "Alpha Landing <noreply@alphamexico.com.mx>",
```

3. **Mientras tanto usar:**

```typescript
from: "Alpha Landing <onboarding@resend.dev>", // ✅ Ya configurado
```

## 📈 FLUJO COMPLETO

### **Cuando un cliente llena el formulario:**

1. **✅ Validación** - Datos verificados
2. **📧 Email a ti** - `contacto@alphamexico.com.mx`
3. **🔗 Webhook a n8n** - Datos estructurados enviados
4. **🤖 Automatizaciones** - n8n ejecuta flujos:
   - Email de bienvenida al cliente
   - Notificación a tu WhatsApp/Slack
   - Agregar a CRM
   - Programar seguimiento
5. **📊 Tracking** - Todo registrado y automatizado

## 🎯 PRÓXIMOS PASOS

1. **✅ Probar formulario** - Verificar que lleguen emails
2. **🔧 Configurar n8n** - Crear automatizaciones
3. **📧 Personalizar emails** - Plantillas de bienvenida
4. **📱 Integrar WhatsApp** - Notificaciones instantáneas
5. **📊 Conectar CRM** - Gestión automatizada de leads

## 🚨 SOLUCIÓN DE PROBLEMAS

### **Error "Domain not verified"**

✅ **Solucionado:** Usando `onboarding@resend.dev`

### **Webhook no recibe datos**

- Verificar URL en `.env.local`
- Comprobar que n8n esté activo
- Revisar logs en terminal

### **Emails no llegan**

- Verificar carpeta spam
- Confirmar API key de Resend
- Comprobar logs de errores

¡Tu sistema de automatización está listo! 🚀
