import { useState } from "react";

function FormCard() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    setStatus("Enviando...");

    try {
      const response = await fetch("https://formspree.io/f/xwlpkjkb", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Mensaje enviado correctamente.");
        form.reset();
      } else {
        setStatus("No se pudo enviar el mensaje.");
      }
    } catch (error) {
      setStatus("Ocurrió un error al enviar el mensaje.");
    }
  };

  return (
    <div className="flex w-full flex-col gap-10 rounded-2xl p-0 md:flex-row md:items-center">
      {/* Título y descripción */}
      <div className="flex-1 text-left">
        <h2 className="mb-3 text-3xl font-bold uppercase tracking-widest text-red-500 sm:text-4xl">
          Formulario de Contacto
        </h2>

        <p className="max-w-xl text-gray-400">
          Si quieres conocer más sobre mis proyectos o ponerte en contacto
          conmigo, puedes hacerlo aquí.
        </p>
      </div>

      {/* Formulario */}
      <div className="w-full flex-1">
        <form onSubmit={handleSubmit} className="space-y-2.5">
          {/* Nombre */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300"
            >
              Nombre
            </label>

            <input
              type="text"
              id="name"
              name="name"
              className="
                mt-1
                block
                h-9
                w-full
                rounded-md
                border
                border-white/10
                bg-white/5
                px-3
                text-white
                shadow-sm
                outline-none
                transition
                placeholder:text-gray-500
                focus:border-red-500
                focus:ring-1
                focus:ring-red-500
              "
              required
            />
          </div>

          {/* Correo */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Correo electrónico
            </label>

            <input
              type="email"
              id="email"
              name="email"
              className="
                mt-1
                block
                h-9
                w-full
                rounded-md
                border
                border-white/10
                bg-white/5
                px-3
                text-white
                shadow-sm
                outline-none
                transition
                placeholder:text-gray-500
                focus:border-red-500
                focus:ring-1
                focus:ring-red-500
              "
              required
            />
          </div>

          {/* Mensaje */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300"
            >
              Mensaje y/o Asunto
            </label>

            <textarea
              id="message"
              name="message"
              rows="3"
              className="
                mt-1
                block
                h-24
                w-full
                resize-y
                rounded-md
                border
                border-white/10
                bg-white/5
                p-3
                text-white
                shadow-sm
                outline-none
                transition
                placeholder:text-gray-500
                focus:border-red-500
                focus:ring-1
                focus:ring-red-500
              "
              required
            />
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="
              inline-flex
              w-full
              items-center
              justify-center
              rounded-lg
              bg-red-600
              px-6
              py-2.5
              text-sm
              font-semibold
              text-white
              transition
              duration-200
              hover:bg-red-500
              active:scale-[0.98]
              sm:w-auto
            "
          >
            Enviar mensaje
          </button>

          {/* Estado */}
          {status && (
            <p className="text-sm text-gray-400">
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default FormCard;