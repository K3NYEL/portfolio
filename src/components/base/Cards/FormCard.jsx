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
    <div className="w-full max-w-2xl rounded-2xl p-4 sm:p-8 md:p-12">
      <form onSubmit={handleSubmit} className="space-y-5">

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
              h-10
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
              h-10
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
            rows="5"
            className="
              mt-1
              block
              min-h-32
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
            py-3
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

        {/* Estado del envío */}
        {status && (
          <p className="text-sm text-gray-400">
            {status}
          </p>
        )}
      </form>
    </div>
  );
}

export default FormCard;