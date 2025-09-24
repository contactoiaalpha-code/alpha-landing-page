# 🧪 PRUEBA DEL FORMULARIO DE CONTACTO

## 📋 Estado Actual

- ✅ **Formulario funcionando** - Datos se reciben correctamente
- ⚠️ **Modo simulación activo** - Emails no se envían (normal sin API key)
- 🎯 **Destino configurado** - contacto@alphamexico.com.mx

## 🔧 Para Activar Emails Reales

### 1. Crear cuenta en Resend

- Ve a: https://resend.com/
- Regístrate (gratis - 3,000 emails/mes)

### 2. Obtener API Key

- Dashboard → API Keys → Create API Key
- Nombre: "Alpha Landing"
- Copiar la clave (empieza con `re_...`)

### 3. Configurar en .env.local

```bash
# Abrir archivo .env.local
# Buscar línea:
RESEND_API_KEY=re_TU_API_KEY_REAL_AQUI

# Reemplazar con tu API key real:
RESEND_API_KEY=re_tu_api_key_real_aqui
```

### 4. Reiniciar servidor

```bash
# Ctrl+C para detener
npm run dev
```

## ✅ Verificar Funcionamiento

### Antes (Modo Simulación)

- Formulario recibe datos ✅
- Usuario ve confirmación ✅
- NO se envían emails ⚠️

### Después (Con API Key)

- Todo lo anterior +
- Emails reales a contacto@alphamexico.com.mx ✅
- Notificaciones profesionales ✅

## 🚨 Solución de Problemas

### "No me llega el email"

- ✅ Verifica que configuraste la API key correctamente
- ✅ Reinicia el servidor después de configurar
- ✅ Revisa spam/promociones en tu bandeja
- ✅ Usa temporalmente `from: "onboarding@resend.dev"` si tienes problemas de dominio

### Ver logs en tiempo real

```bash
# En la terminal donde corre npm run dev
# Verás mensajes como:
# "Nuevo lead recibido: { name: 'Juan', email: 'juan@email.com' }"
# "Email enviado exitosamente: { id: 'xxx' }"
```

## 📧 Resultado Final

Cuando esté configurado, recibirás emails profesionales con:

- 👤 Nombre del contacto
- 📧 Email del cliente
- 📱 Teléfono (si lo proporciona)
- 🏢 Empresa (si la proporciona)
- 💬 Mensaje del cliente
- 🕒 Fecha/hora en zona horaria de México
- 🎨 Diseño profesional con colores de tu marca

¡Tu landing page estará lista para generar leads reales!
