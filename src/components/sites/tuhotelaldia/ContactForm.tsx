"use client";

import { useState } from "react";
import Link from "next/link";

const field =
  "w-full border border-[#ddd] bg-white px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-[#aaa] focus:border-brand";

/**
 * The source form posts to a Joomla extension. This clone has no mail backend,
 * so submitting validates the form and opens the visitor's mail client.
 */
export function ContactForm() {
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    if (!get("nombre") || !get("email") || !get("mensaje")) {
      setError("Por favor, completa los campos requeridos");
      return;
    }
    if (get("captcha") !== "a") {
      setError("Respuesta incorrecta a la pregunta de seguridad.");
      return;
    }
    if (!data.get("privacidad")) {
      setError("Debes aceptar la Política de cookies y la Política de Privacidad.");
      return;
    }
    setError(null);

    const body = [
      `Nombre: ${get("nombre")} ${get("apellidos")}`.trim(),
      `Email: ${get("email")}`,
      "",
      get("mensaje"),
    ].join("\n");
    window.location.href = `mailto:info@tuhotelaldia.com?subject=${encodeURIComponent(
      get("asunto") || "Consulta desde la web",
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="sr-only">Nombre</span>
          <input name="nombre" required placeholder="Nombre *" className={field} autoComplete="given-name" />
        </label>
        <label className="block">
          <span className="sr-only">Apellidos</span>
          <input name="apellidos" placeholder="Apellidos" className={field} autoComplete="family-name" />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="sr-only">Email</span>
          <input name="email" type="email" required placeholder="Email *" className={field} autoComplete="email" />
        </label>
        <label className="block">
          <span className="sr-only">Asunto</span>
          <input name="asunto" placeholder="Asunto" className={field} />
        </label>
      </div>
      <label className="block">
        <span className="sr-only">Mensaje</span>
        <textarea name="mensaje" required rows={7} placeholder="Mensaje *" className={field} />
      </label>
      <label className="block">
        <span className="mb-2 block text-[15px] text-ink">¿Primera letra del abecedario en minúscula?</span>
        <input name="captcha" required className={`${field} sm:max-w-[200px]`} autoComplete="off" />
      </label>
      <label className="flex items-start gap-3 text-[14px] leading-[1.6]">
        <input name="privacidad" type="checkbox" required className="mt-1 size-4 accent-brand" />
        <span>
          Estoy de acuerdo con la{" "}
          <Link href="/cookies" className="text-brand underline">
            Política de cookies
          </Link>{" "}
          y la{" "}
          <Link href="/politica-de-privacidad" className="text-brand underline">
            Política de Privacidad
          </Link>{" "}
          y declaro que he leído el{" "}
          <Link href="/aviso-legal" className="text-brand underline">
            Aviso Legal
          </Link>
          .
        </span>
      </label>
      {error && (
        <p role="alert" className="text-[14px] font-medium text-brand">
          {error}
        </p>
      )}
      <button
        type="submit"
        className="border-2 border-brand bg-brand px-10 py-3 font-heading text-[14px] font-bold uppercase tracking-[1px] text-white transition-colors hover:bg-brand-dark"
      >
        Enviar
      </button>
    </form>
  );
}
