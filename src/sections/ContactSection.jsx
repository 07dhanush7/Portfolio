import { useState } from "react";
import toast from "react-hot-toast";
import Reveal from "../components/Reveal";
import SectionIntro from "../components/SectionIntro";

const ContactSection = ({ contactDetails }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // ✅ NAME VALIDATION (NO NUMBERS)
    if (name === "name") {
      if (/\d/.test(value)) {
        toast.error("Numbers are not allowed in name ❌");

        const cleanValue = value.replace(/\d/g, "");
        setFormData((prev) => ({ ...prev, name: cleanValue }));
        return;
      }
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    // clear error while typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // ✅ VALIDATION
  const validate = () => {
    const newErrors = {};

    // NAME
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Minimum 3 characters required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Only letters allowed";
    }

    // EMAIL
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    // MESSAGE
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Minimum 10 characters required";
    }

    return newErrors;
  };

  // ✅ SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fill all fields correctly");
      return;
    }

    setLoading(true);

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);
    form.append("access_key", "8ea73fe0-ed3b-4f56-be16-78cdc65b28d7");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully 🚀");
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        toast.error("Submission failed ❌");
      }
    } catch {
      toast.error("Network error ❌");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Contact"
          title="Let us talk about your next build"
          description="A clean UI matters, but so does implementation quality."
        />

        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">

          {/* LEFT */}
          <Reveal className="rounded-[2rem] border border-fuchsia-300/20 bg-black/30 p-7 backdrop-blur-xl">
            <h3 className="text-3xl font-semibold text-white">
              {contactDetails.title}
            </h3>
            <p className="mt-4 text-white/70">
              {contactDetails.description}
            </p>
          </Reveal>

          {/* FORM */}
          <Reveal className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl">

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* NAME */}
              <div>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none focus:border-fuchsia-400"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none focus:border-fuchsia-400"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* MESSAGE */}
              <div>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none focus:border-fuchsia-400"
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 px-6 py-3 text-white font-semibold transition hover:scale-105 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;