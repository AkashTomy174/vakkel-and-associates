import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

// Shared "Book a consultation" modal controller.
// PublicLayout provides this so the global SiteNav and any page-level CTA
// (e.g. the homepage hero) can open the same booking modal without each page
// owning its own copy of the state.
const ConsultationContext = createContext(null);

export function ConsultationProvider({ children }) {
  const [consultOpen, setConsultOpen] = useState(false);
  const openConsultation = useCallback(() => setConsultOpen(true), []);
  const closeConsultation = useCallback(() => setConsultOpen(false), []);

  const value = useMemo(
    () => ({ consultOpen, openConsultation, closeConsultation }),
    [consultOpen, openConsultation, closeConsultation],
  );

  return (
    <ConsultationContext.Provider value={value}>
      {children}
    </ConsultationContext.Provider>
  );
}

export function useConsultation() {
  const context = useContext(ConsultationContext);
  if (!context) {
    throw new Error(
      "useConsultation must be used within a ConsultationProvider",
    );
  }
  return context;
}

export default ConsultationContext;
