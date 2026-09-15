import { useEffect, useRef } from "react";
import BookingCTA from "../BookingCTA/BookingCTA.jsx";
import { useConsultation } from "./ConsultationContext.jsx";

// The booking catalog the CTA offers. Kept identical to the homepage's original
// list so the modal behaviour is unchanged.
const practices = [
  { number: "01", title: "NRI All Legal Services" },
  { number: "02", title: "Criminal Law" },
  { number: "03", title: "Corporate, Commercial & Business Law" },
  { number: "04", title: "Real Estate Law" },
  { number: "05", title: "Family & Matrimonial" },
  { number: "06", title: "Arbitration & Commercial Settlement" },
  { number: "07", title: "Maritime & Admiralty Law" },
  { number: "08", title: "Wealth Management, Succession & Inheritance Law" },
  { number: "09", title: "Labour & Employment Law" },
];

function useModalAccessibility(isOpen, onClose) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  useEffect(() => {
    if (!isOpen) return undefined;
    const trigger = document.activeElement;
    const dialog = dialogRef.current;
    const focusableSelector =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusable = () =>
      Array.from(dialog?.querySelectorAll(focusableSelector) || []);

    closeRef.current?.focus();
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        event.preventDefault();
        onCloseRef.current();
        return;
      }
      if (event.key !== "Tab" || !dialog) return;
      const elements = focusable();
      if (!elements.length) return;
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (trigger instanceof HTMLElement) trigger.focus();
    };
  }, [isOpen]);

  return { dialogRef, closeRef };
}

function ConsultationModal() {
  const { consultOpen, closeConsultation } = useConsultation();
  const modal = useModalAccessibility(consultOpen, closeConsultation);

  if (!consultOpen) return null;

  return (
    <div
      className="glass-modal-backdrop"
      role="presentation"
      onClick={(event) =>
        event.target === event.currentTarget && closeConsultation()
      }
    >
      <div
        ref={modal.dialogRef}
        className="glass-consult-modal"
        role="dialog"
        aria-modal="true"
      >
        <button
          ref={modal.closeRef}
          className="glass-close"
          type="button"
          onClick={closeConsultation}
          aria-label="Close"
        >
          ×
        </button>
        <BookingCTA
          practices={practices}
          isEmergency={false}
          onClose={closeConsultation}
        />
      </div>
    </div>
  );
}

export default ConsultationModal;
export { practices };
