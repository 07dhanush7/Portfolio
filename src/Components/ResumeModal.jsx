import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaDownload, FaXmark } from "react-icons/fa6";

const FOCUSABLE_SELECTORS = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(", ");

const ResumeModal = ({ isOpen, onClose, resumeUrl = "/resume.pdf" }) => {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusFirstElement = () => {
      const focusableElements = modalRef.current?.querySelectorAll(FOCUSABLE_SELECTORS);
      if (focusableElements?.length) {
        focusableElements[0].focus();
      } else {
        closeButtonRef.current?.focus();
      }
    };

    focusFirstElement();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) {
        return;
      }

      const focusableElements = Array.from(
        modalRef.current.querySelectorAll(FOCUSABLE_SELECTORS),
      );

      if (!focusableElements.length) {
        event.preventDefault();
        closeButtonRef.current?.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          key="resume-modal-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-md sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          onMouseDown={onClose}
          aria-hidden="true"
        >
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-modal-title"
            className="relative flex h-[min(88vh,860px)] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 shadow-[0_30px_90px_rgba(2,6,23,0.65)] ring-1 ring-white/10 backdrop-blur-2xl"
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-5 py-4 sm:px-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
                  Portfolio
                </p>
                <h2
                  id="resume-modal-title"
                  className="mt-1 font-display text-xl font-semibold text-white sm:text-2xl"
                >
                  My Resume
                </h2>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-lg text-white/80 transition hover:border-fuchsia-400/40 hover:bg-white/[0.08] hover:text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-400/70"
                aria-label="Close resume modal"
              >
                <FaXmark />
              </button>
            </div>

            <div className="flex flex-col gap-4 border-b border-white/10 bg-gradient-to-r from-violet-500/10 via-transparent to-fuchsia-500/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <p className="max-w-2xl text-sm leading-6 text-white/65">
                Preview the resume here, download a copy, or open it in a dedicated tab for a
                full browser PDF experience.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={resumeUrl}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(168,85,247,0.28)] transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-fuchsia-400/70"
                >
                  <FaDownload className="text-xs" />
                  Download Resume
                </a>

                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-5 py-2.5 text-sm font-semibold text-white/85 transition hover:border-fuchsia-400/40 hover:bg-white/[0.08] hover:text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-400/70"
                >
                  <FaArrowUpRightFromSquare className="text-xs" />
                  Open in New Tab
                </a>
              </div>
            </div>

            <div className="flex-1 bg-[#050816] p-3 sm:p-4">
              <div className="h-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/75 shadow-inner shadow-black/20">
                <iframe
                  title="My Resume PDF Preview"
                  src={`${resumeUrl}#view=FitH`}
                  className="h-full min-h-[420px] w-full"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
};

export default ResumeModal;
