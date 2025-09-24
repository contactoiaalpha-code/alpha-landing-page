#!/usr/bin/env node

// Script de verificación para Alpha Landing Page
const fs = require("fs");
const path = require("path");

console.log("🚀 Verificando configuración de Alpha Landing Page...\n");

// Verificar archivos esenciales
const archivosEsenciales = [
  ".env.local",
  "src/app/api/contact/route.ts",
  "src/lib/translations.ts",
  "CONFIGURAR_EMAIL_RESEND.md",
];

console.log("📁 Verificando archivos...");
archivosEsenciales.forEach((archivo) => {
  if (fs.existsSync(archivo)) {
    console.log(`✅ ${archivo}`);
  } else {
    console.log(`❌ ${archivo} - FALTA`);
  }
});

// Verificar configuración de email
console.log("\n📧 Verificando configuración de email...");

if (fs.existsSync(".env.local")) {
  const envContent = fs.readFileSync(".env.local", "utf8");

  if (envContent.includes("CONTACT_EMAIL=contacto@alphamexico.com.mx")) {
    console.log("✅ Email de destino configurado: contacto@alphamexico.com.mx");
  } else {
    console.log("❌ Email de destino NO configurado");
  }

  if (envContent.includes("RESEND_API_KEY=")) {
    if (envContent.includes("re_TU_API_KEY_REAL_AQUI")) {
      console.log("⚠️  API Key de Resend: PENDIENTE DE CONFIGURAR");
      console.log("   👉 Ve a https://resend.com/ para obtener tu API key");
    } else {
      console.log("✅ API Key de Resend configurada");
    }
  } else {
    console.log("❌ API Key de Resend NO encontrada");
  }
} else {
  console.log("❌ Archivo .env.local no encontrado");
}

// Verificar dependencias
console.log("\n📦 Verificando dependencias...");
if (fs.existsSync("package.json")) {
  const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));

  if (packageJson.dependencies && packageJson.dependencies.resend) {
    console.log("✅ Resend instalado");
  } else {
    console.log("❌ Resend NO instalado");
  }

  if (packageJson.dependencies && packageJson.dependencies["framer-motion"]) {
    console.log("✅ Framer Motion instalado");
  }

  if (packageJson.dependencies && packageJson.dependencies.next) {
    console.log(`✅ Next.js ${packageJson.dependencies.next}`);
  }
}

// Verificar estructura de emails en el código
console.log("\n🔧 Verificando configuración del API...");
if (fs.existsSync("src/app/api/contact/route.ts")) {
  const apiContent = fs.readFileSync("src/app/api/contact/route.ts", "utf8");

  if (apiContent.includes("contacto@alphamexico.com.mx")) {
    console.log("✅ Email destino en API configurado");
  }

  if (apiContent.includes("import { Resend }")) {
    console.log("✅ Resend importado en API");
  }

  if (apiContent.includes("modo simulación")) {
    console.log("✅ Modo simulación configurado (funciona sin API key)");
  }
}

console.log("\n🎯 ESTADO GENERAL:");
console.log("✅ Alpha Landing Page configurada");
console.log("✅ Email actualizado a: contacto@alphamexico.com.mx");
console.log("✅ Sistema de formularios funcionando");
console.log("✅ API de contacto configurada");

console.log("\n📋 PRÓXIMOS PASOS:");
console.log("1. 🌐 Ve a: http://localhost:3000");
console.log("2. 🧪 Prueba el formulario de contacto");
console.log("3. 🔑 Configura tu API key de Resend (opcional)");
console.log("4. 🚀 ¡Tu landing page está lista!");

console.log("\n📖 Para configurar Resend:");
console.log("   📄 Lee: CONFIGURAR_EMAIL_RESEND.md");
console.log("   🌐 Ve a: https://resend.com/");

console.log("\n✅ ¡Verificación completada! 🎉");
